jest.mock('../../lib/prisma', () => ({
    user: {
        findMany: jest.fn()
    }
}));

jest.mock('../../lib/tokenCipher', () => ({
    decryptToken: jest.fn((value) => value)
}));

jest.mock('axios', () => ({
    get: jest.fn()
}));

const axios = require('axios');
const prisma = require('../../lib/prisma');
const { buildRoundSeedPlan, __clearMalWatchedCache } = require('../malSelectionService');

function malListResponse(items) {
    return {
        data: {
            data: items.map((item) => ({
                node: {
                    id: item.id,
                    title: item.title,
                    mean: item.mean ?? 8.5
                },
                list_status: {
                    status: item.status || 'completed',
                    score: item.playerScore ?? 7
                }
            })),
            paging: {}
        }
    };
}

function baseLobby(playerIds = [1, 2]) {
    return {
        players: playerIds.map((userId, idx) => ({
            userId,
            joinedAt: new Date(2024, 0, idx + 1)
        }))
    };
}

function baseSession(overrides = {}) {
    return {
        roundCount: 4,
        sourceMode: 'HYBRID',
        selectionMode: 'STANDARD',
        animeScoreMin: 1,
        animeScoreMax: 10,
        playerScoreMin: 1,
        playerScoreMax: 10,
        ...overrides
    };
}

