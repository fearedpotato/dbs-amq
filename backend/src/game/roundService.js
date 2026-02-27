const prisma = require('../lib/prisma');
const { isGuessCorrect } = require('./scoringService');
const { httpError } = require('./errors');
const { resolveRoundMedia } = require('./mediaService');
const { buildMediaProxyUrl } = require('./mediaProxyService');
const { POPULAR_CATALOG } = require('./catalog');
const { buildRoundSeedPlan } = require('./malSelectionService');

function buildSourceAssignments({ lobbyPlayers, roundCount, selectionMode }) {
    const playerIds = lobbyPlayers.map((player) => player.userId);
    if (playerIds.length === 0) return [];

    if (selectionMode.startsWith('BALANCED') && playerIds.length > 1) {
        const assignments = [];
        const base = Math.floor(roundCount / playerIds.length);
        let remainder = roundCount % playerIds.length;

        for (const userId of playerIds) {
            for (let i = 0; i < base; i += 1) assignments.push(userId);
        }
        for (let i = 0; i < playerIds.length && remainder > 0; i += 1, remainder -= 1) {
            assignments.push(playerIds[i]);
        }

        // Deterministic order: interleave by rotating from host join order.
        return assignments.sort((a, b) => playerIds.indexOf(a) - playerIds.indexOf(b));
    }

    // STANDARD mode: rotate player source attribution (or single player always themselves).
    const assignments = [];
    for (let i = 0; i < roundCount; i += 1) {
        assignments.push(playerIds[i % playerIds.length]);
    }
    return assignments;
}

function rotateCatalogForSession(sessionId) {
    if (POPULAR_CATALOG.length === 0) return [];
    const offset = Math.abs(Number(sessionId) || 0) % POPULAR_CATALOG.length;
    return [...POPULAR_CATALOG.slice(offset), ...POPULAR_CATALOG.slice(0, offset)];
}

function isProviderFailure(err) {
    return Number.isInteger(err?.status) && err.status >= 500;
}

function resolveRequestedSampleSeconds(session) {
    const guessSeconds = Number.parseInt(session?.guessSeconds, 10);
    const answersRevealSeconds = Number.parseInt(session?.answersRevealSeconds, 10);
    const fallbackSampleSeconds = Number.parseInt(session?.sampleSeconds, 10);

    const guess = Number.isInteger(guessSeconds) && guessSeconds > 0
        ? guessSeconds
        : (Number.isInteger(fallbackSampleSeconds) && fallbackSampleSeconds > 0 ? fallbackSampleSeconds : 10);
    const answers = Number.isInteger(answersRevealSeconds) && answersRevealSeconds > 0
        ? answersRevealSeconds
        : 0;

    // Keep sample audible throughout GUESSING and ANSWERS_REVEAL.
    return guess + answers;
}

function buildRoundMediaSignature(media) {
    if (!media || typeof media !== 'object') return null;

    const animeId = Number.parseInt(media.animeId, 10);
    if (!Number.isInteger(animeId) || animeId <= 0) return null;

    const themeType = String(media.themeType || '').trim().toUpperCase();
    const themeTitle = String(media.themeTitle || '').trim().toLowerCase();
    const songId = Number.parseInt(media.themeSongId, 10);
    const videoUrl = String(media.solutionVideoUrl || '').trim();

    if (Number.isInteger(songId) && songId > 0) {
        return `${animeId}|song:${songId}|${themeType}`;
    }
    if (themeType || themeTitle || videoUrl) {
        return `${animeId}|${themeType}|${themeTitle}|${videoUrl}`;
    }
    return null;
}

