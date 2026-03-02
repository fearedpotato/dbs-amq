jest.mock('../../lib/prisma', () => ({
    user: { findMany: jest.fn() },
    gameRound: {
        count: jest.fn(),
        createMany: jest.fn(),
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn()
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
const { resolveRoundMedia } = require('../mediaService');

function malListResponse(items) {
    return {
        data: {
            data: items.map((item) => ({
                node: { id: String(item.id), title: item.title, mean: item.mean ?? 8.5 },
                list_status: { status: item.status || 'completed', score: item.playerScore ?? 7 }
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
        prisma.gameRound.findUnique.mockResolvedValue(null);
        prisma.gameRound.findMany.mockResolvedValue([]);
        prisma.gameRound.create.mockImplementation(async ({ data }) => ({
            id: 1000,
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        }));
        resolveRoundMedia.mockImplementation(async ({ animeId, animeTitle, roundIndex }) => ({
            animeId: Number(animeId),
            animeTitle: String(animeTitle || `Anime ${animeId}`),
            themeType: 'OP',
            themeTitle: `Theme ${roundIndex}`,
            sampleStartSec: 0,
            sampleDurationSec: 10,
            solutionVideoUrl: `https://media.local/video-${animeId}.mp4`,
            solutionAudioUrl: `https://media.local/audio-${animeId}.mp3`
        }));
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
        const sampleSecondsArgs = resolveRoundMedia.mock.calls
            .map(([payload]) => payload?.sampleSeconds)
            .filter((value) => value !== undefined);
        expect(sampleSecondsArgs.length).toBeGreaterThan(0);
        const expectedSampleSeconds = session.guessSeconds + session.answersRevealSeconds;
        expect(sampleSecondsArgs.every((value) => value === expectedSampleSeconds)).toBe(true);
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

    test('MAL_ONLY does not fallback to popular media when MAL seed media is unavailable', async () => {
        prisma.gameRound.count.mockResolvedValue(0);
        prisma.gameRound.createMany.mockResolvedValue({ count: 0 });

        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' }
        ]);

        axios.get.mockResolvedValueOnce(malListResponse([
            { id: 100, title: 'MAL Seed 1' },
            { id: 101, title: 'MAL Seed 2' }
        ]));

        resolveRoundMedia.mockImplementation(async ({ animeId, animeTitle, roundIndex }) => {
            if (Number(animeId) === 100) return null;
            return {
                animeId: Number(animeId),
                animeTitle: String(animeTitle || `Anime ${animeId}`),
                themeType: 'OP',
                themeTitle: `Theme ${roundIndex}`,
                sampleStartSec: 0,
                sampleDurationSec: 10,
                solutionVideoUrl: `https://media.local/video-${animeId}.mp4`,
                solutionAudioUrl: `https://media.local/audio-${animeId}.mp3`
            };
        });

        const session = baseSession({ roundCount: 2, sourceMode: 'MAL_ONLY', selectionMode: 'STANDARD' });
        const lobby = baseLobby([1]);

        await expect(roundService.generateInitialRoundsForSession({ session, lobby })).rejects.toMatchObject({ status: 503 });
        expect(prisma.gameRound.createMany).not.toHaveBeenCalled();
    });

    test('MAL_ONLY uses additional MAL reserve seeds when initial MAL seeds are unplayable', async () => {
        prisma.gameRound.count.mockResolvedValue(0);
        const created = [];
        prisma.gameRound.createMany.mockImplementation(async ({ data }) => {
            created.push(...data);
            return { count: data.length };
        });

        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' }
        ]);

        axios.get.mockResolvedValueOnce(malListResponse([
            { id: 100, title: 'MAL Seed 1' },
            { id: 101, title: 'MAL Seed 2' },
            { id: 102, title: 'MAL Seed 3' },
            { id: 103, title: 'MAL Seed 4' }
        ]));

        resolveRoundMedia.mockImplementation(async ({ animeId, animeTitle, roundIndex }) => {
            if (Number(animeId) === 100) return null;
            return {
                animeId: Number(animeId),
                animeTitle: String(animeTitle || `Anime ${animeId}`),
                themeType: 'OP',
                themeTitle: `Theme ${roundIndex}`,
                sampleStartSec: 0,
                sampleDurationSec: 10,
                solutionVideoUrl: `https://media.local/video-${animeId}.mp4`,
                solutionAudioUrl: `https://media.local/audio-${animeId}.mp3`
            };
        });

        const session = baseSession({ roundCount: 2, sourceMode: 'MAL_ONLY', selectionMode: 'STANDARD' });
        const lobby = baseLobby([1]);

        await roundService.generateInitialRoundsForSession({ session, lobby });

        expect(created).toHaveLength(2);
        expect(created.map((row) => row.animeId)).not.toContain(100);
        expect(created.every((row) => row.sourcePlayerId === 1)).toBe(true);
    });

    test('does not allow duplicate exact media entries in one match', async () => {
        prisma.gameRound.count.mockResolvedValue(0);
        prisma.gameRound.createMany.mockResolvedValue({ count: 0 });

        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' }
        ]);
        axios.get.mockResolvedValueOnce(malListResponse([
            { id: 10, title: 'A1' },
            { id: 20, title: 'A2' }
        ]));

        resolveRoundMedia.mockImplementation(async ({ roundIndex }) => ({
            animeId: 10,
            animeTitle: 'A1',
            themeType: 'OP',
            themeTitle: 'Same Theme',
            themeSongId: 777,
            sampleStartSec: 0,
            sampleDurationSec: 10,
            solutionVideoUrl: 'https://media.local/dup.mp4',
            solutionAudioUrl: `https://media.local/dup-${roundIndex}.mp3`
        }));

        const session = baseSession({ roundCount: 2, sourceMode: 'HYBRID', selectionMode: 'STANDARD' });
        const lobby = baseLobby([1]);

        await expect(roundService.generateInitialRoundsForSession({ session, lobby })).rejects.toMatchObject({ status: 503 });
        expect(prisma.gameRound.createMany).not.toHaveBeenCalled();
    });

    test('MAL_ONLY falls back to popular when no players have MAL linked', async () => {
        prisma.gameRound.count.mockResolvedValue(0);
        const created = [];
        prisma.gameRound.createMany.mockImplementation(async ({ data }) => {
            created.push(...data);
            return { count: data.length };
        });

        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: null },
            { id: 2, malAccessToken: null }
        ]);

        const session = baseSession({ roundCount: 3, sourceMode: 'MAL_ONLY', selectionMode: 'BALANCED_STRICT' });
        const lobby = baseLobby([1, 2]);

        await roundService.generateInitialRoundsForSession({ session, lobby });

        expect(created).toHaveLength(3);
        expect(created.every((row) => row.sourcePlayerId === null)).toBe(true);
        expect(axios.get).not.toHaveBeenCalled();
    });

    test('MAL_ONLY sudden death uses fresh MAL seeds instead of replaying already used anime', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' }
        ]);

        axios.get.mockResolvedValueOnce(malListResponse([
            { id: 100, title: 'MAL Seed 1' },
            { id: 101, title: 'MAL Seed 2' },
            { id: 102, title: 'MAL Seed 3' },
            { id: 103, title: 'MAL Seed 4' }
        ]));

        prisma.gameRound.findMany.mockResolvedValue([
            {
                animeId: 100,
                animeTitle: 'MAL Seed 1',
                themeType: 'OP',
                themeTitle: 'Theme 1',
                solutionVideoUrl: '/api/game/media/proxy?u=aHR0cHM6Ly9tZWRpYS5sb2NhbC92aWRlby0xMDAubXA0&exp=1&sig=old'
            },
            {
                animeId: 101,
                animeTitle: 'MAL Seed 2',
                themeType: 'OP',
                themeTitle: 'Theme 2',
                solutionVideoUrl: '/api/game/media/proxy?u=aHR0cHM6Ly9tZWRpYS5sb2NhbC92aWRlby0xMDEubXA0&exp=1&sig=old'
            }
        ]);

        const session = baseSession({
            roundCount: 2,
            sourceMode: 'MAL_ONLY',
            selectionMode: 'BALANCED_STRICT',
            themeMode: 'OP_ONLY',
            lobby: baseLobby([1])
        });

        const created = await roundService.ensureRoundForIndex({
            session,
            index: 3,
            lobbyPlayers: baseLobby([1]).players
        });

        expect([100, 101]).not.toContain(created.animeId);
        expect([102, 103]).toContain(created.animeId);
    });
});
