const prisma = require('./prisma');

const memoryStore = new Map();
let lastMemoryPruneAt = 0;

function pruneMemoryStore(now) {
    // Keep fallback memory limiter bounded when DB is unavailable.
    if (memoryStore.size < 5_000 && now - lastMemoryPruneAt < 30_000) {
        return;
    }

    for (const [key, entry] of memoryStore) {
        if (now >= entry.resetAt.getTime()) {
            memoryStore.delete(key);
        }
    }
    lastMemoryPruneAt = now;
}

function consumeInMemory(key, windowMs) {
    const now = Date.now();
    pruneMemoryStore(now);

    let entry = memoryStore.get(key);
    if (!entry || now >= entry.resetAt.getTime()) {
        entry = { count: 0, resetAt: new Date(now + windowMs) };
        memoryStore.set(key, entry);
    }
    entry.count += 1;
    return entry;
}

async function consumeInDatabase(key, windowMs) {
    const nextResetAt = new Date(Date.now() + windowMs);
    const rows = await prisma.$queryRaw`
        INSERT INTO "RateLimitBucket" ("key", "count", "resetAt", "createdAt", "updatedAt")
        VALUES (${key}, 1, ${nextResetAt}, NOW(), NOW())
        ON CONFLICT ("key") DO UPDATE
        SET "count" = CASE
            WHEN "RateLimitBucket"."resetAt" <= NOW() THEN 1
            ELSE "RateLimitBucket"."count" + 1
        END,
            "resetAt" = CASE
            WHEN "RateLimitBucket"."resetAt" <= NOW() THEN ${nextResetAt}
            ELSE "RateLimitBucket"."resetAt"
        END,
            "updatedAt" = NOW()
        RETURNING "count", "resetAt";
    `;

    const row = rows[0] || { count: 1, resetAt: nextResetAt };
    return {
        count: Number(row.count),
        resetAt: new Date(row.resetAt)
    };
}

async function consumeRateLimitBucket(key, windowMs) {
    if (process.env.NODE_ENV === 'test') {
        return consumeInMemory(key, windowMs);
    }

    try {
        return await consumeInDatabase(key, windowMs);
    } catch (err) {
        // Fallback to local memory limiter if DB is temporarily unavailable.
        return consumeInMemory(key, windowMs);
    }
}

module.exports = {
    consumeRateLimitBucket
};
