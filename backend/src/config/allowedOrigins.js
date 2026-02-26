function normalizeOrigin(value) {
    const raw = String(value || '').trim();
    if (!raw) return null;
    try {
        return new URL(raw).origin;
    } catch (_err) {
        return null;
    }
}

function parseOriginList(value) {
    return String(value || '')
        .split(',')
        .map((item) => normalizeOrigin(item))
        .filter(Boolean);
}

function withDevLocalOrigins(origins, env = process.env) {
    const port = Number.parseInt(String(env.PORT || '3000').trim(), 10);
    const resolvedPort = Number.isFinite(port) && port > 0 ? port : 3000;
    const localDefaults = [
        `http://localhost:${resolvedPort}`,
        `http://127.0.0.1:${resolvedPort}`
    ];
    return [...origins, ...localDefaults];
}

function uniqueOrigins(origins) {
    return [...new Set(origins.filter(Boolean))];
}

function getAllowedOrigins(env = process.env) {
    const fromBase = parseOriginList(env.BASE_URL);
    const fromExtra = parseOriginList(env.ALLOWED_ORIGINS);
    let origins = uniqueOrigins([...fromBase, ...fromExtra]);
    origins = withDevLocalOrigins(origins, env);
    return uniqueOrigins(origins);
}

function isOriginAllowed(requestOrigin, allowedOrigins = []) {
    if (!requestOrigin) return true;
    const normalized = normalizeOrigin(requestOrigin);
    if (!normalized) return false;
    return allowedOrigins.includes(normalized);
}

function getSocketCorsOrigin(env = process.env) {
    const allowedOrigins = getAllowedOrigins(env);
    return allowedOrigins.length > 0 ? allowedOrigins : true;
}

module.exports = {
    getAllowedOrigins,
    isOriginAllowed,
    getSocketCorsOrigin
};
