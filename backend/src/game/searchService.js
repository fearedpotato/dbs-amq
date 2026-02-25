const axios = require('axios');
const { httpError } = require('./errors');

const DEFAULT_JIKAN_BASE_URL = 'https://api.jikan.moe/v4';
const DEFAULT_CACHE_TTL_MS = 5 * 60 * 1000;
const DEFAULT_CACHE_MAX_ENTRIES = 500;
const DEFAULT_TIMEOUT_MS = 8_000;

const searchCache = new Map();

function parsePositiveInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getCacheTtlMs() {
    return parsePositiveInt(process.env.JIKAN_SEARCH_CACHE_TTL_MS, DEFAULT_CACHE_TTL_MS);
}

function getCacheMaxEntries() {
    return parsePositiveInt(process.env.JIKAN_SEARCH_CACHE_MAX_ENTRIES, DEFAULT_CACHE_MAX_ENTRIES);
}

function getRequestTimeoutMs() {
    return parsePositiveInt(process.env.JIKAN_SEARCH_TIMEOUT_MS, DEFAULT_TIMEOUT_MS);
}

function getJikanBaseUrl() {
    return String(process.env.JIKAN_BASE_URL || DEFAULT_JIKAN_BASE_URL).replace(/\/+$/, '');
}

function clampLimit(limit) {
    const parsed = Number.parseInt(limit, 10);
    if (!Number.isFinite(parsed)) return 10;
    return Math.max(1, Math.min(parsed, 20));
}

function normalizeQuery(query) {
    return String(query || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

function buildCacheKey(query, limit) {
    return `${normalizeQuery(query)}|${limit}`;
}

function pruneCache(now = Date.now()) {
    for (const [key, entry] of searchCache) {
        if (now >= entry.expiresAt) {
            searchCache.delete(key);
        }
    }

    const maxEntries = getCacheMaxEntries();
    while (searchCache.size > maxEntries) {
        const first = searchCache.keys().next();
        if (first.done) break;
        searchCache.delete(first.value);
    }
}

function readCached(cacheKey, now = Date.now()) {
    const entry = searchCache.get(cacheKey);
    if (!entry) return null;
    if (now >= entry.expiresAt) {
        searchCache.delete(cacheKey);
        return null;
    }

    return entry.value;
}

function writeCache(cacheKey, value, now = Date.now()) {
    searchCache.set(cacheKey, {
        value,
        expiresAt: now + getCacheTtlMs()
    });
    pruneCache(now);
}

function mapAnimeResult(item) {
    if (!item || typeof item !== 'object') return null;

    const animeId = Number.parseInt(item.mal_id, 10);
    if (!Number.isInteger(animeId)) return null;

    return {
        id: animeId,
        title: String(item.title || item.title_english || item.title_japanese || ''),
        titleEnglish: item.title_english ? String(item.title_english) : null,
        titleJapanese: item.title_japanese ? String(item.title_japanese) : null,
        year: Number.isInteger(item.year) ? item.year : null,
        imageUrl: item.images?.jpg?.image_url || item.images?.webp?.image_url || null
    };
}

async function searchAnime(query, { limit = 10 } = {}) {
    const normalizedQuery = normalizeQuery(query);
    const resolvedLimit = clampLimit(limit);

    if (normalizedQuery.length < 2) {
        throw httpError(400, 'query must have at least 2 characters');
    }

    const cacheKey = buildCacheKey(normalizedQuery, resolvedLimit);
    const cached = readCached(cacheKey);
    if (cached) {
        return {
            ...cached,
            cached: true
        };
    }

    try {
        const response = await axios.get(`${getJikanBaseUrl()}/anime`, {
            timeout: getRequestTimeoutMs(),
            params: {
                q: normalizedQuery,
                limit: resolvedLimit,
                sfw: true
            }
        });

        const rows = Array.isArray(response.data?.data) ? response.data.data : [];
        const results = rows
            .map(mapAnimeResult)
            .filter((entry) => entry && entry.title)
            .slice(0, resolvedLimit);

        const payload = {
            query: normalizedQuery,
            source: 'jikan',
            results,
            limit: resolvedLimit
        };

        writeCache(cacheKey, payload);
        return {
            ...payload,
            cached: false
        };
    } catch (err) {
        const status = err?.response?.status;
        if (status === 429) {
            throw httpError(503, 'Anime search provider is rate limited. Try again in a moment.');
        }
        throw httpError(502, 'Anime search is temporarily unavailable');
    }
}

function __clearSearchCache() {
    searchCache.clear();
}

module.exports = {
    searchAnime,
    __clearSearchCache
};
