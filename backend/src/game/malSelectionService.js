const axios = require('axios');
const crypto = require('crypto');
const prisma = require('../lib/prisma');
const { decryptToken } = require('../lib/tokenCipher');
const { httpError } = require('./errors');
const { POPULAR_CATALOG } = require('./catalog');
const { MIN_SCORE_FILTER, MAX_SCORE_FILTER } = require('./constants');

const WATCHED_STATUSES = new Set(['watching', 'completed']);
const DEFAULT_MAL_API_BASE_URL = 'https://api.myanimelist.net/v2';
const DEFAULT_PAGE_SIZE = 100;
const DEFAULT_MAX_PAGES = 20;
const DEFAULT_CACHE_TTL_MS = 5 * 60 * 1000;
const DEFAULT_CACHE_MAX_USERS = 500;
const MAL_ONLY_RESERVE_MULTIPLIER = 4;
const MAL_ONLY_RESERVE_CAP = 200;

const watchedCache = new Map();

function parsePositiveInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getMalApiBaseUrl() {
    return String(process.env.MAL_API_BASE_URL || DEFAULT_MAL_API_BASE_URL).replace(/\/+$/, '');
}

function getPageSize() {
    return Math.max(1, Math.min(parsePositiveInt(process.env.MAL_WATCHED_PAGE_SIZE, DEFAULT_PAGE_SIZE), 250));
}

function getMaxPages() {
    return Math.max(1, Math.min(parsePositiveInt(process.env.MAL_WATCHED_MAX_PAGES, DEFAULT_MAX_PAGES), 50));
}

function getCacheTtlMs() {
    return parsePositiveInt(process.env.MAL_WATCHED_CACHE_TTL_MS, DEFAULT_CACHE_TTL_MS);
}

function getCacheMaxUsers() {
    return parsePositiveInt(process.env.MAL_WATCHED_CACHE_MAX_USERS, DEFAULT_CACHE_MAX_USERS);
}

function tokenFingerprint(token) {
    return crypto.createHash('sha256').update(String(token)).digest('hex');
}

