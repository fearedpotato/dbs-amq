const axios = require('axios');
const prisma = require('../lib/prisma');
const telemetry = require('../lib/telemetry');

const DEFAULT_JIKAN_BASE_URL = 'https://api.jikan.moe/v4';
const DEFAULT_TIMEOUT_MS = 8_000;
const DEFAULT_SYNC_PAGE_SIZE = 25;
const DEFAULT_SYNC_PAGES_PER_RUN = 20;
const DEFAULT_SYNC_REQUEST_DELAY_MS = 250;
const DEFAULT_SYNC_RETRY_ATTEMPTS = 6;
const DEFAULT_SYNC_RETRY_BASE_DELAY_MS = 1_500;
const SYNC_STATE_KEY = 'jikan_anime_catalog';

let ensureCatalogTablesPromise = null;

function parsePositiveInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function parseNonNegativeInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function getRequestTimeoutMs() {
    return parsePositiveInt(process.env.JIKAN_SEARCH_TIMEOUT_MS, DEFAULT_TIMEOUT_MS);
}

function getJikanBaseUrl() {
    return String(process.env.JIKAN_BASE_URL || DEFAULT_JIKAN_BASE_URL).replace(/\/+$/, '');
}

function getSyncPageSize() {
    const pageSize = parsePositiveInt(process.env.JIKAN_CATALOG_SYNC_PAGE_SIZE, DEFAULT_SYNC_PAGE_SIZE);
    return Math.max(1, Math.min(pageSize, 25));
}

function getSyncPagesPerRun() {
    return Math.max(1, Math.min(
        parsePositiveInt(process.env.JIKAN_CATALOG_SYNC_PAGES_PER_RUN, DEFAULT_SYNC_PAGES_PER_RUN),
        200
    ));
}

function getSyncRequestDelayMs() {
    return Math.max(0, Math.min(
        parseNonNegativeInt(process.env.JIKAN_CATALOG_SYNC_DELAY_MS, DEFAULT_SYNC_REQUEST_DELAY_MS),
        10_000
    ));
}

function getSyncRetryAttempts() {
    return Math.max(1, Math.min(
        parsePositiveInt(process.env.JIKAN_CATALOG_SYNC_RETRY_ATTEMPTS, DEFAULT_SYNC_RETRY_ATTEMPTS),
        20
    ));
}

function getSyncRetryBaseDelayMs() {
    return Math.max(100, Math.min(
        parsePositiveInt(process.env.JIKAN_CATALOG_SYNC_RETRY_BASE_DELAY_MS, DEFAULT_SYNC_RETRY_BASE_DELAY_MS),
        60_000
    ));
}

function normalizeTitle(value) {
    const normalized = String(value || '').trim();
    return normalized.length > 0 ? normalized : null;
}

function normalizeDate(value) {
    if (!value) return null;
    const ts = Date.parse(String(value));
    if (!Number.isFinite(ts)) return null;
    return new Date(ts);
}

function isReleasedAnime(item, now = Date.now()) {
    if (!item || typeof item !== 'object') return false;

    const status = String(item.status || '').trim().toLowerCase();
    if (status.includes('not yet aired') || status.includes('upcoming')) {
        return false;
    }

    const airedFromTs = Date.parse(String(item.aired?.from || ''));
    if (Number.isFinite(airedFromTs) && airedFromTs > now) {
        return false;
    }

    return true;
}

function toCatalogRow(item) {
    if (!item || typeof item !== 'object') return null;
    const malId = Number.parseInt(item.mal_id, 10);
    if (!Number.isInteger(malId)) return null;

    const titleEnglish = normalizeTitle(item.title_english);
    const title = normalizeTitle(item.title) || titleEnglish || normalizeTitle(item.title_japanese);
    if (!title) return null;

    return {
        malId,
        title,
        titleEnglish,
        titleJapanese: normalizeTitle(item.title_japanese),
        year: Number.isInteger(item.year) ? item.year : null,
        imageUrl: normalizeTitle(item.images?.jpg?.image_url || item.images?.webp?.image_url),
        status: normalizeTitle(item.status),
        airedFrom: normalizeDate(item.aired?.from),
        released: isReleasedAnime(item),
        popularityRank: Number.isInteger(item.popularity) ? item.popularity : null
    };
}

