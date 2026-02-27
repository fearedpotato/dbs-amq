const http = require('http');
const express = require('express');
const jwt = require('jsonwebtoken');
const { io: Client } = require('socket.io-client');

jest.mock('../../game/lobbyService', () => {
    const lobbies = new Map();
    let nextLobbyId = 1;
    let nextPlayerRowId = 1;

    function asError(status, message) {
        const err = new Error(message);
        err.status = status;
        return err;
    }

    function clonePlayer(player) {
        return {
            id: player.id,
            userId: player.userId,
            displayName: player.displayName,
            isConnected: player.isConnected,
            joinedAt: player.joinedAt
        };
    }

    function snapshot(lobby) {
        if (!lobby) return null;
        const players = lobby.players
            .slice()
            .sort((a, b) => a.joinedAt.getTime() - b.joinedAt.getTime())
            .map(clonePlayer);
        return {
            id: lobby.id,
            code: lobby.code,
            name: lobby.name,
            status: lobby.status,
            isPrivate: lobby.isPrivate,
            minPlayers: lobby.minPlayers,
            maxPlayers: lobby.maxPlayers,
            roundCount: lobby.roundCount,
            guessSeconds: lobby.guessSeconds,
            sampleSeconds: lobby.sampleSeconds,
            answersRevealSeconds: lobby.answersRevealSeconds,
            solutionRevealSeconds: lobby.solutionRevealSeconds,
            sourceMode: lobby.sourceMode,
            selectionMode: lobby.selectionMode,
            themeMode: lobby.themeMode,
            host: { id: lobby.hostUserId, username: `user${lobby.hostUserId}`, nickname: `User${lobby.hostUserId}` },
            players,
            playerCount: players.length,
            canStart: players.length >= lobby.minPlayers
        };
    }

    function ensureLobby(code) {
        const lobby = lobbies.get(String(code || '').toUpperCase());
        if (!lobby) throw asError(404, 'Lobby not found');
        return lobby;
    }

    function makeLobby(seed) {
        const code = String(seed?.code || `LOB${nextLobbyId}`).toUpperCase();
        const hostUserId = Number(seed?.hostUserId || 1);
        const lobby = {
            id: Number(seed?.id || nextLobbyId++),
            code,
            name: seed?.name || null,
            status: seed?.status || 'WAITING',
            isPrivate: Boolean(seed?.isPrivate),
            minPlayers: Number(seed?.minPlayers ?? 1),
            maxPlayers: Number(seed?.maxPlayers ?? 8),
            roundCount: Number(seed?.roundCount ?? 1),
            guessSeconds: Number(seed?.guessSeconds ?? 0.2),
            sampleSeconds: Number(seed?.sampleSeconds ?? 10),
            answersRevealSeconds: Number(seed?.answersRevealSeconds ?? 0.1),
            solutionRevealSeconds: Number(seed?.solutionRevealSeconds ?? 0.1),
            sourceMode: seed?.sourceMode || 'POPULAR',
            selectionMode: seed?.selectionMode || 'STANDARD',
            themeMode: seed?.themeMode || 'MIXED',
            hostUserId,
            players: []
        };
        const seeds = Array.isArray(seed?.players) && seed.players.length > 0
            ? seed.players
            : [{ userId: hostUserId, displayName: `User${hostUserId}` }];
        for (const playerSeed of seeds) {
            lobby.players.push({
                id: nextPlayerRowId++,
                userId: Number(playerSeed.userId),
                displayName: playerSeed.displayName || `User${playerSeed.userId}`,
                isConnected: playerSeed.isConnected !== false,
                joinedAt: playerSeed.joinedAt || new Date()
            });
        }
        lobbies.set(code, lobby);
        return snapshot(lobby);
    }

    return {
        __reset() {
            lobbies.clear();
            nextLobbyId = 1;
            nextPlayerRowId = 1;
        },
        __seedLobby(seed) {
            return makeLobby(seed);
        },
        __setLobbyStatus(code, status) {
            const lobby = ensureLobby(code);
            lobby.status = status;
            return snapshot(lobby);
        },
        enforceSingleLobbyMembership: jest.fn(async (userId, options = {}) => {
            const exceptCode = options?.exceptCode ? String(options.exceptCode).toUpperCase() : null;
            const removedLobbyCodes = [];

            for (const lobby of lobbies.values()) {
                if (exceptCode && lobby.code === exceptCode) continue;
                const playerIndex = lobby.players.findIndex((player) => player.userId === userId);
                if (playerIndex < 0) continue;
                if (!['WAITING', 'IN_GAME'].includes(lobby.status)) continue;

                lobby.players.splice(playerIndex, 1);
                removedLobbyCodes.push(lobby.code);
                if (lobby.players.length === 0) {
                    lobby.status = 'CLOSED';
                    continue;
                }
                if (lobby.hostUserId === userId) {
                    lobby.hostUserId = lobby.players[0].userId;
                }
            }

            return { removedLobbyCodes };
        }),
        joinLobby: jest.fn(async (code, user, displayName, options = {}) => {
            const lobby = ensureLobby(code);
            const existing = lobby.players.find((player) => player.userId === user.id);
            if (existing) {
                existing.isConnected = true;
                return snapshot(lobby);
            }

            if (lobby.status !== 'WAITING') throw asError(400, 'Lobby is not accepting new players');

            if (lobby.isPrivate && user.id !== lobby.hostUserId) {
                const expected = `INVITE-${lobby.code}`;
                if (String(options?.inviteToken || '') !== expected) {
                    throw asError(403, 'Valid invite token is required for this private lobby');
                }
            }

            if (lobby.players.length >= lobby.maxPlayers) throw asError(400, 'Lobby is full');

            lobby.players.push({
                id: nextPlayerRowId++,
                userId: user.id,
                displayName: (displayName && String(displayName).trim()) || user.nickname || user.username,
                isConnected: true,
                joinedAt: new Date()
            });
            return snapshot(lobby);
        }),
        setPlayerConnection: jest.fn(async (code, userId, isConnected) => {
            const lobby = ensureLobby(code);
            const player = lobby.players.find((item) => item.userId === userId);
            if (!player) throw asError(404, 'Player is not part of this lobby');
            player.isConnected = Boolean(isConnected);
            return snapshot(lobby);
        }),
        getLobbyByCode: jest.fn(async (code) => {
            const lobby = lobbies.get(String(code || '').toUpperCase());
            return snapshot(lobby || null);
        }),
        leaveLobby: jest.fn(async (code, userId) => {
            const lobby = ensureLobby(code);
            lobby.players = lobby.players.filter((player) => player.userId !== userId);
            if (lobby.players.length === 0) {
                lobby.status = 'CLOSED';
                return snapshot(lobby);
            }
            if (lobby.hostUserId === userId) {
                lobby.hostUserId = lobby.players[0].userId;
            }
            return snapshot(lobby);
        }),
        updateLobbyConfig: jest.fn(async (code, actorUserId, patch = {}) => {
            const lobby = ensureLobby(code);
            if (lobby.hostUserId !== actorUserId) throw asError(403, 'Only host can update lobby settings');
            Object.assign(lobby, patch || {});
            return snapshot(lobby);
        })
    };
});

