const express = require('express');
const request = require('supertest');
const jwt = require('jsonwebtoken');

jest.mock('../../lib/prisma', () => ({
    user: {
        findUnique: jest.fn()
    },
    lobby: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn()
    },
    lobbyPlayer: {
        create: jest.fn()
    }
}));

const prisma = require('../../lib/prisma');
const gameRoutes = require('../game');

function createApp() {
    const app = express();
    app.use(express.json());
    app.use('/api/game', gameRoutes);
    return app;
}

function authHeader(userId = 1, username = 'demo') {
    const token = jwt.sign({ userId, username }, process.env.JWT_SECRET);
    return { Authorization: `Bearer ${token}` };
}

function buildLobby({
    id = 1,
    code = 'ABC123',
    hostId = 1,
    selectionMode = 'STANDARD',
    maxPlayers = 8,
    minPlayers = 1,
    playerIds = [1]
} = {}) {
    return {
        id,
        code,
        name: 'Test Lobby',
        status: 'WAITING',
        isPrivate: false,
        minPlayers,
        maxPlayers,
        roundCount: 10,
        guessSeconds: 20,
        sampleSeconds: 10,
        answersRevealSeconds: 3,
        solutionRevealSeconds: 8,
        sourceMode: 'HYBRID',
        selectionMode,
        themeMode: 'MIXED',
        createdAt: new Date(),
        updatedAt: new Date(),
        host: { id: hostId, username: 'host', nickname: 'Host' },
        players: playerIds.map((pid, idx) => ({
            id: idx + 1,
            lobbyId: id,
            userId: pid,
            displayName: `Player${pid}`,
            isConnected: true,
            joinedAt: new Date()
        }))
    };
}

describe('game routes', () => {
    beforeAll(() => {
        process.env.JWT_SECRET = 'test-jwt-secret';
        process.env.BASE_URL = 'http://localhost:3000';
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('POST /api/game/lobbies requires auth', async () => {
        const res = await request(createApp()).post('/api/game/lobbies').send({});
        expect(res.status).toBe(401);
        expect(res.body.error).toBe('Access denied, no token provided');
    });

    test('POST /api/game/lobbies creates a lobby', async () => {
        prisma.user.findUnique.mockResolvedValue({
            id: 1,
            username: 'demo',
            nickname: 'Demo'
        });
        prisma.lobby.findUnique.mockResolvedValueOnce(null);
        prisma.lobby.create.mockResolvedValue(buildLobby({ code: 'A1B2C3' }));

        const res = await request(createApp())
            .post('/api/game/lobbies')
            .set(authHeader())
            .send({
                name: 'My Lobby',
                sourceMode: 'HYBRID',
                selectionMode: 'STANDARD',
                themeMode: 'MIXED'
            });

        expect(res.status).toBe(201);
        expect(res.body.lobby.code).toBeTruthy();
        expect(res.body.lobby.playerCount).toBe(1);
    });

    test('POST /api/game/lobbies rejects balanced mode for single-player-only lobby', async () => {
        prisma.user.findUnique.mockResolvedValue({
            id: 1,
            username: 'demo',
            nickname: 'Demo'
        });

        const res = await request(createApp())
            .post('/api/game/lobbies')
            .set(authHeader())
            .send({
                maxPlayers: 1,
                selectionMode: 'BALANCED_STRICT'
            });

        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Balanced selection modes are not allowed for single-player only lobbies');
    });

    test('POST /api/game/lobbies/:code/join joins existing lobby', async () => {
        prisma.user.findUnique.mockResolvedValue({
            id: 2,
            username: 'guest',
            nickname: 'Guest'
        });
        prisma.lobby.findUnique
            .mockResolvedValueOnce(buildLobby({ code: 'ABC123', playerIds: [1] }))
            .mockResolvedValueOnce(buildLobby({ code: 'ABC123', playerIds: [1, 2] }));
        prisma.lobbyPlayer.create.mockResolvedValue({
            id: 2,
            lobbyId: 1,
            userId: 2,
            displayName: 'Guest',
            isConnected: true
        });

        const res = await request(createApp())
            .post('/api/game/lobbies/ABC123/join')
            .set(authHeader(2, 'guest'))
            .send({});

        expect(res.status).toBe(200);
        expect(res.body.lobby.playerCount).toBe(2);
    });

    test('GET /api/game/lobbies/:code returns lobby snapshot', async () => {
        prisma.lobby.findUnique.mockResolvedValue(buildLobby({ code: 'ABC123', playerIds: [1, 2] }));

        const res = await request(createApp())
            .get('/api/game/lobbies/ABC123')
            .set(authHeader());

        expect(res.status).toBe(200);
        expect(res.body.lobby.code).toBe('ABC123');
        expect(Array.isArray(res.body.lobby.players)).toBe(true);
    });

    test('GET /api/game/lobbies returns lobby list', async () => {
        prisma.lobby.findMany.mockResolvedValue([
            buildLobby({ code: 'AAA111', playerIds: [1] }),
            buildLobby({ code: 'BBB222', playerIds: [2, 3] })
        ]);

        const res = await request(createApp())
            .get('/api/game/lobbies')
            .set(authHeader());

        expect(res.status).toBe(200);
        expect(res.body.pagination.count).toBe(2);
        expect(res.body.lobbies[0].code).toBe('AAA111');
    });

    test('GET /api/game/lobbies/:code/invite returns invite URL', async () => {
        prisma.lobby.findUnique.mockResolvedValue(buildLobby({ code: 'ZZZ999' }));

        const res = await request(createApp())
            .get('/api/game/lobbies/ZZZ999/invite')
            .set(authHeader());

        expect(res.status).toBe(200);
        expect(res.body.lobbyCode).toBe('ZZZ999');
        expect(res.body.inviteUrl).toContain('/game?lobby=ZZZ999');
    });

    test('POST /api/game/search validates minimum query length', async () => {
        const res = await request(createApp())
            .post('/api/game/search')
            .set(authHeader())
            .send({ query: 'a' });

        expect(res.status).toBe(400);
        expect(res.body.error).toBe('query must have at least 2 characters');
    });
});
