const http = require('http');
const express = require('express');
const jwt = require('jsonwebtoken');
const { io: Client } = require('socket.io-client');

jest.mock('../../game/lobbyService', () => ({
    enforceSingleLobbyMembership: jest.fn().mockResolvedValue({ removedLobbyCodes: [] }),
    joinLobby: jest.fn(),
    setJoinAbuseCooldown: jest.fn(),
    setPlayerConnection: jest.fn(),
    getLobbyByCode: jest.fn(),
    leaveLobby: jest.fn(),
    updateLobbyConfig: jest.fn(),
    kickPlayer: jest.fn(),
    promoteHost: jest.fn()
}));

jest.mock('../../game/sessionService', () => ({
    startSessionFromLobby: jest.fn(),
    rollbackSessionStart: jest.fn()
}));

jest.mock('../roundEngine', () => ({
    createRoundEngine: jest.fn()
}));
jest.mock('../../game/mediaProxyService', () => ({
    prewarmManifest: jest.fn().mockResolvedValue({
        attempted: 0,
        warmed: 0,
        failed: 0,
        skipped: 0
    })
}));

const lobbyService = require('../../game/lobbyService');
const sessionService = require('../../game/sessionService');
const mediaProxyService = require('../../game/mediaProxyService');
const { createRoundEngine } = require('../roundEngine');
const { attachRealtime } = require('../socket');
const rateLimiterStore = require('../../lib/rateLimiterStore');

function buildLobby({ code = 'ABC123', hostId = 1, playerIds = [1, 2] } = {}) {
    return {
        id: 1,
        code,
        status: 'WAITING',
        minPlayers: 1,
        maxPlayers: 8,
        playerCount: playerIds.length,
        host: { id: hostId, username: `user${hostId}`, nickname: `User${hostId}` },
        players: playerIds.map((id) => ({ userId: id })),
        roundCount: 10,
        guessSeconds: 20,
        sampleSeconds: 10,
        answersRevealSeconds: 3,
        solutionRevealSeconds: 8,
        sourceMode: 'HYBRID',
        selectionMode: 'STANDARD',
        themeMode: 'MIXED',
        animeScoreMin: 1,
        animeScoreMax: 10,
        playerScoreMin: 1,
        playerScoreMax: 10
    };
}

function emitWithAck(socket, event, payload) {
    return new Promise((resolve) => {
        socket.emit(event, payload, resolve);
    });
}