jest.mock('../../game/sessionService', () => {
    const lobbyService = require('../../game/lobbyService');
    let nextSessionId = 1;
    const sessions = new Map();

    return {
        __reset() {
            nextSessionId = 1;
            sessions.clear();
        },
        startSessionFromLobby: jest.fn(async (lobby) => {
            const session = {
                id: nextSessionId++,
                lobbyId: lobby.id,
                status: 'IN_PROGRESS',
                currentRound: 0,
                roundCount: lobby.roundCount,
                guessSeconds: lobby.guessSeconds,
                sampleSeconds: lobby.sampleSeconds,
                answersRevealSeconds: lobby.answersRevealSeconds,
                solutionRevealSeconds: lobby.solutionRevealSeconds,
                sourceMode: lobby.sourceMode,
                selectionMode: lobby.selectionMode,
                themeMode: lobby.themeMode,
                startedAt: new Date()
            };
            sessions.set(session.id, session);
            lobbyService.__setLobbyStatus(lobby.code, 'IN_GAME');
            return { ...session };
        }),
        rollbackSessionStart: jest.fn(async (sessionId) => {
            const session = sessions.get(sessionId);
            if (!session) return;
            session.status = 'CANCELLED';
        })
    };
});

jest.mock('../../game/roundService', () => {
    let nextRoundId = 1_000;
    const sessionsById = new Map();
    const sessionIdByLobbyCode = new Map();
    const roundsBySessionId = new Map();
    const guessesByRoundId = new Map();

    function clone(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function activeStatuses() {
        return new Set(['GUESSING', 'ANSWERS_REVEAL', 'SOLUTION_REVEAL']);
    }

    function ensureSession(sessionId) {
        return sessionsById.get(sessionId) || null;
    }

    function ensureRoundStore(sessionId) {
        if (!roundsBySessionId.has(sessionId)) roundsBySessionId.set(sessionId, []);
        return roundsBySessionId.get(sessionId);
    }

    function makeRound(session, index) {
        return {
            id: nextRoundId++,
            sessionId: session.id,
            index,
            status: 'PENDING',
            animeId: 5_000 + index,
            animeTitle: `Anime ${index}`,
            themeType: 'OP',
            themeTitle: `Theme ${index}`,
            sampleStartSec: 0,
            sampleDurationSec: session.sampleSeconds || 10,
            solutionVideoUrl: `https://media.local/video-${index}.mp4`,
            solutionAudioUrl: `https://media.local/audio-${index}.mp3`,
            guessEndsAt: null,
            answersRevealEndsAt: null,
            solutionRevealEndsAt: null,
            updatedAt: new Date()
        };
    }

    function findRoundById(roundId) {
        for (const rounds of roundsBySessionId.values()) {
            const round = rounds.find((item) => item.id === roundId);
            if (round) return round;
        }
        return null;
    }

    function listGuesses(roundId) {
        const byUser = guessesByRoundId.get(roundId);
        if (!byUser) return [];
        return [...byUser.values()].sort((a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime());
    }

    return {
        __reset() {
            nextRoundId = 1_000;
            sessionsById.clear();
            sessionIdByLobbyCode.clear();
            roundsBySessionId.clear();
            guessesByRoundId.clear();
        },
        generateInitialRoundsForSession: jest.fn(async ({ session, lobby }) => {
            const sessionRecord = {
                ...session,
                status: 'IN_PROGRESS',
                lobby: {
                    code: String(lobby.code || '').toUpperCase(),
                    players: clone(lobby.players || [])
                }
            };
            sessionsById.set(session.id, sessionRecord);
            sessionIdByLobbyCode.set(sessionRecord.lobby.code, session.id);

            const store = ensureRoundStore(session.id);
            if (store.length > 0) return;
            for (let i = 1; i <= session.roundCount; i += 1) {
                store.push(makeRound(sessionRecord, i));
            }
        }),
        ensureRoundForIndex: jest.fn(async ({ session, index, lobbyPlayers }) => {
            let sessionRecord = ensureSession(session.id);
            if (!sessionRecord) {
                sessionRecord = {
                    ...session,
                    status: 'IN_PROGRESS',
                    lobby: { code: '', players: clone(lobbyPlayers || []) }
                };
                sessionsById.set(session.id, sessionRecord);
            } else {
                sessionRecord.lobby.players = clone(lobbyPlayers || []);
            }

            const store = ensureRoundStore(session.id);
            let round = store.find((item) => item.index === index);
            if (!round) {
                round = makeRound(sessionRecord, index);
                store.push(round);
            }
            return clone(round);
        }),
        getSessionForLobbyCode: jest.fn(async (lobbyCode) => {
            const sessionId = sessionIdByLobbyCode.get(String(lobbyCode || '').toUpperCase());
            if (!sessionId) return null;
            const session = sessionsById.get(sessionId);
            if (!session || session.status !== 'IN_PROGRESS') return null;
            return clone(session);
        }),
        getSessionById: jest.fn(async (sessionId) => {
            const session = sessionsById.get(sessionId);
            return session ? clone(session) : null;
        }),
        getCurrentActiveRound: jest.fn(async (sessionId) => {
            const store = roundsBySessionId.get(sessionId) || [];
            const active = store
                .filter((round) => activeStatuses().has(round.status))
                .sort((a, b) => b.index - a.index)[0];
            return active ? clone(active) : null;
        }),
        listRoundMediaForSession: jest.fn(async (sessionId) => {
            const store = (roundsBySessionId.get(sessionId) || []).slice().sort((a, b) => a.index - b.index);
            return store.map((round) => ({
                index: round.index,
                sampleStartSec: round.sampleStartSec,
                sampleDurationSec: round.sampleDurationSec,
                audioUrl: round.solutionAudioUrl || null,
                videoUrl: round.solutionVideoUrl || null
            }));
        }),
        listActiveRounds: jest.fn(async () => {
            const rows = [];
            for (const [sessionId, rounds] of roundsBySessionId) {
                const session = sessionsById.get(sessionId);
                if (!session || session.status !== 'IN_PROGRESS') continue;
                for (const round of rounds) {
                    if (!activeStatuses().has(round.status)) continue;
                    rows.push({
                        ...clone(round),
                        session: clone(session)
                    });
                }
            }
            return rows;
        }),
        updateSessionCurrentRound: jest.fn(async (sessionId, currentRound) => {
            const session = sessionsById.get(sessionId);
            if (!session) return;
            session.currentRound = currentRound;
        }),
        setRoundStatus: jest.fn(async (roundId, data) => {
            const round = findRoundById(roundId);
            if (!round) return null;
            Object.assign(round, data || {}, { updatedAt: new Date() });
            return clone(round);
        }),
        compareAndSetRoundStatus: jest.fn(async (roundId, expectedStatus, data) => {
            const round = findRoundById(roundId);
            if (!round) return false;
            if (round.status !== expectedStatus) return false;
            Object.assign(round, data || {}, { updatedAt: new Date() });
            return true;
        }),
        submitGuess: jest.fn(async ({ roundId, userId, guessText, guessAnimeId }) => {
            if (!guessesByRoundId.has(roundId)) guessesByRoundId.set(roundId, new Map());
            const map = guessesByRoundId.get(roundId);
            const row = map.get(userId) || {
                id: `${roundId}:${userId}`,
                roundId,
                userId,
                submittedAt: new Date()
            };
            row.guessText = guessText || null;
            row.guessAnimeId = Number.isInteger(guessAnimeId) ? guessAnimeId : null;
            row.isReady = false;
            row.submittedAt = new Date();
            map.set(userId, row);
            return clone(row);
        }),
        setPlayerReady: jest.fn(async ({ roundId, userId, isReady }) => {
            if (!guessesByRoundId.has(roundId)) guessesByRoundId.set(roundId, new Map());
            const map = guessesByRoundId.get(roundId);
            const row = map.get(userId) || {
                id: `${roundId}:${userId}`,
                roundId,
                userId,
                guessText: null,
                guessAnimeId: null,
                submittedAt: new Date()
            };
            row.isReady = Boolean(isReady);
            map.set(userId, row);
            return clone(row);
        }),
        evaluateRound: jest.fn(async (roundId) => {
            const round = findRoundById(roundId);
            const guesses = listGuesses(roundId);
            for (const guess of guesses) {
                const textMatch = String(guess.guessText || '').trim().toLowerCase() === String(round.animeTitle || '').trim().toLowerCase();
                guess.isCorrect = guess.guessAnimeId === round.animeId || textMatch;
            }
            if (guessesByRoundId.has(roundId)) {
                const map = guessesByRoundId.get(roundId);
                for (const guess of guesses) map.set(guess.userId, guess);
            }
            return {
                round: clone(round),
                answers: guesses.map((guess) => ({
                    userId: guess.userId,
                    guessText: guess.guessText,
                    guessAnimeId: guess.guessAnimeId,
                    isCorrect: guess.isCorrect
                }))
            };
        }),
        getScoresForSession: jest.fn(async ({ sessionId, lobbyPlayers }) => {
            const scores = new Map();
            const rounds = roundsBySessionId.get(sessionId) || [];
            for (const round of rounds) {
                const guesses = listGuesses(round.id);
                for (const guess of guesses) {
                    if (guess.isCorrect !== true) continue;
                    scores.set(guess.userId, (scores.get(guess.userId) || 0) + 1);
                }
            }
            const rows = (lobbyPlayers || []).map((player) => ({
                userId: player.userId,
                displayName: player.displayName,
                score: scores.get(player.userId) || 0
            }));
            rows.sort((a, b) => b.score - a.score || a.userId - b.userId);
            return rows;
        }),
        finishSession: jest.fn(async (sessionId) => {
            const session = sessionsById.get(sessionId);
            if (!session) return;
            session.status = 'FINISHED';
        }),
        getRoundContext: jest.fn(async (roundId) => {
            const round = findRoundById(roundId);
            if (!round) return null;
            const session = sessionsById.get(round.sessionId);
            return {
                ...clone(round),
                session: clone(session)
            };
        }),
        getGuessesForRound: jest.fn(async (roundId) => listGuesses(roundId).map(clone))
    };
});
jest.mock('../../game/mediaProxyService', () => ({
    buildMediaProxyUrl: jest.fn((url) => url),
    evictCacheForMediaUrls: jest.fn().mockResolvedValue({
        attempted: 0,
        removed: 0,
        skipped: 0
    }),
    deleteLobbyCache: jest.fn().mockResolvedValue({
        removed: true,
        lobbyCode: 'MATCH1'
    }),
    prewarmManifest: jest.fn(async (_manifest, options = {}) => {
        const roundLimit = Number.parseInt(options?.roundLimit, 10) || 3;
        if (roundLimit <= 1) {
            return {
                attempted: 1,
                warmed: 1,
                failed: 0,
                skipped: 0
            };
        }
        return {
            attempted: 2,
            warmed: 2,
            failed: 0,
            skipped: 0
        };
    })
}));

const lobbyService = require('../../game/lobbyService');
const sessionService = require('../../game/sessionService');
const roundService = require('../../game/roundService');
const { attachRealtime } = require('../socket');

function emitWithAck(socket, event, payload) {
    return new Promise((resolve) => {
        socket.emit(event, payload, resolve);
    });
}

function waitForEvent(socket, event, timeoutMs = 4_000) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            socket.off(event, onEvent);
            reject(new Error(`Timed out waiting for ${event}`));
        }, timeoutMs);

        const onEvent = (payload) => {
            clearTimeout(timer);
            resolve(payload);
        };

        socket.once(event, onEvent);
    });
}