async function ensureCatalogTables() {
    if (ensureCatalogTablesPromise) {
        return ensureCatalogTablesPromise;
    }

    ensureCatalogTablesPromise = (async () => {
        await prisma.$executeRawUnsafe(`
            CREATE TABLE IF NOT EXISTS "AnimeCatalogEntry" (
                "malId" INTEGER PRIMARY KEY,
                "title" TEXT NOT NULL,
                "titleEnglish" TEXT,
                "titleJapanese" TEXT,
                "year" INTEGER,
                "imageUrl" TEXT,
                "status" TEXT,
                "airedFrom" TIMESTAMPTZ,
                "released" BOOLEAN NOT NULL DEFAULT TRUE,
                "popularityRank" INTEGER,
                "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
            );
        `);
        await prisma.$executeRawUnsafe(`
            CREATE INDEX IF NOT EXISTS "AnimeCatalogEntry_released_idx"
            ON "AnimeCatalogEntry" ("released");
        `);
        await prisma.$executeRawUnsafe(`
            CREATE INDEX IF NOT EXISTS "AnimeCatalogEntry_title_idx"
            ON "AnimeCatalogEntry" (LOWER("title"));
        `);
        await prisma.$executeRawUnsafe(`
            CREATE INDEX IF NOT EXISTS "AnimeCatalogEntry_titleEnglish_idx"
            ON "AnimeCatalogEntry" (LOWER("titleEnglish"));
        `);
        await prisma.$executeRawUnsafe(`
            CREATE INDEX IF NOT EXISTS "AnimeCatalogEntry_titleJapanese_idx"
            ON "AnimeCatalogEntry" (LOWER("titleJapanese"));
        `);
        await prisma.$executeRawUnsafe(`
            CREATE INDEX IF NOT EXISTS "AnimeCatalogEntry_title_prefix_idx"
            ON "AnimeCatalogEntry" ((LOWER("title")) text_pattern_ops);
        `);
        await prisma.$executeRawUnsafe(`
            CREATE INDEX IF NOT EXISTS "AnimeCatalogEntry_titleEnglish_prefix_idx"
            ON "AnimeCatalogEntry" ((LOWER("titleEnglish")) text_pattern_ops);
        `);
        await prisma.$executeRawUnsafe(`
            CREATE INDEX IF NOT EXISTS "AnimeCatalogEntry_titleJapanese_prefix_idx"
            ON "AnimeCatalogEntry" ((LOWER("titleJapanese")) text_pattern_ops);
        `);
        await prisma.$executeRawUnsafe(`
            CREATE TABLE IF NOT EXISTS "AnimeCatalogSyncState" (
                "key" TEXT PRIMARY KEY,
                "nextPage" INTEGER NOT NULL DEFAULT 1,
                "lastRunAt" TIMESTAMPTZ,
                "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
            );
        `);
        await prisma.$executeRaw`
            INSERT INTO "AnimeCatalogSyncState" ("key", "nextPage", "createdAt", "updatedAt")
            VALUES (${SYNC_STATE_KEY}, 1, NOW(), NOW())
            ON CONFLICT ("key") DO NOTHING;
        `;
    })();

    try {
        await ensureCatalogTablesPromise;
    } catch (err) {
        ensureCatalogTablesPromise = null;
        throw err;
    }
}

