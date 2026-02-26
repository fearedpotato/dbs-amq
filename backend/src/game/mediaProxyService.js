const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const axios = require('axios');
const { pipeline } = require('stream/promises');

const DEFAULT_PROXY_PATH = '/api/game/media/proxy';
const DEFAULT_URL_TTL_SEC = 24 * 60 * 60;
const DEFAULT_CACHE_DIR = path.resolve(__dirname, '../../.cache/media');
const DEFAULT_FETCH_TIMEOUT_MS = 20_000;
const DEFAULT_CACHE_MAX_BYTES = 5 * 1024 * 1024 * 1024; // 5 GB

const inflightDownloads = new Map();

function parsePositiveInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getProxyPath() {
    const raw = String(process.env.MEDIA_PROXY_PATH || DEFAULT_PROXY_PATH).trim();
    return raw.startsWith('/') ? raw : `/${raw}`;
}

function getSigningSecret() {
    const explicit = String(process.env.MEDIA_PROXY_SIGNING_SECRET || '').trim();
    if (explicit) return explicit;
    const fallback = String(process.env.SESSION_SECRET || process.env.JWT_SECRET || '').trim();
    return fallback || null;
}

function isEnabled() {
    const raw = String(process.env.MEDIA_PROXY_ENABLED || 'true').trim().toLowerCase();
    return raw !== '0' && raw !== 'false' && Boolean(getSigningSecret());
}

function getUrlTtlSec() {
    return parsePositiveInt(process.env.MEDIA_PROXY_URL_TTL_SEC, DEFAULT_URL_TTL_SEC);
}

function getCacheDir() {
    return path.resolve(String(process.env.MEDIA_PROXY_CACHE_DIR || DEFAULT_CACHE_DIR));
}

function getFetchTimeoutMs() {
    return parsePositiveInt(process.env.MEDIA_PROXY_FETCH_TIMEOUT_MS, DEFAULT_FETCH_TIMEOUT_MS);
}

function getCacheMaxBytes() {
    return parsePositiveInt(process.env.MEDIA_PROXY_CACHE_MAX_BYTES, DEFAULT_CACHE_MAX_BYTES);
}

function base64UrlEncode(value) {
    return Buffer.from(String(value), 'utf8').toString('base64url');
}

function base64UrlDecode(value) {
    return Buffer.from(String(value), 'base64url').toString('utf8');
}

function signPayload(encodedUrl, expSec) {
    const secret = getSigningSecret();
    if (!secret) return null;
    return crypto.createHmac('sha256', secret).update(`${encodedUrl}.${expSec}`).digest('base64url');
}

function safeEqual(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') return false;
    const left = Buffer.from(a);
    const right = Buffer.from(b);
    if (left.length !== right.length) return false;
    return crypto.timingSafeEqual(left, right);
}

function buildMediaProxyUrl(sourceUrl, options = {}) {
    const raw = typeof sourceUrl === 'string' ? sourceUrl.trim() : '';
    if (!raw) return null;
    if (!isEnabled()) return raw;

    try {
        const target = new URL(raw);
        if (!['http:', 'https:'].includes(target.protocol)) return raw;
    } catch (_err) {
        return raw;
    }

    const ttlSec = parsePositiveInt(options.ttlSec, getUrlTtlSec());
    const expSec = Math.floor(Date.now() / 1000) + ttlSec;
    const encodedUrl = base64UrlEncode(raw);
    const sig = signPayload(encodedUrl, expSec);
    if (!sig) return raw;
    return `${getProxyPath()}?u=${encodeURIComponent(encodedUrl)}&exp=${expSec}&sig=${encodeURIComponent(sig)}`;
}

