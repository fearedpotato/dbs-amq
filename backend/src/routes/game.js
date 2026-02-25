const express = require('express');
const authMiddleware = require('../middleware/auth');
const prisma = require('../lib/prisma');
const lobbyService = require('../game/lobbyService');
const searchService = require('../game/searchService');
const { SOURCE_MODES, SELECTION_MODES, THEME_MODES } = require('../game/constants');
const { httpError } = require('../game/errors');

const router = express.Router();

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

async function getCurrentUserFromToken(req) {
    const user = await prisma.user.findUnique({
        where: { id: req.user.userId },
        select: { id: true, username: true, nickname: true }
    });

    if (!user) throw httpError(401, 'User not found');
    return user;
}

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
        const lobby = await lobbyService.createLobby(user, req.body);
        return res.status(201).json({ lobby });
    } catch (err) {
        return handleError(res, err);
    }
});

router.post('/lobbies/:code/join', authMiddleware, async (req, res) => {
    try {
        const code = String(req.params.code || '').toUpperCase();
        if (!code) throw httpError(400, 'Lobby code is required');

        const user = await getCurrentUserFromToken(req);
        const lobby = await lobbyService.joinLobby(code, user, req.body?.displayName);
        return res.json({ lobby });
    } catch (err) {
        return handleError(res, err);
    }
});

router.get('/lobbies/:code', authMiddleware, async (req, res) => {
    try {
        const code = String(req.params.code || '').toUpperCase();
        if (!code) throw httpError(400, 'Lobby code is required');

        const lobby = await lobbyService.getLobbyByCode(code);
        if (!lobby) throw httpError(404, 'Lobby not found');

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

        const lobby = await lobbyService.getLobbyByCode(code);
        if (!lobby) throw httpError(404, 'Lobby not found');

        const inviteUrl = lobbyService.buildInviteLink(process.env.BASE_URL, code);
        return res.json({
            lobbyCode: code,
            inviteUrl
        });
    } catch (err) {
        return handleError(res, err);
    }
});

router.post('/search', authMiddleware, async (req, res) => {
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

module.exports = router;
