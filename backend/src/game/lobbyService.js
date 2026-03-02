const crypto = require('crypto');
const prisma = require('../lib/prisma');
const { createLobbyInviteToken, verifyLobbyInviteToken } = require('../lib/inviteToken');
const {
    MAX_LOBBY_SIZE,
    MIN_LOBBY_SIZE,
    SOURCE_MODES,
    SELECTION_MODES,
    THEME_MODES,
    MIN_SCORE_FILTER,
    MAX_SCORE_FILTER
} = require('./constants');
const { httpError } = require('./errors');

const kickedLobbyUsers = new Map();
const leftInGameLobbyUsers = new Set();
const lobbyLastMatchResultByCode = new Map();
const DEFAULT_KICK_COOLDOWN_MS = 2 * 60 * 1000;
const LEGACY_BALANCED_STRICT = 'BALANCED_STRICT';
const BALANCED_MODE = 'BALANCED_RELAXED';

function normalizeLobbyCode(code) {
    return String(code || '').toUpperCase();
}

function kickCooldownKey(code, userId) {
    return `${normalizeLobbyCode(code)}:${userId}`;
}

function voluntaryLeaveKey(code, userId) {
    return `${normalizeLobbyCode(code)}:${userId}`;
}

function parseKickCooldownMs() {
    const parsed = Number.parseInt(process.env.LOBBY_KICK_COOLDOWN_MS, 10);
    if (!Number.isFinite(parsed) || parsed < 1) return DEFAULT_KICK_COOLDOWN_MS;
    return parsed;
}

function clearExpiredKickCooldownsForCode(code) {
    const normalizedCode = normalizeLobbyCode(code);
    const now = Date.now();
    for (const [key, value] of kickedLobbyUsers.entries()) {
        if (!key.startsWith(`${normalizedCode}:`)) continue;
        if (!Number.isFinite(value) || value <= now) {
            kickedLobbyUsers.delete(key);
        }
    }
}

function setKickCooldown(code, userId, ttlMs = parseKickCooldownMs()) {
    const normalizedCode = normalizeLobbyCode(code);
    const expiresAt = Date.now() + Math.max(1, Number.parseInt(ttlMs, 10) || DEFAULT_KICK_COOLDOWN_MS);
    kickedLobbyUsers.set(kickCooldownKey(normalizedCode, userId), expiresAt);
    return expiresAt;
}

function setJoinAbuseCooldown(code, userId, ttlMs = parseKickCooldownMs()) {
    return setKickCooldown(code, userId, ttlMs);
}

function clearKickCooldownsForLobby(code) {
    const normalizedCode = normalizeLobbyCode(code);
    for (const key of kickedLobbyUsers.keys()) {
        if (key.startsWith(`${normalizedCode}:`)) {
            kickedLobbyUsers.delete(key);
        }
    }
}

function setVoluntaryLeaveLock(code, userId) {
    leftInGameLobbyUsers.add(voluntaryLeaveKey(code, userId));
}

function clearVoluntaryLeaveLock(code, userId) {
    leftInGameLobbyUsers.delete(voluntaryLeaveKey(code, userId));
}

function clearVoluntaryLeaveLocksForLobby(code) {
    const normalizedCode = normalizeLobbyCode(code);
    for (const key of leftInGameLobbyUsers) {
        if (key.startsWith(`${normalizedCode}:`)) {
            leftInGameLobbyUsers.delete(key);
        }
    }
}

async function assertVoluntaryLeaveLockAllowsJoin(tx, lobby, userId) {
    const key = voluntaryLeaveKey(lobby.code, userId);
    if (!leftInGameLobbyUsers.has(key)) return;

    const activeSession = await tx.gameSession.findFirst({
        where: {
            lobbyId: lobby.id,
            status: 'IN_PROGRESS'
        },
        select: { id: true }
    });
    const isMatchInProgress = lobby.status === 'IN_GAME' || Boolean(activeSession);
    if (isMatchInProgress) {
        throw httpError(403, 'You left this lobby during the current match. Rejoin when the match ends');
    }

    leftInGameLobbyUsers.delete(key);
}

