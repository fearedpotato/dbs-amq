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

const DEFAULT_HOST_OFFLINE_TIMEOUT_MS = 5 * 60 * 1000;
const DEFAULT_PREWARM_BLOCKING_START = true;
const DEFAULT_DISCONNECT_GRACE_MS = 1_200;
const DEFAULT_LOBBY_JOIN_BURST_WINDOW_MS = 5_000;
const DEFAULT_LOBBY_JOIN_BURST_MAX = 4;
const DEFAULT_LOBBY_JOIN_BLOCK_MS = 15_000;
const DEFAULT_MEDIA_STATUS_AUTOMATED_CHECK_MS = 30_000;

function parsePositiveInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function parseNonNegativeInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function parseBoolean(value, fallback) {
    if (typeof value === 'boolean') return value;
    const normalized = String(value || '').trim().toLowerCase();
    if (!normalized) return fallback;
    if (['1', 'true', 'yes', 'on'].includes(normalized)) return true;
    if (['0', 'false', 'no', 'off'].includes(normalized)) return false;
    return fallback;
}

function getHostOfflineTimeoutMs() {
    return parsePositiveInt(process.env.LOBBY_HOST_OFFLINE_TIMEOUT_MS, DEFAULT_HOST_OFFLINE_TIMEOUT_MS);
}

function getDisconnectGraceMs() {
    return parseNonNegativeInt(process.env.LOBBY_DISCONNECT_GRACE_MS, DEFAULT_DISCONNECT_GRACE_MS);
}

function getLobbyJoinBurstWindowMs() {
    return parsePositiveInt(process.env.LOBBY_JOIN_BURST_WINDOW_MS, DEFAULT_LOBBY_JOIN_BURST_WINDOW_MS);
}

function getLobbyJoinBurstMax() {
    return parsePositiveInt(process.env.LOBBY_JOIN_BURST_MAX, DEFAULT_LOBBY_JOIN_BURST_MAX);
}

function getLobbyJoinBlockMs() {
    return parseNonNegativeInt(process.env.LOBBY_JOIN_BLOCK_MS, DEFAULT_LOBBY_JOIN_BLOCK_MS);
}

function shouldBlockStartOnFirstRoundPrewarm() {
    return parseBoolean(process.env.MEDIA_PREWARM_BLOCKING_START, DEFAULT_PREWARM_BLOCKING_START);
}

function getMediaStatusAutomatedCheckMs() {
    const fallback = typeof mediaService.getProviderStatusAutomatedStaleMs === 'function'
        ? mediaService.getProviderStatusAutomatedStaleMs()
        : DEFAULT_MEDIA_STATUS_AUTOMATED_CHECK_MS;
    return parsePositiveInt(process.env.MEDIA_STATUS_AUTOMATED_CHECK_MS, fallback);
}

