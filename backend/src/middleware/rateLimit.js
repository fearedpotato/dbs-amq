const { consumeRateLimitBucket } = require('../lib/rateLimiterStore');

function createRateLimit({
    windowMs = 60_000,
    max = 60,
    keyPrefix = 'http',
    keyGenerator,
    message = 'Too many requests, please try again later.'
} = {}) {
    return async (req, res, next) => {
        const rawKey = String((keyGenerator ? keyGenerator(req) : req.ip) || req.ip || 'unknown');
        const key = `${keyPrefix}:${rawKey}`;
        const bucket = await consumeRateLimitBucket(key, windowMs);

        if (bucket.count > max) {
            const retryAfterSec = Math.max(1, Math.ceil((bucket.resetAt.getTime() - Date.now()) / 1000));
            res.setHeader('Retry-After', String(retryAfterSec));
            return res.status(429).json({ error: message });
        }

        return next();
    };
}

module.exports = {
    createRateLimit
};
