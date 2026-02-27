const { Server } = require('socket.io');
const lobbyService = require('../game/lobbyService');
const sessionService = require('../game/sessionService');
const { httpError } = require('../game/errors');
const { createRoundEngine } = require('./roundEngine');
const { consumeRateLimitBucket } = require('../lib/rateLimiterStore');
const mediaProxyService = require('../game/mediaProxyService');
const mediaService = require('../game/mediaService');
const telemetry = require('../lib/telemetry');
const { verifyAuthToken } = require('../lib/authToken');

function parseSocketToken(socket) {
    const authToken = socket.handshake?.auth?.token;
    if (authToken) return authToken;

    const authHeader = socket.handshake?.headers?.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        return authHeader.slice(7);
    }

    return null;
}

function toErrorPayload(err, fallbackCode = 'internal_error') {
    if (err.status === 400) return { code: 'bad_request', message: err.message };
    if (err.status === 401) return { code: 'unauthorized', message: err.message };
    if (err.status === 403) return { code: 'forbidden', message: err.message };
    if (err.status === 404) return { code: 'not_found', message: err.message };
    if (err.status === 429) return { code: 'rate_limited', message: err.message };
    return { code: fallbackCode, message: err.message || 'Something went wrong' };
}

async function broadcastLobbyState(io, lobbyCode) {
    const lobby = await lobbyService.getLobbyByCode(lobbyCode);
    if (!lobby) return null;
    io.to(lobbyCode).emit('lobby:state', { lobby });
    return lobby;
}

function broadcastLobbyDirectoryChanged(io, payload = {}) {
    io.emit('lobby:directory_changed', {
        ...payload,
        at: Date.now()
    });
}

function normalizeLobbyCode(code) {
    return String(code || '').toUpperCase();
}

function normalizeUserIds(values) {
    if (!Array.isArray(values)) return [];
    return values.filter((value) => Number.isInteger(value));
}

