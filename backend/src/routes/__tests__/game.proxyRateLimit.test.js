const express = require('express');
const request = require('supertest');

const originalEnv = { ...process.env };

function createAppForProxyRateLimit() {
    jest.resetModules();

    jest.doMock('../../lib/prisma', () => ({
        user: {
            findUnique: jest.fn()
        }
    }));
    jest.doMock('../../game/mediaProxyService', () => ({
        isEnabled: jest.fn().mockReturnValue(true),
        parseAndVerifyProxyRequest: jest.fn().mockReturnValue({
            ok: true,
            sourceUrl: 'https://cdn.example.com/media.mp3'
        }),
        getOrCreateCacheEntry: jest.fn().mockResolvedValue({
            key: 'abc',
            dataPath: '/tmp/demo',
            contentType: 'audio/mpeg',
            size: 10,
            cacheStatus: 'HIT'
        }),
        streamCachedMedia: jest.fn().mockImplementation(async (_req, res) => {
            res.status(200).send('proxied');
        })
    }));
    jest.doMock('../../lib/telemetry', () => ({
        debug: jest.fn(),
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
        serializeError: jest.fn()
    }));

    const gameRoutes = require('../game');
    const mediaProxyService = require('../../game/mediaProxyService');
    const telemetry = require('../../lib/telemetry');

    const app = express();
    app.use('/api/game', gameRoutes);
    return { app, mediaProxyService, telemetry };
}

describe('game media proxy rate limit', () => {
    beforeEach(() => {
        process.env = {
            ...originalEnv,
            NODE_ENV: 'test',
            MEDIA_PROXY_RATE_LIMIT_WINDOW_MS: '60000',
            MEDIA_PROXY_RATE_LIMIT_MAX: '1'
        };
    });

    afterEach(() => {
        process.env = { ...originalEnv };
        jest.clearAllMocks();
        jest.resetModules();
    });

    test('returns 429 after per-IP proxy limit is exceeded', async () => {
        const { app, mediaProxyService, telemetry } = createAppForProxyRateLimit();

        const first = await request(app).get('/api/game/media/proxy?u=signed&exp=9999999999&sig=abc');
        expect(first.status).toBe(200);

        const second = await request(app).get('/api/game/media/proxy?u=signed&exp=9999999999&sig=abc');
        expect(second.status).toBe(429);
        expect(second.body.error).toBe('Too many media requests. Please try again shortly.');
        expect(second.headers['retry-after']).toBeTruthy();

        expect(mediaProxyService.parseAndVerifyProxyRequest).toHaveBeenCalledTimes(1);
        expect(telemetry.warn).toHaveBeenCalledWith(
            'media.proxy_rate_limited',
            expect.objectContaining({
                retryAfterSec: expect.any(Number),
                max: 1
            })
        );
    });
});
