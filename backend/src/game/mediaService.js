const axios = require('axios');
const { httpError } = require('./errors');

const DEFAULT_ANIMETHEMES_BASE_URL = 'https://api.animethemes.moe';
const DEFAULT_TIMEOUT_MS = 10_000;
const DEFAULT_CACHE_TTL_MS = 60 * 60 * 1000;
const DEFAULT_CACHE_MAX_ENTRIES = 400;
const DEFAULT_BLACKLIST_TTL_MS = 6 * 60 * 60 * 1000;
const DEFAULT_PROVIDER_STATUS_CACHE_MS = 15_000;
const DEFAULT_PROVIDER_STATUS_OPPORTUNISTIC_MS = 20_000;
const DEFAULT_PROVIDER_STATUS_AUTOMATED_STALE_MS = 30_000;
const PROVIDER_PROBE_TIMEOUT_CAP_MS = 5_000;
const SONG_EQUIVALENTS_FETCH_BATCH_SIZE = 40;

const animeCache = new Map();
const unplayableBlacklist = new Map();
const songEquivalentAnimeIdsCache = new Map();
const providerStatusCache = {
    value: null,
    expiresAt: 0
};

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

function getProviderStatusCacheMs() {
    return parsePositiveInt(process.env.ANIMETHEMES_STATUS_CACHE_MS, DEFAULT_PROVIDER_STATUS_CACHE_MS);
}

function getProviderStatusOpportunisticMs() {
    return parsePositiveInt(
        process.env.ANIMETHEMES_STATUS_OPPORTUNISTIC_MS,
        DEFAULT_PROVIDER_STATUS_OPPORTUNISTIC_MS
    );
}

function getProviderStatusAutomatedStaleMs() {
    return parsePositiveInt(
        process.env.ANIMETHEMES_STATUS_AUTOMATED_STALE_MS,
        DEFAULT_PROVIDER_STATUS_AUTOMATED_STALE_MS
    );
}

function getProbeTimeoutMs() {
    return Math.max(500, Math.min(getTimeoutMs(), PROVIDER_PROBE_TIMEOUT_CAP_MS));
}

function getCacheSnapshot() {
    return {
        animeEntries: animeCache.size,
        blacklistEntries: unplayableBlacklist.size
    };
}

function toProviderErrorMessage(err, timeoutMs) {
    const timedOut = err?.code === 'ECONNABORTED';
    if (timedOut) {
        return `Timed out after ${timeoutMs}ms`;
    }
    return sanitizeTitle(err?.response?.statusText, sanitizeTitle(err?.message, 'Request failed'));
}

function buildProviderStatusSnapshot({
    baseUrl,
    timeoutMs,
    ok,
    statusCode,
    latencyMs,
    error = null,
    checkedAtMs = Date.now()
}) {
    return {
        provider: 'AnimeThemes',
        baseUrl,
        timeoutMs,
        ok: Boolean(ok),
        statusCode: Number.isInteger(statusCode) ? statusCode : null,
        latencyMs: Number.isFinite(latencyMs) ? Math.max(0, latencyMs) : null,
        error: ok ? null : sanitizeTitle(error, 'Request failed'),
        checkedAt: new Date(checkedAtMs).toISOString(),
        cache: getCacheSnapshot()
    };
}

function setProviderStatusCache(status, now = Date.now()) {
    providerStatusCache.value = status;
    providerStatusCache.expiresAt = now + getProviderStatusCacheMs();
}

function getProviderStatusCheckedAtMs(status = providerStatusCache.value) {
    const checkedAt = status?.checkedAt;
    if (typeof checkedAt !== 'string') return null;
    const parsed = Date.parse(checkedAt);
    return Number.isFinite(parsed) ? parsed : null;
}

function getProviderStatusAgeMs(now = Date.now()) {
    const checkedAtMs = getProviderStatusCheckedAtMs(providerStatusCache.value);
    if (!Number.isFinite(checkedAtMs)) return Number.POSITIVE_INFINITY;
    return Math.max(0, now - checkedAtMs);
}

