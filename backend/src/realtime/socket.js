const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const lobbyService = require('../game/lobbyService');
const sessionService = require('../game/sessionService');
const { httpError } = require('../game/errors');
const { createRoundEngine } = require('./roundEngine');
const { consumeRateLimitBucket } = require('../lib/rateLimiterStore');

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

function attachRealtime(httpServer, options = {}) {
    const io = new Server(httpServer, {
        cors: {
            origin: options.origin || process.env.BASE_URL || true,
            methods: ['GET', 'POST']
        }
    });

    const roundEngine = createRoundEngine(io);

    async function assertEventRateLimit(userId, eventName, { windowMs, max }) {
        const key = `${userId}:${eventName}`;
        const bucket = await consumeRateLimitBucket(`socket:${key}`, windowMs);
        if (bucket.count > max) {
            throw httpError(429, 'Too many realtime actions, slow down');
        }
    }

    io.use((socket, next) => {
        try {
            const token = parseSocketToken(socket);
            if (!token) {
                return next(new Error('Unauthorized'));
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
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

        const emitSocketError = (err, fallbackCode, ack) => {
            const payload = toErrorPayload(err, fallbackCode);
            socket.emit('error', payload);
            if (typeof ack === 'function') {
                ack({ ok: false, error: payload.message, code: payload.code });
            }
        };

        socket.on('lobby:join', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'lobby:join', { windowMs: 10_000, max: 20 });
                const code = String(payload.lobbyCode || '').toUpperCase();
                if (!code) throw httpError(400, 'Lobby code is required');

                await lobbyService.joinLobby(
                    code,
                    { id: userId, username, nickname: username },
                    payload.displayName,
                    { inviteToken: typeof payload.inviteToken === 'string' ? payload.inviteToken : null }
                );
                const lobby = await lobbyService.setPlayerConnection(code, userId, true);

                socket.join(code);
                socket.data.lobbies.add(code);
                await broadcastLobbyState(io, code);

                if (typeof ack === 'function') ack({ ok: true, lobby });
            } catch (err) {
                emitSocketError(err, 'lobby_join_failed', ack);
            }
        });

        socket.on('lobby:leave', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'lobby:leave', { windowMs: 10_000, max: 20 });
                const code = String(payload.lobbyCode || '').toUpperCase();
                if (!code) throw httpError(400, 'Lobby code is required');

                socket.leave(code);
                socket.data.lobbies.delete(code);

                const lobby = await lobbyService.leaveLobby(code, userId);
                if (lobby) {
                    io.to(code).emit('lobby:state', { lobby });
                }

                if (typeof ack === 'function') ack({ ok: true, lobby });
            } catch (err) {
                emitSocketError(err, 'lobby_leave_failed', ack);
            }
        });

        socket.on('lobby:update_settings', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'lobby:update_settings', { windowMs: 10_000, max: 15 });
                const code = String(payload.lobbyCode || '').toUpperCase();
                if (!code) throw httpError(400, 'Lobby code is required');

                const lobby = await lobbyService.updateLobbyConfig(code, userId, payload.settings || {});
                io.to(code).emit('lobby:state', { lobby });

                if (typeof ack === 'function') ack({ ok: true, lobby });
            } catch (err) {
                emitSocketError(err, 'lobby_update_failed', ack);
            }
        });

        socket.on('game:start', async (payload = {}, ack) => {
            try {
                await assertEventRateLimit(userId, 'game:start', { windowMs: 30_000, max: 6 });
                const code = String(payload.lobbyCode || '').toUpperCase();
                if (!code) throw httpError(400, 'Lobby code is required');

                const lobby = await lobbyService.getLobbyByCode(code);
                if (!lobby) throw httpError(404, 'Lobby not found');
                if (!lobby.host || lobby.host.id !== userId) {
                    throw httpError(403, 'Only host can start the game');
                }

                const session = await sessionService.startSessionFromLobby(lobby);
                let updatedLobby;
                try {
                    updatedLobby = await lobbyService.getLobbyByCode(code);
                    await roundEngine.startSession({
                        lobbyCode: code,
                        session,
                        lobby: updatedLobby
                    });
                } catch (engineErr) {
                    await sessionService.rollbackSessionStart(session.id);
                    throw engineErr;
                }

                io.to(code).emit('game:started', {
                    sessionId: session.id,
                    config: session,
                    lobby: updatedLobby
                });

                if (typeof ack === 'function') ack({ ok: true, session });
            } catch (err) {
                emitSocketError(err, 'game_start_failed', ack);
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
            for (const code of socket.data.lobbies) {
                try {
                    await roundEngine.onPlayerDisconnected(code, userId);
                    await lobbyService.setPlayerConnection(code, userId, false);
                    await broadcastLobbyState(io, code);
                } catch (err) {
                    // Ignore disconnect cleanup errors; state will reconcile on reconnect.
                }
            }
        });
    });

    return io;
}

module.exports = {
    attachRealtime
};
