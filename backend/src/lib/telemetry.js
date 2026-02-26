const LEVEL_RANK = {
    debug: 10,
    info: 20,
    warn: 30,
    error: 40
};

function normalizeLevel(rawLevel, fallback = 'info') {
    const value = String(rawLevel || '').trim().toLowerCase();
    return Object.prototype.hasOwnProperty.call(LEVEL_RANK, value) ? value : fallback;
}

function getMinLevel() {
    const defaultLevel = process.env.NODE_ENV === 'test' ? 'error' : 'info';
    return normalizeLevel(process.env.TELEMETRY_LEVEL, defaultLevel);
}

function isEnabled() {
    const raw = String(process.env.TELEMETRY_ENABLED || '').trim().toLowerCase();
    if (raw === '1' || raw === 'true') return true;
    if (raw === '0' || raw === 'false') return false;
    return process.env.NODE_ENV !== 'test';
}

function shouldLog(level) {
    if (!isEnabled()) return false;
    const resolved = normalizeLevel(level);
    return LEVEL_RANK[resolved] >= LEVEL_RANK[getMinLevel()];
}

function safeSerialize(value, depth = 0) {
    if (value === null || value === undefined) return value ?? null;
    if (depth >= 3) return '[max_depth]';
    if (Array.isArray(value)) {
        return value.slice(0, 20).map((item) => safeSerialize(item, depth + 1));
    }
    if (value instanceof Date) return value.toISOString();
    if (typeof value === 'object') {
        const output = {};
        for (const [key, raw] of Object.entries(value)) {
            if (typeof raw === 'function') continue;
            output[key] = safeSerialize(raw, depth + 1);
        }
        return output;
    }
    if (typeof value === 'number') return Number.isFinite(value) ? value : null;
    if (typeof value === 'string' || typeof value === 'boolean') return value;
    return String(value);
}

function serializeError(err) {
    if (!err) return null;
    return {
        name: String(err?.name || 'Error'),
        message: String(err?.message || 'Unknown error'),
        status: Number.isInteger(err?.status) ? err.status : null,
        code: err?.code ? String(err.code) : null
    };
}

function emit(level, event, context = {}) {
    if (!shouldLog(level)) return;

    const payload = {
        ts: new Date().toISOString(),
        level: normalizeLevel(level),
        event: String(event || 'event'),
        context: safeSerialize(context)
    };

    const line = JSON.stringify(payload);
    if (level === 'error') {
        console.error(line);
        return;
    }
    if (level === 'warn') {
        console.warn(line);
        return;
    }
    console.log(line);
}

function debug(event, context = {}) {
    emit('debug', event, context);
}

function info(event, context = {}) {
    emit('info', event, context);
}

function warn(event, context = {}) {
    emit('warn', event, context);
}

function error(event, err, context = {}) {
    emit('error', event, {
        ...context,
        error: serializeError(err)
    });
}

module.exports = {
    debug,
    info,
    warn,
    error,
    serializeError
};