async function searchCatalog(query, { limit = 10 } = {}) {
    const normalizedQuery = String(query || '').trim().toLowerCase();
    if (normalizedQuery.length < 2) return [];

    await ensureCatalogTables();

    const resolvedLimit = Math.max(1, Math.min(parsePositiveInt(limit, 10), 20));
    const startsWithQuery = `${normalizedQuery}%`;
    const likeQuery = `%${normalizedQuery}%`;
    const maxRank = 2_147_483_647;

    const prefixRows = await prisma.$queryRaw`
        SELECT
            "malId" AS "id",
            COALESCE(NULLIF("titleEnglish", ''), "title", NULLIF("titleJapanese", '')) AS "title",
            NULLIF("titleEnglish", '') AS "titleEnglish",
            NULLIF("titleJapanese", '') AS "titleJapanese",
            "year",
            "imageUrl"
        FROM "AnimeCatalogEntry"
        WHERE "released" = TRUE
          AND (
            LOWER(COALESCE("titleEnglish", '')) LIKE ${startsWithQuery}
            OR LOWER(COALESCE("title", '')) LIKE ${startsWithQuery}
            OR LOWER(COALESCE("titleJapanese", '')) LIKE ${startsWithQuery}
          )
        ORDER BY
            CASE
                WHEN LOWER(COALESCE("titleEnglish", '')) = ${normalizedQuery} THEN 0
                WHEN LOWER(COALESCE("title", '')) = ${normalizedQuery} THEN 1
                WHEN LOWER(COALESCE("titleEnglish", '')) LIKE ${startsWithQuery} THEN 2
                WHEN LOWER(COALESCE("title", '')) LIKE ${startsWithQuery} THEN 3
                ELSE 9
            END ASC,
            COALESCE("popularityRank", ${maxRank}) ASC,
            "malId" ASC
        LIMIT ${resolvedLimit};
    `;

    const prefixIds = (Array.isArray(prefixRows) ? prefixRows : [])
        .map((row) => Number.parseInt(row.id, 10))
        .filter((id) => Number.isInteger(id) && id > 0);

    let containsRows = [];
    const remaining = Math.max(0, resolvedLimit - prefixIds.length);
    if (remaining > 0) {
        if (prefixIds.length > 0) {
            containsRows = await prisma.$queryRaw`
                SELECT
                    "malId" AS "id",
                    COALESCE(NULLIF("titleEnglish", ''), "title", NULLIF("titleJapanese", '')) AS "title",
                    NULLIF("titleEnglish", '') AS "titleEnglish",
                    NULLIF("titleJapanese", '') AS "titleJapanese",
                    "year",
                    "imageUrl"
                FROM "AnimeCatalogEntry"
                WHERE "released" = TRUE
                  AND (
                    LOWER(COALESCE("titleEnglish", '')) LIKE ${likeQuery}
                    OR LOWER(COALESCE("title", '')) LIKE ${likeQuery}
                    OR LOWER(COALESCE("titleJapanese", '')) LIKE ${likeQuery}
                  )
                  AND NOT ("malId" = ANY(${prefixIds}::INT[]))
                ORDER BY
                    CASE
                        WHEN LOWER(COALESCE("titleEnglish", '')) = ${normalizedQuery} THEN 0
                        WHEN LOWER(COALESCE("title", '')) = ${normalizedQuery} THEN 1
                        ELSE 9
                    END ASC,
                    COALESCE("popularityRank", ${maxRank}) ASC,
                    "malId" ASC
                LIMIT ${remaining};
            `;
        } else {
            containsRows = await prisma.$queryRaw`
                SELECT
                    "malId" AS "id",
                    COALESCE(NULLIF("titleEnglish", ''), "title", NULLIF("titleJapanese", '')) AS "title",
                    NULLIF("titleEnglish", '') AS "titleEnglish",
                    NULLIF("titleJapanese", '') AS "titleJapanese",
                    "year",
                    "imageUrl"
                FROM "AnimeCatalogEntry"
                WHERE "released" = TRUE
                  AND (
                    LOWER(COALESCE("titleEnglish", '')) LIKE ${likeQuery}
                    OR LOWER(COALESCE("title", '')) LIKE ${likeQuery}
                    OR LOWER(COALESCE("titleJapanese", '')) LIKE ${likeQuery}
                  )
                ORDER BY
                    CASE
                        WHEN LOWER(COALESCE("titleEnglish", '')) = ${normalizedQuery} THEN 0
                        WHEN LOWER(COALESCE("title", '')) = ${normalizedQuery} THEN 1
                        ELSE 9
                    END ASC,
                    COALESCE("popularityRank", ${maxRank}) ASC,
                    "malId" ASC
                LIMIT ${remaining};
            `;
        }
    }

    const combinedRows = [...(Array.isArray(prefixRows) ? prefixRows : []), ...(Array.isArray(containsRows) ? containsRows : [])];
    return combinedRows
        .map((row) => ({
            id: Number.parseInt(row.id, 10),
            title: String(row.title || '').trim(),
            titleEnglish: row.titleEnglish ? String(row.titleEnglish).trim() : null,
            titleJapanese: row.titleJapanese ? String(row.titleJapanese).trim() : null,
            year: Number.isInteger(row.year) ? row.year : null,
            imageUrl: row.imageUrl ? String(row.imageUrl) : null
        }))
        .filter((row) => Number.isInteger(row.id) && row.id > 0 && row.title)
        .slice(0, resolvedLimit);
}

async function getCatalogTitleByMalId(malId) {
    const parsedMalId = Number.parseInt(malId, 10);
    if (!Number.isInteger(parsedMalId) || parsedMalId <= 0) return null;

    try {
        const rows = await prisma.$queryRaw`
            SELECT
                "title",
                NULLIF("titleEnglish", '') AS "titleEnglish",
                NULLIF("titleJapanese", '') AS "titleJapanese"
            FROM "AnimeCatalogEntry"
            WHERE "malId" = ${parsedMalId}
            LIMIT 1;
        `;
        const row = Array.isArray(rows) ? rows[0] : null;
        if (!row) return null;
        return {
            title: row.title ? String(row.title).trim() : null,
            titleEnglish: row.titleEnglish ? String(row.titleEnglish).trim() : null,
            titleJapanese: row.titleJapanese ? String(row.titleJapanese).trim() : null
        };
    } catch (_err) {
        // Catalog table may be unavailable in some environments; treat as optional enrichment.
        return null;
    }
}

