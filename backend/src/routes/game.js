const express = require('express');
const authMiddleware = require('../middleware/auth');
const prisma = require('../lib/prisma');
const lobbyService = require('../game/lobbyService');
const searchService = require('../game/searchService');
const mediaService = require('../game/mediaService');
const mediaProxyService = require('../game/mediaProxyService');
const { SOURCE_MODES, SELECTION_MODES, THEME_MODES } = require('../game/constants');
const { httpError } = require('../game/errors');
const { createRateLimit } = require('../middleware/rateLimit');
const telemetry = require('../lib/telemetry');

const router = express.Router();

function parsePositiveInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

const proxyRateLimitWindowMs = parsePositiveInt(process.env.MEDIA_PROXY_RATE_LIMIT_WINDOW_MS, 60 * 1000);
const proxyRateLimitMax = parsePositiveInt(process.env.MEDIA_PROXY_RATE_LIMIT_MAX, 60);

const mediaProxyRateLimit = createRateLimit({
    keyPrefix: 'game:media_proxy',
    windowMs: proxyRateLimitWindowMs,
    max: proxyRateLimitMax,
    keyGenerator: (req) => String(req.ip || 'unknown'),
    message: 'Too many media requests. Please try again shortly.',
    onLimit: ({ req, retryAfterSec, bucket, max, windowMs }) => {
        telemetry.warn('media.proxy_rate_limited', {
            ip: req.ip,
            retryAfterSec,
            count: bucket?.count || null,
            max,
            windowMs
        });
    }
});

const joinLobbyRateLimit = createRateLimit({
    keyPrefix: 'game:lobby_join',
    windowMs: 60 * 1000,
    max: 30,
    keyGenerator: (req) => {
        const userPart = req.user?.userId || req.ip || 'unknown';
        const codePart = String(req.params?.code || '').toUpperCase();
        return `${userPart}:${codePart}`;
    },
    message: 'Too many lobby join attempts. Please slow down.'
});

const searchRateLimit = createRateLimit({
    keyPrefix: 'game:search',
    windowMs: 60 * 1000,
    max: 80,
    keyGenerator: (req) => String(req.user?.userId || req.ip || 'unknown'),
    message: 'Too many anime search requests. Please slow down.'
});

function handleError(res, err) {
    if (err.status) {
        return res.status(err.status).json({ error: err.message });
    }
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong' });
}

function assertEnum(value, validValues, fieldName) {
    if (!validValues.includes(value)) {
        throw httpError(400, `${fieldName} must be one of: ${validValues.join(', ')}`);
    }
}

function emitLobbyDirectoryChanged(req, payload = {}) {
    const io = req.app?.get('io');
    if (!io || typeof io.emit !== 'function') return;
    io.emit('lobby:directory_changed', {
        ...payload,
        at: Date.now()
    });
}

async function getCurrentUserFromToken(req) {
    const user = await prisma.user.findUnique({
        where: { id: req.user.userId },
        select: { id: true, username: true, nickname: true }
    });

    if (!user) throw httpError(401, 'User not found');
    return user;
}

function canAccessLobby(lobby, userId) {
    if (!lobby?.isPrivate) return true;
    if (lobby.host?.id === userId) return true;
    return (lobby.players || []).some((player) => player.userId === userId);
}

router.get('/media/proxy', mediaProxyRateLimit, async (req, res) => {
    try {
        if (!mediaProxyService.isEnabled()) {
            throw httpError(503, 'Media proxy is disabled');
        }

        const parsed = mediaProxyService.parseAndVerifyProxyRequest(req.query);
        if (!parsed.ok) {
            throw httpError(parsed.status, parsed.error);
        }

        let entry;
        try {
            entry = await mediaProxyService.getOrCreateCacheEntry(parsed.sourceUrl, {
                lobbyCode: parsed.lobbyCode
            });
        } catch (_err) {
            throw httpError(502, 'Could not fetch media from upstream provider');
        }
        await mediaProxyService.streamCachedMedia(req, res, entry);
    } catch (err) {
        if (res.headersSent) return;
        return handleError(res, err);
    }
});

router.post('/lobbies', authMiddleware, async (req, res) => {
    try {
        const {
            sourceMode = 'HYBRID',
            selectionMode = 'STANDARD',
            themeMode = 'MIXED'
        } = req.body || {};

        assertEnum(sourceMode, SOURCE_MODES, 'sourceMode');
        assertEnum(selectionMode, SELECTION_MODES, 'selectionMode');
        assertEnum(themeMode, THEME_MODES, 'themeMode');

        const user = await getCurrentUserFromToken(req);
        await lobbyService.enforceSingleLobbyMembership(user.id);
        const lobby = await lobbyService.createLobby(user, req.body);
        emitLobbyDirectoryChanged(req, {
            reason: 'create',
            lobbyCode: lobby?.code || null
        });
        return res.status(201).json({ lobby });
    } catch (err) {
        return handleError(res, err);
    }
});