function assertKickCooldownAllowsJoin(code, userId) {
    const normalizedCode = normalizeLobbyCode(code);
    clearExpiredKickCooldownsForCode(normalizedCode);
    const cooldownUntil = kickedLobbyUsers.get(kickCooldownKey(normalizedCode, userId));
    if (!Number.isFinite(cooldownUntil)) return;

    const remainingMs = cooldownUntil - Date.now();
    if (remainingMs <= 0) {
        kickedLobbyUsers.delete(kickCooldownKey(normalizedCode, userId));
        return;
    }

    const remainingSec = Math.max(1, Math.ceil(remainingMs / 1000));
    throw httpError(403, `You were kicked from this lobby. Try again in ${remainingSec}s`);
}

function normalizeSelectionMode(value) {
    const raw = String(value || '').trim().toUpperCase();
    if (raw === LEGACY_BALANCED_STRICT) return BALANCED_MODE;
    return raw;
}

function normalizeFinalScores(scores = []) {
    if (!Array.isArray(scores)) return [];
    return scores
        .map((row) => ({
            userId: Number.parseInt(row?.userId, 10),
            displayName: String(row?.displayName || '').trim(),
            score: Number.parseInt(row?.score, 10) || 0
        }))
        .filter((row) => Number.isInteger(row.userId) && row.userId > 0 && row.displayName.length > 0)
        .sort((a, b) => b.score - a.score || a.displayName.localeCompare(b.displayName));
}

function setLobbyLastMatchResult(code, result = null) {
    const normalizedCode = normalizeLobbyCode(code);
    if (!normalizedCode) return;

    if (!result || typeof result !== 'object') {
        lobbyLastMatchResultByCode.delete(normalizedCode);
        return;
    }

    const finalScores = normalizeFinalScores(result.finalScores);
    if (finalScores.length === 0) {
        lobbyLastMatchResultByCode.delete(normalizedCode);
        return;
    }

    const winnerUserId = Number.parseInt(result?.winner?.userId, 10);
    const winnerName = String(result?.winner?.displayName || '').trim();

    lobbyLastMatchResultByCode.set(normalizedCode, {
        winner: Number.isInteger(winnerUserId) && winnerUserId > 0
            ? {
                userId: winnerUserId,
                displayName: winnerName || (finalScores.find((row) => row.userId === winnerUserId)?.displayName || '')
            }
            : {
                userId: finalScores[0].userId,
                displayName: finalScores[0].displayName
            },
        finalScores,
        finishedAt: typeof result.finishedAt === 'string' && result.finishedAt.trim()
            ? result.finishedAt
            : new Date().toISOString()
    });
}

function getLobbyLastMatchResult(code) {
    const normalizedCode = normalizeLobbyCode(code);
    if (!normalizedCode) return null;
    const result = lobbyLastMatchResultByCode.get(normalizedCode);
    if (!result) return null;
    return {
        winner: result.winner ? { ...result.winner } : null,
        finalScores: Array.isArray(result.finalScores)
            ? result.finalScores.map((row) => ({ ...row }))
            : [],
        finishedAt: result.finishedAt || null
    };
}

function sanitizeLobbyConfig(input = {}) {
    const clampScoreFilter = (value, fallback) => {
        if (!Number.isFinite(value)) return fallback;
        return Math.max(MIN_SCORE_FILTER, Math.min(MAX_SCORE_FILTER, value));
    };
    const rawAnimeScoreMin = Number.parseInt(input.animeScoreMin, 10);
    const rawAnimeScoreMax = Number.parseInt(input.animeScoreMax, 10);
    const rawPlayerScoreMin = Number.parseInt(input.playerScoreMin, 10);
    const rawPlayerScoreMax = Number.parseInt(input.playerScoreMax, 10);
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
        sourceMode: input.sourceMode || 'MAL_ONLY',
        selectionMode: normalizeSelectionMode(input.selectionMode || 'BALANCED_RELAXED'),
        themeMode: input.themeMode || 'OP_ONLY',
        animeScoreMin: clampScoreFilter(rawAnimeScoreMin, MIN_SCORE_FILTER),
        animeScoreMax: clampScoreFilter(rawAnimeScoreMax, MAX_SCORE_FILTER),
        playerScoreMin: clampScoreFilter(rawPlayerScoreMin, MIN_SCORE_FILTER),
        playerScoreMax: clampScoreFilter(rawPlayerScoreMax, MAX_SCORE_FILTER)
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
    if (config.animeScoreMin > config.animeScoreMax) {
        throw httpError(400, 'animeScoreMin cannot be greater than animeScoreMax');
    }
    if (config.playerScoreMin > config.playerScoreMax) {
        throw httpError(400, 'playerScoreMin cannot be greater than playerScoreMax');
    }

    return config;
}

