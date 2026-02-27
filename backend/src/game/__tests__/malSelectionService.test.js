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
                    title: item.title
                },
                list_status: {
                    status: item.status || 'completed'
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
});