async function selectRoundMedia({
    session,
    roundIndex,
    usedAnimeIds,
    usedMediaSignatures = null,
    allowReuse = false,
    catalogSeeds = null
}) {
    const sampleSeconds = resolveRequestedSampleSeconds(session);
    const catalog = Array.isArray(catalogSeeds) && catalogSeeds.length > 0
        ? catalogSeeds
        : rotateCatalogForSession(session.id);
    if (catalog.length === 0) return null;

    const start = (roundIndex - 1) % catalog.length;
    const ordered = [...catalog.slice(start), ...catalog.slice(0, start)];

    let bestFallback = null;
    for (const seed of ordered) {
        if (!allowReuse && usedAnimeIds.has(seed.animeId)) continue;

        let media;
        try {
            media = await resolveRoundMedia({
                animeId: seed.animeId,
                animeTitle: seed.animeTitle,
                themeMode: session.themeMode,
                sampleSeconds,
                roundIndex
            });
        } catch (err) {
            if (isProviderFailure(err)) throw err;
            continue;
        }

        if (!media?.solutionVideoUrl) continue;
        if (!allowReuse && usedAnimeIds.has(media.animeId)) continue;
        const signature = buildRoundMediaSignature(media);
        if (signature && usedMediaSignatures instanceof Set && usedMediaSignatures.has(signature)) continue;

        if (media.animeId === seed.animeId) return media;
        if (!bestFallback) bestFallback = media;
    }

    return bestFallback;
}

function buildRoundRow({ sessionId, roundIndex, media, sourcePlayerId, lobbyCode = null }) {
    const acceptedAnimeIds = Array.isArray(media.acceptedAnimeIds)
        ? media.acceptedAnimeIds
            .map((value) => Number.parseInt(value, 10))
            .filter((value) => Number.isInteger(value) && value > 0)
        : [];
    const uniqueAcceptedAnimeIds = [...new Set([
        Number.parseInt(media.animeId, 10),
        ...acceptedAnimeIds
    ].filter((value) => Number.isInteger(value) && value > 0))];

    return {
        sessionId,
        index: roundIndex,
        status: 'PENDING',
        animeId: media.animeId,
        animeTitle: media.animeTitle,
        themeType: media.themeType,
        themeTitle: media.themeTitle,
        sampleStartSec: media.sampleStartSec,
        sampleDurationSec: media.sampleDurationSec,
        solutionVideoUrl: buildMediaProxyUrl(media.solutionVideoUrl, { lobbyCode }),
        solutionAudioUrl: buildMediaProxyUrl(media.solutionAudioUrl, { lobbyCode }),
        acceptedAnimeIds: uniqueAcceptedAnimeIds,
        sourcePlayerId: sourcePlayerId ?? null
    };
}