async function upsertCatalogEntries(rawRows = [], { source = 'unknown' } = {}) {
    const rows = (Array.isArray(rawRows) ? rawRows : []).map(toCatalogRow).filter(Boolean);
    if (rows.length === 0) {
        return { source, processed: 0, upserted: 0, skipped: 0 };
    }

    await ensureCatalogTables();

    await prisma.$transaction(rows.map((row) => prisma.$executeRaw`
        INSERT INTO "AnimeCatalogEntry" (
            "malId",
            "title",
            "titleEnglish",
            "titleJapanese",
            "year",
            "imageUrl",
            "status",
            "airedFrom",
            "released",
            "popularityRank",
            "createdAt",
            "updatedAt"
        ) VALUES (
            ${row.malId},
            ${row.title},
            ${row.titleEnglish},
            ${row.titleJapanese},
            ${row.year},
            ${row.imageUrl},
            ${row.status},
            ${row.airedFrom},
            ${row.released},
            ${row.popularityRank},
            NOW(),
            NOW()
        )
        ON CONFLICT ("malId") DO UPDATE
        SET
            "title" = EXCLUDED."title",
            "titleEnglish" = EXCLUDED."titleEnglish",
            "titleJapanese" = EXCLUDED."titleJapanese",
            "year" = EXCLUDED."year",
            "imageUrl" = EXCLUDED."imageUrl",
            "status" = EXCLUDED."status",
            "airedFrom" = EXCLUDED."airedFrom",
            "released" = EXCLUDED."released",
            "popularityRank" = EXCLUDED."popularityRank",
            "updatedAt" = NOW();
    `));

    return {
        source,
        processed: rawRows.length,
        upserted: rows.length,
        skipped: Math.max(0, rawRows.length - rows.length)
    };
}

async function getSyncState() {
    await ensureCatalogTables();
    const rows = await prisma.$queryRaw`
        SELECT "key", "nextPage", "lastRunAt"
        FROM "AnimeCatalogSyncState"
        WHERE "key" = ${SYNC_STATE_KEY}
        LIMIT 1;
    `;
    return Array.isArray(rows) && rows.length > 0
        ? rows[0]
        : { key: SYNC_STATE_KEY, nextPage: 1, lastRunAt: null };
}

async function updateSyncState(nextPage) {
    await prisma.$executeRaw`
        UPDATE "AnimeCatalogSyncState"
        SET
            "nextPage" = ${nextPage},
            "lastRunAt" = NOW(),
            "updatedAt" = NOW()
        WHERE "key" = ${SYNC_STATE_KEY};
    `;
}

async function fetchJikanAnimePage(page, pageSize) {
    const response = await axios.get(`${getJikanBaseUrl()}/anime`, {
        timeout: getRequestTimeoutMs(),
        params: {
            page,
            limit: pageSize,
            order_by: 'mal_id',
            sort: 'asc',
            sfw: true
        }
    });

    return {
        rows: Array.isArray(response.data?.data) ? response.data.data : [],
        hasNextPage: Boolean(response.data?.pagination?.has_next_page)
    };
}

function shouldRetrySyncRequest(err) {
    const status = Number(err?.response?.status);
    if (status === 429) return true;
    if (status >= 500 && status <= 599) return true;

    const code = String(err?.code || '').toUpperCase();
    return ['ECONNABORTED', 'ETIMEDOUT', 'ECONNRESET', 'ENOTFOUND', 'EAI_AGAIN'].includes(code);
}

function computeRetryDelayMs(attempt, baseDelayMs) {
    const exponent = Math.max(0, attempt - 1);
    const rawDelay = baseDelayMs * Math.pow(2, exponent);
    const capped = Math.min(rawDelay, 60_000);
    const jitter = Math.floor(Math.random() * 250);
    return capped + jitter;
}

async function fetchJikanAnimePageWithRetry(page, pageSize, options = {}) {
    const maxAttempts = Math.max(1, parsePositiveInt(options.maxAttempts, getSyncRetryAttempts()));
    const baseDelayMs = Math.max(100, parsePositiveInt(options.baseDelayMs, getSyncRetryBaseDelayMs()));

    let attempt = 1;
    for (;;) {
        try {
            return await fetchJikanAnimePage(page, pageSize);
        } catch (err) {
            if (!shouldRetrySyncRequest(err) || attempt >= maxAttempts) {
                throw err;
            }

            const delayMs = computeRetryDelayMs(attempt, baseDelayMs);
            telemetry.warn('anime_catalog.sync_page_retry', {
                page,
                pageSize,
                attempt,
                maxAttempts,
                delayMs,
                status: Number(err?.response?.status) || null,
                code: err?.code ? String(err.code) : null
            });
            await sleep(delayMs);
            attempt += 1;
        }
    }
}