describe('socket integration', () => {
    let server;
    let io;
    let baseUrl;
    let clients;

    beforeAll(() => {
        process.env.JWT_SECRET = 'test-jwt-secret';
        process.env.NODE_ENV = 'test';
    });

    beforeEach(async () => {
        clients = [];
        lobbyService.__reset();
        sessionService.__reset();
        roundService.__reset();

        const app = express();
        server = http.createServer(app);
        io = attachRealtime(server, { origin: true, mediaStatusBroadcast: false });

        await new Promise((resolve) => server.listen(0, resolve));
        const { port } = server.address();
        baseUrl = `http://127.0.0.1:${port}`;
    });

    afterEach(async () => {
        for (const client of clients) {
            if (client.connected) client.disconnect();
        }
        io.close();
        await new Promise((resolve) => server.close(resolve));
    });

    async function connectClient({ userId, username }) {
        const token = jwt.sign({ type: 'auth_access', userId, username }, process.env.JWT_SECRET);
        const client = Client(baseUrl, {
            transports: ['websocket'],
            reconnection: false,
            forceNew: true,
            auth: { token }
        });
        clients.push(client);
        await new Promise((resolve, reject) => {
            client.once('connect', resolve);
            client.once('connect_error', reject);
        });
        return client;
    }

    test('plays a full two-player match lifecycle end-to-end', async () => {
        lobbyService.__seedLobby({
            code: 'MATCH1',
            hostUserId: 1,
            players: [{ userId: 1, displayName: 'Host' }],
            roundCount: 1,
            guessSeconds: 0.2,
            answersRevealSeconds: 0.1,
            solutionRevealSeconds: 0.1
        });

        const host = await connectClient({ userId: 1, username: 'host' });
        const guest = await connectClient({ userId: 2, username: 'guest' });

        expect((await emitWithAck(host, 'lobby:join', { lobbyCode: 'MATCH1' })).ok).toBe(true);
        expect((await emitWithAck(guest, 'lobby:join', { lobbyCode: 'MATCH1' })).ok).toBe(true);
        expect((await emitWithAck(host, 'lobby:set_ready', { lobbyCode: 'MATCH1', ready: true })).ok).toBe(true);
        expect((await emitWithAck(guest, 'lobby:set_ready', { lobbyCode: 'MATCH1', ready: true })).ok).toBe(true);

        const gameStartedPromise = waitForEvent(host, 'game:started');
        const startedPromise = waitForEvent(host, 'round:started');
        const answersPromise = waitForEvent(host, 'round:answers_reveal');
        const solutionPromise = waitForEvent(host, 'round:solution');
        const finishedPromise = waitForEvent(host, 'game:finished', 5_000);

        const startAck = await emitWithAck(host, 'game:start', { lobbyCode: 'MATCH1' });
        expect(startAck.ok).toBe(true);

        const gameStarted = await gameStartedPromise;
        expect(Array.isArray(gameStarted.preloadManifest)).toBe(true);
        expect(gameStarted.preloadManifest.length).toBe(1);
        expect(gameStarted.preloadManifest[0]).toMatchObject({
            index: 1
        });

        const started = await startedPromise;
        expect(started.roundId).toBeTruthy();
        expect(started.sample.animeId).toBeTruthy();

        expect((await emitWithAck(host, 'round:submit_guess', {
            lobbyCode: 'MATCH1',
            roundId: started.roundId,
            guessAnimeId: started.sample.animeId
        })).ok).toBe(true);
        expect((await emitWithAck(guest, 'round:submit_guess', {
            lobbyCode: 'MATCH1',
            roundId: started.roundId,
            guessAnimeId: started.sample.animeId + 999
        })).ok).toBe(true);

        expect((await emitWithAck(host, 'round:set_ready', { lobbyCode: 'MATCH1', ready: true })).ok).toBe(true);
        expect((await emitWithAck(guest, 'round:set_ready', { lobbyCode: 'MATCH1', ready: true })).ok).toBe(true);

        const answers = await answersPromise;
        expect(answers.reason).toBe('all_ready');
        expect(answers.answers).toHaveLength(2);

        const solution = await solutionPromise;
        expect(solution.correctAnime.animeId).toBe(started.sample.animeId);

        const finished = await finishedPromise;
        expect(Array.isArray(finished.finalScores)).toBe(true);
        expect(finished.finalScores).toHaveLength(2);
        expect(finished.winner).toBeTruthy();
        expect(finished.winner.score).toBe(1);
    });

    test('enforces private invite token flow', async () => {
        lobbyService.__seedLobby({
            code: 'PRIVATE1',
            hostUserId: 1,
            isPrivate: true,
            players: [{ userId: 1, displayName: 'Host' }]
        });

        const guest = await connectClient({ userId: 2, username: 'guest' });

        const denied = await emitWithAck(guest, 'lobby:join', { lobbyCode: 'PRIVATE1' });
        expect(denied.ok).toBe(false);
        expect(denied.code).toBe('forbidden');

        const accepted = await emitWithAck(guest, 'lobby:join', {
            lobbyCode: 'PRIVATE1',
            inviteToken: 'INVITE-PRIVATE1'
        });
        expect(accepted.ok).toBe(true);
        expect(accepted.lobby.code).toBe('PRIVATE1');
        expect(accepted.lobby.playerCount).toBe(2);
    });

    test('kicks player from previous waiting lobby when joining a new lobby', async () => {
        lobbyService.__seedLobby({
            code: 'OLD1',
            hostUserId: 1,
            players: [
                { userId: 1, displayName: 'OldHost' },
                { userId: 2, displayName: 'Mover' }
            ]
        });
        lobbyService.__seedLobby({
            code: 'NEW1',
            hostUserId: 3,
            players: [{ userId: 3, displayName: 'NewHost' }]
        });

        const oldHost = await connectClient({ userId: 1, username: 'oldhost' });
        const mover = await connectClient({ userId: 2, username: 'mover' });
        const newHost = await connectClient({ userId: 3, username: 'newhost' });

        expect((await emitWithAck(oldHost, 'lobby:join', { lobbyCode: 'OLD1' })).ok).toBe(true);
        expect((await emitWithAck(mover, 'lobby:join', { lobbyCode: 'OLD1' })).ok).toBe(true);
        expect((await emitWithAck(newHost, 'lobby:join', { lobbyCode: 'NEW1' })).ok).toBe(true);

        const oldLobbyUpdated = new Promise((resolve) => {
            const handler = ({ lobby }) => {
                if (lobby?.code !== 'OLD1') return;
                if ((lobby.players || []).some((player) => player.userId === 2)) return;
                oldHost.off('lobby:state', handler);
                resolve(lobby);
            };
            oldHost.on('lobby:state', handler);
        });

        const joinNewAck = await emitWithAck(mover, 'lobby:join', { lobbyCode: 'NEW1' });
        expect(joinNewAck.ok).toBe(true);
        expect(joinNewAck.lobby.code).toBe('NEW1');

        const oldLobby = await oldLobbyUpdated;
        expect((oldLobby.players || []).map((player) => player.userId)).toEqual([1]);

        const syncOldAck = await emitWithAck(mover, 'round:sync', { lobbyCode: 'OLD1' });
        expect(syncOldAck.ok).toBe(false);
        expect(syncOldAck.code).toBe('bad_request');
    });

    test('allows joining a new lobby even when previous lobby is in game', async () => {
        lobbyService.__seedLobby({
            code: 'OLDG',
            hostUserId: 1,
            players: [
                { userId: 1, displayName: 'OldHost' },
                { userId: 2, displayName: 'Mover' }
            ]
        });
        lobbyService.__seedLobby({
            code: 'NEWG',
            hostUserId: 3,
            players: [{ userId: 3, displayName: 'NewHost' }]
        });

        const oldHost = await connectClient({ userId: 1, username: 'oldhost' });
        const mover = await connectClient({ userId: 2, username: 'mover' });
        const newHost = await connectClient({ userId: 3, username: 'newhost' });

        expect((await emitWithAck(oldHost, 'lobby:join', { lobbyCode: 'OLDG' })).ok).toBe(true);
        expect((await emitWithAck(mover, 'lobby:join', { lobbyCode: 'OLDG' })).ok).toBe(true);
        expect((await emitWithAck(newHost, 'lobby:join', { lobbyCode: 'NEWG' })).ok).toBe(true);
        lobbyService.__setLobbyStatus('OLDG', 'IN_GAME');

        const oldLobbyUpdated = new Promise((resolve) => {
            const handler = ({ lobby }) => {
                if (lobby?.code !== 'OLDG') return;
                if ((lobby.players || []).some((player) => player.userId === 2)) return;
                oldHost.off('lobby:state', handler);
                resolve(lobby);
            };
            oldHost.on('lobby:state', handler);
        });

        const joinNewAck = await emitWithAck(mover, 'lobby:join', { lobbyCode: 'NEWG' });
        expect(joinNewAck.ok).toBe(true);
        expect(joinNewAck.lobby.code).toBe('NEWG');

        const oldLobby = await oldLobbyUpdated;
        expect((oldLobby.players || []).map((player) => player.userId)).toEqual([1]);
    });

    test('restores round state after reconnect and round:sync', async () => {
        lobbyService.__seedLobby({
            code: 'RECON1',
            hostUserId: 1,
            players: [{ userId: 1, displayName: 'Host' }],
            roundCount: 1,
            guessSeconds: 1,
            answersRevealSeconds: 0.1,
            solutionRevealSeconds: 0.1
        });

        const host = await connectClient({ userId: 1, username: 'host' });
        expect((await emitWithAck(host, 'lobby:join', { lobbyCode: 'RECON1' })).ok).toBe(true);
        expect((await emitWithAck(host, 'lobby:set_ready', { lobbyCode: 'RECON1', ready: true })).ok).toBe(true);

        const startedPromise = waitForEvent(host, 'round:started');
        const startAck = await emitWithAck(host, 'game:start', { lobbyCode: 'RECON1' });
        expect(startAck.ok).toBe(true);
        const started = await startedPromise;

        host.disconnect();
        await new Promise((resolve) => setTimeout(resolve, 60));

        const reconnect = await connectClient({ userId: 1, username: 'host' });
        expect((await emitWithAck(reconnect, 'lobby:join', { lobbyCode: 'RECON1' })).ok).toBe(true);

        const syncAck = await emitWithAck(reconnect, 'round:sync', { lobbyCode: 'RECON1' });
        expect(syncAck.ok).toBe(true);
        expect(syncAck.state).toBeTruthy();
        expect(syncAck.state.round.roundId).toBe(started.roundId);
        expect(['GUESSING', 'ANSWERS_REVEAL', 'SOLUTION_REVEAL']).toContain(syncAck.state.phase);

        const finishedPromise = waitForEvent(reconnect, 'game:finished', 4_000);
        const readyAck = await emitWithAck(reconnect, 'round:set_ready', { lobbyCode: 'RECON1', ready: true });
        expect(readyAck.ok).toBe(true);
        await finishedPromise;
    });

    test('starts first round without waiting for preload ready ack', async () => {
        lobbyService.__seedLobby({
            code: 'PRELOAD1',
            hostUserId: 1,
            players: [
                { userId: 1, displayName: 'Host' },
                { userId: 2, displayName: 'Guest' }
            ],
            roundCount: 1,
            guessSeconds: 1,
            answersRevealSeconds: 0.1,
            solutionRevealSeconds: 0.1
        });

        const host = await connectClient({ userId: 1, username: 'host' });
        const guest = await connectClient({ userId: 2, username: 'guest' });
        expect((await emitWithAck(host, 'lobby:join', { lobbyCode: 'PRELOAD1' })).ok).toBe(true);
        expect((await emitWithAck(guest, 'lobby:join', { lobbyCode: 'PRELOAD1' })).ok).toBe(true);
        expect((await emitWithAck(host, 'lobby:set_ready', { lobbyCode: 'PRELOAD1', ready: true })).ok).toBe(true);
        expect((await emitWithAck(guest, 'lobby:set_ready', { lobbyCode: 'PRELOAD1', ready: true })).ok).toBe(true);

        const startedPromise = waitForEvent(host, 'round:started');
        expect((await emitWithAck(host, 'game:start', { lobbyCode: 'PRELOAD1' })).ok).toBe(true);

        const started = await startedPromise;
        expect(started.roundId).toBeTruthy();

        const syncAck = await emitWithAck(host, 'round:sync', { lobbyCode: 'PRELOAD1' });
        expect(syncAck.ok).toBe(true);
        expect(['GUESSING', 'ANSWERS_REVEAL', 'SOLUTION_REVEAL']).toContain(syncAck.state.phase);

        const preloadAck = await emitWithAck(host, 'game:preload_ready', { lobbyCode: 'PRELOAD1' });
        expect(preloadAck.ok).toBe(true);
        expect(preloadAck.started).toBe(true);
    });
});