function parseAndVerifyProxyRequest(query = {}) {
    const encodedUrl = typeof query.u === 'string' ? query.u.trim() : '';
    const expRaw = typeof query.exp === 'string' ? query.exp.trim() : '';
    const sig = typeof query.sig === 'string' ? query.sig.trim() : '';
    const expSec = Number.parseInt(expRaw, 10);

    if (!encodedUrl || !sig || !Number.isFinite(expSec)) {
        return { ok: false, status: 400, error: 'Missing proxy signature params' };
    }

    const nowSec = Math.floor(Date.now() / 1000);
    if (expSec < nowSec) {
        return { ok: false, status: 403, error: 'Proxy URL expired' };
    }

    const expected = signPayload(encodedUrl, expSec);
    if (!expected || !safeEqual(sig, expected)) {
        return { ok: false, status: 403, error: 'Invalid proxy signature' };
    }

    let sourceUrl;
    try {
        sourceUrl = base64UrlDecode(encodedUrl);
    } catch (_err) {
        return { ok: false, status: 400, error: 'Invalid proxy URL encoding' };
    }

    try {
        const parsed = new URL(sourceUrl);
        if (!['http:', 'https:'].includes(parsed.protocol)) {
            return { ok: false, status: 400, error: 'Unsupported media URL protocol' };
        }
    } catch (_err) {
        return { ok: false, status: 400, error: 'Invalid media URL' };
    }

    return { ok: true, sourceUrl };
}

function cacheKeyForUrl(url) {
    return crypto.createHash('sha256').update(String(url)).digest('hex');
}

function cachePaths(cacheKey) {
    const dir = getCacheDir();
    return {
        dir,
        dataPath: path.join(dir, `${cacheKey}.bin`),
        metaPath: path.join(dir, `${cacheKey}.json`),
        tmpPath: path.join(dir, `${cacheKey}.${Date.now()}.tmp`)
    };
}

async function ensureCacheDir() {
    await fs.promises.mkdir(getCacheDir(), { recursive: true });
}

async function readCacheMeta(metaPath) {
    try {
        const raw = await fs.promises.readFile(metaPath, 'utf8');
        return JSON.parse(raw);
    } catch (_err) {
        return null;
    }
}

async function getCacheEntry(sourceUrl) {
    const key = cacheKeyForUrl(sourceUrl);
    const paths = cachePaths(key);
    const meta = await readCacheMeta(paths.metaPath);
    if (!meta) return null;

    try {
        const stat = await fs.promises.stat(paths.dataPath);
        return {
            key,
            dataPath: paths.dataPath,
            metaPath: paths.metaPath,
            contentType: typeof meta.contentType === 'string' ? meta.contentType : 'application/octet-stream',
            size: Number.isFinite(stat.size) ? stat.size : Number(meta.size || 0),
            cachedAt: meta.cachedAt || null
        };
    } catch (_err) {
        return null;
    }
}

async function pruneCacheIfNeeded() {
    const maxBytes = getCacheMaxBytes();
    if (!Number.isFinite(maxBytes) || maxBytes <= 0) return;

    const dir = getCacheDir();
    let entries;
    try {
        entries = await fs.promises.readdir(dir);
    } catch (_err) {
        return;
    }

    const metas = [];
    let totalBytes = 0;
    for (const name of entries) {
        if (!name.endsWith('.json')) continue;
        const metaPath = path.join(dir, name);
        const meta = await readCacheMeta(metaPath);
        if (!meta || typeof meta.key !== 'string') continue;
        const dataPath = path.join(dir, `${meta.key}.bin`);
        try {
            const stat = await fs.promises.stat(dataPath);
            const size = Number.isFinite(stat.size) ? stat.size : 0;
            totalBytes += size;
            metas.push({
                key: meta.key,
                size,
                dataPath,
                metaPath,
                cachedAt: new Date(meta.cachedAt || 0).getTime() || 0
            });
        } catch (_err) {
            // If data file is missing, remove stale metadata.
            await fs.promises.unlink(metaPath).catch(() => {});
        }
    }

    if (totalBytes <= maxBytes) return;

    metas.sort((a, b) => a.cachedAt - b.cachedAt);
    for (const item of metas) {
        if (totalBytes <= maxBytes) break;
        await fs.promises.unlink(item.dataPath).catch(() => {});
        await fs.promises.unlink(item.metaPath).catch(() => {});
        totalBytes = Math.max(0, totalBytes - item.size);
    }
}