async function generateInitialRoundsForSession({ session, lobby }) {
    const sampleSeconds = resolveRequestedSampleSeconds(session);
    const existingCount = await prisma.gameRound.count({
        where: { sessionId: session.id }
    });
    if (existingCount > 0) return;

    const sourceAssignments = buildSourceAssignments({
        lobbyPlayers: lobby.players,
        roundCount: session.roundCount,
        selectionMode: session.selectionMode
    });

    const plannedSeeds = await buildRoundSeedPlan({ session, lobby });
    if (!Array.isArray(plannedSeeds) || plannedSeeds.length < session.roundCount) {
        throw httpError(503, 'Could not prepare enough round seeds for this match');
    }
    const isMalOnly = session.sourceMode === 'MAL_ONLY'
        && plannedSeeds.some((seed) => Number.isInteger(Number.parseInt(seed?.sourcePlayerId, 10)));
    const plannedCatalogSeeds = [];
    const sourcePlayerByAnimeId = new Map();
    for (const seed of plannedSeeds) {
        const animeId = Number.parseInt(seed?.animeId, 10);
        if (!Number.isInteger(animeId) || animeId <= 0) continue;
        if (sourcePlayerByAnimeId.has(animeId)) continue;

        sourcePlayerByAnimeId.set(animeId, Object.prototype.hasOwnProperty.call(seed, 'sourcePlayerId')
            ? seed.sourcePlayerId
            : null);
        plannedCatalogSeeds.push({
            animeId,
            animeTitle: seed?.animeTitle || `Anime ${animeId}`
        });
    }

    const usedAnimeIds = new Set();
    const usedMediaSignatures = new Set();
    const rows = [];
    for (let i = 1; i <= session.roundCount; i += 1) {
        const seed = plannedSeeds[i - 1];
        let resolvedSourcePlayerId = Object.prototype.hasOwnProperty.call(seed, 'sourcePlayerId')
            ? seed.sourcePlayerId
            : (sourceAssignments[i - 1] ?? null);
        let media = await resolveRoundMedia({
            animeId: seed.animeId,
            animeTitle: seed.animeTitle,
            themeMode: session.themeMode,
            sampleSeconds,
            roundIndex: i
        });

        const initialSignature = buildRoundMediaSignature(media);
        const mediaUnavailable = !media?.solutionVideoUrl
            || usedAnimeIds.has(media.animeId)
            || (initialSignature && usedMediaSignatures.has(initialSignature));
        if (mediaUnavailable) {
            if (isMalOnly) {
                media = await selectRoundMedia({
                    session,
                    roundIndex: i,
                    usedAnimeIds,
                    usedMediaSignatures,
                    allowReuse: false,
                    catalogSeeds: plannedCatalogSeeds
                });
                if (media && sourcePlayerByAnimeId.has(media.animeId)) {
                    resolvedSourcePlayerId = sourcePlayerByAnimeId.get(media.animeId);
                }
            } else {
                media = await selectRoundMedia({
                    session,
                    roundIndex: i,
                    usedAnimeIds,
                    usedMediaSignatures,
                    allowReuse: false
                });
                resolvedSourcePlayerId = null;
            }
        }

        if (!media) {
            if (isMalOnly) {
                throw httpError(503, `MAL_ONLY mode could not resolve enough playable round media (${rows.length}/${session.roundCount})`);
            }

            media = await selectRoundMedia({
                session,
                roundIndex: i,
                usedAnimeIds,
                usedMediaSignatures,
                allowReuse: true
            });
            resolvedSourcePlayerId = null;
        }

        if (!media) {
            throw httpError(503, `Could not resolve enough playable round media (${rows.length}/${session.roundCount})`);
        }

        const finalizedSignature = buildRoundMediaSignature(media);
        if (finalizedSignature && usedMediaSignatures.has(finalizedSignature)) {
            throw httpError(503, `Could not resolve enough unique round media (${rows.length}/${session.roundCount})`);
        }

        usedAnimeIds.add(media.animeId);
        if (finalizedSignature) usedMediaSignatures.add(finalizedSignature);
        rows.push(buildRoundRow({
            sessionId: session.id,
            roundIndex: i,
            media,
            sourcePlayerId: resolvedSourcePlayerId,
            lobbyCode: lobby?.code || session?.lobby?.code || null
        }));
    }

    await prisma.gameRound.createMany({ data: rows });
}

async function ensureRoundForIndex({ session, index, lobbyPlayers }) {
    const existing = await prisma.gameRound.findUnique({
        where: { sessionId_index: { sessionId: session.id, index } }
    });
    if (existing) return existing;

    const sourceAssignments = buildSourceAssignments({
        lobbyPlayers,
        roundCount: index,
        selectionMode: session.selectionMode
    });

    const existingRounds = await prisma.gameRound.findMany({
        where: { sessionId: session.id },
        select: {
            animeId: true,
            animeTitle: true,
            themeType: true,
            themeTitle: true,
            solutionVideoUrl: true
        }
    });
    const usedAnimeIds = new Set(existingRounds.map((row) => row.animeId));
    const usedMediaSignatures = new Set(
        existingRounds
            .map((row) => buildRoundMediaSignature(row))
            .filter((value) => typeof value === 'string' && value.length > 0)
    );
    const malOnlyCatalogSeeds = session.sourceMode === 'MAL_ONLY'
        ? existingRounds
            .map((row) => ({
                animeId: Number.parseInt(row.animeId, 10),
                animeTitle: row.animeTitle
            }))
            .filter((row) => Number.isInteger(row.animeId) && row.animeId > 0)
        : null;

    let media = await selectRoundMedia({
        session,
        roundIndex: index,
        usedAnimeIds,
        usedMediaSignatures,
        allowReuse: false,
        catalogSeeds: malOnlyCatalogSeeds
    });

    if (!media) {
        media = await selectRoundMedia({
            session,
            roundIndex: index,
            usedAnimeIds,
            usedMediaSignatures,
            allowReuse: true,
            catalogSeeds: malOnlyCatalogSeeds
        });
    }

    if (!media) {
        throw httpError(503, 'Could not resolve playable media for this round');
    }

    const mediaSignature = buildRoundMediaSignature(media);
    if (mediaSignature && usedMediaSignatures.has(mediaSignature)) {
        throw httpError(503, 'Could not resolve unique playable media for this round');
    }

    return prisma.gameRound.create({
        data: buildRoundRow({
            sessionId: session.id,
            roundIndex: index,
            media,
            sourcePlayerId: sourceAssignments[index - 1] || null,
            lobbyCode: session?.lobby?.code || null
        })
    });
}

