jest.mock('../../lib/prisma', () => ({
    gameSession: {
        findMany: jest.fn(),
        updateMany: jest.fn(),
        deleteMany: jest.fn()
    },
    lobby: {
        updateMany: jest.fn()
    },
    rateLimitBucket: {
        deleteMany: jest.fn()
    }
}));

jest.mock('../lobbyCleanupJob', () => ({
    pruneIdleLobbies: jest.fn()
}));

const prisma = require('../../lib/prisma');
const { pruneIdleLobbies } = require('../lobbyCleanupJob');
const {
    cancelStaleInProgressSessions,
    pruneOldSessions,
    pruneExpiredRateLimitBuckets,
    runMaintenanceSweep
} = require('../maintenanceCleanupJob');

describe('maintenanceCleanupJob', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        pruneIdleLobbies.mockResolvedValue(0);
        prisma.gameSession.findMany.mockResolvedValue([]);
        prisma.gameSession.updateMany.mockResolvedValue({ count: 0 });
        prisma.gameSession.deleteMany.mockResolvedValue({ count: 0 });
        prisma.lobby.updateMany.mockResolvedValue({ count: 0 });
        prisma.rateLimitBucket.deleteMany.mockResolvedValue({ count: 0 });
    });

    test('cancels stale in-progress sessions and reopens lobbies', async () => {
        const now = new Date('2026-02-26T12:00:00.000Z');
        prisma.gameSession.findMany.mockResolvedValue([
            { id: 11, lobbyId: 7 },
            { id: 12, lobbyId: 7 },
            { id: 13, lobbyId: 8 }
        ]);
        prisma.gameSession.updateMany.mockResolvedValue({ count: 3 });

        const cancelled = await cancelStaleInProgressSessions(now);

        expect(cancelled).toBe(3);
        expect(prisma.gameSession.updateMany).toHaveBeenCalledWith(expect.objectContaining({
            where: expect.objectContaining({
                id: { in: [11, 12, 13] },
                status: 'IN_PROGRESS'
            }),
            data: expect.objectContaining({
                status: 'CANCELLED',
                endedAt: now
            })
        }));
        expect(prisma.lobby.updateMany).toHaveBeenCalledWith({
            where: {
                id: { in: [7, 8] },
                status: 'IN_GAME'
            },
            data: {
                status: 'WAITING'
            }
        });
    });

    test('prunes finished/cancelled sessions past retention', async () => {
        prisma.gameSession.deleteMany.mockResolvedValue({ count: 5 });
        const deleted = await pruneOldSessions(new Date('2026-02-26T12:00:00.000Z'));
        expect(deleted).toBe(5);
        expect(prisma.gameSession.deleteMany).toHaveBeenCalled();
    });

    test('prunes expired rate limit buckets', async () => {
        prisma.rateLimitBucket.deleteMany.mockResolvedValue({ count: 9 });
        const deleted = await pruneExpiredRateLimitBuckets(new Date('2026-02-26T12:00:00.000Z'));
        expect(deleted).toBe(9);
        expect(prisma.rateLimitBucket.deleteMany).toHaveBeenCalled();
    });

    test('runs full sweep and returns summary', async () => {
        pruneIdleLobbies.mockResolvedValue(2);
        prisma.gameSession.findMany.mockResolvedValue([{ id: 21, lobbyId: 9 }]);
        prisma.gameSession.updateMany.mockResolvedValue({ count: 1 });
        prisma.gameSession.deleteMany.mockResolvedValue({ count: 4 });
        prisma.rateLimitBucket.deleteMany.mockResolvedValue({ count: 6 });

        const summary = await runMaintenanceSweep(new Date('2026-02-26T12:00:00.000Z'));
        expect(summary).toEqual({
            idleLobbiesDeleted: 2,
            staleSessionsCancelled: 1,
            oldSessionsDeleted: 4,
            rateLimitRowsDeleted: 6
        });
    });
});
