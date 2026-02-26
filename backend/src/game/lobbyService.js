const crypto = require('crypto');
const prisma = require('../lib/prisma');
const { createLobbyInviteToken, verifyLobbyInviteToken } = require('../lib/inviteToken');
const {
    MAX_LOBBY_SIZE,
    MIN_LOBBY_SIZE,
    SOURCE_MODES,
    SELECTION_MODES,
    THEME_MODES
} = require('./constants');
const { httpError } = require('./errors');

function sanitizeLobbyConfig(input = {}) {
    const config = {
        name: typeof input.name === 'string' ? input.name.trim() : null,
        isPrivate: Boolean(input.isPrivate),
        minPlayers: Number.isInteger(input.minPlayers) ? input.minPlayers : MIN_LOBBY_SIZE,
        maxPlayers: Number.isInteger(input.maxPlayers) ? input.maxPlayers : MAX_LOBBY_SIZE,
        roundCount: Number.isInteger(input.roundCount) ? input.roundCount : 10,
        guessSeconds: Number.isInteger(input.guessSeconds) ? input.guessSeconds : 20,
        sampleSeconds: Number.isInteger(input.sampleSeconds) ? input.sampleSeconds : 10,
        answersRevealSeconds: Number.isInteger(input.answersRevealSeconds) ? input.answersRevealSeconds : 3,
        solutionRevealSeconds: Number.isInteger(input.solutionRevealSeconds) ? input.solutionRevealSeconds : 8,
        sourceMode: input.sourceMode || 'HYBRID',
        selectionMode: input.selectionMode || 'STANDARD',
        themeMode: input.themeMode || 'MIXED'
    };

    if (config.name === '') config.name = null;
    if (!SOURCE_MODES.includes(config.sourceMode)) {
        throw httpError(400, `sourceMode must be one of: ${SOURCE_MODES.join(', ')}`);
    }
    if (!SELECTION_MODES.includes(config.selectionMode)) {
        throw httpError(400, `selectionMode must be one of: ${SELECTION_MODES.join(', ')}`);
    }
    if (!THEME_MODES.includes(config.themeMode)) {
        throw httpError(400, `themeMode must be one of: ${THEME_MODES.join(', ')}`);
    }

    if (config.minPlayers < MIN_LOBBY_SIZE || config.minPlayers > MAX_LOBBY_SIZE) {
        throw httpError(400, `minPlayers must be between ${MIN_LOBBY_SIZE} and ${MAX_LOBBY_SIZE}`);
    }
    if (config.maxPlayers < MIN_LOBBY_SIZE || config.maxPlayers > MAX_LOBBY_SIZE) {
        throw httpError(400, `maxPlayers must be between ${MIN_LOBBY_SIZE} and ${MAX_LOBBY_SIZE}`);
    }
    if (config.minPlayers > config.maxPlayers) {
        throw httpError(400, 'minPlayers cannot be greater than maxPlayers');
    }
    if (config.roundCount < 1 || config.roundCount > 50) {
        throw httpError(400, 'roundCount must be between 1 and 50');
    }
    if (config.guessSeconds < 5 || config.guessSeconds > 120) {
        throw httpError(400, 'guessSeconds must be between 5 and 120');
    }
    if (config.sampleSeconds < 3 || config.sampleSeconds > 60) {
        throw httpError(400, 'sampleSeconds must be between 3 and 60');
    }
    if (config.answersRevealSeconds < 1 || config.answersRevealSeconds > 30) {
        throw httpError(400, 'answersRevealSeconds must be between 1 and 30');
    }
    if (config.solutionRevealSeconds < 1 || config.solutionRevealSeconds > 60) {
        throw httpError(400, 'solutionRevealSeconds must be between 1 and 60');
    }

    // Balanced selection only makes sense when lobby can host more than one player.
    if (config.maxPlayers === 1 && config.selectionMode !== SELECTION_MODES[0]) {
        throw httpError(400, 'Balanced selection modes are not allowed for single-player only lobbies');
    }

    return config;
}

function mapLobby(lobby) {
    if (!lobby) return null;
    const players = (lobby.players || []).map((player) => ({
        id: player.id,
        userId: player.userId,
        displayName: player.displayName,
        isConnected: player.isConnected,
        joinedAt: player.joinedAt
    }));

    return {
        id: lobby.id,
        code: lobby.code,
        name: lobby.name,
        status: lobby.status,
        isPrivate: lobby.isPrivate,
        minPlayers: lobby.minPlayers,
        maxPlayers: lobby.maxPlayers,
        roundCount: lobby.roundCount,
        guessSeconds: lobby.guessSeconds,
        sampleSeconds: lobby.sampleSeconds,
        answersRevealSeconds: lobby.answersRevealSeconds,
        solutionRevealSeconds: lobby.solutionRevealSeconds,
        sourceMode: lobby.sourceMode,
        selectionMode: lobby.selectionMode,
        themeMode: lobby.themeMode,
        createdAt: lobby.createdAt,
        updatedAt: lobby.updatedAt,
        host: lobby.host ? {
            id: lobby.host.id,
            username: lobby.host.username,
            nickname: lobby.host.nickname
        } : null,
        players,
        playerCount: players.length,
        canStart: players.length >= lobby.minPlayers
    };
}