function hasProviderStatusWithinAge(maxAgeMs, now = Date.now()) {
    const parsedMaxAgeMs = parsePositiveInt(maxAgeMs, 0);
    if (parsedMaxAgeMs <= 0) return false;
    return getProviderStatusAgeMs(now) <= parsedMaxAgeMs;
}

function shouldRunOpportunisticProviderStatusCheck(now = Date.now()) {
    return getProviderStatusAgeMs(now) >= getProviderStatusOpportunisticMs();
}

function maybeCaptureProviderStatusFromRequest({ startedAt, baseUrl, timeoutMs, response, err }) {
    const now = Date.now();
    if (!shouldRunOpportunisticProviderStatusCheck(now)) return;

    const statusCode = Number.parseInt(response?.status ?? err?.response?.status, 10);
    const hasResponseStatus = Number.isInteger(statusCode);
    const ok = response
        ? true
        : (hasResponseStatus ? statusCode < 500 : false);

    const status = buildProviderStatusSnapshot({
        baseUrl,
        timeoutMs,
        ok,
        statusCode: hasResponseStatus ? statusCode : null,
        latencyMs: now - startedAt,
        error: ok ? null : toProviderErrorMessage(err, timeoutMs),
        checkedAtMs: now
    });
    setProviderStatusCache(status, now);
}

async function requestProvider(pathname, { timeout = getTimeoutMs(), params } = {}) {
    const startedAt = Date.now();
    const baseUrl = getBaseUrl();

    try {
        const response = await axios.get(`${baseUrl}${pathname}`, { timeout, params });
        maybeCaptureProviderStatusFromRequest({
            startedAt,
            baseUrl,
            timeoutMs: timeout,
            response
        });
        return response;
    } catch (err) {
        maybeCaptureProviderStatusFromRequest({
            startedAt,
            baseUrl,
            timeoutMs: timeout,
            err
        });
        throw err;
    }
}