async function getSessionForLobbyCode(lobbyCode) {
    const session = await prisma.gameSession.findFirst({
        where: {
            lobby: { code: lobbyCode },
            status: 'IN_PROGRESS'
        },
        include: {
            lobby: {
                include: {
                    players: { orderBy: { joinedAt: 'asc' } }
                }
            }
        },
        orderBy: { createdAt: 'desc' }
    });

    return session;
}

async function getSessionById(sessionId) {
    return prisma.gameSession.findUnique({
        where: { id: sessionId },
        include: {
            lobby: {
                include: {
                    players: { orderBy: { joinedAt: 'asc' } }
                }
            }
        }
    });
}

async function setRoundStatus(roundId, data) {
    return prisma.gameRound.update({
        where: { id: roundId },
        data
    });
}

async function compareAndSetRoundStatus(roundId, expectedStatus, data) {
    const result = await prisma.gameRound.updateMany({
        where: {
            id: roundId,
            status: expectedStatus
        },
        data
    });
    return result.count > 0;
}

async function submitGuess({ roundId, userId, guessText, guessAnimeId }) {
    return prisma.roundGuess.upsert({
        where: { roundId_userId: { roundId, userId } },
        create: {
            roundId,
            userId,
            guessText: guessText || null,
            guessAnimeId: Number.isInteger(guessAnimeId) ? guessAnimeId : null,
            isReady: false
        },
        update: {
            guessText: guessText || null,
            guessAnimeId: Number.isInteger(guessAnimeId) ? guessAnimeId : null,
            submittedAt: new Date(),
            isReady: false
        }
    });
}

async function setPlayerReady({ roundId, userId, isReady }) {
    return prisma.roundGuess.upsert({
        where: { roundId_userId: { roundId, userId } },
        create: {
            roundId,
            userId,
            isReady
        },
        update: {
            isReady
        }
    });
}

async function evaluateRound(roundId) {
    const round = await prisma.gameRound.findUnique({
        where: { id: roundId },
        include: {
            guesses: true
        }
    });

    if (!round) throw httpError(404, 'Round not found');

    const updates = round.guesses.map((guess) => {
        const correct = isGuessCorrect({
            guessAnimeId: guess.guessAnimeId,
            expectedAnimeId: round.animeId,
            acceptedAnimeIds: round.acceptedAnimeIds,
            guessText: guess.guessText,
            expectedTitle: round.animeTitle
        });
        return prisma.roundGuess.update({
            where: { id: guess.id },
            data: { isCorrect: correct }
        });
    });

    if (updates.length > 0) {
        await prisma.$transaction(updates);
    }

    const fresh = await prisma.roundGuess.findMany({
        where: { roundId },
        orderBy: { submittedAt: 'asc' }
    });

    return {
        round,
        answers: fresh.map((guess) => ({
            userId: guess.userId,
            guessText: guess.guessText,
            guessAnimeId: guess.guessAnimeId,
            isCorrect: guess.isCorrect
        }))
    };
}