function buildInviteLink(baseUrl, code, inviteToken) {
    const origin = (typeof baseUrl === 'string' && baseUrl.trim()) ? baseUrl : 'http://localhost:3000';
    const url = `${origin.replace(/\/$/, '')}/game?lobby=${encodeURIComponent(code)}`;
    if (!inviteToken) return url;
    return `${url}&inviteToken=${encodeURIComponent(inviteToken)}`;
}

function generateInviteToken(code, options = {}) {
    const normalizedCode = String(code || '').toUpperCase();
    return createLobbyInviteToken(normalizedCode, options);
}

async function generateLobbyCode() {
    let code = '';
    let exists = true;

    while (exists) {
        code = crypto.randomBytes(3).toString('hex').toUpperCase();
        const lobby = await prisma.lobby.findUnique({ where: { code } });
        exists = Boolean(lobby);
    }

    return code;
}

async function createLobby(hostUser, payload) {
    const config = sanitizeLobbyConfig(payload);
    const code = await generateLobbyCode();

    const lobby = await prisma.lobby.create({
        data: {
            code,
            ...config,
            hostUserId: hostUser.id,
            players: {
                create: {
                    userId: hostUser.id,
                    displayName: hostUser.nickname || hostUser.username || `user-${hostUser.id}`
                }
            }
        },
        include: {
            host: { select: { id: true, username: true, nickname: true } },
            players: true
        }
    });

    return mapLobby(lobby);
}

async function getLobbyByCode(code) {
    const lobby = await prisma.lobby.findUnique({
        where: { code },
        include: {
            host: { select: { id: true, username: true, nickname: true } },
            players: { orderBy: { joinedAt: 'asc' } }
        }
    });

    return mapLobby(lobby);
}

async function joinLobby(code, user, displayName, options = {}) {
    const normalizedCode = String(code || '').toUpperCase();
    const inviteToken = typeof options.inviteToken === 'string' ? options.inviteToken : null;
    let attempts = 0;

    while (attempts < 3) {
        attempts += 1;
        try {
            await prisma.$transaction(async (tx) => {
                const lobby = await tx.lobby.findUnique({
                    where: { code: normalizedCode },
                    include: {
                        host: { select: { id: true, username: true, nickname: true } },
                        players: { orderBy: { joinedAt: 'asc' } }
                    }
                });

                if (!lobby) throw httpError(404, 'Lobby not found');
                if (lobby.status !== 'WAITING') throw httpError(400, 'Lobby is not accepting new players');

                const existing = lobby.players.find((player) => player.userId === user.id);
                if (existing) {
                    if (!existing.isConnected) {
                        await tx.lobbyPlayer.update({
                            where: { id: existing.id },
                            data: { isConnected: true }
                        });
                    }
                    return;
                }

                if (lobby.isPrivate && lobby.hostUserId !== user.id) {
                    const validInvite = verifyLobbyInviteToken(inviteToken, normalizedCode);
                    if (!validInvite) {
                        throw httpError(403, 'Valid invite token is required for this private lobby');
                    }
                }

                if (lobby.players.length >= lobby.maxPlayers) {
                    throw httpError(400, 'Lobby is full');
                }

                await tx.lobbyPlayer.create({
                    data: {
                        lobbyId: lobby.id,
                        userId: user.id,
                        displayName: (displayName && displayName.trim()) || user.nickname || user.username || `user-${user.id}`
                    }
                });
            }, { isolationLevel: 'Serializable' });

            return getLobbyByCode(normalizedCode);
        } catch (err) {
            // Prisma write-conflict serialization error; retry briefly.
            if (err.code === 'P2034' && attempts < 3) {
                continue;
            }
            // Already joined from a concurrent request; return latest lobby snapshot.
            if (err.code === 'P2002') {
                return getLobbyByCode(normalizedCode);
            }
            throw err;
        }
    }

    throw httpError(409, 'Please retry joining the lobby');
}

async function setPlayerConnection(code, userId, isConnected) {
    const lobby = await prisma.lobby.findUnique({
        where: { code },
        include: { players: true }
    });

    if (!lobby) throw httpError(404, 'Lobby not found');

    const player = lobby.players.find((p) => p.userId === userId);
    if (!player) throw httpError(404, 'Player is not part of this lobby');

    await prisma.lobbyPlayer.update({
        where: { id: player.id },
        data: { isConnected }
    });

    return getLobbyByCode(code);
}