describe('socket gateway', () => {
    let server;
    let io;
    let baseUrl;
    let clients;
    let roundEngineMock;

    beforeAll(() => {
        process.env.JWT_SECRET = 'test-jwt-secret';
    });

    beforeEach(async () => {
        delete process.env.MEDIA_PREWARM_BLOCKING_START;
        process.env.LOBBY_DISCONNECT_GRACE_MS = '5';
        rateLimiterStore.__resetRateLimiterStore();
        clients = [];
        const app = express();
        server = http.createServer(app);

        roundEngineMock = {
            startSession: jest.fn(),
            beginSession: jest.fn(),
            submitGuess: jest.fn(),
            setReady: jest.fn(),
            syncLobbyPlayers: jest.fn(),
            onPlayerDisconnected: jest.fn(),
            hasActiveSession: jest.fn(),
            forceStopLobby: jest.fn().mockResolvedValue(false),
            getSyncState: jest.fn(),
            getSessionMediaManifest: jest.fn().mockResolvedValue([])
        };
        createRoundEngine.mockReturnValue(roundEngineMock);

        io = attachRealtime(server, { origin: true, mediaStatusBroadcast: false });

        await new Promise((resolve) => {
            server.listen(0, resolve);
        });

        const { port } = server.address();
        baseUrl = `http://127.0.0.1:${port}`;
        jest.clearAllMocks();
    });

    afterEach(async () => {
        delete process.env.MEDIA_PREWARM_BLOCKING_START;
        delete process.env.LOBBY_DISCONNECT_GRACE_MS;
        delete process.env.LOBBY_JOIN_BURST_WINDOW_MS;
        delete process.env.LOBBY_JOIN_BURST_MAX;
        for (const client of clients) {
            if (client.connected) client.disconnect();
        }
        io.close();
        await new Promise((resolve) => server.close(resolve));
    });

    async function connectClient({ userId = 1, username = 'demo', token } = {}) {
        const authToken = token || jwt.sign({ type: 'auth_access', userId, username }, process.env.JWT_SECRET);
        const client = Client(baseUrl, {
            transports: ['websocket'],
            reconnection: false,
            forceNew: true,
            auth: authToken ? { token: authToken } : {}
        });
        clients.push(client);

        await new Promise((resolve, reject) => {
            client.once('connect', resolve);
            client.once('connect_error', reject);
        });

        return client;
    }

    test('rejects unauthenticated connections', async () => {
        const client = Client(baseUrl, {
            transports: ['websocket'],
            reconnection: false,
            forceNew: true
        });
        clients.push(client);

        const err = await new Promise((resolve) => {
            client.once('connect_error', resolve);
        });

        expect(err.message).toBe('Unauthorized');
    });

    test('joins lobby and broadcasts lobby state', async () => {
        const lobby = buildLobby({ code: 'ABC123', playerIds: [1, 2] });
        lobbyService.joinLobby.mockResolvedValue(lobby);
        lobbyService.setPlayerConnection.mockResolvedValue(lobby);
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);

        const client = await connectClient({ userId: 1, username: 'u1' });
        const statePromise = new Promise((resolve) => client.once('lobby:state', resolve));
        const ack = await emitWithAck(client, 'lobby:join', { lobbyCode: 'ABC123' });

        expect(ack.ok).toBe(true);
        const state = await statePromise;
        expect(state.lobby.code).toBe('ABC123');
    });

    test('prevents non-host from starting game', async () => {
        const lobby = buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1, 2] });
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);

        const client = await connectClient({ userId: 2, username: 'u2' });
        const ack = await emitWithAck(client, 'game:start', { lobbyCode: 'ABC123' });

        expect(ack.ok).toBe(false);
        expect(ack.code).toBe('forbidden');
    });

    test('requires all waiting players to be ready before host can start game', async () => {
        const lobby = buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1, 2] });
        lobbyService.joinLobby.mockResolvedValue(lobby);
        lobbyService.setPlayerConnection.mockResolvedValue(lobby);
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);

        const c1 = await connectClient({ userId: 1, username: 'u1' });
        const c2 = await connectClient({ userId: 2, username: 'u2' });
        await emitWithAck(c1, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(c2, 'lobby:join', { lobbyCode: 'ABC123' });

        const readyAck = await emitWithAck(c1, 'lobby:set_ready', { lobbyCode: 'ABC123', ready: true });
        expect(readyAck.ok).toBe(true);
        expect(readyAck.allReady).toBe(false);

        const startAck = await emitWithAck(c1, 'game:start', { lobbyCode: 'ABC123' });
        expect(startAck.ok).toBe(false);
        expect(startAck.code).toBe('bad_request');
        expect(startAck.error).toBe('All players must be ready before the host can start the game');
        expect(sessionService.startSessionFromLobby).not.toHaveBeenCalled();
    });

    test('resets waiting ready state after host updates settings', async () => {
        const lobby = buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1, 2] });
        lobbyService.joinLobby.mockResolvedValue(lobby);
        lobbyService.setPlayerConnection.mockResolvedValue(lobby);
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        lobbyService.updateLobbyConfig.mockResolvedValue(lobby);

        const c1 = await connectClient({ userId: 1, username: 'u1' });
        const c2 = await connectClient({ userId: 2, username: 'u2' });
        await emitWithAck(c1, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(c2, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(c1, 'lobby:set_ready', { lobbyCode: 'ABC123', ready: true });
        await emitWithAck(c2, 'lobby:set_ready', { lobbyCode: 'ABC123', ready: true });

        const readyResetPromise = new Promise((resolve) => c1.once('lobby:ready_state', resolve));
        const ack = await emitWithAck(c1, 'lobby:update_settings', { lobbyCode: 'ABC123', settings: { roundCount: 12 } });
        expect(ack.ok).toBe(true);
        const readyState = await readyResetPromise;
        expect(readyState.readyUserIds).toEqual([]);
        expect(readyState.allReady).toBe(false);
    });

    test('updates and broadcasts score filter settings', async () => {
        const lobby = buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1, 2] });
        const updatedLobby = {
            ...lobby,
            animeScoreMin: 4,
            animeScoreMax: 8,
            playerScoreMin: 6,
            playerScoreMax: 9
        };
        lobbyService.joinLobby.mockResolvedValue(lobby);
        lobbyService.setPlayerConnection.mockResolvedValue(lobby);
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        lobbyService.updateLobbyConfig.mockResolvedValue(updatedLobby);

        const host = await connectClient({ userId: 1, username: 'u1' });
        const guest = await connectClient({ userId: 2, username: 'u2' });
        await emitWithAck(host, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(guest, 'lobby:join', { lobbyCode: 'ABC123' });

        const guestStatePromise = new Promise((resolve) => guest.once('lobby:state', resolve));
        const ack = await emitWithAck(host, 'lobby:update_settings', {
            lobbyCode: 'ABC123',
            settings: {
                animeScoreMin: 4,
                animeScoreMax: 8,
                playerScoreMin: 6,
                playerScoreMax: 9
            }
        });

        expect(ack.ok).toBe(true);
        expect(lobbyService.updateLobbyConfig).toHaveBeenCalledWith('ABC123', 1, expect.objectContaining({
            animeScoreMin: 4,
            animeScoreMax: 8,
            playerScoreMin: 6,
            playerScoreMax: 9
        }));
        const lobbyState = await guestStatePromise;
        expect(lobbyState.lobby.animeScoreMin).toBe(4);
        expect(lobbyState.lobby.animeScoreMax).toBe(8);
        expect(lobbyState.lobby.playerScoreMin).toBe(6);
        expect(lobbyState.lobby.playerScoreMax).toBe(9);
    });

    test('tracks ready state and reports allReady', async () => {
        const lobby = buildLobby({ code: 'ABC123', playerIds: [1, 2] });
        lobbyService.joinLobby.mockResolvedValue(lobby);
        lobbyService.setPlayerConnection.mockResolvedValue(lobby);
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        roundEngineMock.setReady
            .mockResolvedValueOnce({ roundId: 11, readyUserIds: [1], allReady: false })
            .mockResolvedValueOnce({ roundId: 11, readyUserIds: [1, 2], allReady: true });

        const c1 = await connectClient({ userId: 1, username: 'u1' });
        const c2 = await connectClient({ userId: 2, username: 'u2' });

        await emitWithAck(c1, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(c2, 'lobby:join', { lobbyCode: 'ABC123' });

        const ack1 = await emitWithAck(c1, 'round:set_ready', { lobbyCode: 'ABC123', ready: true });
        expect(ack1.ok).toBe(true);
        expect(ack1.allReady).toBe(false);

        const ack2 = await emitWithAck(c2, 'round:set_ready', { lobbyCode: 'ABC123', ready: true });
        expect(ack2.ok).toBe(true);
        expect(ack2.allReady).toBe(true);
    });

    test('submits round guess through round engine', async () => {
        const lobby = buildLobby({ code: 'ABC123', playerIds: [1] });
        lobbyService.joinLobby.mockResolvedValue(lobby);
        lobbyService.setPlayerConnection.mockResolvedValue(lobby);
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        roundEngineMock.submitGuess.mockResolvedValue({ roundId: 77 });

        const client = await connectClient({ userId: 1, username: 'u1' });
        await emitWithAck(client, 'lobby:join', { lobbyCode: 'ABC123' });

        const ack = await emitWithAck(client, 'round:submit_guess', {
            lobbyCode: 'ABC123',
            roundId: 77,
            guessText: 'Naruto'
        });

        expect(ack.ok).toBe(true);
        expect(ack.roundId).toBe(77);
        expect(roundEngineMock.submitGuess).toHaveBeenCalled();
    });

    test('returns round sync state for joined players', async () => {
        const lobby = buildLobby({ code: 'ABC123', playerIds: [1] });
        lobbyService.joinLobby.mockResolvedValue(lobby);
        lobbyService.setPlayerConnection.mockResolvedValue(lobby);
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        roundEngineMock.getSyncState.mockResolvedValue({
            lobbyCode: 'ABC123',
            phase: 'GUESSING',
            round: { roundId: 12, index: 2, totalRounds: 10 },
            readyUserIds: [1],
            allReady: true
        });

        const client = await connectClient({ userId: 1, username: 'u1' });
        await emitWithAck(client, 'lobby:join', { lobbyCode: 'ABC123' });

        const ack = await emitWithAck(client, 'round:sync', { lobbyCode: 'ABC123' });
        expect(ack.ok).toBe(true);
        expect(ack.state.phase).toBe('GUESSING');
        expect(roundEngineMock.getSyncState).toHaveBeenCalledWith('ABC123');
    });

    test('marks player disconnected on socket disconnect', async () => {
        const lobby = buildLobby({ code: 'ABC123', playerIds: [1] });
        lobbyService.joinLobby.mockResolvedValue(lobby);
        lobbyService.setPlayerConnection.mockResolvedValue(lobby);
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);

        const client = await connectClient({ userId: 1, username: 'u1' });
        await emitWithAck(client, 'lobby:join', { lobbyCode: 'ABC123' });

        client.disconnect();
        await new Promise((resolve) => setTimeout(resolve, 30));

        expect(lobbyService.setPlayerConnection).toHaveBeenCalledWith('ABC123', 1, false);
    });

    test('cancels disconnect cleanup when user quickly rejoins after refresh', async () => {
        process.env.LOBBY_DISCONNECT_GRACE_MS = '100';
        const lobby = buildLobby({ code: 'ABC123', playerIds: [1] });
        lobbyService.joinLobby.mockResolvedValue(lobby);
        lobbyService.setPlayerConnection.mockResolvedValue(lobby);
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);

        const first = await connectClient({ userId: 1, username: 'u1' });
        await emitWithAck(first, 'lobby:join', { lobbyCode: 'ABC123' });
        first.disconnect();

        await new Promise((resolve) => setTimeout(resolve, 20));
        const second = await connectClient({ userId: 1, username: 'u1' });
        await emitWithAck(second, 'lobby:join', { lobbyCode: 'ABC123' });
        await new Promise((resolve) => setTimeout(resolve, 140));

        const disconnectCalls = lobbyService.setPlayerConnection.mock.calls
            .filter((call) => call[0] === 'ABC123' && call[1] === 1 && call[2] === false);
        expect(disconnectCalls).toHaveLength(0);
    });

    test('rate limits repeated lobby joins for same user and lobby', async () => {
        process.env.LOBBY_JOIN_BURST_WINDOW_MS = '5000';
        process.env.LOBBY_JOIN_BURST_MAX = '3';

        const lobby = buildLobby({ code: 'ABC123', playerIds: [1, 2] });
        const lobbyAfterEviction = buildLobby({ code: 'ABC123', playerIds: [2], hostId: 2 });
        lobbyService.joinLobby.mockResolvedValue(lobby);
        lobbyService.setPlayerConnection.mockResolvedValue(lobby);
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        lobbyService.leaveLobby.mockResolvedValue(lobbyAfterEviction);

        const client = await connectClient({ userId: 1, username: 'u1' });
        expect((await emitWithAck(client, 'lobby:join', { lobbyCode: 'ABC123' })).ok).toBe(true);
        expect((await emitWithAck(client, 'lobby:join', { lobbyCode: 'ABC123' })).ok).toBe(true);
        expect((await emitWithAck(client, 'lobby:join', { lobbyCode: 'ABC123' })).ok).toBe(true);

        const denied = await emitWithAck(client, 'lobby:join', { lobbyCode: 'ABC123' });
        expect(denied.ok).toBe(false);
        expect(denied.code).toBe('rate_limited');
        expect(String(denied.error || '').toLowerCase()).toContain('reconnect');
        expect(lobbyService.setJoinAbuseCooldown).toHaveBeenCalledWith('ABC123', 1, expect.any(Number));
        expect(lobbyService.leaveLobby).toHaveBeenCalledWith('ABC123', 1, { force: true });
    });

    test('terminates lobby when last player leaves', async () => {
        const activeLobby = buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1] });
        const closedLobby = {
            ...buildLobby({ code: 'ABC123', hostId: 1, playerIds: [] }),
            status: 'CLOSED',
            playerCount: 0,
            players: []
        };
        lobbyService.joinLobby.mockResolvedValue(activeLobby);
        lobbyService.setPlayerConnection.mockResolvedValue(activeLobby);
        lobbyService.getLobbyByCode.mockResolvedValue(activeLobby);
        lobbyService.leaveLobby.mockResolvedValue(closedLobby);

        const client = await connectClient({ userId: 1, username: 'u1' });
        await emitWithAck(client, 'lobby:join', { lobbyCode: 'ABC123' });

        const ack = await emitWithAck(client, 'lobby:leave', { lobbyCode: 'ABC123' });
        expect(ack.ok).toBe(true);
        expect(ack.terminated).toBe(true);
        expect(ack.lobby).toBeNull();
        expect(roundEngineMock.forceStopLobby).toHaveBeenCalledWith('ABC123', 'all_players_left');
    });

    test('triggers media prewarm when game starts', async () => {
        const lobby = buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1] });
        const session = { id: 44, roundCount: 1 };
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        sessionService.startSessionFromLobby.mockResolvedValue(session);
        roundEngineMock.startSession.mockResolvedValue();
        roundEngineMock.getSessionMediaManifest.mockResolvedValue([
            { index: 1, audioUrl: '/api/game/media/proxy?u=a&exp=1&sig=1', videoUrl: null }
        ]);

        const host = await connectClient({ userId: 1, username: 'u1' });
        await emitWithAck(host, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(host, 'lobby:set_ready', { lobbyCode: 'ABC123', ready: true });

        const ack = await emitWithAck(host, 'game:start', { lobbyCode: 'ABC123' });
        expect(ack.ok).toBe(true);
        expect(mediaProxyService.prewarmManifest).toHaveBeenCalledWith(
            expect.any(Array),
            expect.objectContaining({ roundLimit: 1, maxConcurrent: 4, audioOnly: true })
        );
        expect(mediaProxyService.prewarmManifest).toHaveBeenCalledWith(
            expect.any(Array),
            expect.objectContaining({ roundLimit: 5, maxConcurrent: 4, audioOnly: true })
        );
    });

    test('does not fail game start when first media warmup cannot cache any media in non-blocking mode', async () => {
        process.env.MEDIA_PREWARM_BLOCKING_START = 'false';

        const lobby = buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1] });
        const session = { id: 51, roundCount: 1 };
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        sessionService.startSessionFromLobby.mockResolvedValue(session);
        roundEngineMock.startSession.mockResolvedValue();
        roundEngineMock.getSessionMediaManifest.mockResolvedValue([
            { index: 1, audioUrl: 'https://media.local/audio-1.mp3', videoUrl: null }
        ]);
        mediaProxyService.prewarmManifest.mockResolvedValueOnce({
            attempted: 1,
            warmed: 0,
            failed: 1,
            skipped: 0
        });

        const host = await connectClient({ userId: 1, username: 'u1' });
        await emitWithAck(host, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(host, 'lobby:set_ready', { lobbyCode: 'ABC123', ready: true });

        const ack = await emitWithAck(host, 'game:start', { lobbyCode: 'ABC123' });
        expect(ack.ok).toBe(true);
        expect(sessionService.rollbackSessionStart).not.toHaveBeenCalled();
    });

    test('fails game start when first media warmup cannot cache any media in blocking mode', async () => {
        process.env.MEDIA_PREWARM_BLOCKING_START = 'true';

        const lobby = buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1] });
        const session = { id: 52, roundCount: 1 };
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        sessionService.startSessionFromLobby.mockResolvedValue(session);
        roundEngineMock.startSession.mockResolvedValue();
        roundEngineMock.getSessionMediaManifest.mockResolvedValue([
            { index: 1, audioUrl: 'https://media.local/audio-1.mp3', videoUrl: null }
        ]);
        mediaProxyService.prewarmManifest.mockResolvedValueOnce({
            attempted: 1,
            warmed: 0,
            failed: 1,
            skipped: 0
        });

        const host = await connectClient({ userId: 1, username: 'u1' });
        await emitWithAck(host, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(host, 'lobby:set_ready', { lobbyCode: 'ABC123', ready: true });

        const ack = await emitWithAck(host, 'game:start', { lobbyCode: 'ABC123' });
        expect(ack.ok).toBe(false);
        expect(ack.code).toBe('game_start_failed');
        expect(ack.error).toBe('Could not cache first round media');
        expect(sessionService.rollbackSessionStart).toHaveBeenCalledWith(52);
    });

    test('rolls back game start when first round cannot begin after game:started', async () => {
        const lobby = buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1] });
        const session = { id: 73, roundCount: 1 };
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        sessionService.startSessionFromLobby.mockResolvedValue(session);
        roundEngineMock.startSession.mockResolvedValue();
        roundEngineMock.getSessionMediaManifest.mockResolvedValue([]);
        roundEngineMock.beginSession.mockRejectedValue(new Error('begin failed'));

        const host = await connectClient({ userId: 1, username: 'u1' });
        await emitWithAck(host, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(host, 'lobby:set_ready', { lobbyCode: 'ABC123', ready: true });

        const cancelledPromise = new Promise((resolve) => host.once('game:start_cancelled', resolve));
        const ack = await emitWithAck(host, 'game:start', { lobbyCode: 'ABC123' });

        expect(ack.ok).toBe(false);
        expect(ack.code).toBe('game_start_failed');
        expect(ack.error).toBe('begin failed');
        await cancelledPromise;
        expect(sessionService.rollbackSessionStart).toHaveBeenCalledWith(73);
        expect(roundEngineMock.forceStopLobby).toHaveBeenCalledWith('ABC123', 'start_failed');
    });

    test('broadcasts game:starting before game:start completes', async () => {
        const lobby = buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1, 2] });
        const session = { id: 61, roundCount: 1 };
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        sessionService.startSessionFromLobby.mockResolvedValue(session);
        roundEngineMock.startSession.mockResolvedValue();
        roundEngineMock.getSessionMediaManifest.mockResolvedValue([]);

        let resolvePrewarm;
        mediaProxyService.prewarmManifest.mockImplementationOnce(() => new Promise((resolve) => {
            resolvePrewarm = resolve;
        }));

        const host = await connectClient({ userId: 1, username: 'u1' });
        const guest = await connectClient({ userId: 2, username: 'u2' });
        await emitWithAck(host, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(guest, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(host, 'lobby:set_ready', { lobbyCode: 'ABC123', ready: true });
        await emitWithAck(guest, 'lobby:set_ready', { lobbyCode: 'ABC123', ready: true });

        const startingPromise = new Promise((resolve) => guest.once('game:starting', resolve));
        const ackPromise = emitWithAck(host, 'game:start', { lobbyCode: 'ABC123' });

        const starting = await startingPromise;
        expect(starting).toMatchObject({
            lobbyCode: 'ABC123',
            requestedByUserId: 1
        });

        resolvePrewarm({
            attempted: 0,
            warmed: 0,
            failed: 0,
            skipped: 0
        });
        const ack = await ackPromise;
        expect(ack.ok).toBe(true);
    });

    test('kicked users receive notification and cannot immediately rejoin', async () => {
        const lobby = buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1, 2] });
        lobbyService.joinLobby
            .mockResolvedValueOnce(lobby)
            .mockResolvedValueOnce(lobby)
            .mockRejectedValueOnce(Object.assign(new Error('You were kicked from this lobby. Try again in 120s'), { status: 403 }));
        lobbyService.setPlayerConnection.mockResolvedValue(lobby);
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        lobbyService.kickPlayer.mockResolvedValue({
            lobby: buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1] }),
            kickedUserId: 2,
            cooldownUntil: Date.now() + 120_000
        });

        const host = await connectClient({ userId: 1, username: 'u1' });
        const guest = await connectClient({ userId: 2, username: 'u2' });
        await emitWithAck(host, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(guest, 'lobby:join', { lobbyCode: 'ABC123' });

        const kickedPromise = new Promise((resolve) => guest.once('lobby:kicked', resolve));
        const kickAck = await emitWithAck(host, 'lobby:kick', { lobbyCode: 'ABC123', userId: 2 });
        expect(kickAck.ok).toBe(true);
        const kickedEvent = await kickedPromise;
        expect(kickedEvent.kickedUserId).toBe(2);

        const rejoinAck = await emitWithAck(guest, 'lobby:join', { lobbyCode: 'ABC123' });
        expect(rejoinAck.ok).toBe(false);
        expect(rejoinAck.code).toBe('forbidden');
        expect(rejoinAck.error).toContain('kicked from this lobby');
    });

    test('host can promote another player to host', async () => {
        const lobby = buildLobby({ code: 'ABC123', hostId: 1, playerIds: [1, 2] });
        const promotedLobby = buildLobby({ code: 'ABC123', hostId: 2, playerIds: [1, 2] });
        lobbyService.joinLobby.mockResolvedValue(lobby);
        lobbyService.setPlayerConnection.mockResolvedValue(lobby);
        lobbyService.getLobbyByCode.mockResolvedValue(lobby);
        lobbyService.promoteHost.mockResolvedValue({
            lobby: promotedLobby,
            promotedUserId: 2
        });

        const host = await connectClient({ userId: 1, username: 'u1' });
        const guest = await connectClient({ userId: 2, username: 'u2' });
        await emitWithAck(host, 'lobby:join', { lobbyCode: 'ABC123' });
        await emitWithAck(guest, 'lobby:join', { lobbyCode: 'ABC123' });

        const statePromise = new Promise((resolve) => guest.once('lobby:state', resolve));
        const ack = await emitWithAck(host, 'lobby:promote', { lobbyCode: 'ABC123', userId: 2 });
        expect(ack.ok).toBe(true);
        expect(ack.promotedUserId).toBe(2);
        const nextState = await statePromise;
        expect(nextState.lobby.host.id).toBe(2);
    });
});