async function getRoundById(roundId) {
    return prisma.gameRound.findUnique({
        where: { id: roundId }
    });
}

async function getGuessesForRound(roundId) {
    return prisma.roundGuess.findMany({
        where: { roundId },
        orderBy: { submittedAt: 'asc' }
    });
}

async function getRoundContext(roundId) {
    return prisma.gameRound.findUnique({
        where: { id: roundId },
        include: {
            session: {
                include: {
                    lobby: {
                        include: {
                            players: { orderBy: { joinedAt: 'asc' } }
                        }
                    }
                }
            }
        }
    });
}

async function listActiveRounds() {
    return prisma.gameRound.findMany({
        where: {
            status: { in: ['GUESSING', 'ANSWERS_REVEAL', 'SOLUTION_REVEAL'] },
            session: { status: 'IN_PROGRESS' }
        },
        include: {
            session: {
                include: {
                    lobby: {
                        include: {
                            players: { orderBy: { joinedAt: 'asc' } }
                        }
                    }
                }
            }
        },
        orderBy: { updatedAt: 'desc' },
        take: 200
    });
}

async function getCurrentActiveRound(sessionId) {
    return prisma.gameRound.findFirst({
        where: {
            sessionId,
            status: { in: ['GUESSING', 'ANSWERS_REVEAL', 'SOLUTION_REVEAL'] }
        },
        orderBy: { index: 'desc' }
    });
}

async function listRoundMediaForSession(sessionId) {
    const rows = await prisma.gameRound.findMany({
        where: { sessionId },
        select: {
            index: true,
            sampleStartSec: true,
            sampleDurationSec: true,
            solutionAudioUrl: true,
            solutionVideoUrl: true
        },
        orderBy: { index: 'asc' }
    });

    return rows.map((row) => ({
        index: row.index,
        sampleStartSec: row.sampleStartSec,
        sampleDurationSec: row.sampleDurationSec,
        audioUrl: buildMediaProxyUrl(row.solutionAudioUrl) || null,
        videoUrl: buildMediaProxyUrl(row.solutionVideoUrl) || null
    }));
}

async function updateSessionCurrentRound(sessionId, currentRound) {
    await prisma.gameSession.update({
        where: { id: sessionId },
        data: { currentRound }
    });
}

async function getScoresForSession({ sessionId, lobbyPlayers }) {
    const correct = await prisma.roundGuess.findMany({
        where: {
            round: { sessionId },
            isCorrect: true
        },
        select: { userId: true }
    });

    const scoreMap = new Map();
    for (const row of correct) {
        scoreMap.set(row.userId, (scoreMap.get(row.userId) || 0) + 1);
    }

    const scores = lobbyPlayers.map((player) => ({
        userId: player.userId,
        displayName: player.displayName,
        score: scoreMap.get(player.userId) || 0
    }));

    scores.sort((a, b) => b.score - a.score || a.displayName.localeCompare(b.displayName));
    return scores;
}

async function finishSession(sessionId) {
    const session = await prisma.gameSession.findUnique({
        where: { id: sessionId },
        select: { id: true, lobbyId: true }
    });
    if (!session) return;

    await prisma.$transaction([
        prisma.gameSession.update({
            where: { id: session.id },
            data: {
                status: 'FINISHED',
                endedAt: new Date()
            }
        }),
        prisma.lobby.update({
            where: { id: session.lobbyId },
            data: { status: 'WAITING' }
        })
    ]);
}

module.exports = {
    generateInitialRoundsForSession,
    ensureRoundForIndex,
    getSessionForLobbyCode,
    getSessionById,
    setRoundStatus,
    compareAndSetRoundStatus,
    submitGuess,
    setPlayerReady,
    evaluateRound,
    getRoundById,
    getGuessesForRound,
    getRoundContext,
    listActiveRounds,
    getCurrentActiveRound,
    listRoundMediaForSession,
    updateSessionCurrentRound,
    getScoresForSession,
    finishSession
};
