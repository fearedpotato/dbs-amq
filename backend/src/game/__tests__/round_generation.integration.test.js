jest.mock('../../lib/prisma', () => ({
    user: { findMany: jest.fn() },
    gameRound: {
        count: jest.fn(),
        createMany: jest.fn()
    }
}));

jest.mock('../../lib/tokenCipher', () => ({
    decryptToken: jest.fn((v) => v)
}));

jest.mock('axios', () => ({
    get: jest.fn()
}));

jest.mock('../mediaService', () => ({
    resolveRoundMedia: jest.fn(async ({ animeId, animeTitle, roundIndex }) => ({
        animeId: Number(animeId),
        animeTitle: String(animeTitle || `Anime ${animeId}`),
        themeType: 'OP',
        themeTitle: `Theme ${roundIndex}`,
        sampleStartSec: 0,
        sampleDurationSec: 10,
        solutionVideoUrl: `https://media.local/video-${animeId}.mp4`,
        solutionAudioUrl: `https://media.local/audio-${animeId}.mp3`
    }))
}));

const prisma = require('../../lib/prisma');
const axios = require('axios');
const { buildRoundSeedPlan, __clearMalWatchedCache } = require('../malSelectionService');
const roundService = require('../roundService');

function malListResponse(items) {
    return {
        data: {
            data: items.map((item) => ({
                node: { id: String(item.id), title: item.title },
                list_status: { status: item.status || 'completed' }
            })),
            paging: {}
        }
    };
}

function baseLobby(playerIds = [1, 2]) {
    return {
        players: playerIds.map((userId, idx) => ({ userId, displayName: `User${userId}`, joinedAt: new Date(2024, 0, idx + 1) }))
    };
}

function baseSession(overrides = {}) {
    return {
        id: 99,
        roundCount: 4,
        sourceMode: 'HYBRID',
        selectionMode: 'STANDARD',
        sampleSeconds: 10,
        guessSeconds: 5,
        answersRevealSeconds: 1,
        solutionRevealSeconds: 1,
        ...overrides
    };
}

describe('round generation integration (mal selection modes)', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        __clearMalWatchedCache();
    });

    test('STANDARD + HYBRID: generates expected number of rounds and mixes popular seeds', async () => {
        prisma.gameRound.count.mockResolvedValue(0);
        const created = [];
        prisma.gameRound.createMany.mockImplementation(async ({ data }) => {
            created.push(...data);
            return { count: data.length };
        });

        // Two users both linked to MAL with small pools
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' },
            { id: 2, malAccessToken: 'token-2' }
        ]);

        axios.get
            .mockResolvedValueOnce(malListResponse([{ id: 100, title: 'A1' }, { id: 101, title: 'A2' }]))
            .mockResolvedValueOnce(malListResponse([{ id: 101, title: 'A2' }, { id: 102, title: 'B1' }]));

        const session = baseSession({ roundCount: 5, sourceMode: 'HYBRID', selectionMode: 'STANDARD' });
        const lobby = baseLobby([1, 2]);

        await roundService.generateInitialRoundsForSession({ session, lobby });

        expect(created).toHaveLength(5);
        const animeIds = created.map((r) => r.animeId);
        expect(new Set(animeIds).size).toBe(5);
        // Some sourcePlayerId should be null if popular fill happened
        expect(created.some((r) => r.sourcePlayerId === null)).toBe(true);
    });

    test('BALANCED_STRICT fails when a player has no MAL link', async () => {
        prisma.gameRound.count.mockResolvedValue(0);
        prisma.gameRound.createMany.mockResolvedValue({ count: 0 });

        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' },
            { id: 2, malAccessToken: null }
        ]);

        axios.get.mockResolvedValueOnce(malListResponse([{ id: 10, title: 'A' }]));

        const session = baseSession({ roundCount: 4, sourceMode: 'HYBRID', selectionMode: 'BALANCED_STRICT' });
        const lobby = baseLobby([1, 2]);

        await expect(roundService.generateInitialRoundsForSession({ session, lobby })).rejects.toMatchObject({ status: 400 });
    });

    test('BALANCED_RELAXED distributes sources and backfills from popular', async () => {
        prisma.gameRound.count.mockResolvedValue(0);
        const created = [];
        prisma.gameRound.createMany.mockImplementation(async ({ data }) => {
            created.push(...data);
            return { count: data.length };
        });

        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' },
            { id: 2, malAccessToken: 'token-2' }
        ]);

        axios.get
            .mockResolvedValueOnce(malListResponse([{ id: 10, title: 'A1' }]))
            .mockResolvedValueOnce(malListResponse([{ id: 20, title: 'B1' }]));

        const session = baseSession({ roundCount: 4, sourceMode: 'HYBRID', selectionMode: 'BALANCED_RELAXED' });
        const lobby = baseLobby([1, 2]);

        await roundService.generateInitialRoundsForSession({ session, lobby });

        expect(created).toHaveLength(4);
        const sourceCounts = created.reduce((acc, row) => {
            const key = row.sourcePlayerId === null ? 'popular' : String(row.sourcePlayerId);
            acc[key] = (acc[key] || 0) + 1;
            return acc;
        }, {});
        // both players should contribute at least one source when possible
        expect(Number(sourceCounts['1'] || 0)).toBeGreaterThan(0);
        expect(Number(sourceCounts['2'] || 0)).toBeGreaterThan(0);
        // and some popular fill may exist
        expect(sourceCounts['popular']).toBeDefined();
    });
});