async function downloadToCache(sourceUrl) {
    await ensureCacheDir();
    const key = cacheKeyForUrl(sourceUrl);
    if (inflightDownloads.has(key)) {
        return inflightDownloads.get(key);
    }

    const promise = (async () => {
        const paths = cachePaths(key);
        const response = await axios.get(sourceUrl, {
            responseType: 'stream',
            timeout: getFetchTimeoutMs(),
            maxRedirects: 5,
            validateStatus: (status) => status >= 200 && status < 300
        });

        await pipeline(response.data, fs.createWriteStream(paths.tmpPath));
        await fs.promises.rename(paths.tmpPath, paths.dataPath);

        const stat = await fs.promises.stat(paths.dataPath);
        const meta = {
            key,
            sourceUrl,
            contentType: typeof response.headers?.['content-type'] === 'string'
                ? response.headers['content-type']
                : 'application/octet-stream',
            size: Number.isFinite(stat.size) ? stat.size : 0,
            cachedAt: new Date().toISOString()
        };
        await fs.promises.writeFile(paths.metaPath, JSON.stringify(meta), 'utf8');
        await pruneCacheIfNeeded();

        return {
            key,
            dataPath: paths.dataPath,
            metaPath: paths.metaPath,
            contentType: meta.contentType,
            size: meta.size,
            cachedAt: meta.cachedAt
        };
    })();

    inflightDownloads.set(key, promise);
    try {
        return await promise;
    } catch (err) {
        const paths = cachePaths(key);
        await fs.promises.unlink(paths.tmpPath).catch(() => {});
        throw err;
    } finally {
        inflightDownloads.delete(key);
    }
}

async function getOrCreateCacheEntry(sourceUrl) {
    const existing = await getCacheEntry(sourceUrl);
    if (existing) return { ...existing, cacheStatus: 'HIT' };

    const downloaded = await downloadToCache(sourceUrl);
    return { ...downloaded, cacheStatus: 'MISS' };
}

function parseByteRange(rangeHeader, size) {
    const raw = typeof rangeHeader === 'string' ? rangeHeader.trim() : '';
    if (!raw || !raw.startsWith('bytes=')) return null;
    const [startPart, endPart] = raw.slice(6).split('-');

    if (!startPart && !endPart) return null;
    if (!Number.isFinite(size) || size <= 0) return null;

    if (!startPart) {
        const suffixLength = Number.parseInt(endPart, 10);
        if (!Number.isFinite(suffixLength) || suffixLength <= 0) return null;
        const start = Math.max(0, size - suffixLength);
        return { start, end: size - 1 };
    }

    const start = Number.parseInt(startPart, 10);
    const end = endPart ? Number.parseInt(endPart, 10) : size - 1;
    if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || end < start) return null;
    if (start >= size) return { invalid: true };
    return { start, end: Math.min(end, size - 1) };
}

function setSharedHeaders(res, contentType, cacheStatus) {
    res.setHeader('Content-Type', contentType || 'application/octet-stream');
    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('X-Media-Cache', cacheStatus);
}

function parseProxyUrlToQuery(proxyUrl) {
    const raw = typeof proxyUrl === 'string' ? proxyUrl.trim() : '';
    if (!raw) return null;

    try {
        const parsed = new URL(raw, 'http://localhost');
        const proxyPath = getProxyPath();
        if (parsed.pathname !== proxyPath) return null;
        return {
            u: parsed.searchParams.get('u') || '',
            exp: parsed.searchParams.get('exp') || '',
            sig: parsed.searchParams.get('sig') || ''
        };
    } catch (_err) {
        return null;
    }
}