function mapLobby(lobby) {
    if (!lobby) return null;
    const players = (lobby.players || []).map((player) => ({
        id: player.id,
        userId: player.userId,
        displayName: player.displayName,
        hasMalConnected: Boolean(player?.user?.malUsername),
        isConnected: player.isConnected,
        joinedAt: player.joinedAt
    }));

    const selectionMode = normalizeSelectionMode(lobby.selectionMode);
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
        selectionMode,
        themeMode: lobby.themeMode,
        animeScoreMin: Number.isInteger(lobby.animeScoreMin) ? lobby.animeScoreMin : MIN_SCORE_FILTER,
        animeScoreMax: Number.isInteger(lobby.animeScoreMax) ? lobby.animeScoreMax : MAX_SCORE_FILTER,
        playerScoreMin: Number.isInteger(lobby.playerScoreMin) ? lobby.playerScoreMin : MIN_SCORE_FILTER,
        playerScoreMax: Number.isInteger(lobby.playerScoreMax) ? lobby.playerScoreMax : MAX_SCORE_FILTER,
        createdAt: lobby.createdAt,
        updatedAt: lobby.updatedAt,
        host: lobby.host ? {
            id: lobby.host.id,
            username: lobby.host.username,
            nickname: lobby.host.nickname
        } : null,
        players,
        playerCount: players.length,
        canStart: players.length >= lobby.minPlayers,
        lastMatchResult: getLobbyLastMatchResult(lobby.code)
    };
}

function buildInviteLink(baseUrl, code, inviteToken) {
    const origin = (typeof baseUrl === 'string' && baseUrl.trim()) ? baseUrl : 'http://localhost:3000';
    const invitePath = `${origin.replace(/\/$/, '')}/invite/${encodeURIComponent(code)}`;
    if (!inviteToken) return invitePath;
    return `${invitePath}?i=${encodeURIComponent(inviteToken)}`;
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
            themeMode: config.themeMode,
            animeScoreMin: config.animeScoreMin,
            animeScoreMax: config.animeScoreMax,
            playerScoreMin: config.playerScoreMin,
            playerScoreMax: config.playerScoreMax,
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
            players: {
                include: {
                    user: { select: { malUsername: true } }
                }
            }
        }
    });

    return mapLobby(lobby);
}

async function getLobbyByCode(code) {
    const lobby = await prisma.lobby.findUnique({
        where: { code },
        include: {
            host: { select: { id: true, username: true, nickname: true } },
            players: {
                orderBy: { joinedAt: 'asc' },
                include: {
                    user: { select: { malUsername: true } }
                }
            }
        }
    });

    return mapLobby(lobby);
}

