const axios = require('axios');
const { httpError } = require('./errors');

const DEFAULT_ANIMETHEMES_BASE_URL = 'https://api.animethemes.moe';
const DEFAULT_TIMEOUT_MS = 10_000;
const DEFAULT_CACHE_TTL_MS = 60 * 60 * 1000;
const DEFAULT_CACHE_MAX_ENTRIES = 400;
const DEFAULT_BLACKLIST_TTL_MS = 6 * 60 * 60 * 1000;

const animeCache = new Map();
const unplayableBlacklist = new Map();

function parsePositiveInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getBaseUrl() {
    return String(process.env.ANIMETHEMES_BASE_URL || DEFAULT_ANIMETHEMES_BASE_URL).replace(/\/+$/, '');
}

function getTimeoutMs() {
    return parsePositiveInt(process.env.ANIMETHEMES_TIMEOUT_MS, DEFAULT_TIMEOUT_MS);
}

function getCacheTtlMs() {
    return parsePositiveInt(process.env.ANIMETHEMES_CACHE_TTL_MS, DEFAULT_CACHE_TTL_MS);
}

function getCacheMaxEntries() {
    return parsePositiveInt(process.env.ANIMETHEMES_CACHE_MAX_ENTRIES, DEFAULT_CACHE_MAX_ENTRIES);
}

function getBlacklistTtlMs() {
    return parsePositiveInt(process.env.ANIMETHEMES_BLACKLIST_TTL_MS, DEFAULT_BLACKLIST_TTL_MS);
}

function sanitizeTitle(value, fallback = null) {
    const title = typeof value === 'string' ? value.trim() : '';
    return title || fallback;
}

function normalizeThemeType(rawType) {
    const value = String(rawType || '').toUpperCase();
    if (value.startsWith('OP')) return 'OP';
    if (value.startsWith('ED')) return 'ED';
    if (value.startsWith('IN')) return 'IN';
    return null;
}

function getAllowedThemeTypes(themeMode) {
    if (themeMode === 'OP_ONLY') return new Set(['OP']);
    if (themeMode === 'ED_ONLY') return new Set(['ED']);
    return new Set(['OP', 'ED', 'IN']);
}

function listFromResponse(data, keys) {
    for (const key of keys) {
        if (Array.isArray(data?.[key])) return data[key];
    }
    if (Array.isArray(data?.data)) return data.data;
    return [];
}

function pruneCache(now = Date.now()) {
    for (const [key, entry] of animeCache) {
        if (now >= entry.expiresAt) {
            animeCache.delete(key);
        }
    }

    const maxEntries = getCacheMaxEntries();
    while (animeCache.size > maxEntries) {
        const first = animeCache.keys().next();
        if (first.done) break;
        animeCache.delete(first.value);
    }
}

function blacklistKey(animeId, themeMode) {
    return `${animeId}:${String(themeMode || 'MIXED').toUpperCase()}`;
}

function pruneBlacklist(now = Date.now()) {
    for (const [key, expiresAt] of unplayableBlacklist) {
        if (now >= expiresAt) {
            unplayableBlacklist.delete(key);
        }
    }
}

function isBlacklisted(animeId, themeMode, now = Date.now()) {
    pruneBlacklist(now);
    const key = blacklistKey(animeId, themeMode);
    const expiresAt = unplayableBlacklist.get(key);
    return Number.isFinite(expiresAt) && now < expiresAt;
}

function markBlacklisted(animeId, themeMode, now = Date.now()) {
    const key = blacklistKey(animeId, themeMode);
    unplayableBlacklist.set(key, now + getBlacklistTtlMs());
}

function clearBlacklist(animeId, themeMode) {
    unplayableBlacklist.delete(blacklistKey(animeId, themeMode));
}

function readCache(cacheKey, now = Date.now()) {
    const entry = animeCache.get(cacheKey);
    if (!entry) return null;
    if (now >= entry.expiresAt) {
        animeCache.delete(cacheKey);
        return null;
    }
    return entry.value;
}

function writeCache(cacheKey, value, now = Date.now()) {
    animeCache.set(cacheKey, {
        value,
        expiresAt: now + getCacheTtlMs()
    });
    pruneCache(now);
}

function normalizeCandidate({ animeId, animeTitle, themeType, themeTitle, videoUrl, audioUrl }) {
    if (!Number.isInteger(animeId) || animeId <= 0) return null;
    if (!videoUrl) return null;
    if (!themeType) return null;

    return {
        animeId,
        animeTitle: sanitizeTitle(animeTitle, `Anime ${animeId}`),
        themeType,
        themeTitle: sanitizeTitle(themeTitle),
        solutionVideoUrl: String(videoUrl),
        solutionAudioUrl: audioUrl ? String(audioUrl) : null
    };
}

