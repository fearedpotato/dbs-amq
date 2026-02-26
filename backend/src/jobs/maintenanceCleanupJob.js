const prisma = require('../lib/prisma');
const telemetry = require('../lib/telemetry');
const { pruneIdleLobbies } = require('./lobbyCleanupJob');

const DEFAULT_SWEEP_INTERVAL_MS = 60 * 1000;
const DEFAULT_STALE_IN_PROGRESS_MS = 90 * 60 * 1000;
const DEFAULT_SESSION_RETENTION_MS = 24 * 60 * 60 * 1000;
const DEFAULT_RATE_LIMIT_GRACE_MS = 5 * 60 * 1000;

function parsePositiveInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getSweepIntervalMs() {
    return parsePositiveInt(process.env.CLEANUP_SWEEP_INTERVAL_MS, DEFAULT_SWEEP_INTERVAL_MS);
}

function getStaleInProgressMs() {
    return parsePositiveInt(process.env.SESSION_STALE_IN_PROGRESS_MS, DEFAULT_STALE_IN_PROGRESS_MS);
}

function getSessionRetentionMs() {
    return parsePositiveInt(process.env.SESSION_RETENTION_MS, DEFAULT_SESSION_RETENTION_MS);
}

function getRateLimitGraceMs() {
    return parsePositiveInt(process.env.RATE_LIMIT_GRACE_MS, DEFAULT_RATE_LIMIT_GRACE_MS);
}

async function cancelStaleInProgressSessions(now = new Date()) {
    const cutoff = new Date(now.getTime() - getStaleInProgressMs());
    const stale = await prisma.gameSession.findMany({
        where: {
            status: 'IN_PROGRESS',
            updatedAt: { lt: cutoff }
        },
        select: {
            id: true,
            lobbyId: true
        },
        take: 500
    });

    if (stale.length === 0) return 0;

    const sessionIds = stale.map((row) => row.id);
    const lobbyIds = [...new Set(stale.map((row) => row.lobbyId))];

    const cancelled = await prisma.gameSession.updateMany({
        where: {
            id: { in: sessionIds },
            status: 'IN_PROGRESS'
        },
        data: {
            status: 'CANCELLED',
            endedAt: now
        }
    });

    if (lobbyIds.length > 0) {
        await prisma.lobby.updateMany({
            where: {
                id: { in: lobbyIds },
                status: 'IN_GAME'
            },
            data: {
                status: 'WAITING'
            }
        });
    }

    return cancelled.count || 0;
}

async function pruneOldSessions(now = new Date()) {
    const cutoff = new Date(now.getTime() - getSessionRetentionMs());
    const result = await prisma.gameSession.deleteMany({
        where: {
            status: { in: ['FINISHED', 'CANCELLED'] },
            updatedAt: { lt: cutoff }
        }
    });
    return result.count || 0;
}

async function pruneExpiredRateLimitBuckets(now = new Date()) {
    const cutoff = new Date(now.getTime() - getRateLimitGraceMs());
    const result = await prisma.rateLimitBucket.deleteMany({
        where: {
            resetAt: { lt: cutoff }
        }
    });
    return result.count || 0;
}

async function runMaintenanceSweep(now = new Date()) {
    const [
        idleLobbiesDeleted,
        staleSessionsCancelled,
        oldSessionsDeleted,
        rateLimitRowsDeleted
    ] = await Promise.all([
        pruneIdleLobbies(now),
        cancelStaleInProgressSessions(now),
        pruneOldSessions(now),
        pruneExpiredRateLimitBuckets(now)
    ]);

    return {
        idleLobbiesDeleted,
        staleSessionsCancelled,
        oldSessionsDeleted,
        rateLimitRowsDeleted
    };
}

function startMaintenanceCleanupJob() {
    if (process.env.NODE_ENV === 'test') {
        return () => {};
    }

    const runSweep = async () => {
        try {
            const summary = await runMaintenanceSweep();
            const changed = Object.values(summary).some((value) => Number(value) > 0);
            if (changed) {
                telemetry.info('cleanup.maintenance_sweep', summary);
            }
        } catch (err) {
            telemetry.error('cleanup.maintenance_failed', err);
        }
    };

    runSweep().catch(() => {});
    const interval = setInterval(runSweep, getSweepIntervalMs());
    if (typeof interval.unref === 'function') interval.unref();

    return () => clearInterval(interval);
}

module.exports = {
    cancelStaleInProgressSessions,
    pruneOldSessions,
    pruneExpiredRateLimitBuckets,
    runMaintenanceSweep,
    startMaintenanceCleanupJob
};