describe('malSelectionService.buildRoundSeedPlan', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        __clearMalWatchedCache();
    });

    test('STANDARD + HYBRID merges MAL seeds then fills from popular', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' },
            { id: 2, malAccessToken: 'token-2' }
        ]);
        axios.get
            .mockResolvedValueOnce(malListResponse([
                { id: 100, title: 'A1' },
                { id: 101, title: 'A2' }
            ]))
            .mockResolvedValueOnce(malListResponse([
                { id: 101, title: 'A2 dup' },
                { id: 102, title: 'B1' }
            ]));

        const plan = await buildRoundSeedPlan({
            session: baseSession({ roundCount: 5, sourceMode: 'HYBRID', selectionMode: 'STANDARD' }),
            lobby: baseLobby([1, 2])
        });

        expect(plan).toHaveLength(5);
        const ids = plan.map((item) => item.animeId);
        expect(new Set(ids).size).toBe(5);
        expect(plan.some((item) => item.sourcePlayerId === null)).toBe(true);
    });

    test('BALANCED_STRICT fails when a player has no MAL link', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' },
            { id: 2, malAccessToken: null }
        ]);
        axios.get.mockResolvedValueOnce(malListResponse([
            { id: 1, title: 'A' },
            { id: 2, title: 'B' }
        ]));

        await expect(buildRoundSeedPlan({
            session: baseSession({ sourceMode: 'HYBRID', selectionMode: 'BALANCED_STRICT' }),
            lobby: baseLobby([1, 2])
        })).rejects.toMatchObject({ status: 400 });
    });

    test('BALANCED_STRICT enforces per-player quota', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' },
            { id: 2, malAccessToken: 'token-2' }
        ]);
        axios.get
            .mockResolvedValueOnce(malListResponse([
                { id: 10, title: 'A1' }
            ]))
            .mockResolvedValueOnce(malListResponse([
                { id: 20, title: 'B1' },
                { id: 21, title: 'B2' },
                { id: 22, title: 'B3' }
            ]));

        await expect(buildRoundSeedPlan({
            session: baseSession({ roundCount: 4, sourceMode: 'HYBRID', selectionMode: 'BALANCED_STRICT' }),
            lobby: baseLobby([1, 2])
        })).rejects.toMatchObject({ status: 400 });
    });

    test('BALANCED_RELAXED + HYBRID backfills from other players and popular', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' },
            { id: 2, malAccessToken: 'token-2' }
        ]);
        axios.get
            .mockResolvedValueOnce(malListResponse([
                { id: 10, title: 'A1' }
            ]))
            .mockResolvedValueOnce(malListResponse([
                { id: 20, title: 'B1' }
            ]));

        const plan = await buildRoundSeedPlan({
            session: baseSession({ roundCount: 4, sourceMode: 'HYBRID', selectionMode: 'BALANCED_RELAXED' }),
            lobby: baseLobby([1, 2])
        });

        expect(plan).toHaveLength(4);
        const sourceIds = plan.map((item) => item.sourcePlayerId);
        expect(sourceIds.filter((id) => id === 1).length).toBeGreaterThan(0);
        expect(sourceIds.filter((id) => id === 2).length).toBeGreaterThan(0);
        expect(sourceIds.includes(null)).toBe(true);
    });

    test('MAL_ONLY fails when MAL pool is insufficient', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' }
        ]);
        axios.get.mockResolvedValueOnce(malListResponse([
            { id: 10, title: 'Only One' }
        ]));

        await expect(buildRoundSeedPlan({
            session: baseSession({ roundCount: 3, sourceMode: 'MAL_ONLY', selectionMode: 'STANDARD' }),
            lobby: baseLobby([1])
        })).rejects.toMatchObject({ status: 400 });
    });

    test('MAL_ONLY ignores players without MAL link', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' },
            { id: 2, malAccessToken: null }
        ]);
        axios.get.mockResolvedValueOnce(malListResponse([
            { id: 10, title: 'Only MAL A' },
            { id: 20, title: 'Only MAL B' }
        ]));

        const plan = await buildRoundSeedPlan({
            session: baseSession({ roundCount: 2, sourceMode: 'MAL_ONLY', selectionMode: 'STANDARD' }),
            lobby: baseLobby([1, 2])
        });

        expect(plan).toHaveLength(2);
        expect(plan.every((item) => item.sourcePlayerId === 1)).toBe(true);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('MAL_ONLY falls back to popular when no players have MAL linked', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: null },
            { id: 2, malAccessToken: null }
        ]);

        const plan = await buildRoundSeedPlan({
            session: baseSession({ roundCount: 3, sourceMode: 'MAL_ONLY', selectionMode: 'BALANCED_STRICT' }),
            lobby: baseLobby([1, 2])
        });

        expect(plan).toHaveLength(3);
        expect(plan.every((item) => item.sourcePlayerId === null)).toBe(true);
        expect(axios.get).not.toHaveBeenCalled();
    });

    test('MAL pool includes only watching/completed statuses', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' }
        ]);
        axios.get.mockResolvedValueOnce(malListResponse([
            { id: 10, title: 'Completed A', status: 'completed' },
            { id: 20, title: 'Watching B', status: 'watching' },
            { id: 30, title: 'Dropped C', status: 'dropped' },
            { id: 40, title: 'On Hold D', status: 'on_hold' },
            { id: 50, title: 'Plan E', status: 'plan_to_watch' }
        ]));

        const plan = await buildRoundSeedPlan({
            session: baseSession({ roundCount: 2, sourceMode: 'MAL_ONLY', selectionMode: 'STANDARD' }),
            lobby: baseLobby([1])
        });

        const ids = plan.map((item) => item.animeId).sort((a, b) => a - b);
        expect(ids).toEqual([10, 20]);
    });

    test('applies anime score filter using truncated MAL mean scores', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' }
        ]);
        axios.get.mockResolvedValueOnce(malListResponse([
            { id: 10, title: 'Anime A', mean: 7.89 },
            { id: 20, title: 'Anime B', mean: 8.01 },
            { id: 30, title: 'Anime C', mean: 9.12 },
            { id: 40, title: 'Anime D', mean: 8.99 }
        ]));

        const plan = await buildRoundSeedPlan({
            session: baseSession({
                roundCount: 2,
                sourceMode: 'MAL_ONLY',
                selectionMode: 'STANDARD',
                animeScoreMin: 8,
                animeScoreMax: 8
            }),
            lobby: baseLobby([1])
        });

        expect(plan).toHaveLength(2);
        expect(plan.some((item) => item.animeId === 10)).toBe(false);
        expect(plan.some((item) => item.animeId === 30)).toBe(false);
        expect(plan.every((item) => [20, 40].includes(item.animeId))).toBe(true);
    });

    test('excludes unrated MAL entries when player score filter is narrowed', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' }
        ]);
        axios.get.mockResolvedValueOnce(malListResponse([
            { id: 10, title: 'Rated High', playerScore: 9 },
            { id: 20, title: 'Unrated', playerScore: 0 },
            { id: 30, title: 'Rated Mid', playerScore: 6 }
        ]));

        const plan = await buildRoundSeedPlan({
            session: baseSession({
                roundCount: 1,
                sourceMode: 'MAL_ONLY',
                selectionMode: 'STANDARD',
                playerScoreMin: 9,
                playerScoreMax: 10
            }),
            lobby: baseLobby([1])
        });

        expect(plan).toHaveLength(1);
        expect(plan[0].animeId).toBe(10);
    });

    test('includes unrated MAL entries when full player score range is selected', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' }
        ]);
        axios.get.mockResolvedValueOnce(malListResponse([
            { id: 10, title: 'Rated', playerScore: 8 },
            { id: 20, title: 'Unrated', playerScore: 0 }
        ]));

        const plan = await buildRoundSeedPlan({
            session: baseSession({
                roundCount: 2,
                sourceMode: 'MAL_ONLY',
                selectionMode: 'STANDARD',
                playerScoreMin: 1,
                playerScoreMax: 10
            }),
            lobby: baseLobby([1])
        });

        const ids = plan.map((item) => item.animeId).sort((a, b) => a - b);
        expect(ids).toEqual([10, 20]);
    });

    test('applies anime score filter in POPULAR mode', async () => {
        const plan = await buildRoundSeedPlan({
            session: baseSession({
                roundCount: 2,
                sourceMode: 'POPULAR',
                selectionMode: 'STANDARD',
                animeScoreMin: 9,
                animeScoreMax: 10
            }),
            lobby: baseLobby([1])
        });

        expect(plan).toHaveLength(2);
        expect(plan.every((item) => item.sourcePlayerId === null)).toBe(true);
    });

    test('player score filter does not affect popular fallback in HYBRID', async () => {
        prisma.user.findMany.mockResolvedValue([
            { id: 1, malAccessToken: 'token-1' }
        ]);
        axios.get.mockResolvedValueOnce(malListResponse([
            { id: 10, title: 'Low User Score', playerScore: 2 },
            { id: 20, title: 'Unrated', playerScore: 0 }
        ]));

        const plan = await buildRoundSeedPlan({
            session: baseSession({
                roundCount: 2,
                sourceMode: 'HYBRID',
                selectionMode: 'STANDARD',
                playerScoreMin: 9,
                playerScoreMax: 10
            }),
            lobby: baseLobby([1])
        });

        expect(plan).toHaveLength(2);
        expect(plan.some((item) => item.sourcePlayerId === 1)).toBe(false);
        expect(plan.every((item) => item.sourcePlayerId === null)).toBe(true);
    });

    test('rejects inverted player score range in session config', async () => {
        await expect(buildRoundSeedPlan({
            session: baseSession({
                roundCount: 2,
                sourceMode: 'POPULAR',
                playerScoreMin: 10,
                playerScoreMax: 2
            }),
            lobby: baseLobby([1])
        })).rejects.toMatchObject({
            status: 400,
            message: 'playerScoreMin cannot be greater than playerScoreMax'
        });
    });
});