function shuffledCopy(items = []) {
    const copy = Array.isArray(items) ? items.slice() : [];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = crypto.randomInt(i + 1);
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function pruneCache(now = Date.now()) {
    for (const [key, entry] of watchedCache) {
        if (now >= entry.expiresAt) watchedCache.delete(key);
    }

    while (watchedCache.size > getCacheMaxUsers()) {
        const first = watchedCache.keys().next();
        if (first.done) break;
        watchedCache.delete(first.value);
    }
}

function readCachedWatched(userId, fingerprint, now = Date.now()) {
    const entry = watchedCache.get(userId);
    if (!entry) return null;
    if (entry.fingerprint !== fingerprint || now >= entry.expiresAt) {
        watchedCache.delete(userId);
        return null;
    }
    return entry.value;
}

function writeCachedWatched(userId, fingerprint, value, now = Date.now()) {
    watchedCache.set(userId, {
        fingerprint,
        value,
        expiresAt: now + getCacheTtlMs()
    });
    pruneCache(now);
}

function normalizeMalAnimeScore(value) {
    const parsed = Number.parseFloat(value);
    if (!Number.isFinite(parsed) || parsed <= 0) return null;
    const bucket = Math.trunc(parsed);
    if (bucket < MIN_SCORE_FILTER || bucket > MAX_SCORE_FILTER) return null;
    return bucket;
}

function normalizePlayerAnimeScore(value) {
    const parsed = Number.parseInt(value, 10);
    if (!Number.isFinite(parsed) || parsed < 0 || parsed > MAX_SCORE_FILTER) return null;
    return parsed;
}

function normalizeAnimeSeed(row) {
    const node = row?.node || {};
    const animeId = Number.parseInt(node?.id, 10);
    if (!Number.isInteger(animeId) || animeId <= 0) return null;

    const animeTitle = String(
        node?.title ||
        node?.title_english ||
        node?.alternative_titles?.en ||
        node?.alternative_titles?.ja ||
        ''
    ).trim();

    if (!animeTitle) return null;
    return {
        animeId,
        animeTitle,
        animeScore: normalizeMalAnimeScore(node?.mean),
        playerScore: normalizePlayerAnimeScore(row?.list_status?.score)
    };
}

async function fetchWatchedAnimeFromMal(accessToken) {
    const pageSize = getPageSize();
    const maxPages = getMaxPages();

    const dedup = new Set();
    const list = [];
    let offset = 0;

    for (let page = 0; page < maxPages; page += 1) {
        const response = await axios.get(`${getMalApiBaseUrl()}/users/@me/animelist`, {
            headers: { Authorization: `Bearer ${accessToken}` },
            params: {
                limit: pageSize,
                offset,
                fields: 'list_status,mean'
            },
            timeout: 12_000
        });

        const rows = Array.isArray(response.data?.data) ? response.data.data : [];
        if (rows.length === 0) break;

        for (const row of rows) {
            const status = String(row?.list_status?.status || '').toLowerCase();
            if (!WATCHED_STATUSES.has(status)) continue;

            const seed = normalizeAnimeSeed(row);
            if (!seed) continue;
            if (dedup.has(seed.animeId)) continue;

            dedup.add(seed.animeId);
            list.push(seed);
        }

        if (rows.length < pageSize) break;
        if (!response.data?.paging?.next) break;
        offset += pageSize;
    }

    return list;
}

async function getWatchedAnimeForUser(user) {
    const encrypted = user?.malAccessToken;
    if (!encrypted) {
        return { userId: user.id, seeds: [], linked: false, error: null };
    }

    const accessToken = decryptToken(encrypted);
    if (!accessToken) {
        return { userId: user.id, seeds: [], linked: false, error: null };
    }

    const fingerprint = tokenFingerprint(accessToken);
    const cached = readCachedWatched(user.id, fingerprint);
    if (cached) {
        return { userId: user.id, seeds: cached, linked: true, error: null };
    }

    try {
        const seeds = await fetchWatchedAnimeFromMal(accessToken);
        writeCachedWatched(user.id, fingerprint, seeds);
        return { userId: user.id, seeds, linked: true, error: null };
    } catch (err) {
        const status = Number.parseInt(err?.response?.status, 10);
        const message = status === 401
            ? 'MAL access token expired or invalid'
            : 'Could not fetch MAL watched list';
        return { userId: user.id, seeds: [], linked: true, error: message };
    }
}

function nextAvailableFromPool({ pool, cursorRef, usedAnimeIds }) {
    while (cursorRef.index < pool.length) {
        const candidate = pool[cursorRef.index];
        cursorRef.index += 1;
        if (usedAnimeIds.has(candidate.animeId)) continue;
        return candidate;
    }
    return null;
}

function computeQuotas(roundCount, playerIds) {
    const quotas = new Map();
    const base = Math.floor(roundCount / playerIds.length);
    let remainder = roundCount % playerIds.length;

    for (const userId of playerIds) {
        quotas.set(userId, base + (remainder > 0 ? 1 : 0));
        if (remainder > 0) remainder -= 1;
    }
    return quotas;
}

function buildAssignmentOrder(roundCount, playerIds) {
    const quotas = computeQuotas(roundCount, playerIds);
    const assignment = [];

    while (assignment.length < roundCount) {
        let progressed = false;
        for (const userId of playerIds) {
            const left = quotas.get(userId) || 0;
            if (left <= 0) continue;

            assignment.push(userId);
            quotas.set(userId, left - 1);
            progressed = true;
            if (assignment.length >= roundCount) break;
        }
        if (!progressed) break;
    }

    return assignment;
}

function buildPlayerPoolsInOrder(playerIds, poolByPlayer) {
    return playerIds.map((userId) => ({
        userId,
        pool: shuffledCopy(poolByPlayer.get(userId) || []),
        cursorRef: { index: 0 }
    }));
}

function getMalOnlyReserveTarget(roundCount) {
    const base = Math.max(
        Number.parseInt(roundCount, 10) || 0,
        (Number.parseInt(roundCount, 10) || 0) * MAL_ONLY_RESERVE_MULTIPLIER
    );
    return Math.max(1, Math.min(base, MAL_ONLY_RESERVE_CAP));
}

function appendMalOnlyReserveFromPools({
    plan,
    pools,
    usedAnimeIds,
    roundCount
}) {
    const target = getMalOnlyReserveTarget(roundCount);
    if (!Array.isArray(plan) || !Array.isArray(pools) || plan.length >= target) return;

    let progressed = true;
    while (plan.length < target && progressed) {
        progressed = false;
        for (const player of pools) {
            const picked = nextAvailableFromPool({
                pool: player.pool,
                cursorRef: player.cursorRef,
                usedAnimeIds
            });
            if (!picked) continue;

            usedAnimeIds.add(picked.animeId);
            plan.push({
                animeId: picked.animeId,
                animeTitle: picked.animeTitle,
                sourcePlayerId: player.userId
            });
            progressed = true;
            if (plan.length >= target) break;
        }
    }
}

function fillFromPopular({ plan, roundCount, usedAnimeIds, popularCatalog }) {
    const source = Array.isArray(popularCatalog) && popularCatalog.length > 0
        ? popularCatalog
        : POPULAR_CATALOG;
    for (const seed of source) {
        if (plan.length >= roundCount) break;
        if (usedAnimeIds.has(seed.animeId)) continue;
        usedAnimeIds.add(seed.animeId);
        plan.push({
            animeId: seed.animeId,
            animeTitle: seed.animeTitle,
            sourcePlayerId: null
        });
    }
}

function failMode(message) {
    throw httpError(400, message);
}

function clampScoreFilter(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    if (!Number.isFinite(parsed)) return fallback;
    return Math.max(MIN_SCORE_FILTER, Math.min(MAX_SCORE_FILTER, parsed));
}

function normalizeSessionScoreFilters(session) {
    const animeScoreMin = clampScoreFilter(session?.animeScoreMin, MIN_SCORE_FILTER);
    const animeScoreMax = clampScoreFilter(session?.animeScoreMax, MAX_SCORE_FILTER);
    const playerScoreMin = clampScoreFilter(session?.playerScoreMin, MIN_SCORE_FILTER);
    const playerScoreMax = clampScoreFilter(session?.playerScoreMax, MAX_SCORE_FILTER);

    if (animeScoreMin > animeScoreMax) {
        failMode('animeScoreMin cannot be greater than animeScoreMax');
    }
    if (playerScoreMin > playerScoreMax) {
        failMode('playerScoreMin cannot be greater than playerScoreMax');
    }

    return {
        animeScoreMin,
        animeScoreMax,
        playerScoreMin,
        playerScoreMax
    };
}

function isFullScoreRange(min, max) {
    return min <= MIN_SCORE_FILTER && max >= MAX_SCORE_FILTER;
}

function scoreInRange(score, min, max) {
    return Number.isInteger(score) && score >= min && score <= max;
}

function filterMalPoolsByScore({ pools, animeScoreMin, animeScoreMax, playerScoreMin, playerScoreMax }) {
    const filtered = new Map();
    const allowUnratedPlayer = isFullScoreRange(playerScoreMin, playerScoreMax);
    const allowUnknownAnimeScore = isFullScoreRange(animeScoreMin, animeScoreMax);

    for (const [userId, seeds] of pools.entries()) {
        const next = (Array.isArray(seeds) ? seeds : []).filter((seed) => {
            const animeScore = normalizeMalAnimeScore(seed?.animeScore);
            if (Number.isInteger(animeScore)) {
                if (!scoreInRange(animeScore, animeScoreMin, animeScoreMax)) return false;
            } else if (!allowUnknownAnimeScore) {
                return false;
            }

            const playerScore = normalizePlayerAnimeScore(seed?.playerScore);
            if (Number.isInteger(playerScore) && playerScore >= MIN_SCORE_FILTER) {
                return scoreInRange(playerScore, playerScoreMin, playerScoreMax);
            }

            return allowUnratedPlayer;
        });

        filtered.set(userId, next);
    }

    return filtered;
}

function normalizeCatalogAnimeScore(value) {
    const parsed = Number.parseFloat(value);
    if (!Number.isFinite(parsed)) return null;
    const bucket = Math.trunc(parsed);
    if (bucket < MIN_SCORE_FILTER || bucket > MAX_SCORE_FILTER) return null;
    return bucket;
}

function filterPopularCatalogByAnimeScore(popularCatalog, animeScoreMin, animeScoreMax) {
    const allowUnknownAnimeScore = isFullScoreRange(animeScoreMin, animeScoreMax);
    const source = Array.isArray(popularCatalog) && popularCatalog.length > 0
        ? popularCatalog
        : POPULAR_CATALOG;

    return source.filter((seed) => {
        const animeScore = normalizeCatalogAnimeScore(seed?.animeScore);
        if (Number.isInteger(animeScore)) {
            return scoreInRange(animeScore, animeScoreMin, animeScoreMax);
        }
        return allowUnknownAnimeScore;
    });
}

function selectStandard({
    roundCount,
    sourceMode,
    playerIds,
    poolByPlayer,
    popularCatalog
}) {
    const plan = [];
    const usedAnimeIds = new Set();
    const pools = buildPlayerPoolsInOrder(playerIds, poolByPlayer);

    let progressed = true;
    while (plan.length < roundCount && progressed) {
        progressed = false;
        for (const player of pools) {
            const picked = nextAvailableFromPool({
                pool: player.pool,
                cursorRef: player.cursorRef,
                usedAnimeIds
            });
            if (!picked) continue;

            usedAnimeIds.add(picked.animeId);
            plan.push({
                animeId: picked.animeId,
                animeTitle: picked.animeTitle,
                sourcePlayerId: player.userId
            });
            progressed = true;
            if (plan.length >= roundCount) break;
        }
    }

    if (sourceMode === 'MAL_ONLY' && plan.length < roundCount) {
        failMode('Not enough MAL watched anime to satisfy roundCount in MAL_ONLY mode');
    }

    if (sourceMode === 'HYBRID' || sourceMode === 'POPULAR') {
        fillFromPopular({ plan, roundCount, usedAnimeIds, popularCatalog });
    }

    if (sourceMode === 'MAL_ONLY') {
        appendMalOnlyReserveFromPools({
            plan,
            pools,
            usedAnimeIds,
            roundCount
        });
    }

    if (plan.length < roundCount) {
        failMode(`Could not build enough unique anime seeds (${plan.length}/${roundCount})`);
    }

    return plan;
}

function selectBalanced({
    roundCount,
    sourceMode,
    selectionMode,
    playerIds,
    poolByPlayer,
    popularCatalog
}) {
    const strict = selectionMode === 'BALANCED_STRICT';
    const assignment = buildAssignmentOrder(roundCount, playerIds);
    const pools = buildPlayerPoolsInOrder(playerIds, poolByPlayer);
    const poolById = new Map(pools.map((entry) => [entry.userId, entry]));
    const usedAnimeIds = new Set();
    const plan = [];

    for (const expectedUserId of assignment) {
        const primary = poolById.get(expectedUserId);
        let picked = nextAvailableFromPool({
            pool: primary.pool,
            cursorRef: primary.cursorRef,
            usedAnimeIds
        });
        let sourcePlayerId = expectedUserId;

        if (!picked && !strict) {
            for (const alternateUserId of playerIds) {
                if (alternateUserId === expectedUserId) continue;
                const alternate = poolById.get(alternateUserId);
                picked = nextAvailableFromPool({
                    pool: alternate.pool,
                    cursorRef: alternate.cursorRef,
                    usedAnimeIds
                });
                if (picked) {
                    sourcePlayerId = alternateUserId;
                    break;
                }
            }
        }

        if (!picked && !strict && sourceMode === 'HYBRID') {
            const fallbackCatalog = Array.isArray(popularCatalog) && popularCatalog.length > 0
                ? popularCatalog
                : POPULAR_CATALOG;
            for (const seed of fallbackCatalog) {
                if (usedAnimeIds.has(seed.animeId)) continue;
                picked = seed;
                sourcePlayerId = null;
                break;
            }
        }

        if (!picked) {
            if (strict) {
                failMode(`Balanced strict mode cannot satisfy per-player MAL quotas (missing source for user ${expectedUserId})`);
            }
            failMode('Balanced relaxed mode still lacks enough anime after fallback');
        }

        usedAnimeIds.add(picked.animeId);
        plan.push({
            animeId: picked.animeId,
            animeTitle: picked.animeTitle,
            sourcePlayerId
        });
    }

    if (sourceMode === 'MAL_ONLY') {
        appendMalOnlyReserveFromPools({
            plan,
            pools,
            usedAnimeIds,
            roundCount
        });
    }

    return plan;
}

async function loadPlayerMalPools(playerIds) {
    if (!Array.isArray(playerIds) || playerIds.length === 0) {
        return {
            pools: new Map(),
            linkedByUserId: new Map(),
            errorsByUserId: new Map()
        };
    }

    const users = await prisma.user.findMany({
        where: { id: { in: playerIds } },
        select: {
            id: true,
            malAccessToken: true
        }
    });

    const userById = new Map(users.map((user) => [user.id, user]));
    const results = await Promise.all(playerIds.map((userId) => {
        const user = userById.get(userId);
        if (!user) return { userId, seeds: [], linked: false, error: 'User not found' };
        return getWatchedAnimeForUser(user);
    }));

    const pools = new Map();
    const linkedByUserId = new Map();
    const errorsByUserId = new Map();

    for (const result of results) {
        pools.set(result.userId, result.seeds || []);
        linkedByUserId.set(result.userId, Boolean(result.linked));
        if (result.error) errorsByUserId.set(result.userId, result.error);
    }

    return { pools, linkedByUserId, errorsByUserId };
}

function assertMalAvailability({ sourceMode, selectionMode, playerIds, linkedByUserId, errorsByUserId }) {
    if (sourceMode === 'POPULAR') return;

    const missingLinked = playerIds.filter((userId) => !linkedByUserId.get(userId));
    if (selectionMode === 'BALANCED_STRICT' && sourceMode !== 'MAL_ONLY' && missingLinked.length > 0) {
        failMode(`Balanced strict mode requires MAL linked for all players (missing: ${missingLinked.join(', ')})`);
    }

    if (selectionMode === 'BALANCED_STRICT') {
        const errored = playerIds.filter((userId) => errorsByUserId.has(userId));
        if (errored.length > 0) {
            failMode(`Balanced strict mode cannot continue because MAL data fetch failed for users: ${errored.join(', ')}`);
        }
    }
}

async function buildRoundSeedPlan({ session, lobby }) {
    const roundCount = Number.parseInt(session?.roundCount, 10);
    if (!Number.isInteger(roundCount) || roundCount <= 0) {
        failMode('Invalid roundCount for seed planning');
    }

    const sourceMode = String(session?.sourceMode || 'HYBRID');
    const selectionMode = String(session?.selectionMode || 'STANDARD');
    const scoreFilters = normalizeSessionScoreFilters(session);
    const playerIds = (lobby?.players || []).map((player) => player.userId);
    const popularCatalog = filterPopularCatalogByAnimeScore(
        shuffledCopy(POPULAR_CATALOG),
        scoreFilters.animeScoreMin,
        scoreFilters.animeScoreMax
    );

    if (sourceMode === 'POPULAR') {
        return selectStandard({
            roundCount,
            sourceMode,
            playerIds,
            poolByPlayer: new Map(),
            popularCatalog
        });
    }

    const { pools, linkedByUserId, errorsByUserId } = await loadPlayerMalPools(playerIds);
    const filteredPools = filterMalPoolsByScore({
        pools,
        animeScoreMin: scoreFilters.animeScoreMin,
        animeScoreMax: scoreFilters.animeScoreMax,
        playerScoreMin: scoreFilters.playerScoreMin,
        playerScoreMax: scoreFilters.playerScoreMax
    });
    const selectedPlayerIds = sourceMode === 'MAL_ONLY'
        ? playerIds.filter((userId) => linkedByUserId.get(userId))
        : playerIds;

    if (sourceMode === 'MAL_ONLY' && selectedPlayerIds.length === 0) {
        return selectStandard({
            roundCount,
            sourceMode: 'POPULAR',
            playerIds,
            poolByPlayer: new Map(),
            popularCatalog
        });
    }

    assertMalAvailability({
        sourceMode,
        selectionMode,
        playerIds: selectedPlayerIds,
        linkedByUserId,
        errorsByUserId
    });

    if (selectionMode.startsWith('BALANCED') && selectedPlayerIds.length > 1) {
        return selectBalanced({
            roundCount,
            sourceMode,
            selectionMode,
            playerIds: selectedPlayerIds,
            poolByPlayer: filteredPools,
            popularCatalog
        });
    }

    return selectStandard({
        roundCount,
        sourceMode,
        playerIds: selectedPlayerIds,
        poolByPlayer: filteredPools,
        popularCatalog
    });
}

function __clearMalWatchedCache() {
    watchedCache.clear();
}

module.exports = {
    buildRoundSeedPlan,
    __clearMalWatchedCache
};