function attachRealtime(httpServer, options = {}) {
    const io = new Server(httpServer, {
        cors: {
            origin: options.origin || process.env.BASE_URL || true,
            methods: ['GET', 'POST']
        }
    });

    let roundEngine = null;
    const pendingPreloadByLobby = new Map();
    const waitingReadyByLobby = new Map();
    const hostOfflineTimersByLobby = new Map();
    const socketIdsByUserId = new Map();
    const pendingDisconnectCleanupTimersByKey = new Map();
    const blockedLobbyJoinByUserId = new Map();
    const mediaStatusBroadcastEnabled = options.mediaStatusBroadcast !== false;
    let mediaStatusBroadcastTimer = null;
    let lastMediaSourceStatus = null;

    async function fetchLatestMediaSourceStatus({ forceRefresh = false, ensureMaxAgeMs = null } = {}) {
        try {
            const status = await mediaService.getMediaProviderStatus({ forceRefresh, ensureMaxAgeMs });
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

    async function publishMediaSourceStatus({ forceRefresh = false, ensureMaxAgeMs = null } = {}) {
        if (!mediaStatusBroadcastEnabled) return null;
        const status = await fetchLatestMediaSourceStatus({ forceRefresh, ensureMaxAgeMs });
        io.emit('media:source_status', {
            status,
            at: Date.now()
        });
        return status;
    }

    if (mediaStatusBroadcastEnabled) {
        const automatedMediaStatusCheckMs = getMediaStatusAutomatedCheckMs();
        publishMediaSourceStatus({ ensureMaxAgeMs: automatedMediaStatusCheckMs }).catch(() => {});
        mediaStatusBroadcastTimer = setInterval(() => {
            publishMediaSourceStatus({ ensureMaxAgeMs: automatedMediaStatusCheckMs }).catch(() => {});
        }, automatedMediaStatusCheckMs);
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
        for (const timer of hostOfflineTimersByLobby.values()) {
            clearTimeout(timer);
        }
        hostOfflineTimersByLobby.clear();
        for (const timer of pendingDisconnectCleanupTimersByKey.values()) {
            clearTimeout(timer);
        }
        pendingDisconnectCleanupTimersByKey.clear();
        blockedLobbyJoinByUserId.clear();
        return originalClose(...args);
    };

    function clearHostOfflineTimer(lobbyCode) {
        const code = normalizeLobbyCode(lobbyCode);
        const timer = hostOfflineTimersByLobby.get(code);
        if (!timer) return;
        clearTimeout(timer);
        hostOfflineTimersByLobby.delete(code);
    }

    function disconnectCleanupKey(lobbyCode, memberUserId) {
        return `${normalizeLobbyCode(lobbyCode)}:${memberUserId}`;
    }

    function getLobbyJoinBlockRemainingMs(userId) {
        const expiresAt = blockedLobbyJoinByUserId.get(userId);
        if (!Number.isFinite(expiresAt)) return 0;
        const remainingMs = expiresAt - Date.now();
        if (remainingMs <= 0) {
            blockedLobbyJoinByUserId.delete(userId);
            return 0;
        }
        return remainingMs;
    }

    function assertLobbyJoinNotBlocked(userId) {
        const remainingMs = getLobbyJoinBlockRemainingMs(userId);
        if (remainingMs <= 0) return;
        const remainingSec = Math.max(1, Math.ceil(remainingMs / 1000));
        throw httpError(429, `Too many lobby reconnect attempts, try again in ${remainingSec}s`);
    }

    function setLobbyJoinBlocked(userId, lobbyCode = '', blockMs = getLobbyJoinBlockMs()) {
        const ttlMs = Math.max(0, Number.parseInt(blockMs, 10) || 0);
        if (ttlMs <= 0) return;
        blockedLobbyJoinByUserId.set(userId, Date.now() + ttlMs);
        const code = normalizeLobbyCode(lobbyCode);
        if (code) {
            lobbyService.setJoinAbuseCooldown(code, userId, ttlMs);
        }
    }

    function waitMs(ms) {
        return new Promise((resolve) => setTimeout(resolve, Math.max(0, ms)));
    }

    function clearPendingDisconnectCleanup(lobbyCode, memberUserId) {
        const key = disconnectCleanupKey(lobbyCode, memberUserId);
        const timer = pendingDisconnectCleanupTimersByKey.get(key);
        if (!timer) return;
        clearTimeout(timer);
        pendingDisconnectCleanupTimersByKey.delete(key);
    }

    function clearPendingDisconnectCleanupForLobby(lobbyCode) {
        const prefix = `${normalizeLobbyCode(lobbyCode)}:`;
        for (const [key, timer] of pendingDisconnectCleanupTimersByKey.entries()) {
            if (!key.startsWith(prefix)) continue;
            clearTimeout(timer);
            pendingDisconnectCleanupTimersByKey.delete(key);
        }
    }

    function userHasSocketInLobby(memberUserId, lobbyCode) {
        const code = normalizeLobbyCode(lobbyCode);
        const socketIds = socketIdsByUserId.get(memberUserId);
        if (!socketIds || socketIds.size === 0) return false;

        for (const socketId of socketIds) {
            const memberSocket = io.sockets.sockets.get(socketId);
            if (!memberSocket) continue;
            if (memberSocket.data?.lobbies?.has?.(code)) return true;
        }
        return false;
    }

    async function runDisconnectCleanup(lobbyCode, memberUserId) {
        const code = normalizeLobbyCode(lobbyCode);
        if (!code || !Number.isInteger(memberUserId)) return;
        if (userHasSocketInLobby(memberUserId, code)) return;

        try {
            const pending = pendingPreloadByLobby.get(code);
            if (pending) {
                pending.requiredReadyUserIds.delete(memberUserId);
                pending.readyUserIds.delete(memberUserId);
                const allReady = [...pending.requiredReadyUserIds].every((id) => pending.readyUserIds.has(id));
                if (allReady) {
                    await beginSessionAfterPreload(code);
                }
            }

            removeWaitingReadyUser(code, memberUserId);
            const lobby = await lobbyService.setPlayerConnection(code, memberUserId, false);
            await roundEngine.syncLobbyPlayers(code, lobby?.players || []);
            await broadcastLobbyStateAndReady(code);
            syncHostOfflineTimeoutFromLobby(lobby);
            telemetry.info('lobby.player_disconnected', {
                lobbyCode: code,
                userId: memberUserId
            });
        } catch (err) {
            // Ignore disconnect cleanup errors; state will reconcile on reconnect.
            telemetry.warn('lobby.disconnect_cleanup_failed', {
                lobbyCode: code,
                userId: memberUserId,
                error: err?.message || String(err)
            });
        }
    }

    function scheduleDisconnectCleanup(lobbyCode, memberUserId) {
        const code = normalizeLobbyCode(lobbyCode);
        if (!code || !Number.isInteger(memberUserId)) return;
        clearPendingDisconnectCleanup(code, memberUserId);

        const delayMs = getDisconnectGraceMs();
        if (delayMs <= 0) {
            runDisconnectCleanup(code, memberUserId).catch(() => {});
            return;
        }

        const key = disconnectCleanupKey(code, memberUserId);
        const timer = setTimeout(() => {
            pendingDisconnectCleanupTimersByKey.delete(key);
            runDisconnectCleanup(code, memberUserId).catch(() => {});
        }, delayMs);
        if (typeof timer?.unref === 'function') {
            timer.unref();
        }
        pendingDisconnectCleanupTimersByKey.set(key, timer);
    }

    async function removeUserFromLobbyRoom(lobbyCode, memberUserId) {
        const code = normalizeLobbyCode(lobbyCode);
        const targetSocketIds = socketIdsByUserId.get(memberUserId)
            ? [...socketIdsByUserId.get(memberUserId)]
            : [];

        for (const socketId of targetSocketIds) {
            const targetSocket = io.sockets.sockets.get(socketId);
            if (!targetSocket) continue;
            targetSocket.leave(code);
            targetSocket.data?.lobbies?.delete?.(code);
        }
    }

    async function evictUserForJoinAbuse(lobbyCode, memberUserId) {
        const code = normalizeLobbyCode(lobbyCode);
        if (!code || !Number.isInteger(memberUserId)) return;

        const targetSocketIds = socketIdsByUserId.get(memberUserId)
            ? [...socketIdsByUserId.get(memberUserId)]
            : [];
        for (const socketId of targetSocketIds) {
            const targetSocket = io.sockets.sockets.get(socketId);
            if (!targetSocket) continue;
            const wasInLobby = targetSocket.data?.lobbies?.has?.(code);
            targetSocket.leave(code);
            targetSocket.data?.lobbies?.delete?.(code);
            if (wasInLobby) {
                targetSocket.emit('lobby:kicked', {
                    lobbyCode: code,
                    kickedUserId: memberUserId,
                    reason: 'join_abuse'
                });
            }
        }

        clearPendingDisconnectCleanup(code, memberUserId);
        removeWaitingReadyUser(code, memberUserId);

        let lobby = null;
        for (let attempt = 1; attempt <= 6; attempt += 1) {
            lobby = await lobbyService.leaveLobby(code, memberUserId, { force: true });
            const stillPresent = Boolean(
                lobby
                && Array.isArray(lobby.players)
                && lobby.players.some((player) => player.userId === memberUserId)
            );
            if (!stillPresent) break;
            telemetry.warn('lobby.join_abuse_eviction_retry', {
                lobbyCode: code,
                userId: memberUserId,
                attempt
            });
            await waitMs(25);
        }
        await roundEngine.syncLobbyPlayers(code, lobby?.players || []);
        const lobbyClosed = !lobby || lobby.status === 'CLOSED' || Number(lobby.playerCount || 0) <= 0;
        if (lobbyClosed) {
            await terminateLobby(code, 'abuse_kick', { alreadyClosed: true });
            telemetry.info('lobby.closed_after_join_abuse_kick', {
                lobbyCode: code,
                userId: memberUserId
            });
            return;
        }

        io.to(code).emit('lobby:state', { lobby });
        emitLobbyReadyState(code, (lobby.players || []).map((player) => player.userId));
        syncHostOfflineTimeoutFromLobby(lobby, code);
        broadcastLobbyDirectoryChanged(io, {
            reason: 'abuse_kick',
            lobbyCode: code
        });
        telemetry.info('lobby.player_evicted_join_abuse', {
            lobbyCode: code,
            userId: memberUserId,
            remainingPlayers: lobby?.playerCount || null
        });
    }

    async function terminateLobby(lobbyCode, reason, options = {}) {
        const code = normalizeLobbyCode(lobbyCode);
        const alreadyClosed = options.alreadyClosed === true;

        clearHostOfflineTimer(code);
        pendingPreloadByLobby.delete(code);
        clearWaitingReady(code);
        clearPendingDisconnectCleanupForLobby(code);

        if (!alreadyClosed) {
            await lobbyService.closeLobby(code, { cancelActiveSession: true });
        }

        const stoppedByEngine = await roundEngine.forceStopLobby(code, reason);
        if (!stoppedByEngine) {
            io.to(code).emit('lobby:terminated', {
                lobbyCode: code,
                reason
            });
        }

        const roomSockets = await io.in(code).fetchSockets();
        for (const roomSocket of roomSockets) {
            roomSocket.leave(code);
            roomSocket.data?.lobbies?.delete?.(code);
        }

        broadcastLobbyDirectoryChanged(io, {
            reason,
            lobbyCode: code,
            lobbyClosed: true
        });
    }

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

    async function handleHostOfflineTimeout(lobbyCode) {
        const code = normalizeLobbyCode(lobbyCode);
        hostOfflineTimersByLobby.delete(code);

        try {
            const result = await lobbyService.resolveOfflineHostTimeout(code);
            if (!result || result.action === 'none') return;

            if (result.action === 'transferred') {
                if (Number.isInteger(result.removedUserId)) {
                    await removeUserFromLobbyRoom(code, result.removedUserId);
                }
                if (result.lobby) {
                    io.to(code).emit('lobby:state', { lobby: result.lobby });
                    emitLobbyReadyState(code, (result.lobby.players || []).map((player) => player.userId));
                }
                broadcastLobbyDirectoryChanged(io, {
                    reason: 'host_offline_transfer',
                    lobbyCode: code
                });
                telemetry.info('lobby.host_offline_transferred', {
                    lobbyCode: code,
                    removedUserId: result.removedUserId || null,
                    newHostUserId: result.newHostUserId || null
                });
                return;
            }

            if (result.action === 'closed') {
                await terminateLobby(code, 'host_offline_timeout', { alreadyClosed: true });
                telemetry.info('lobby.host_offline_closed', {
                    lobbyCode: code,
                    removedUserId: result.removedUserId || null
                });
            }
        } catch (err) {
            telemetry.warn('lobby.host_offline_timeout_failed', {
                lobbyCode: code,
                error: err?.message || String(err)
            });
        }
    }

    function scheduleHostOfflineTimeout(lobbyCode) {
        const code = normalizeLobbyCode(lobbyCode);
        clearHostOfflineTimer(code);

        const timeoutMs = getHostOfflineTimeoutMs();
        const timer = setTimeout(() => {
            handleHostOfflineTimeout(code).catch(() => {});
        }, timeoutMs);
        if (typeof timer?.unref === 'function') {
            timer.unref();
        }
        hostOfflineTimersByLobby.set(code, timer);
    }

    function syncHostOfflineTimeoutFromLobby(lobby, lobbyCode = null) {
        const code = normalizeLobbyCode(lobby?.code || lobbyCode);
        if (!code) return;
        if (!lobby || lobby.status === 'CLOSED') {
            clearHostOfflineTimer(code);
            return;
        }

        const hostUserId = lobby.host?.id;
        const hostPlayer = (lobby.players || []).find((player) => player.userId === hostUserId);
        if (hostPlayer && hostPlayer.isConnected === false) {
            scheduleHostOfflineTimeout(code);
            return;
        }

        clearHostOfflineTimer(code);
    }

    roundEngine = createRoundEngine(io, {
        onNoConnectedRoundStreakExceeded: async ({ lobbyCode, sessionId, streak, roundIndex }) => {
            const code = normalizeLobbyCode(lobbyCode);
            await terminateLobby(code, 'zero_connected_round_streak');
            telemetry.info('lobby.zero_connected_round_streak_closed', {
                lobbyCode: code,
                sessionId,
                streak,
                roundIndex
            });
        },
        onSessionFinished: async ({ lobbyCode, sessionId, winner, finalScores }) => {
            const code = normalizeLobbyCode(lobbyCode);
            lobbyService.setLobbyLastMatchResult(code, {
                winner: winner || null,
                finalScores: Array.isArray(finalScores) ? finalScores : [],
                finishedAt: new Date().toISOString()
            });
            const lobby = await broadcastLobbyStateAndReady(code);
            syncHostOfflineTimeoutFromLobby(lobby, code);
            broadcastLobbyDirectoryChanged(io, {
                reason: 'game_finished',
                lobbyCode: code
            });
            telemetry.info('session.finish_state_broadcast', {
                lobbyCode: code,
                sessionId,
                winnerUserId: winner?.userId || null,
                scoreCount: Array.isArray(finalScores) ? finalScores.length : 0
            });
        }
    });

    async function assertEventRateLimit(userId, eventName, { windowMs, max }) {
        const key = `${userId}:${eventName}`;
        const bucket = await consumeRateLimitBucket(`socket:${key}`, windowMs);
        if (bucket.count > max) {
            throw httpError(429, 'Too many realtime actions, slow down');
        }
    }

    async function assertLobbyJoinBurstRateLimit(userId, lobbyCode) {
        if (
            process.env.NODE_ENV === 'test'
            && process.env.LOBBY_JOIN_BURST_MAX == null
            && process.env.LOBBY_JOIN_BURST_WINDOW_MS == null
        ) {
            return;
        }

        const code = normalizeLobbyCode(lobbyCode);
        const windowMs = getLobbyJoinBurstWindowMs();
        const max = getLobbyJoinBurstMax();
        const bucket = await consumeRateLimitBucket(`socket:${userId}:lobby_join:${code}`, windowMs);
        if (bucket.count > max) {
            setLobbyJoinBlocked(userId, code);
            const err = httpError(429, 'Too many lobby reconnect attempts, please wait a moment');
            err.joinBurstAbuse = true;
            throw err;
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
            if (getLobbyJoinBlockRemainingMs(decoded.userId) > 0) {
                return next(new Error('Rate limited'));
            }
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
            if (Number.isInteger(err?.status) && err.status === 429) {
                telemetry.debug('socket.event_rate_limited', {
                    fallbackCode,
                    payload,
                    userId
                });
            } else if (Number.isInteger(err?.status) && err.status < 500) {
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
            let code = '';
            try {
                code = normalizeLobbyCode(payload.lobbyCode);
                if (!code) throw httpError(400, 'Lobby code is required');
                assertLobbyJoinNotBlocked(userId);
                await assertEventRateLimit(userId, 'lobby:join', { windowMs: 10_000, max: 20 });
                await assertLobbyJoinBurstRateLimit(userId, code);
                clearPendingDisconnectCleanup(code, userId);

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
                // Handle concurrent in-flight joins that started before abuse-block was set.
                assertLobbyJoinNotBlocked(userId);
                const lobby = await lobbyService.setPlayerConnection(code, userId, true);
                await roundEngine.syncLobbyPlayers(code, lobby?.players || []);

                const affectedPreviousLobbies = [...new Set([...removedLobbyCodes, ...staleSocketLobbies])];
                for (const removedCode of affectedPreviousLobbies) {
                    socket.leave(removedCode);
                    socket.data.lobbies.delete(removedCode);
                }
                for (const removedCode of affectedPreviousLobbies) {
                    removeWaitingReadyUser(removedCode, userId);
                    const previousLobby = await broadcastLobbyStateAndReady(removedCode);
                    await roundEngine.syncLobbyPlayers(removedCode, previousLobby?.players || []);
                    syncHostOfflineTimeoutFromLobby(previousLobby, removedCode);
                }

                socket.join(code);
                socket.data.lobbies.add(code);
                await broadcastLobbyStateAndReady(code);
                syncHostOfflineTimeoutFromLobby(lobby, code);
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
                if ((err?.joinBurstAbuse || (err?.status === 429 && code && getLobbyJoinBlockRemainingMs(userId) > 0)) && code) {
                    try {
                        await evictUserForJoinAbuse(code, userId);
                    } catch (evictErr) {
                        telemetry.warn('lobby.join_abuse_eviction_failed', {
                            lobbyCode: code,
                            userId,
                            error: evictErr?.message || String(evictErr)
                        });
                    }
                }
                emitSocketError(err, 'lobby_join_failed', ack);
            }
        });

        socket.on('lobby:leave', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'lobby:leave', { windowMs: 10_000, max: 20 });
                const code = normalizeLobbyCode(payload.lobbyCode);
                if (!code) throw httpError(400, 'Lobby code is required');
                clearPendingDisconnectCleanup(code, userId);

                socket.leave(code);
                socket.data.lobbies.delete(code);
                removeWaitingReadyUser(code, userId);

                const lobby = await lobbyService.leaveLobby(code, userId);
                await roundEngine.syncLobbyPlayers(code, lobby?.players || []);
                const lobbyClosed = !lobby || lobby.status === 'CLOSED' || Number(lobby.playerCount || 0) <= 0;
                if (lobbyClosed) {
                    await terminateLobby(code, 'all_players_left', { alreadyClosed: true });
                    telemetry.info('lobby.closed_after_last_leave', {
                        lobbyCode: code,
                        userId
                    });
                    if (typeof ack === 'function') ack({ ok: true, lobby: null, terminated: true });
                    return;
                }

                if (lobby) {
                    io.to(code).emit('lobby:state', { lobby });
                    emitLobbyReadyState(code, (lobby.players || []).map((player) => player.userId));
                } else {
                    clearWaitingReady(code);
                }
                syncHostOfflineTimeoutFromLobby(lobby, code);
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
                syncHostOfflineTimeoutFromLobby(lobby);
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
                await roundEngine.syncLobbyPlayers(code, result?.lobby?.players || []);
                if (result.lobby) {
                    io.to(code).emit('lobby:state', { lobby: result.lobby });
                    emitLobbyReadyState(code, (result.lobby.players || []).map((player) => player.userId));
                } else {
                    clearWaitingReady(code);
                }
                syncHostOfflineTimeoutFromLobby(result.lobby, code);
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
                syncHostOfflineTimeoutFromLobby(result.lobby, code);
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
            let code = '';
            let broadcastedStarting = false;
            let session = null;
            let sessionActivated = false;
            try {
                await assertEventRateLimit(userId, 'game:start', { windowMs: 30_000, max: 6 });
                code = normalizeLobbyCode(payload.lobbyCode);
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
                io.to(code).emit('game:starting', {
                    lobbyCode: code,
                    requestedByUserId: userId,
                    at: Date.now()
                });
                broadcastedStarting = true;

                session = await sessionService.startSessionFromLobby(lobby);
                let updatedLobby;
                let preloadManifest = [];
                const blockOnFirstRoundPrewarm = shouldBlockStartOnFirstRoundPrewarm();
                updatedLobby = await lobbyService.getLobbyByCode(code);
                await roundEngine.startSession({
                    lobbyCode: code,
                    session,
                    lobby: updatedLobby,
                    deferFirstRound: true
                });
                preloadManifest = await roundEngine.getSessionMediaManifest(session.id);
                if (blockOnFirstRoundPrewarm) {
                    await prewarmFirstRoundOrThrow(preloadManifest);
                } else {
                    prewarmFirstRoundOrThrow(preloadManifest).catch((err) => {
                        telemetry.warn('media.prewarm_first_round_non_blocking_failed', {
                            lobbyCode: code,
                            sessionId: session.id,
                            error: err?.message || String(err)
                        });
                    });
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
                syncHostOfflineTimeoutFromLobby(updatedLobby);
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

                const started = await beginSessionAfterPreload(code);
                if (!started) {
                    throw httpError(500, 'Could not start the first round');
                }
                sessionActivated = true;

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
                if (session?.id && !sessionActivated) {
                    try {
                        await sessionService.rollbackSessionStart(session.id);
                        pendingPreloadByLobby.delete(code);
                        await roundEngine.forceStopLobby(code, 'start_failed');
                        const restoredLobby = await broadcastLobbyStateAndReady(code);
                        syncHostOfflineTimeoutFromLobby(restoredLobby, code);
                        broadcastLobbyDirectoryChanged(io, {
                            reason: 'game_start_rolled_back',
                            lobbyCode: code
                        });
                    } catch (rollbackErr) {
                        telemetry.warn('session.rollback_after_start_failure_failed', {
                            lobbyCode: code,
                            sessionId: session.id,
                            error: rollbackErr?.message || String(rollbackErr)
                        });
                    }
                }
                if (broadcastedStarting && code) {
                    io.to(code).emit('game:start_cancelled', {
                        lobbyCode: code,
                        at: Date.now()
                    });
                }
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
            if (socketIdsByUserId.has(userId)) {
                return;
            }
            for (const code of socket.data.lobbies) {
                scheduleDisconnectCleanup(code, userId);
            }
        });
    });

    return io;
}

module.exports = {
    attachRealtime
};