async function leaveLobby(code, userId, options = {}) {
    const force = Boolean(options.force);
    const lobby = await prisma.lobby.findUnique({
        where: { code },
        include: {
            players: { orderBy: { joinedAt: 'asc' } }
        }
    });

    if (!lobby) throw httpError(404, 'Lobby not found');
    if (!force && lobby.status !== 'WAITING') {
        throw httpError(400, 'Cannot leave lobby after game has started');
    }

    const leavingPlayer = lobby.players.find((player) => player.userId === userId);
    if (!leavingPlayer) {
        return getLobbyByCode(code);
    }

    await prisma.$transaction(async (tx) => {
        await tx.lobbyPlayer.delete({
            where: { id: leavingPlayer.id }
        });

        const remainingPlayers = await tx.lobbyPlayer.findMany({
            where: { lobbyId: lobby.id },
            orderBy: { joinedAt: 'asc' }
        });

        if (remainingPlayers.length === 0) {
            await tx.lobby.update({
                where: { id: lobby.id },
                data: { status: 'CLOSED' }
            });
            return;
        }

        if (lobby.hostUserId === userId) {
            await tx.lobby.update({
                where: { id: lobby.id },
                data: { hostUserId: remainingPlayers[0].userId }
            });
        }
    });

    return getLobbyByCode(code);
}

async function updateLobbyConfig(code, actorUserId, patch = {}) {
    const current = await prisma.lobby.findUnique({
        where: { code },
        include: {
            host: { select: { id: true, username: true, nickname: true } },
            players: true
        }
    });

    if (!current) throw httpError(404, 'Lobby not found');
    if (current.hostUserId !== actorUserId) throw httpError(403, 'Only the host can update lobby settings');
    if (current.status !== 'WAITING') throw httpError(400, 'Cannot update lobby settings after game start');

    const config = sanitizeLobbyConfig({
        ...current,
        ...patch
    });

    const updated = await prisma.lobby.update({
        where: { id: current.id },
        data: {
            name: config.name,
            isPrivate: config.isPrivate,
            minPlayers: config.minPlayers,
            maxPlayers: config.maxPlayers,
            roundCount: config.roundCount,
            guessSeconds: config.guessSeconds,
            sampleSeconds: config.sampleSeconds,
            answersRevealSeconds: config.answersRevealSeconds,
            solutionRevealSeconds: config.solutionRevealSeconds,
            sourceMode: config.sourceMode,
            selectionMode: config.selectionMode,
            themeMode: config.themeMode
        },
        include: {
            host: { select: { id: true, username: true, nickname: true } },
            players: { orderBy: { joinedAt: 'asc' } }
        }
    });

    return mapLobby(updated);
}

async function enforceSingleLobbyMembership(userId, options = {}) {
    const exceptCode = options?.exceptCode
        ? String(options.exceptCode).toUpperCase()
        : null;

    const memberships = await prisma.lobbyPlayer.findMany({
        where: { userId },
        include: {
            lobby: {
                select: { code: true, status: true }
            }
        }
    });

    const previousLobbyCodes = [...new Set(
        memberships
            .filter((entry) => {
                if (!entry?.lobby) return false;
                if (exceptCode && entry.lobby.code === exceptCode) return false;
                return ['WAITING', 'IN_GAME'].includes(entry.lobby.status);
            })
            .map((entry) => entry.lobby.code)
    )];

    for (const code of previousLobbyCodes) {
        await leaveLobby(code, userId, { force: true });
    }

    return { removedLobbyCodes: previousLobbyCodes };
}

async function listJoinableLobbies({ q, limit = 20, offset = 0 }) {
    const search = q && q.trim();
    const lobbies = await prisma.lobby.findMany({
        where: {
            status: 'WAITING',
            isPrivate: false,
            ...(search ? {
                OR: [
                    { code: { contains: search, mode: 'insensitive' } },
                    { name: { contains: search, mode: 'insensitive' } }
                ]
            } : {})
        },
        include: {
            host: { select: { id: true, username: true, nickname: true } },
            players: true
        },
        orderBy: { createdAt: 'desc' },
        skip: offset,
        take: limit
    });

    return lobbies
        .filter((lobby) => lobby.players.length < lobby.maxPlayers)
        .map((lobby) => mapLobby(lobby));
}

module.exports = {
    sanitizeLobbyConfig,
    mapLobby,
    buildInviteLink,
    generateInviteToken,
    createLobby,
    getLobbyByCode,
    joinLobby,
    enforceSingleLobbyMembership,
    setPlayerConnection,
    leaveLobby,
    updateLobbyConfig,
    listJoinableLobbies
};
