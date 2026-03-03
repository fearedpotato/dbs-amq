const fs = require('fs');
const dns = require('dns');
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
    let dnsLookupMock;

    beforeEach(async () => {
        jest.clearAllMocks();
        cacheDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'media-proxy-test-'));
        process.env.MEDIA_PROXY_ENABLED = 'true';
        process.env.MEDIA_PROXY_SIGNING_SECRET = 'proxy-test-secret';
        process.env.MEDIA_PROXY_CACHE_DIR = cacheDir;
        process.env.MEDIA_PROXY_ALLOWED_HOSTS = 'cdn.example.com,*.example.com';
        dnsLookupMock = jest.spyOn(dns.promises, 'lookup').mockResolvedValue([
            { address: '93.184.216.34', family: 4 }
        ]);
    });

    afterEach(async () => {
        process.env = { ...originalEnv };
        if (dnsLookupMock) dnsLookupMock.mockRestore();
        if (cacheDir) {
            await fs.promises.rm(cacheDir, { recursive: true, force: true });
        }
    });

    test('builds signed proxy URL and validates signature', () => {
        const sourceUrl = 'https://cdn.example.com/audio.mp3';
        const proxied = buildMediaProxyUrl(sourceUrl);
        expect(proxied).toContain('/api/game/media/proxy?');

        const parsed = new URL(`http://localhost${proxied}`);
        const exp = Number.parseInt(parsed.searchParams.get('exp'), 10);
        const nowSec = Math.floor(Date.now() / 1000);
        expect(exp).toBeGreaterThanOrEqual(nowSec + 14 * 60);
        expect(exp).toBeLessThanOrEqual(nowSec + 16 * 60);
        const verification = parseAndVerifyProxyRequest({
            u: parsed.searchParams.get('u'),
            exp: parsed.searchParams.get('exp'),
            sig: parsed.searchParams.get('sig')
        });

        expect(verification.ok).toBe(true);
        expect(verification.sourceUrl).toBe(sourceUrl);
    });

    test('builds signed proxy URL with lobby scope and validates it', () => {
        const sourceUrl = 'https://cdn.example.com/audio.mp3';
        const proxied = buildMediaProxyUrl(sourceUrl, { lobbyCode: 'ab12' });
        const parsed = new URL(`http://localhost${proxied}`);
        expect(parsed.searchParams.get('l')).toBe('AB12');

        const verification = parseAndVerifyProxyRequest({
            u: parsed.searchParams.get('u'),
            exp: parsed.searchParams.get('exp'),
            sig: parsed.searchParams.get('sig'),
            l: parsed.searchParams.get('l')
        });

        expect(verification.ok).toBe(true);
        expect(verification.sourceUrl).toBe(sourceUrl);
        expect(verification.lobbyCode).toBe('AB12');
    });

    test('uses MEDIA_PROXY_URL_TTL_SEC override when building signed URL', () => {
        process.env.MEDIA_PROXY_URL_TTL_SEC = '30';
        const sourceUrl = 'https://cdn.example.com/audio.mp3';
        const proxied = buildMediaProxyUrl(sourceUrl);
        const parsed = new URL(`http://localhost${proxied}`);
        const exp = Number.parseInt(parsed.searchParams.get('exp'), 10);
        const nowSec = Math.floor(Date.now() / 1000);
        expect(exp).toBeGreaterThanOrEqual(nowSec + 20);
        expect(exp).toBeLessThanOrEqual(nowSec + 40);
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

    test('updates lastUsedAt on cache hit when touch interval elapsed', async () => {
        process.env.MEDIA_PROXY_LAST_USED_TOUCH_INTERVAL_MS = '1';
        const payload = Buffer.from('demo-media-payload');
        axios.get.mockResolvedValue({
            headers: { 'content-type': 'audio/mpeg' },
            data: Readable.from(payload)
        });

        const sourceUrl = 'https://cdn.example.com/touch-elapsed.mp3';
        const first = await getOrCreateCacheEntry(sourceUrl);
        const firstMeta = JSON.parse(await fs.promises.readFile(first.metaPath, 'utf8'));
        const firstLastUsedAt = firstMeta.lastUsedAt;

        await new Promise((resolve) => setTimeout(resolve, 5));

        const second = await getOrCreateCacheEntry(sourceUrl);
        const secondMeta = JSON.parse(await fs.promises.readFile(first.metaPath, 'utf8'));

        expect(second.cacheStatus).toBe('HIT');
        expect(new Date(secondMeta.lastUsedAt).getTime()).toBeGreaterThan(new Date(firstLastUsedAt).getTime());
        expect(second.lastUsedAt).toBe(secondMeta.lastUsedAt);
    });

    test('does not update lastUsedAt on cache hit when touch interval not elapsed', async () => {
        process.env.MEDIA_PROXY_LAST_USED_TOUCH_INTERVAL_MS = '60000';
        const payload = Buffer.from('demo-media-payload');
        axios.get.mockResolvedValue({
            headers: { 'content-type': 'audio/mpeg' },
            data: Readable.from(payload)
        });

        const sourceUrl = 'https://cdn.example.com/touch-throttled.mp3';
        const first = await getOrCreateCacheEntry(sourceUrl);
        const firstMeta = JSON.parse(await fs.promises.readFile(first.metaPath, 'utf8'));

        const second = await getOrCreateCacheEntry(sourceUrl);
        const secondMeta = JSON.parse(await fs.promises.readFile(first.metaPath, 'utf8'));

        expect(second.cacheStatus).toBe('HIT');
        expect(secondMeta.lastUsedAt).toBe(firstMeta.lastUsedAt);
        expect(second.lastUsedAt).toBe(firstMeta.lastUsedAt);
    });

    test('uses cachedAt as fallback when legacy metadata has no lastUsedAt', async () => {
        process.env.MEDIA_PROXY_LAST_USED_TOUCH_INTERVAL_MS = '60000';
        const payload = Buffer.from('demo-media-payload');
        axios.get.mockResolvedValue({
            headers: { 'content-type': 'audio/mpeg' },
            data: Readable.from(payload)
        });

        const sourceUrl = 'https://cdn.example.com/legacy-meta.mp3';
        const first = await getOrCreateCacheEntry(sourceUrl);
        const firstMeta = JSON.parse(await fs.promises.readFile(first.metaPath, 'utf8'));

        await fs.promises.writeFile(first.metaPath, JSON.stringify({
            ...firstMeta,
            lastUsedAt: undefined
        }), 'utf8');

        const second = await getOrCreateCacheEntry(sourceUrl);
        const secondMeta = JSON.parse(await fs.promises.readFile(first.metaPath, 'utf8'));

        expect(second.cacheStatus).toBe('HIT');
        expect(second.lastUsedAt).toBe(firstMeta.cachedAt);
        expect(secondMeta.lastUsedAt).toBeUndefined();
    });

    test('prunes oldest lastUsedAt entry when cache exceeds max bytes', async () => {
        process.env.MEDIA_PROXY_CACHE_MAX_BYTES = '20';
        process.env.MEDIA_PROXY_LAST_USED_TOUCH_INTERVAL_MS = '1';
        axios.get.mockImplementation(async (url) => {
            const token = String(url).split('/').pop().replace('.mp3', '');
            const payload = Buffer.from(token.repeat(10).slice(0, 10), 'utf8');
            return {
                headers: { 'content-type': 'audio/mpeg' },
                data: Readable.from(payload)
            };
        });

        const aUrl = 'https://cdn.example.com/a.mp3';
        const bUrl = 'https://cdn.example.com/b.mp3';
        const cUrl = 'https://cdn.example.com/c.mp3';

        const a = await getOrCreateCacheEntry(aUrl);
        await new Promise((resolve) => setTimeout(resolve, 5));
        const b = await getOrCreateCacheEntry(bUrl);
        await new Promise((resolve) => setTimeout(resolve, 5));
        const aHit = await getOrCreateCacheEntry(aUrl);
        await new Promise((resolve) => setTimeout(resolve, 5));
        const c = await getOrCreateCacheEntry(cUrl);

        expect(aHit.cacheStatus).toBe('HIT');
        expect(c.cacheStatus).toBe('MISS');
        expect(fs.existsSync(a.dataPath)).toBe(true);
        expect(fs.existsSync(b.dataPath)).toBe(false);
        expect(fs.existsSync(c.dataPath)).toBe(true);
        expect(axios.get).toHaveBeenCalledTimes(3);
    });

    test('rejects signed proxy URL when host is not allowed', () => {
        const proxied = buildMediaProxyUrl('https://evil.example.net/audio.mp3');
        const parsed = new URL(`http://localhost${proxied}`);
        const verification = parseAndVerifyProxyRequest({
            u: parsed.searchParams.get('u'),
            exp: parsed.searchParams.get('exp'),
            sig: parsed.searchParams.get('sig')
        });

        expect(verification.ok).toBe(false);
        expect(verification.status).toBe(403);
        expect(verification.error).toBe('Blocked media source host');
    });

    test('rejects signed proxy URL for private IP address target', () => {
        const proxied = buildMediaProxyUrl('http://127.0.0.1/private.mp3');
        const parsed = new URL(`http://localhost${proxied}`);
        const verification = parseAndVerifyProxyRequest({
            u: parsed.searchParams.get('u'),
            exp: parsed.searchParams.get('exp'),
            sig: parsed.searchParams.get('sig')
        });

        expect(verification.ok).toBe(false);
        expect(verification.status).toBe(403);
        expect(verification.error).toBe('Blocked private media source address');
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

    test('evicts cached media from shared cache while keeping root cache folder', async () => {
        const payload = Buffer.from('demo-media-payload');
        axios.get.mockResolvedValue({
            headers: { 'content-type': 'audio/mpeg' },
            data: Readable.from(payload)
        });

        const sourceUrl = 'https://cdn.example.com/solo-scope.mp3';
        const created = await getOrCreateCacheEntry(sourceUrl, { lobbyCode: 'ALPHA1' });
        const rootCacheDir = path.dirname(created.dataPath);
        expect(rootCacheDir).toBe(cacheDir);
        expect(fs.existsSync(rootCacheDir)).toBe(true);

        const proxied = buildMediaProxyUrl(sourceUrl, { lobbyCode: 'ALPHA1' });
        const eviction = await evictCacheForMediaUrl(proxied);

        expect(eviction.removed).toBe(true);
        expect(fs.existsSync(created.dataPath)).toBe(false);
        expect(fs.existsSync(rootCacheDir)).toBe(true);
    });

    test('blocks cache download when DNS resolves to private IP', async () => {
        dnsLookupMock.mockResolvedValueOnce([
            { address: '10.0.0.7', family: 4 }
        ]);

        await expect(getOrCreateCacheEntry('https://cdn.example.com/private-hop.mp3')).rejects.toThrow(
            'Blocked private media source address'
        );
        expect(axios.get).not.toHaveBeenCalled();
    });

    test('reuses shared cache file across different lobby codes', async () => {
        const payload = Buffer.from('demo-media-payload');
        axios.get.mockResolvedValue({
            headers: { 'content-type': 'audio/mpeg' },
            data: Readable.from(payload)
        });

        const sourceUrl = 'https://cdn.example.com/shared-song.mp3';
        const alpha = await getOrCreateCacheEntry(sourceUrl, { lobbyCode: 'ALPHA1' });
        const beta = await getOrCreateCacheEntry(sourceUrl, { lobbyCode: 'BETA2' });

        expect(alpha.dataPath).toBe(path.join(cacheDir, `${alpha.key}.bin`));
        expect(beta.dataPath).toBe(path.join(cacheDir, `${beta.key}.bin`));
        expect(beta.dataPath).toBe(alpha.dataPath);
        expect(fs.existsSync(alpha.dataPath)).toBe(true);
        expect(fs.existsSync(beta.dataPath)).toBe(true);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

});
