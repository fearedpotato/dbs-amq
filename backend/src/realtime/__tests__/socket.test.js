const http = require('http');
const express = require('express');
const jwt = require('jsonwebtoken');
const { io: Client } = require('socket.io-client');

jest.mock('../../game/lobbyService', () => ({
    joinLobby: jest.fn(),
    setPlayerConnection: jest.fn(),
    getLobbyByCode: jest.fn(),
    leaveLobby: jest.fn(),
    updateLobbyConfig: jest.fn()
}));

jest.mock('../../game/sessionService', () => ({
    startSessionFromLobby: jest.fn()
}));

jest.mock('../roundEngine', () => ({
    createRoundEngine: jest.fn()
}));

const lobbyService = require('../../game/lobbyService');
const sessionService = require('../../game/sessionService');
const { createRoundEngine } = require('../roundEngine');
const { attachRealtime } = require('../socket');

function buildLobby({ code = 'ABC123', hostId = 1, playerIds = [1, 2] } = {}) {
    return {
        id: 1,
        code,
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
        themeMode: 'MIXED'
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
        clients = [];
        const app = express();
        server = http.createServer(app);

        roundEngineMock = {
            startSession: jest.fn(),
            submitGuess: jest.fn(),
            setReady: jest.fn(),
            onPlayerDisconnected: jest.fn(),
            hasActiveSession: jest.fn()
        };
        createRoundEngine.mockReturnValue(roundEngineMock);

        io = attachRealtime(server, { origin: true });

        await new Promise((resolve) => {
            server.listen(0, resolve);
        });

        const { port } = server.address();
        baseUrl = `http://127.0.0.1:${port}`;
        jest.clearAllMocks();
    });

    afterEach(async () => {
        for (const client of clients) {
            if (client.connected) client.disconnect();
        }
        io.close();
        await new Promise((resolve) => server.close(resolve));
    });

    async function connectClient({ userId = 1, username = 'demo', token } = {}) {
        const authToken = token || jwt.sign({ userId, username }, process.env.JWT_SECRET);
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
});