function toPositiveInt(value) {
    const parsed = Number.parseInt(value, 10);
    return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

function chunkValues(values, size = SONG_EQUIVALENTS_FETCH_BATCH_SIZE) {
    const chunks = [];
    for (let i = 0; i < values.length; i += size) {
        chunks.push(values.slice(i, i + size));
    }
    return chunks;
}

function sanitizeTitle(value, fallback = null) {
    const title = typeof value === 'string' ? value.trim() : '';
    return title || fallback;
}

function parseDurationSeconds(...values) {
    for (const value of values) {
        const parsed = Number.parseFloat(value);
        if (Number.isFinite(parsed) && parsed > 0) {
            return parsed;
        }
    }
    return null;
}

function normalizeSiteName(value) {
    return String(value || '').trim().toLowerCase().replace(/\s+/g, '');
}

function pickSampleStartSec(totalDurationSec, sampleDurationSec) {
    const total = Number.parseFloat(totalDurationSec);
    const sample = Number.parseFloat(sampleDurationSec);
    if (!Number.isFinite(total) || !Number.isFinite(sample)) return 0;

    const maxStart = Math.floor(total - sample);
    if (maxStart <= 0) return 0;

    return Math.floor(Math.random() * (maxStart + 1));
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

function pruneSongEquivalentCache(now = Date.now()) {
    for (const [key, entry] of songEquivalentAnimeIdsCache) {
        if (now >= entry.expiresAt) {
            songEquivalentAnimeIdsCache.delete(key);
        }
    }

    const maxEntries = getCacheMaxEntries();
    while (songEquivalentAnimeIdsCache.size > maxEntries) {
        const first = songEquivalentAnimeIdsCache.keys().next();
        if (first.done) break;
        songEquivalentAnimeIdsCache.delete(first.value);
    }
}

function readSongEquivalentCache(songId, now = Date.now()) {
    const entry = songEquivalentAnimeIdsCache.get(String(songId));
    if (!entry) return null;
    if (now >= entry.expiresAt) {
        songEquivalentAnimeIdsCache.delete(String(songId));
        return null;
    }
    return Array.isArray(entry.value) ? entry.value : [];
}

function writeSongEquivalentCache(songId, malAnimeIds, now = Date.now()) {
    songEquivalentAnimeIdsCache.set(String(songId), {
        value: Array.isArray(malAnimeIds) ? malAnimeIds : [],
        expiresAt: now + getCacheTtlMs()
    });
    pruneSongEquivalentCache(now);
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

function normalizeCandidate({
    animeId,
    animeTitle,
    themeType,
    themeTitle,
    themeSongId,
    videoUrl,
    audioUrl,
    mediaDurationSec
}) {
    if (!Number.isInteger(animeId) || animeId <= 0) return null;
    if (!videoUrl) return null;
    if (!themeType) return null;

    return {
        animeId,
        animeTitle: sanitizeTitle(animeTitle, `Anime ${animeId}`),
        themeType,
        themeTitle: sanitizeTitle(themeTitle),
        themeSongId: toPositiveInt(themeSongId),
        mediaDurationSec: Number.isFinite(mediaDurationSec) ? mediaDurationSec : null,
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
        const themeSongId = toPositiveInt(theme?.song?.id);

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
                const mediaDurationSec = parseDurationSeconds(
                    video?.duration,
                    video?.duration_seconds,
                    video?.length,
                    video?.runtime,
                    entry?.duration,
                    entry?.duration_seconds,
                    theme?.duration,
                    theme?.duration_seconds
                );
                const candidate = normalizeCandidate({
                    animeId: malAnimeId,
                    animeTitle,
                    themeType,
                    themeTitle,
                    themeSongId,
                    videoUrl,
                    audioUrl,
                    mediaDurationSec
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
        const response = await requestProvider('/resource', {
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
    const response = await requestProvider('/anime', {
        timeout: getTimeoutMs(),
        params: {
            'filter[anime][id]': animeThemesAnimeId,
            include: 'animethemes.animethemeentries.videos,animethemes.song'
        }
    });

    const animeRows = listFromResponse(response.data, ['anime']);
    if (animeRows[0]) return animeRows[0];

    const fallback = await requestProvider(`/anime/${animeThemesAnimeId}`, {
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

function extractSongPayload(data) {
    if (data?.song && typeof data.song === 'object') return data.song;
    if (Array.isArray(data?.songs) && data.songs[0]) return data.songs[0];
    return null;
}

function extractAnimeThemesAnimeIdsFromSong(songPayload) {
    const ids = new Set();
    const animethemes = Array.isArray(songPayload?.animethemes) ? songPayload.animethemes : [];
    for (const theme of animethemes) {
        const animeThemesAnimeId = toPositiveInt(theme?.anime?.id);
        if (animeThemesAnimeId) ids.add(animeThemesAnimeId);
    }
    return [...ids];
}

function extractMalAnimeIdFromAnimeEntry(animeEntry) {
    const resources = Array.isArray(animeEntry?.resources) ? animeEntry.resources : [];
    for (const resource of resources) {
        if (normalizeSiteName(resource?.site) !== 'myanimelist') continue;
        const malAnimeId = toPositiveInt(resource?.external_id);
        if (malAnimeId) return malAnimeId;
    }
    return null;
}

async function fetchMalAnimeIdsForAnimeThemesIds(animeThemesAnimeIds = []) {
    const ids = [...new Set(
        animeThemesAnimeIds
            .map((value) => toPositiveInt(value))
            .filter((value) => Number.isInteger(value))
    )];
    if (ids.length === 0) return [];

    const malAnimeIds = new Set();
    for (const chunk of chunkValues(ids)) {
        const response = await requestProvider('/anime', {
            timeout: getTimeoutMs(),
            params: {
                'filter[anime][id]': chunk.join(','),
                include: 'resources'
            }
        });

        const rows = listFromResponse(response.data, ['anime']);
        for (const row of rows) {
            const malAnimeId = extractMalAnimeIdFromAnimeEntry(row);
            if (malAnimeId) malAnimeIds.add(malAnimeId);
        }
    }

    return [...malAnimeIds];
}

async function resolveAcceptedAnimeIdsForSong({ songId, fallbackAnimeId }) {
    const fallback = toPositiveInt(fallbackAnimeId);
    const fallbackList = fallback ? [fallback] : [];

    const resolvedSongId = toPositiveInt(songId);
    if (!resolvedSongId) return fallbackList;

    const cached = readSongEquivalentCache(resolvedSongId);
    if (cached) {
        return [...new Set([...cached, ...fallbackList])];
    }

    try {
        const response = await requestProvider(`/song/${resolvedSongId}`, {
            timeout: getTimeoutMs(),
            params: {
                include: 'animethemes.anime'
            }
        });

        const songPayload = extractSongPayload(response.data);
        if (!songPayload) return fallbackList;

        const animeThemesAnimeIds = extractAnimeThemesAnimeIdsFromSong(songPayload);
        const malAnimeIds = await fetchMalAnimeIdsForAnimeThemesIds(animeThemesAnimeIds);
        writeSongEquivalentCache(resolvedSongId, malAnimeIds);

        return [...new Set([...malAnimeIds, ...fallbackList])];
    } catch (_err) {
        return fallbackList;
    }
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

    const sampleDurationSec = Math.max(3, Number.parseInt(sampleSeconds, 10) || 10);
    const acceptedAnimeIds = await resolveAcceptedAnimeIdsForSong({
        songId: selected.themeSongId,
        fallbackAnimeId: selected.animeId
    });

    return {
        animeId: selected.animeId,
        animeTitle: selected.animeTitle,
        themeType: selected.themeType,
        themeTitle: selected.themeTitle,
        themeSongId: selected.themeSongId,
        acceptedAnimeIds,
        sampleDurationSec,
        sampleStartSec: pickSampleStartSec(
            selected.mediaDurationSec,
            sampleDurationSec
        ),
        solutionVideoUrl: selected.solutionVideoUrl,
        solutionAudioUrl: selected.solutionAudioUrl
    };
}

function __clearMediaCache() {
    animeCache.clear();
    unplayableBlacklist.clear();
    songEquivalentAnimeIdsCache.clear();
    providerStatusCache.value = null;
    providerStatusCache.expiresAt = 0;
}

async function probeMediaProvider() {
    const startedAt = Date.now();
    const baseUrl = getBaseUrl();
    const timeoutMs = getProbeTimeoutMs();

    try {
        const response = await axios.get(`${baseUrl}/anime`, {
            timeout: timeoutMs,
            params: {
                'page[size]': 1
            }
        });

        return {
            ...buildProviderStatusSnapshot({
                baseUrl,
                timeoutMs,
                ok: true,
                statusCode: Number.isInteger(response?.status) ? response.status : 200,
                latencyMs: Date.now() - startedAt
            }),
            checkedAt: new Date().toISOString()
        };
    } catch (err) {
        const statusCode = Number.parseInt(err?.response?.status, 10);
        return {
            ...buildProviderStatusSnapshot({
                baseUrl,
                timeoutMs,
                ok: false,
                statusCode: Number.isInteger(statusCode) ? statusCode : null,
                latencyMs: Date.now() - startedAt,
                error: toProviderErrorMessage(err, timeoutMs)
            }),
            checkedAt: new Date().toISOString()
        };
    }
}

async function getMediaProviderStatus({ forceRefresh = false, ensureMaxAgeMs = null } = {}) {
    const now = Date.now();
    const hasFreshStatusByAge = hasProviderStatusWithinAge(ensureMaxAgeMs, now);

    if (
        !forceRefresh
        && providerStatusCache.value
        && (hasFreshStatusByAge || now < providerStatusCache.expiresAt)
    ) {
        return {
            ...providerStatusCache.value,
            cached: true,
            cache: getCacheSnapshot()
        };
    }

    const status = await probeMediaProvider();
    setProviderStatusCache(status, now);

    return {
        ...status,
        cached: false
    };
}

module.exports = {
    resolveRoundMedia,
    getMediaProviderStatus,
    getProviderStatusAutomatedStaleMs,
    __clearMediaCache
};
