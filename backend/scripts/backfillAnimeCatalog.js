require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const prisma = require('../src/lib/prisma');
const { syncCatalogFull } = require('../src/game/animeCatalogService');

function parseArgValue(name) {
    const prefix = `--${name}=`;
    const arg = process.argv.find((value) => value.startsWith(prefix));
    return arg ? arg.slice(prefix.length) : null;
}

function parseArgInt(name, fallback) {
    const raw = parseArgValue(name);
    if (raw === null || raw === undefined || raw === '') return fallback;
    const parsed = Number.parseInt(raw, 10);
    return Number.isFinite(parsed) ? parsed : fallback;
}

async function main() {
    const maxPages = parseArgInt('max-pages', 0); // 0 = until last page
    const pageSize = parseArgInt('page-size', null);
    const requestDelayMs = parseArgInt('delay-ms', null);
    const startPage = parseArgInt('start-page', 1);
    const retryAttempts = parseArgInt('retry-attempts', null);
    const retryBaseDelayMs = parseArgInt('retry-base-delay-ms', null);

    const summary = await syncCatalogFull({
        maxPages,
        pageSize,
        requestDelayMs,
        startPage,
        retryAttempts,
        retryBaseDelayMs
    });

    console.log(JSON.stringify({
        ok: true,
        ...summary
    }));
}

main()
    .catch((err) => {
        console.error(JSON.stringify({
            ok: false,
            error: err?.message || String(err)
        }));
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect().catch(() => {});
    });