function extractThemeCandidates(animeEntry, malAnimeId, fallbackTitle) {
    const candidates = [];
    const animeTitle = sanitizeTitle(animeEntry?.name, sanitizeTitle(fallbackTitle, `Anime ${malAnimeId}`));
    const animethemes = Array.isArray(animeEntry?.animethemes) ? animeEntry.animethemes : [];

    for (const theme of animethemes) {
        const themeType = normalizeThemeType(theme?.type);
        if (!themeType) continue;

        const themeTitle = sanitizeTitle(
            theme?.song?.title,
            sanitizeTitle(theme?.slug, sanitizeTitle(theme?.sequence))
        );

        const entries = Array.isArray(theme?.animethemeentries) ? theme.animethemeentries : [];
        for (const entry of entries) {
            const videos = Array.isArray(entry?.videos) ? entry.videos : [];
            for (const video of videos) {
                const videoUrl = sanitizeTitle(video?.link, sanitizeTitle(video?.url));
                const audioUrl = sanitizeTitle(video?.audio, sanitizeTitle(video?.audio_url));
                const candidate = normalizeCandidate({
                    animeId: malAnimeId,
                    animeTitle,
                    themeType,
                    themeTitle,
                    videoUrl,
                    audioUrl
                });
                if (candidate) candidates.push(candidate);
            }
        }
    }

    return candidates;
}

async function fetchAnimeThemesIdByMalId(malAnimeId) {
    const sites = ['myanimelist', 'MyAnimeList'];
    for (const site of sites) {
        const response = await axios.get(`${getBaseUrl()}/resource`, {
            timeout: getTimeoutMs(),
            params: {
                'filter[external_id]': malAnimeId,
                'filter[site]': site,
                include: 'anime'
            }
        });

        const resources = listFromResponse(response.data, ['resources', 'resource']);
        for (const resource of resources) {
            const animeRows = Array.isArray(resource?.anime)
                ? resource.anime
                : (Array.isArray(resource?.animes) ? resource.animes : []);
            for (const anime of animeRows) {
                const id = Number.parseInt(anime?.id, 10);
                if (Number.isInteger(id) && id > 0) return id;
            }
        }
    }

    return null;
}

async function fetchAnimeThemesEntryByInternalId(animeThemesAnimeId) {
    const response = await axios.get(`${getBaseUrl()}/anime`, {
        timeout: getTimeoutMs(),
        params: {
            'filter[anime][id]': animeThemesAnimeId,
            include: 'animethemes.animethemeentries.videos,animethemes.song'
        }
    });

    const animeRows = listFromResponse(response.data, ['anime']);
    if (animeRows[0]) return animeRows[0];

    const fallback = await axios.get(`${getBaseUrl()}/anime/${animeThemesAnimeId}`, {
        timeout: getTimeoutMs(),
        params: {
            include: 'animethemes.animethemeentries.videos,animethemes.song'
        }
    });

    const fallbackRows = listFromResponse(fallback.data, ['anime']);
    if (fallbackRows[0]) return fallbackRows[0];

    if (fallback.data && typeof fallback.data === 'object' && fallback.data.id) {
        return fallback.data;
    }

    return null;
}

async function fetchAnimeCandidates(malAnimeId, fallbackTitle) {
    try {
        const animeThemesAnimeId = await fetchAnimeThemesIdByMalId(malAnimeId);
        if (!animeThemesAnimeId) return [];

        const animeEntry = await fetchAnimeThemesEntryByInternalId(animeThemesAnimeId);
        if (!animeEntry) return [];

        return extractThemeCandidates(animeEntry, malAnimeId, fallbackTitle);
    } catch (err) {
        const status = err?.response?.status;
        if (status === 404) return [];
        throw httpError(502, 'AnimeThemes media provider is unavailable');
    }
}

async function getAnimeCandidates(malAnimeId, fallbackTitle) {
    const key = String(malAnimeId);
    const cached = readCache(key);
    if (cached) return cached;

    const candidates = await fetchAnimeCandidates(malAnimeId, fallbackTitle);
    writeCache(key, candidates);
    return candidates;
}

function pickCandidate(candidates, themeMode, roundIndex) {
    const allowed = getAllowedThemeTypes(themeMode);
    const filtered = candidates.filter((candidate) => allowed.has(candidate.themeType));
    if (filtered.length === 0) return null;

    const resolvedIndex = Number.isInteger(roundIndex) && roundIndex > 0 ? roundIndex - 1 : 0;
    return filtered[resolvedIndex % filtered.length];
}

async function resolveRoundMedia({ animeId, animeTitle, themeMode = 'MIXED', sampleSeconds = 10, roundIndex = 1 } = {}) {
    const malAnimeId = Number.parseInt(animeId, 10);
    if (!Number.isInteger(malAnimeId) || malAnimeId <= 0) {
        throw httpError(400, 'animeId is required to resolve media');
    }

    if (isBlacklisted(malAnimeId, themeMode)) {
        return null;
    }

    const candidates = await getAnimeCandidates(malAnimeId, animeTitle);
    const selected = pickCandidate(candidates, themeMode, roundIndex);
    if (!selected) {
        markBlacklisted(malAnimeId, themeMode);
        return null;
    }

    clearBlacklist(malAnimeId, themeMode);

    return {
        animeId: selected.animeId,
        animeTitle: selected.animeTitle,
        themeType: selected.themeType,
        themeTitle: selected.themeTitle,
        sampleStartSec: 0,
        sampleDurationSec: Math.max(3, Number.parseInt(sampleSeconds, 10) || 10),
        solutionVideoUrl: selected.solutionVideoUrl,
        solutionAudioUrl: selected.solutionAudioUrl
    };
}

function __clearMediaCache() {
    animeCache.clear();
    unplayableBlacklist.clear();
}

module.exports = {
    resolveRoundMedia,
    __clearMediaCache
};