router.post('/lobbies/:code/join', authMiddleware, joinLobbyRateLimit, async (req, res) => {
    try {
        const code = String(req.params.code || '').toUpperCase();
        if (!code) throw httpError(400, 'Lobby code is required');

        const user = await getCurrentUserFromToken(req);
        await lobbyService.enforceSingleLobbyMembership(user.id, { exceptCode: code });
        const inviteToken = typeof req.body?.inviteToken === 'string'
            ? req.body.inviteToken
            : (typeof req.query?.i === 'string'
                    ? req.query.i
            : (typeof req.query?.inviteToken === 'string'
                    ? req.query.inviteToken
                    : (typeof req.headers['x-invite-token'] === 'string' ? req.headers['x-invite-token'] : null)));
        const lobby = await lobbyService.joinLobby(code, user, req.body?.displayName, { inviteToken });
        emitLobbyDirectoryChanged(req, {
            reason: 'join',
            lobbyCode: code
        });
        return res.json({ lobby });
    } catch (err) {
        return handleError(res, err);
    }
});

router.get('/lobbies/:code', authMiddleware, async (req, res) => {
    try {
        const code = String(req.params.code || '').toUpperCase();
        if (!code) throw httpError(400, 'Lobby code is required');
        const user = await getCurrentUserFromToken(req);

        const lobby = await lobbyService.getLobbyByCode(code);
        if (!lobby) throw httpError(404, 'Lobby not found');
        if (!canAccessLobby(lobby, user.id)) throw httpError(403, 'You do not have access to this lobby');

        return res.json({ lobby });
    } catch (err) {
        return handleError(res, err);
    }
});

router.get('/lobbies', authMiddleware, async (req, res) => {
    try {
        const limit = Number.parseInt(req.query.limit, 10) || 20;
        const offset = Number.parseInt(req.query.offset, 10) || 0;
        const q = typeof req.query.q === 'string' ? req.query.q : '';

        const lobbies = await lobbyService.listJoinableLobbies({
            q,
            limit: Math.max(1, Math.min(limit, 50)),
            offset: Math.max(0, offset)
        });

        return res.json({
            lobbies,
            pagination: {
                limit: Math.max(1, Math.min(limit, 50)),
                offset: Math.max(0, offset),
                count: lobbies.length
            }
        });
    } catch (err) {
        return handleError(res, err);
    }
});

router.get('/lobbies/:code/invite', authMiddleware, async (req, res) => {
    try {
        const code = String(req.params.code || '').toUpperCase();
        if (!code) throw httpError(400, 'Lobby code is required');
        const user = await getCurrentUserFromToken(req);

        const lobby = await lobbyService.getLobbyByCode(code);
        if (!lobby) throw httpError(404, 'Lobby not found');
        if (!canAccessLobby(lobby, user.id)) throw httpError(403, 'You do not have access to this lobby');

        const inviteToken = lobby.isPrivate ? lobbyService.generateInviteToken(code) : null;
        const inviteUrl = lobbyService.buildInviteLink(process.env.BASE_URL, code, inviteToken);
        const payload = {
            lobbyCode: code,
            inviteUrl
        };
        if (inviteToken) payload.inviteToken = inviteToken;
        return res.json(payload);
    } catch (err) {
        return handleError(res, err);
    }
});

router.post('/search', authMiddleware, searchRateLimit, async (req, res) => {
    try {
        const query = typeof req.body?.query === 'string' ? req.body.query.trim() : '';
        const limit = Number.isInteger(req.body?.limit) ? req.body.limit : 10;

        if (query.length < 2) {
            throw httpError(400, 'query must have at least 2 characters');
        }

        const data = await searchService.searchAnime(query, { limit: Math.max(1, Math.min(limit, 20)) });
        return res.json(data);
    } catch (err) {
        return handleError(res, err);
    }
});

router.get('/media-source-status', authMiddleware, async (req, res) => {
    try {
        await getCurrentUserFromToken(req);
        const refreshRaw = String(req.query?.refresh || '').toLowerCase();
        const forceRefresh = refreshRaw === '1' || refreshRaw === 'true';
        const status = await mediaService.getMediaProviderStatus({ forceRefresh });
        return res.json({ status });
    } catch (err) {
        return handleError(res, err);
    }
});

module.exports = router;
