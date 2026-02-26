const fs = require('fs');
const os = require('os');
const path = require('path');
const { Readable } = require('stream');

jest.mock('axios', () => ({
    get: jest.fn()
}));

const axios = require('axios');
const {
    buildMediaProxyUrl,
    parseAndVerifyProxyRequest,
    getOrCreateCacheEntry,
    prewarmManifest,
    evictCacheForMediaUrl
} = require('../mediaProxyService');

describe('mediaProxyService', () => {
    const originalEnv = { ...process.env };
    let cacheDir;

    beforeEach(async () => {
        jest.clearAllMocks();
        cacheDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'media-proxy-test-'));
        process.env.MEDIA_PROXY_ENABLED = 'true';
        process.env.MEDIA_PROXY_SIGNING_SECRET = 'proxy-test-secret';
        process.env.MEDIA_PROXY_CACHE_DIR = cacheDir;
    });

    afterEach(async () => {
        process.env = { ...originalEnv };
        if (cacheDir) {
            await fs.promises.rm(cacheDir, { recursive: true, force: true });
        }
    });

    test('builds signed proxy URL and validates signature', () => {
        const sourceUrl = 'https://cdn.example.com/audio.mp3';
        const proxied = buildMediaProxyUrl(sourceUrl);
        expect(proxied).toContain('/api/game/media/proxy?');

        const parsed = new URL(`http://localhost${proxied}`);
        const verification = parseAndVerifyProxyRequest({
            u: parsed.searchParams.get('u'),
            exp: parsed.searchParams.get('exp'),
            sig: parsed.searchParams.get('sig')
        });

        expect(verification.ok).toBe(true);
        expect(verification.sourceUrl).toBe(sourceUrl);
    });

    test('downloads and reuses cached media entry', async () => {
        const payload = Buffer.from('demo-media-payload');
        axios.get.mockResolvedValue({
            headers: { 'content-type': 'audio/mpeg' },
            data: Readable.from(payload)
        });

        const sourceUrl = 'https://cdn.example.com/sample.mp3';
        const first = await getOrCreateCacheEntry(sourceUrl);
        const second = await getOrCreateCacheEntry(sourceUrl);

        expect(first.cacheStatus).toBe('MISS');
        expect(second.cacheStatus).toBe('HIT');
        expect(first.size).toBe(payload.length);
        expect(second.size).toBe(payload.length);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('prewarms first rounds from proxy manifest with dedupe', async () => {
        const payload = Buffer.from('demo-media-payload');
        axios.get.mockResolvedValue({
            headers: { 'content-type': 'audio/mpeg' },
            data: Readable.from(payload)
        });

        const sourceA = 'https://cdn.example.com/a.mp3';
        const sourceB = 'https://cdn.example.com/b.mp4';
        const sourceC = 'https://cdn.example.com/c.mp3';
        const proxiedA = buildMediaProxyUrl(sourceA);
        const proxiedB = buildMediaProxyUrl(sourceB);
        const proxiedC = buildMediaProxyUrl(sourceC);

        const summary = await prewarmManifest([
            { index: 1, audioUrl: proxiedA, videoUrl: proxiedB },
            { index: 2, audioUrl: proxiedA, videoUrl: proxiedC },
            { index: 3, audioUrl: proxiedC, videoUrl: null },
            { index: 4, audioUrl: buildMediaProxyUrl('https://cdn.example.com/d.mp3'), videoUrl: null }
        ], { roundLimit: 3, maxConcurrent: 2 });

        expect(summary.attempted).toBe(3);
        expect(summary.warmed).toBe(3);
        expect(summary.failed).toBe(0);
        expect(axios.get).toHaveBeenCalledTimes(3);
    });

    test('evicts cached media by proxy URL', async () => {
        const payload = Buffer.from('demo-media-payload');
        axios.get.mockResolvedValue({
            headers: { 'content-type': 'audio/mpeg' },
            data: Readable.from(payload)
        });

        const sourceUrl = 'https://cdn.example.com/to-evict.mp3';
        const proxied = buildMediaProxyUrl(sourceUrl);
        const created = await getOrCreateCacheEntry(sourceUrl);
        expect(created.cacheStatus).toBe('MISS');
        expect(fs.existsSync(created.dataPath)).toBe(true);

        const eviction = await evictCacheForMediaUrl(proxied);
        expect(eviction.removed).toBe(true);
        expect(fs.existsSync(created.dataPath)).toBe(false);
    });
});