async function prewarmProxyUrl(proxyUrl) {
    let sourceUrl = null;
    const query = parseProxyUrlToQuery(proxyUrl);
    if (query) {
        const parsed = parseAndVerifyProxyRequest(query);
        if (!parsed.ok) {
            return { ok: false, reason: parsed.error, status: parsed.status };
        }
        sourceUrl = parsed.sourceUrl;
    } else {
        try {
            const parsed = new URL(String(proxyUrl || '').trim());
            if (!['http:', 'https:'].includes(parsed.protocol)) {
                return { ok: false, reason: 'not_proxy_url' };
            }
            sourceUrl = parsed.toString();
        } catch (_err) {
            return { ok: false, reason: 'not_proxy_url' };
        }
    }

    if (!sourceUrl) {
        return { ok: false, reason: 'not_proxy_url' };
    }

    const entry = await getOrCreateCacheEntry(sourceUrl);
    return {
        ok: true,
        cacheStatus: entry.cacheStatus,
        key: entry.key
    };
}

async function prewarmManifest(manifest = [], options = {}) {
    const roundLimit = parsePositiveInt(options.roundLimit, 3);
    const maxConcurrent = Math.max(1, Math.min(parsePositiveInt(options.maxConcurrent, 2), 6));
    const rows = (Array.isArray(manifest) ? manifest : [])
        .map((row) => ({
            index: Number.parseInt(row?.index, 10),
            audioUrl: typeof row?.audioUrl === 'string' ? row.audioUrl : null,
            videoUrl: typeof row?.videoUrl === 'string' ? row.videoUrl : null
        }))
        .filter((row) => Number.isInteger(row.index) && row.index > 0)
        .sort((a, b) => a.index - b.index)
        .slice(0, roundLimit);

    const urls = [];
    const seen = new Set();
    for (const row of rows) {
        for (const candidate of [row.audioUrl, row.videoUrl]) {
            if (!candidate || seen.has(candidate)) continue;
            seen.add(candidate);
            urls.push(candidate);
        }
    }

    if (urls.length === 0) {
        return { attempted: 0, warmed: 0, failed: 0, skipped: 0 };
    }

    let cursor = 0;
    const results = [];
    async function worker() {
        while (cursor < urls.length) {
            const current = urls[cursor];
            cursor += 1;
            try {
                const warmed = await prewarmProxyUrl(current);
                results.push(warmed);
            } catch (_err) {
                results.push({ ok: false, reason: 'download_failed' });
            }
        }
    }

    await Promise.all(Array.from({ length: Math.min(maxConcurrent, urls.length) }, () => worker()));

    let warmed = 0;
    let failed = 0;
    let skipped = 0;
    for (const item of results) {
        if (item.ok) warmed += 1;
        else if (item.reason === 'not_proxy_url' || item.reason === 'disabled') skipped += 1;
        else failed += 1;
    }

    return {
        attempted: results.length,
        warmed,
        failed,
        skipped
    };
}

async function streamCachedMedia(req, res, entry) {
    const size = Number.parseInt(entry.size, 10) || 0;
    const range = parseByteRange(req.headers.range, size);
    setSharedHeaders(res, entry.contentType, entry.cacheStatus || 'HIT');

    if (range?.invalid) {
        res.status(416);
        res.setHeader('Content-Range', `bytes */${size}`);
        res.end();
        return;
    }

    if (range && Number.isFinite(range.start) && Number.isFinite(range.end)) {
        const contentLength = range.end - range.start + 1;
        res.status(206);
        res.setHeader('Content-Range', `bytes ${range.start}-${range.end}/${size}`);
        res.setHeader('Content-Length', contentLength);
        fs.createReadStream(entry.dataPath, { start: range.start, end: range.end }).pipe(res);
        return;
    }

    res.status(200);
    res.setHeader('Content-Length', size);
    fs.createReadStream(entry.dataPath).pipe(res);
}

module.exports = {
    isEnabled,
    buildMediaProxyUrl,
    parseAndVerifyProxyRequest,
    getOrCreateCacheEntry,
    streamCachedMedia,
    prewarmProxyUrl,
    prewarmManifest
};
