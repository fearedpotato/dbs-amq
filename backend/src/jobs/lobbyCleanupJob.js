const prisma = require('../lib/prisma');

const DEFAULT_IDLE_TIMEOUT_MS = 10 * 60 * 1000;
const DEFAULT_SWEEP_INTERVAL_MS = 60 * 1000;

function parsePositiveInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getIdleTimeoutMs() {
    return parsePositiveInt(process.env.LOBBY_IDLE_TIMEOUT_MS, DEFAULT_IDLE_TIMEOUT_MS);
}

function getSweepIntervalMs() {
    return parsePositiveInt(process.env.LOBBY_CLEANUP_INTERVAL_MS, DEFAULT_SWEEP_INTERVAL_MS);
}

async function pruneIdleLobbies(now = new Date()) {
    const idleTimeoutMs = getIdleTimeoutMs();
    const cutoff = new Date(now.getTime() - idleTimeoutMs);

    const result = await prisma.lobby.deleteMany({
        where: {
            status: { in: ['WAITING', 'CLOSED'] },
            updatedAt: { lt: cutoff },
            players: {
                none: {
                    OR: [
                        { updatedAt: { gte: cutoff } },
                        { joinedAt: { gte: cutoff } }
                    ]
                }
            }
        }
    });

    return result.count || 0;
}

function startLobbyCleanupJob() {
    if (process.env.NODE_ENV === 'test') {
        return () => {};
    }

    const runSweep = async () => {
        try {
            const deleted = await pruneIdleLobbies();
            if (deleted > 0) {
                console.log(`[cleanup] deleted ${deleted} idle lobbies`);
            }
        } catch (err) {
            console.error('[cleanup] failed to prune idle lobbies', err);
        }
    };

    // Run once at startup, then on interval.
    runSweep().catch(() => {});
    const interval = setInterval(runSweep, getSweepIntervalMs());
    if (typeof interval.unref === 'function') interval.unref();

    return () => clearInterval(interval);
}

module.exports = {
    pruneIdleLobbies,
    startLobbyCleanupJob
};