async function joinLobby(code, user, displayName, options = {}) {
    const normalizedCode = normalizeLobbyCode(code);
    const inviteToken = typeof options.inviteToken === 'string' ? options.inviteToken : null;
    let attempts = 0;

    assertKickCooldownAllowsJoin(normalizedCode, user.id);

    while (attempts < 3) {
        attempts += 1;
        try {
            await prisma.$transaction(async (tx) => {
                assertKickCooldownAllowsJoin(normalizedCode, user.id);

                const lobby = await tx.lobby.findUnique({
                    where: { code: normalizedCode },
                    include: {
                        host: { select: { id: true, username: true, nickname: true } },
                        players: { orderBy: { joinedAt: 'asc' } }
                    }
                });

                if (!lobby) throw httpError(404, 'Lobby not found');
                await assertVoluntaryLeaveLockAllowsJoin(tx, lobby, user.id);

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

                if (lobby.status !== 'WAITING') throw httpError(400, 'Lobby is not accepting new players');

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
    let lobbyClosed = false;
    const lobby = await prisma.lobby.findUnique({
        where: { code },
        include: {
            players: { orderBy: { joinedAt: 'asc' } }
        }
    });

    if (!lobby) throw httpError(404, 'Lobby not found');

    const activeSession = await prisma.gameSession.findFirst({
        where: {
            lobbyId: lobby.id,
            status: 'IN_PROGRESS'
        },
        select: { id: true }
    });
    const isMatchInProgress = lobby.status === 'IN_GAME' || Boolean(activeSession);

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
            if (isMatchInProgress) {
                await tx.gameSession.updateMany({
                    where: {
                        lobbyId: lobby.id,
                        status: 'IN_PROGRESS'
                    },
                    data: {
                        status: 'CANCELLED',
                        endedAt: new Date()
                    }
                });
            }
            await tx.lobby.update({
                where: { id: lobby.id },
                data: { status: 'CLOSED' }
            });
            lobbyClosed = true;
            clearKickCooldownsForLobby(code);
            clearVoluntaryLeaveLocksForLobby(code);
            lobbyLastMatchResultByCode.delete(normalizeLobbyCode(code));
            return;
        }

        if (lobby.hostUserId === userId) {
            await tx.lobby.update({
                where: { id: lobby.id },
                data: { hostUserId: remainingPlayers[0].userId }
            });
        }
    });

    if (!force) {
        if (isMatchInProgress) {
            setVoluntaryLeaveLock(code, userId);
        } else {
            clearVoluntaryLeaveLock(code, userId);
        }
    } else {
        clearVoluntaryLeaveLock(code, userId);
    }

    return getLobbyByCode(code);
}

async function closeLobby(code, options = {}) {
    const normalizedCode = normalizeLobbyCode(code);
    const cancelActiveSession = options.cancelActiveSession !== false;

    const lobby = await prisma.lobby.findUnique({
        where: { code: normalizedCode },
        include: {
            players: { orderBy: { joinedAt: 'asc' } }
        }
    });
    if (!lobby) return null;

    await prisma.$transaction(async (tx) => {
        if (cancelActiveSession) {
            await tx.gameSession.updateMany({
                where: {
                    lobbyId: lobby.id,
                    status: 'IN_PROGRESS'
                },
                data: {
                    status: 'CANCELLED',
                    endedAt: new Date()
                }
            });
        }

        await tx.lobbyPlayer.deleteMany({
            where: { lobbyId: lobby.id }
        });

        await tx.lobby.update({
            where: { id: lobby.id },
            data: { status: 'CLOSED' }
        });
    });

    clearKickCooldownsForLobby(normalizedCode);
    clearVoluntaryLeaveLocksForLobby(normalizedCode);
    lobbyLastMatchResultByCode.delete(normalizedCode);
    return getLobbyByCode(normalizedCode);
}

async function resolveOfflineHostTimeout(code) {
    const normalizedCode = normalizeLobbyCode(code);
    const lobby = await prisma.lobby.findUnique({
        where: { code: normalizedCode },
        include: {
            players: {
                orderBy: { joinedAt: 'asc' },
                include: {
                    user: { select: { malUsername: true } }
                }
            },
            host: { select: { id: true, username: true, nickname: true } }
        }
    });
    if (!lobby || lobby.status === 'CLOSED') {
        return { action: 'none', lobby: null };
    }

    const hostPlayer = (lobby.players || []).find((player) => player.userId === lobby.hostUserId);
    if (!hostPlayer || hostPlayer.isConnected !== false) {
        return { action: 'none', lobby: mapLobby(lobby) };
    }

    if (lobby.status === 'WAITING') {
        const transferTarget = (lobby.players || []).find((player) => (
            player.userId !== lobby.hostUserId && player.isConnected !== false
        ));
        if (transferTarget) {
            await prisma.$transaction(async (tx) => {
                await tx.lobby.update({
                    where: { id: lobby.id },
                    data: { hostUserId: transferTarget.userId }
                });
                await tx.lobbyPlayer.delete({
                    where: { id: hostPlayer.id }
                });
            });

            const updatedLobby = await getLobbyByCode(normalizedCode);
            return {
                action: 'transferred',
                lobby: updatedLobby,
                removedUserId: hostPlayer.userId,
                newHostUserId: transferTarget.userId
            };
        }
    }

    const closedLobby = await closeLobby(normalizedCode, { cancelActiveSession: true });
    return {
        action: 'closed',
        lobby: closedLobby,
        removedUserId: hostPlayer.userId
    };
}

async function kickPlayer(code, actorUserId, targetUserId, options = {}) {
    const normalizedCode = normalizeLobbyCode(code);
    const targetId = Number.parseInt(targetUserId, 10);
    if (!Number.isInteger(targetId)) throw httpError(400, 'Target user is invalid');

    const lobby = await prisma.lobby.findUnique({
        where: { code: normalizedCode },
        include: {
            players: { orderBy: { joinedAt: 'asc' } }
        }
    });

    if (!lobby) throw httpError(404, 'Lobby not found');
    if (lobby.hostUserId !== actorUserId) throw httpError(403, 'Only the host can kick players');
    if (lobby.status !== 'WAITING') throw httpError(400, 'Cannot kick players after game has started');
    if (targetId === lobby.hostUserId) throw httpError(400, 'Host cannot kick themselves');

    const targetPlayer = lobby.players.find((player) => player.userId === targetId);
    if (!targetPlayer) throw httpError(404, 'Player is not in this lobby');

    await prisma.lobbyPlayer.delete({
        where: { id: targetPlayer.id }
    });

    const cooldownUntil = setKickCooldown(normalizedCode, targetId, options.cooldownMs);
    const updatedLobby = await getLobbyByCode(normalizedCode);

    return {
        lobby: updatedLobby,
        kickedUserId: targetId,
        cooldownUntil
    };
}

async function promoteHost(code, actorUserId, targetUserId) {
    const normalizedCode = normalizeLobbyCode(code);
    const targetId = Number.parseInt(targetUserId, 10);
    if (!Number.isInteger(targetId)) throw httpError(400, 'Target user is invalid');

    const lobby = await prisma.lobby.findUnique({
        where: { code: normalizedCode },
        include: {
            players: true
        }
    });

    if (!lobby) throw httpError(404, 'Lobby not found');
    if (lobby.hostUserId !== actorUserId) throw httpError(403, 'Only the host can promote a new host');
    if (lobby.status !== 'WAITING') throw httpError(400, 'Cannot transfer host after game has started');
    if (targetId === lobby.hostUserId) throw httpError(400, 'Selected player is already host');

    const targetPlayer = lobby.players.find((player) => player.userId === targetId);
    if (!targetPlayer) throw httpError(404, 'Player is not in this lobby');

    await prisma.lobby.update({
        where: { id: lobby.id },
        data: { hostUserId: targetId }
    });

    const updatedLobby = await getLobbyByCode(normalizedCode);
    return {
        lobby: updatedLobby,
        promotedUserId: targetId
    };
}

async function updateLobbyConfig(code, actorUserId, patch = {}) {
    const current = await prisma.lobby.findUnique({
        where: { code },
        include: {
            host: { select: { id: true, username: true, nickname: true } },
            players: {
                include: {
                    user: { select: { malUsername: true } }
                }
            }
        }
    });

    if (!current) throw httpError(404, 'Lobby not found');
    if (current.hostUserId !== actorUserId) throw httpError(403, 'Only the host can update lobby settings');
    if (current.status !== 'WAITING') throw httpError(400, 'Cannot update lobby settings after game start');

    const config = sanitizeLobbyConfig({
        ...current,
        ...patch
    });
    if (config.maxPlayers < current.players.length) {
        throw httpError(400, `maxPlayers cannot be lower than current player count (${current.players.length})`);
    }

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
            themeMode: config.themeMode,
            animeScoreMin: config.animeScoreMin,
            animeScoreMax: config.animeScoreMax,
            playerScoreMin: config.playerScoreMin,
            playerScoreMax: config.playerScoreMax
        },
        include: {
            host: { select: { id: true, username: true, nickname: true } },
            players: {
                orderBy: { joinedAt: 'asc' },
                include: {
                    user: { select: { malUsername: true } }
                }
            }
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
            players: {
                include: {
                    user: { select: { malUsername: true } }
                }
            }
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
    parseKickCooldownMs,
    setJoinAbuseCooldown,
    setLobbyLastMatchResult,
    createLobby,
    getLobbyByCode,
    joinLobby,
    kickPlayer,
    promoteHost,
    enforceSingleLobbyMembership,
    setPlayerConnection,
    leaveLobby,
    closeLobby,
    resolveOfflineHostTimeout,
    updateLobbyConfig,
    listJoinableLobbies
};
