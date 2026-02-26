const telemetry = require('../lib/telemetry');
const { syncCatalogIncremental } = require('../game/animeCatalogService');

const DEFAULT_SYNC_INTERVAL_MS = 24 * 60 * 60 * 1000;
const DEFAULT_STARTUP_PAGES = 8;

function parsePositiveInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getSyncIntervalMs() {
    return parsePositiveInt(process.env.ANIME_CATALOG_SYNC_INTERVAL_MS, DEFAULT_SYNC_INTERVAL_MS);
}

function getStartupPages() {
    return parsePositiveInt(process.env.ANIME_CATALOG_SYNC_STARTUP_PAGES, DEFAULT_STARTUP_PAGES);
}

async function runAnimeCatalogSyncSweep(options = {}) {
    const pagesPerRun = parsePositiveInt(
        options.pagesPerRun,
        parsePositiveInt(process.env.JIKAN_CATALOG_SYNC_PAGES_PER_RUN, 20)
    );
    return syncCatalogIncremental({ pagesPerRun });
}

function startAnimeCatalogSyncJob() {
    if (process.env.NODE_ENV === 'test') {
        return () => {};
    }

    const runSync = async (options = {}, reason = 'interval') => {
        try {
            const summary = await runAnimeCatalogSyncSweep(options);
            telemetry.info('anime_catalog.sync_job_sweep', {
                reason,
                ...summary
            });
        } catch (err) {
            telemetry.error('anime_catalog.sync_job_failed', err, { reason });
        }
    };

    runSync({ pagesPerRun: getStartupPages() }, 'startup').catch(() => {});

    const interval = setInterval(() => {
        runSync({}, 'interval').catch(() => {});
    }, getSyncIntervalMs());
    if (typeof interval.unref === 'function') interval.unref();

    return () => clearInterval(interval);
}

module.exports = {
    runAnimeCatalogSyncSweep,
    startAnimeCatalogSyncJob
};
