const telemetry = require('../lib/telemetry');

const DEFAULT_ANIMETHEMES_BASE_URL = 'https://api.animethemes.moe';
const DEFAULT_ANIMETHEMES_TIMEOUT_MS = 10_000;

function parsePositiveInt(value) {
    const parsed = Number.parseInt(String(value || '').trim(), 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function isHttpUrl(value) {
    try {
        const parsed = new URL(String(value || '').trim());
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch (_err) {
        return false;
    }
}

function isValidHostPattern(value) {
    const raw = String(value || '').trim().toLowerCase();
    if (!raw) return false;

    const base = raw.startsWith('*.') ? raw.slice(2) : raw;
    if (!base) return false;
    if (base.includes('*')) return false;
    if (base.startsWith('.') || base.endsWith('.')) return false;
    if (base.includes('..')) return false;
    return /^[a-z0-9.-]+$/.test(base);
}

function asBoolean(value, fallback = false) {
    const raw = String(value || '').trim().toLowerCase();
    if (!raw) return fallback;
    if (raw === '1' || raw === 'true') return true;
    if (raw === '0' || raw === 'false') return false;
    return fallback;
}

function pushIssue(issues, key, reason) {
    const issue = { key, reason };
    issues.push(issue);
    telemetry.error('startup.env_key_invalid', new Error(reason), { key });
}

function validateStartupEnv({ env = process.env, skipInTest = true } = {}) {
    if (skipInTest && env.NODE_ENV === 'test') {
        return { ok: true, skipped: true, issues: [] };
    }

    const issues = [];

    const jwtSecret = String(env.JWT_SECRET || '').trim();
    if (!jwtSecret) {
        pushIssue(issues, 'JWT_SECRET', 'JWT_SECRET is required');
    } else if (jwtSecret.length < 16) {
        pushIssue(issues, 'JWT_SECRET', 'JWT_SECRET must be at least 16 characters');
    }

    const sessionSecret = String(env.SESSION_SECRET || '').trim();
    if (!sessionSecret) {
        pushIssue(issues, 'SESSION_SECRET', 'SESSION_SECRET is required');
    } else if (sessionSecret.length < 16) {
        pushIssue(issues, 'SESSION_SECRET', 'SESSION_SECRET must be at least 16 characters');
    }

    const lobbyInviteSecret = String(env.LOBBY_INVITE_SECRET || '').trim();
    if (!lobbyInviteSecret) {
        pushIssue(issues, 'LOBBY_INVITE_SECRET', 'LOBBY_INVITE_SECRET is required');
    } else if (lobbyInviteSecret.length < 16) {
        pushIssue(issues, 'LOBBY_INVITE_SECRET', 'LOBBY_INVITE_SECRET must be at least 16 characters');
    }

    const malClientId = String(env.MAL_CLIENT_ID || '').trim();
    if (!malClientId) {
        pushIssue(issues, 'MAL_CLIENT_ID', 'MAL_CLIENT_ID is required');
    }

    const malClientSecret = String(env.MAL_CLIENT_SECRET || '').trim();
    if (!malClientSecret) {
        pushIssue(issues, 'MAL_CLIENT_SECRET', 'MAL_CLIENT_SECRET is required');
    }

    const malRedirectUri = String(env.MAL_REDIRECT_URI || '').trim();
    if (!malRedirectUri) {
        pushIssue(issues, 'MAL_REDIRECT_URI', 'MAL_REDIRECT_URI is required');
    } else if (!isHttpUrl(malRedirectUri)) {
        pushIssue(issues, 'MAL_REDIRECT_URI', 'MAL_REDIRECT_URI must be a valid http/https URL');
    }

    const animeThemesBaseUrl = String(env.ANIMETHEMES_BASE_URL || DEFAULT_ANIMETHEMES_BASE_URL).trim();
    if (!isHttpUrl(animeThemesBaseUrl)) {
        pushIssue(issues, 'ANIMETHEMES_BASE_URL', 'ANIMETHEMES_BASE_URL must be a valid http/https URL');
    }

    const animeThemesTimeoutMs = parsePositiveInt(env.ANIMETHEMES_TIMEOUT_MS || DEFAULT_ANIMETHEMES_TIMEOUT_MS);
    if (!animeThemesTimeoutMs) {
        pushIssue(issues, 'ANIMETHEMES_TIMEOUT_MS', 'ANIMETHEMES_TIMEOUT_MS must be a positive integer');
    } else if (animeThemesTimeoutMs < 1000 || animeThemesTimeoutMs > 120_000) {
        pushIssue(issues, 'ANIMETHEMES_TIMEOUT_MS', 'ANIMETHEMES_TIMEOUT_MS must be between 1000 and 120000');
    }

    const mediaProxyEnabled = asBoolean(env.MEDIA_PROXY_ENABLED, true);
    if (mediaProxyEnabled) {
        const mediaProxyPath = String(env.MEDIA_PROXY_PATH || '/api/game/media/proxy').trim();
        if (!mediaProxyPath.startsWith('/')) {
            pushIssue(issues, 'MEDIA_PROXY_PATH', 'MEDIA_PROXY_PATH must start with "/"');
        }

        const mediaProxyAllowedHostsRaw = String(env.MEDIA_PROXY_ALLOWED_HOSTS || '').trim();
        if (!mediaProxyAllowedHostsRaw) {
            pushIssue(issues, 'MEDIA_PROXY_ALLOWED_HOSTS', 'MEDIA_PROXY_ALLOWED_HOSTS is required when MEDIA_PROXY_ENABLED=true');
        } else {
            const hostPatterns = mediaProxyAllowedHostsRaw
                .split(',')
                .map((item) => item.trim())
                .filter(Boolean);
            if (hostPatterns.length === 0) {
                pushIssue(issues, 'MEDIA_PROXY_ALLOWED_HOSTS', 'MEDIA_PROXY_ALLOWED_HOSTS must contain at least one host pattern');
            }
            for (const pattern of hostPatterns) {
                if (!isValidHostPattern(pattern)) {
                    pushIssue(issues, 'MEDIA_PROXY_ALLOWED_HOSTS', `Invalid host pattern "${pattern}"`);
                }
            }
        }

        const mediaProxyFetchTimeout = parsePositiveInt(env.MEDIA_PROXY_FETCH_TIMEOUT_MS || 20_000);
        if (!mediaProxyFetchTimeout) {
            pushIssue(issues, 'MEDIA_PROXY_FETCH_TIMEOUT_MS', 'MEDIA_PROXY_FETCH_TIMEOUT_MS must be a positive integer');
        }
    }

    if (issues.length > 0) {
        const err = new Error(`Startup env validation failed with ${issues.length} issue(s)`);
        telemetry.error('startup.env_validation_failed', err, {
            issueCount: issues.length,
            issues
        });
        throw err;
    }

    telemetry.info('startup.env_validation_passed', {
        validatedKeys: [
            'JWT_SECRET',
            'SESSION_SECRET',
            'LOBBY_INVITE_SECRET',
            'MAL_CLIENT_ID',
            'MAL_CLIENT_SECRET',
            'MAL_REDIRECT_URI',
            'ANIMETHEMES_BASE_URL',
            'ANIMETHEMES_TIMEOUT_MS',
            'MEDIA_PROXY_ENABLED',
            'MEDIA_PROXY_ALLOWED_HOSTS'
        ]
    });

    return { ok: true, skipped: false, issues: [] };
}

module.exports = {
    validateStartupEnv
};