function sleep(ms) {
    if (!Number.isFinite(ms) || ms <= 0) return Promise.resolve();
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function syncCatalogIncremental(options = {}) {
    const pageSize = Math.max(1, Math.min(parsePositiveInt(options.pageSize, getSyncPageSize()), 25));
    const pagesPerRun = Math.max(1, Math.min(parsePositiveInt(options.pagesPerRun, getSyncPagesPerRun()), 200));
    const retryAttempts = Math.max(1, parsePositiveInt(options.retryAttempts, getSyncRetryAttempts()));
    const retryBaseDelayMs = Math.max(100, parsePositiveInt(options.retryBaseDelayMs, getSyncRetryBaseDelayMs()));

    const state = await getSyncState();
    let currentPage = parsePositiveInt(state.nextPage, 1);
    let pagesFetched = 0;
    let rowsFetched = 0;
    let rowsUpserted = 0;
    let wrappedToFirstPage = false;

    for (let i = 0; i < pagesPerRun; i += 1) {
        const pageData = await fetchJikanAnimePageWithRetry(currentPage, pageSize, {
            maxAttempts: retryAttempts,
            baseDelayMs: retryBaseDelayMs
        });
        pagesFetched += 1;

        const rows = pageData.rows;
        rowsFetched += rows.length;
        if (rows.length > 0) {
            const upsertSummary = await upsertCatalogEntries(rows, { source: 'daily_sync' });
            rowsUpserted += upsertSummary.upserted;
        }

        if (!pageData.hasNextPage) {
            currentPage = 1;
            wrappedToFirstPage = true;
            break;
        }

        currentPage += 1;
    }

    await updateSyncState(currentPage);

    const summary = {
        pageSize,
        pagesRequested: pagesPerRun,
        pagesFetched,
        rowsFetched,
        rowsUpserted,
        nextPage: currentPage,
        wrappedToFirstPage
    };

    telemetry.info('anime_catalog.sync_completed', summary);
    return summary;
}

async function syncCatalogFull(options = {}) {
    const pageSize = Math.max(1, Math.min(parsePositiveInt(options.pageSize, getSyncPageSize()), 25));
    const maxPages = Math.max(0, parseNonNegativeInt(options.maxPages, 0)); // 0 = no limit
    const requestDelayMs = Math.max(0, parseNonNegativeInt(options.requestDelayMs, getSyncRequestDelayMs()));
    const retryAttempts = Math.max(1, parsePositiveInt(options.retryAttempts, getSyncRetryAttempts()));
    const retryBaseDelayMs = Math.max(100, parsePositiveInt(options.retryBaseDelayMs, getSyncRetryBaseDelayMs()));
    let currentPage = Math.max(1, parsePositiveInt(options.startPage, 1));

    let pagesFetched = 0;
    let rowsFetched = 0;
    let rowsUpserted = 0;
    let completedAllPages = false;

    for (;;) {
        if (maxPages > 0 && pagesFetched >= maxPages) {
            break;
        }

        const pageData = await fetchJikanAnimePageWithRetry(currentPage, pageSize, {
            maxAttempts: retryAttempts,
            baseDelayMs: retryBaseDelayMs
        });
        pagesFetched += 1;

        const rows = pageData.rows;
        rowsFetched += rows.length;
        if (rows.length > 0) {
            const upsertSummary = await upsertCatalogEntries(rows, { source: 'full_backfill' });
            rowsUpserted += upsertSummary.upserted;
        }

        if (!pageData.hasNextPage) {
            completedAllPages = true;
            currentPage = 1;
            break;
        }

        currentPage += 1;
        await sleep(requestDelayMs);
    }

    await updateSyncState(currentPage);

    const summary = {
        mode: 'full_backfill',
        pageSize,
        maxPages,
        requestDelayMs,
        retryAttempts,
        retryBaseDelayMs,
        pagesFetched,
        rowsFetched,
        rowsUpserted,
        completedAllPages,
        nextPage: currentPage
    };

    telemetry.info('anime_catalog.sync_full_completed', summary);
    return summary;
}

module.exports = {
    ensureCatalogTables,
    searchCatalog,
    getCatalogTitleByMalId,
    upsertCatalogEntries,
    syncCatalogIncremental,
    syncCatalogFull
};