function attachRealtime(httpServer, options = {}) {
    const io = new Server(httpServer, {
        cors: {
            origin: options.origin || process.env.BASE_URL || true,
            methods: ['GET', 'POST']
        }
    });

    const roundEngine = createRoundEngine(io);
    const pendingPreloadByLobby = new Map();
    const waitingReadyByLobby = new Map();
    const socketIdsByUserId = new Map();
    const mediaStatusBroadcastEnabled = options.mediaStatusBroadcast !== false;
    let mediaStatusBroadcastTimer = null;
    let lastMediaSourceStatus = null;

    async function fetchLatestMediaSourceStatus({ forceRefresh = false } = {}) {
        try {
            const status = await mediaService.getMediaProviderStatus({ forceRefresh });
            lastMediaSourceStatus = status;
            return status;
        } catch (err) {
            telemetry.warn('media.status_probe_failed', {
                error: err?.message || String(err)
            });
            if (lastMediaSourceStatus) {
                return {
                    ...lastMediaSourceStatus,
                    ok: false,
                    error: 'Status probe failed',
                    checkedAt: new Date().toISOString(),
                    cached: true
                };
            }
            return {
                provider: 'AnimeThemes',
                ok: false,
                latencyMs: null,
                error: 'Status probe failed',
                checkedAt: new Date().toISOString(),
                cached: true
            };
        }
    }

    async function publishMediaSourceStatus({ forceRefresh = false } = {}) {
        if (!mediaStatusBroadcastEnabled) return null;
        const status = await fetchLatestMediaSourceStatus({ forceRefresh });
        io.emit('media:source_status', {
            status,
            at: Date.now()
        });
        return status;
    }

    if (mediaStatusBroadcastEnabled) {
        publishMediaSourceStatus({ forceRefresh: true }).catch(() => {});
        mediaStatusBroadcastTimer = setInterval(() => {
            publishMediaSourceStatus({ forceRefresh: true }).catch(() => {});
        }, 10_000);
        if (typeof mediaStatusBroadcastTimer?.unref === 'function') {
            mediaStatusBroadcastTimer.unref();
        }
    }

    const originalClose = io.close.bind(io);
    io.close = (...args) => {
        if (mediaStatusBroadcastTimer) {
            clearInterval(mediaStatusBroadcastTimer);
            mediaStatusBroadcastTimer = null;
        }
        return originalClose(...args);
    };

    function getOrCreateWaitingReadySet(lobbyCode) {
        const code = normalizeLobbyCode(lobbyCode);
        let set = waitingReadyByLobby.get(code);
        if (!set) {
            set = new Set();
            waitingReadyByLobby.set(code, set);
        }
        return set;
    }

    function clearWaitingReady(lobbyCode) {
        const code = normalizeLobbyCode(lobbyCode);
        waitingReadyByLobby.delete(code);
    }

    function removeWaitingReadyUser(lobbyCode, memberUserId) {
        const code = normalizeLobbyCode(lobbyCode);
        const readySet = waitingReadyByLobby.get(code);
        if (!readySet) return;
        readySet.delete(memberUserId);
        if (readySet.size === 0) {
            waitingReadyByLobby.delete(code);
        }
    }

    function reconcileWaitingReadySet(lobbyCode, requiredUserIds = []) {
        const code = normalizeLobbyCode(lobbyCode);
        const readySet = waitingReadyByLobby.get(code);
        if (!readySet) return new Set();

        const requiredSet = new Set(normalizeUserIds(requiredUserIds));
        for (const memberUserId of readySet) {
            if (!requiredSet.has(memberUserId)) {
                readySet.delete(memberUserId);
            }
        }

        if (readySet.size === 0) {
            waitingReadyByLobby.delete(code);
            return new Set();
        }
        return readySet;
    }

    function toLobbyReadyPayload(lobbyCode, requiredUserIds = []) {
        const code = normalizeLobbyCode(lobbyCode);
        const required = normalizeUserIds(requiredUserIds);
        const readySet = reconcileWaitingReadySet(code, required);
        const readyUserIds = required.filter((memberUserId) => readySet.has(memberUserId));
        const allReady = required.length > 0 && readyUserIds.length === required.length;
        return {
            lobbyCode: code,
            readyUserIds,
            requiredUserIds: required,
            allReady
        };
    }

    function emitLobbyReadyState(lobbyCode, requiredUserIds = []) {
        const payload = toLobbyReadyPayload(lobbyCode, requiredUserIds);
        io.to(payload.lobbyCode).emit('lobby:ready_state', payload);
        return payload;
    }

    async function broadcastLobbyStateAndReady(lobbyCode) {
        const code = normalizeLobbyCode(lobbyCode);
        const lobby = await broadcastLobbyState(io, code);
        if (!lobby) {
            clearWaitingReady(code);
            return null;
        }
        if (lobby.status !== 'WAITING') {
            clearWaitingReady(code);
            io.to(code).emit('lobby:ready_state', {
                lobbyCode: code,
                readyUserIds: [],
                requiredUserIds: [],
                allReady: false
            });
            return lobby;
        }

        emitLobbyReadyState(
            code,
            (lobby.players || []).map((player) => player.userId)
        );
        return lobby;
    }

    function trackSocketForUser(memberUserId, socketId) {
        let socketIds = socketIdsByUserId.get(memberUserId);
        if (!socketIds) {
            socketIds = new Set();
            socketIdsByUserId.set(memberUserId, socketIds);
        }
        socketIds.add(socketId);
    }

    function untrackSocketForUser(memberUserId, socketId) {
        const socketIds = socketIdsByUserId.get(memberUserId);
        if (!socketIds) return;
        socketIds.delete(socketId);
        if (socketIds.size === 0) {
            socketIdsByUserId.delete(memberUserId);
        }
    }

    async function assertEventRateLimit(userId, eventName, { windowMs, max }) {
        const key = `${userId}:${eventName}`;
        const bucket = await consumeRateLimitBucket(`socket:${key}`, windowMs);
        if (bucket.count > max) {
            throw httpError(429, 'Too many realtime actions, slow down');
        }
    }

    async function beginSessionAfterPreload(lobbyCode) {
        const code = String(lobbyCode || '').toUpperCase();
        const pending = pendingPreloadByLobby.get(code);
        if (!pending) return false;

        pendingPreloadByLobby.delete(code);
        await roundEngine.beginSession(code);
        telemetry.info('session.round1_started', {
            lobbyCode: code,
            sessionId: pending.sessionId
        });
        return true;
    }

    async function prewarmFirstRoundOrThrow(preloadManifest) {
        const summary = await mediaProxyService.prewarmManifest(preloadManifest, {
            roundLimit: 1,
            maxConcurrent: 2
        });
        telemetry.info('media.prewarm_first_round', summary);

        if (summary.attempted <= 0) return;
        if (summary.warmed > 0) return;
        throw httpError(503, 'Could not cache first round media');
    }

    io.use((socket, next) => {
        try {
            const token = parseSocketToken(socket);
            if (!token) {
                return next(new Error('Unauthorized'));
            }
            const decoded = verifyAuthToken(token);
            socket.data.user = { userId: decoded.userId, username: decoded.username };
            socket.data.lobbies = new Set();
            return next();
        } catch (err) {
            return next(new Error('Unauthorized'));
        }
    });

    io.on('connection', (socket) => {
        const userId = socket.data.user.userId;
        const username = socket.data.user.username;
        trackSocketForUser(userId, socket.id);
        if (mediaStatusBroadcastEnabled) {
            if (lastMediaSourceStatus) {
                socket.emit('media:source_status', {
                    status: lastMediaSourceStatus,
                    at: Date.now()
                });
            } else {
                fetchLatestMediaSourceStatus({ forceRefresh: false })
                    .then((status) => {
                        socket.emit('media:source_status', {
                            status,
                            at: Date.now()
                        });
                    })
                    .catch(() => {});
            }
        }

        const emitSocketError = (err, fallbackCode, ack) => {
            const payload = toErrorPayload(err, fallbackCode);
            if (Number.isInteger(err?.status) && err.status < 500) {
                telemetry.warn('socket.event_failed', {
                    fallbackCode,
                    payload,
                    userId
                });
            } else {
                telemetry.error('socket.event_failed', err, {
                    fallbackCode,
                    payload,
                    userId
                });
            }
            socket.emit('error', payload);
            if (typeof ack === 'function') {
                ack({ ok: false, error: payload.message, code: payload.code });
            }
        };

        socket.on('lobby:join', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'lobby:join', { windowMs: 10_000, max: 20 });
                const code = normalizeLobbyCode(payload.lobbyCode);
                if (!code) throw httpError(400, 'Lobby code is required');

                const staleSocketLobbies = [...socket.data.lobbies].filter((joinedCode) => joinedCode !== code);
                for (const staleCode of staleSocketLobbies) {
                    socket.leave(staleCode);
                    socket.data.lobbies.delete(staleCode);
                }

                const { removedLobbyCodes = [] } = await lobbyService.enforceSingleLobbyMembership(userId, { exceptCode: code });
                await lobbyService.joinLobby(
                    code,
                    { id: userId, username, nickname: username },
                    payload.displayName,
                    { inviteToken: typeof payload.inviteToken === 'string' ? payload.inviteToken : null }
                );
                const lobby = await lobbyService.setPlayerConnection(code, userId, true);

                const affectedPreviousLobbies = [...new Set([...removedLobbyCodes, ...staleSocketLobbies])];
                for (const removedCode of affectedPreviousLobbies) {
                    socket.leave(removedCode);
                    socket.data.lobbies.delete(removedCode);
                }
                for (const removedCode of affectedPreviousLobbies) {
                    removeWaitingReadyUser(removedCode, userId);
                    await roundEngine.onPlayerDisconnected(removedCode, userId);
                    await broadcastLobbyStateAndReady(removedCode);
                }

                socket.join(code);
                socket.data.lobbies.add(code);
                await broadcastLobbyStateAndReady(code);
                broadcastLobbyDirectoryChanged(io, {
                    reason: 'join',
                    lobbyCodes: [...new Set([code, ...affectedPreviousLobbies])]
                });
                telemetry.info('lobby.joined', {
                    lobbyCode: code,
                    userId,
                    playerCount: lobby?.playerCount || null,
                    removedLobbyCount: affectedPreviousLobbies.length
                });

                if (typeof ack === 'function') ack({ ok: true, lobby });
            } catch (err) {
                emitSocketError(err, 'lobby_join_failed', ack);
            }
        });

        socket.on('lobby:leave', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'lobby:leave', { windowMs: 10_000, max: 20 });
                const code = normalizeLobbyCode(payload.lobbyCode);
                if (!code) throw httpError(400, 'Lobby code is required');

                socket.leave(code);
                socket.data.lobbies.delete(code);
                removeWaitingReadyUser(code, userId);

                const lobby = await lobbyService.leaveLobby(code, userId);
                if (lobby) {
                    io.to(code).emit('lobby:state', { lobby });
                    emitLobbyReadyState(code, (lobby.players || []).map((player) => player.userId));
                } else {
                    clearWaitingReady(code);
                }
                broadcastLobbyDirectoryChanged(io, {
                    reason: 'leave',
                    lobbyCode: code,
                    lobbyClosed: !lobby
                });

                const pending = pendingPreloadByLobby.get(code);
                if (pending) {
                    pending.requiredReadyUserIds.delete(userId);
                    pending.readyUserIds.delete(userId);
                    const allReady = [...pending.requiredReadyUserIds].every((id) => pending.readyUserIds.has(id));
                    if (allReady) {
                        await beginSessionAfterPreload(code);
                    }
                }
                telemetry.info('lobby.left', {
                    lobbyCode: code,
                    userId,
                    remainingPlayers: lobby?.playerCount || null
                });

                if (typeof ack === 'function') ack({ ok: true, lobby });
            } catch (err) {
                emitSocketError(err, 'lobby_leave_failed', ack);
            }
        });

        socket.on('lobby:update_settings', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'lobby:update_settings', { windowMs: 10_000, max: 15 });
                const code = normalizeLobbyCode(payload.lobbyCode);
                if (!code) throw httpError(400, 'Lobby code is required');

                const lobby = await lobbyService.updateLobbyConfig(code, userId, payload.settings || {});
                clearWaitingReady(code);
                io.to(code).emit('lobby:state', { lobby });
                io.to(code).emit('lobby:ready_state', {
                    lobbyCode: code,
                    readyUserIds: [],
                    requiredUserIds: (lobby.players || []).map((player) => player.userId),
                    allReady: false
                });
                broadcastLobbyDirectoryChanged(io, {
                    reason: 'settings',
                    lobbyCode: code
                });
                telemetry.info('lobby.settings_updated', {
                    lobbyCode: code,
                    userId
                });

                if (typeof ack === 'function') ack({ ok: true, lobby });
            } catch (err) {
                emitSocketError(err, 'lobby_update_failed', ack);
            }
        });

        socket.on('lobby:set_ready', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'lobby:set_ready', { windowMs: 10_000, max: 40 });
                const code = normalizeLobbyCode(payload.lobbyCode);
                if (!code) throw httpError(400, 'Lobby code is required');
                if (!socket.data.lobbies.has(code)) {
                    throw httpError(400, 'Join lobby before setting readiness');
                }

                const lobby = await lobbyService.getLobbyByCode(code);
                if (!lobby) throw httpError(404, 'Lobby not found');
                if (lobby.status !== 'WAITING') throw httpError(400, 'Lobby readiness can only be changed while waiting');
                const requiredUserIds = (lobby.players || []).map((player) => player.userId);
                if (!requiredUserIds.includes(userId)) {
                    throw httpError(403, 'You are not in this lobby');
                }

                const readySet = getOrCreateWaitingReadySet(code);
                if (payload.ready === false) {
                    readySet.delete(userId);
                } else {
                    readySet.add(userId);
                }
                if (readySet.size === 0) {
                    waitingReadyByLobby.delete(code);
                }

                const readyPayload = emitLobbyReadyState(code, requiredUserIds);
                if (typeof ack === 'function') {
                    ack({ ok: true, ...readyPayload });
                }
            } catch (err) {
                emitSocketError(err, 'lobby_ready_failed', ack);
            }
        });

        socket.on('lobby:kick', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'lobby:kick', { windowMs: 10_000, max: 20 });
                const code = normalizeLobbyCode(payload.lobbyCode);
                if (!code) throw httpError(400, 'Lobby code is required');
                if (!socket.data.lobbies.has(code)) {
                    throw httpError(400, 'Join lobby before kicking players');
                }

                const targetUserId = Number.parseInt(payload.userId, 10);
                if (!Number.isInteger(targetUserId)) {
                    throw httpError(400, 'Target user is invalid');
                }

                const result = await lobbyService.kickPlayer(code, userId, targetUserId);
                const kickedSocketIds = socketIdsByUserId.get(targetUserId)
                    ? [...socketIdsByUserId.get(targetUserId)]
                    : [];

                for (const socketId of kickedSocketIds) {
                    const targetSocket = io.sockets.sockets.get(socketId);
                    if (!targetSocket) continue;
                    targetSocket.leave(code);
                    targetSocket.data?.lobbies?.delete?.(code);
                    targetSocket.emit('lobby:kicked', {
                        lobbyCode: code,
                        kickedUserId: targetUserId,
                        cooldownUntil: result.cooldownUntil
                    });
                }

                removeWaitingReadyUser(code, targetUserId);
                await roundEngine.onPlayerDisconnected(code, targetUserId);
                if (result.lobby) {
                    io.to(code).emit('lobby:state', { lobby: result.lobby });
                    emitLobbyReadyState(code, (result.lobby.players || []).map((player) => player.userId));
                } else {
                    clearWaitingReady(code);
                }
                broadcastLobbyDirectoryChanged(io, {
                    reason: 'kick',
                    lobbyCode: code
                });
                telemetry.info('lobby.player_kicked', {
                    lobbyCode: code,
                    actorUserId: userId,
                    targetUserId
                });

                if (typeof ack === 'function') {
                    ack({
                        ok: true,
                        kickedUserId: targetUserId,
                        lobby: result.lobby || null,
                        cooldownUntil: result.cooldownUntil
                    });
                }
            } catch (err) {
                emitSocketError(err, 'lobby_kick_failed', ack);
            }
        });

        socket.on('lobby:promote', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'lobby:promote', { windowMs: 10_000, max: 20 });
                const code = normalizeLobbyCode(payload.lobbyCode);
                if (!code) throw httpError(400, 'Lobby code is required');
                if (!socket.data.lobbies.has(code)) {
                    throw httpError(400, 'Join lobby before promoting players');
                }

                const targetUserId = Number.parseInt(payload.userId, 10);
                if (!Number.isInteger(targetUserId)) {
                    throw httpError(400, 'Target user is invalid');
                }

                const result = await lobbyService.promoteHost(code, userId, targetUserId);
                if (result.lobby) {
                    io.to(code).emit('lobby:state', { lobby: result.lobby });
                    emitLobbyReadyState(code, (result.lobby.players || []).map((player) => player.userId));
                }
                broadcastLobbyDirectoryChanged(io, {
                    reason: 'promote',
                    lobbyCode: code
                });
                telemetry.info('lobby.host_transferred', {
                    lobbyCode: code,
                    actorUserId: userId,
                    promotedUserId: targetUserId
                });

                if (typeof ack === 'function') {
                    ack({
                        ok: true,
                        promotedUserId: targetUserId,
                        lobby: result.lobby || null
                    });
                }
            } catch (err) {
                emitSocketError(err, 'lobby_promote_failed', ack);
            }
        });

        socket.on('game:start', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'game:start', { windowMs: 30_000, max: 6 });
                const code = normalizeLobbyCode(payload.lobbyCode);
                if (!code) throw httpError(400, 'Lobby code is required');

                const lobby = await lobbyService.getLobbyByCode(code);
                if (!lobby) throw httpError(404, 'Lobby not found');
                if (!lobby.host || lobby.host.id !== userId) {
                    throw httpError(403, 'Only host can start the game');
                }
                if (lobby.status !== 'WAITING') {
                    throw httpError(400, 'Lobby is not in waiting status');
                }
                const requiredUserIds = (lobby.players || []).map((player) => player.userId);
                const readyPayload = toLobbyReadyPayload(code, requiredUserIds);
                if (!readyPayload.allReady) {
                    throw httpError(400, 'All players must be ready before the host can start the game');
                }
                telemetry.info('session.start_requested', {
                    lobbyCode: code,
                    requestedByUserId: userId,
                    roundCount: lobby.roundCount
                });

                const session = await sessionService.startSessionFromLobby(lobby);
                let updatedLobby;
                let preloadManifest = [];
                try {
                    updatedLobby = await lobbyService.getLobbyByCode(code);
                    await roundEngine.startSession({
                        lobbyCode: code,
                        session,
                        lobby: updatedLobby,
                        deferFirstRound: true
                    });
                    preloadManifest = await roundEngine.getSessionMediaManifest(session.id);
                    await prewarmFirstRoundOrThrow(preloadManifest);
                } catch (engineErr) {
                    await sessionService.rollbackSessionStart(session.id);
                    throw engineErr;
                }

                const requiredReadyUserIds = (updatedLobby?.players || [])
                    .filter((player) => player?.isConnected !== false)
                    .map((player) => player.userId);
                const resolvedRequired = requiredReadyUserIds.length > 0
                    ? requiredReadyUserIds
                    : (updatedLobby?.players || []).map((player) => player.userId);

                pendingPreloadByLobby.set(code, {
                    sessionId: session.id,
                    requiredReadyUserIds: new Set(resolvedRequired),
                    readyUserIds: new Set()
                });
                clearWaitingReady(code);

                io.to(code).emit('game:started', {
                    sessionId: session.id,
                    config: session,
                    lobby: updatedLobby,
                    preloadManifest
                });
                broadcastLobbyDirectoryChanged(io, {
                    reason: 'game_started',
                    lobbyCode: code
                });
                telemetry.info('session.started', {
                    lobbyCode: code,
                    sessionId: session.id,
                    players: (updatedLobby?.players || []).length,
                    preloadManifestCount: preloadManifest.length
                });

                await beginSessionAfterPreload(code);

                mediaProxyService.prewarmManifest(preloadManifest, {
                    roundLimit: 3,
                    maxConcurrent: 2
                }).catch((err) => {
                    telemetry.warn('media.prewarm_background_failed', {
                        lobbyCode: code,
                        sessionId: session.id,
                        error: err?.message || String(err)
                    });
                });

                if (typeof ack === 'function') ack({ ok: true, session });
            } catch (err) {
                emitSocketError(err, 'game_start_failed', ack);
            }
        });

        socket.on('game:preload_ready', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'game:preload_ready', { windowMs: 10_000, max: 30 });
                const code = String(payload.lobbyCode || '').toUpperCase();
                if (!code) throw httpError(400, 'Lobby code is required');
                if (!socket.data.lobbies.has(code)) {
                    throw httpError(400, 'Join lobby before signaling preload readiness');
                }

                const pending = pendingPreloadByLobby.get(code);
                if (!pending) {
                    if (typeof ack === 'function') ack({ ok: true, started: true, allReady: true });
                    return;
                }

                if (Number.isInteger(payload.sessionId) && payload.sessionId !== pending.sessionId) {
                    throw httpError(400, 'Preload signal does not match current session');
                }

                if (pending.requiredReadyUserIds.has(userId)) {
                    pending.readyUserIds.add(userId);
                }

                const requiredCount = pending.requiredReadyUserIds.size;
                const readyCount = [...pending.requiredReadyUserIds].filter((id) => pending.readyUserIds.has(id)).length;
                const allReady = readyCount >= requiredCount;
                if (allReady) {
                    await beginSessionAfterPreload(code);
                }
                telemetry.debug('session.preload_ready_signal', {
                    lobbyCode: code,
                    sessionId: pending.sessionId,
                    userId,
                    readyCount,
                    requiredCount,
                    allReady
                });

                if (typeof ack === 'function') {
                    ack({
                        ok: true,
                        readyCount,
                        requiredCount,
                        allReady,
                        started: allReady
                    });
                }
            } catch (err) {
                emitSocketError(err, 'preload_ready_failed', ack);
            }
        });

        socket.on('round:submit_guess', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'round:submit_guess', { windowMs: 10_000, max: 30 });
                const code = String(payload.lobbyCode || '').toUpperCase();
                if (!code) throw httpError(400, 'Lobby code is required');
                if (!socket.data.lobbies.has(code)) {
                    throw httpError(400, 'Join lobby before submitting guesses');
                }

                const result = await roundEngine.submitGuess({
                    lobbyCode: code,
                    userId,
                    payload
                });
                if (typeof ack === 'function') ack({ ok: true, ...result });
            } catch (err) {
                emitSocketError(err, 'round_guess_failed', ack);
            }
        });

        socket.on('round:set_ready', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'round:set_ready', { windowMs: 10_000, max: 40 });
                const code = String(payload.lobbyCode || '').toUpperCase();
                if (!code) throw httpError(400, 'Lobby code is required');
                if (!socket.data.lobbies.has(code)) {
                    throw httpError(400, 'Join lobby before setting readiness');
                }
                const result = await roundEngine.setReady({
                    lobbyCode: code,
                    userId,
                    ready: payload.ready
                });
                if (typeof ack === 'function') ack({ ok: true, ...result });
            } catch (err) {
                emitSocketError(err, 'round_ready_failed', ack);
            }
        });

        socket.on('round:sync', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'round:sync', { windowMs: 10_000, max: 30 });
                const code = String(payload.lobbyCode || '').toUpperCase();
                if (!code) throw httpError(400, 'Lobby code is required');
                if (!socket.data.lobbies.has(code)) {
                    throw httpError(400, 'Join lobby before syncing round state');
                }

                const state = await roundEngine.getSyncState(code);
                if (typeof ack === 'function') ack({ ok: true, state });
            } catch (err) {
                emitSocketError(err, 'round_sync_failed', ack);
            }
        });

        socket.on('disconnect', async () => {
            untrackSocketForUser(userId, socket.id);
            for (const code of socket.data.lobbies) {
                try {
                    const pending = pendingPreloadByLobby.get(code);
                    if (pending) {
                        pending.requiredReadyUserIds.delete(userId);
                        pending.readyUserIds.delete(userId);
                        const allReady = [...pending.requiredReadyUserIds].every((id) => pending.readyUserIds.has(id));
                        if (allReady) {
                            await beginSessionAfterPreload(code);
                        }
                    }

                    await roundEngine.onPlayerDisconnected(code, userId);
                    removeWaitingReadyUser(code, userId);
                    await lobbyService.setPlayerConnection(code, userId, false);
                    await broadcastLobbyStateAndReady(code);
                    telemetry.info('lobby.player_disconnected', {
                        lobbyCode: code,
                        userId
                    });
                } catch (err) {
                    // Ignore disconnect cleanup errors; state will reconcile on reconnect.
                    telemetry.warn('lobby.disconnect_cleanup_failed', {
                        lobbyCode: code,
                        userId,
                        error: err?.message || String(err)
                    });
                }
            }
        });
    });

    return io;
}

module.exports = {
    attachRealtime
};
