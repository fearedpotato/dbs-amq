const { httpError } = require('./errors');
const prisma = require('../lib/prisma');
const { MIN_SCORE_FILTER, MAX_SCORE_FILTER } = require('./constants');

function assertSelectionModeAllowedForPlayerCount(selectionMode, playerCount) {
    if (playerCount <= 1 && selectionMode !== 'STANDARD') {
        throw httpError(400, 'Balanced selection modes require at least 2 players');
    }
}

async function startSessionFromLobby(lobby) {
    assertSelectionModeAllowedForPlayerCount(lobby.selectionMode, lobby.playerCount);

    if (lobby.playerCount < lobby.minPlayers) {
        throw httpError(400, 'Not enough players to start');
    }

    const session = await prisma.$transaction(async (tx) => {
        const created = await tx.gameSession.create({
            data: {
                lobbyId: lobby.id,
                status: 'IN_PROGRESS',
                currentRound: 0,
                roundCount: lobby.roundCount,
                guessSeconds: lobby.guessSeconds,
                sampleSeconds: lobby.sampleSeconds,
                answersRevealSeconds: lobby.answersRevealSeconds,
                solutionRevealSeconds: lobby.solutionRevealSeconds,
                sourceMode: lobby.sourceMode,
                selectionMode: lobby.selectionMode,
                themeMode: lobby.themeMode,
                animeScoreMin: Number.isInteger(lobby.animeScoreMin) ? lobby.animeScoreMin : MIN_SCORE_FILTER,
                animeScoreMax: Number.isInteger(lobby.animeScoreMax) ? lobby.animeScoreMax : MAX_SCORE_FILTER,
                playerScoreMin: Number.isInteger(lobby.playerScoreMin) ? lobby.playerScoreMin : MIN_SCORE_FILTER,
                playerScoreMax: Number.isInteger(lobby.playerScoreMax) ? lobby.playerScoreMax : MAX_SCORE_FILTER,
                startedAt: new Date()
            }
        });

        await tx.lobby.update({
            where: { id: lobby.id },
            data: { status: 'IN_GAME' }
        });

        return created;
    });

    return {
        id: session.id,
        lobbyId: session.lobbyId,
        roundCount: session.roundCount,
        guessSeconds: session.guessSeconds,
        sampleSeconds: session.sampleSeconds,
        answersRevealSeconds: session.answersRevealSeconds,
        solutionRevealSeconds: session.solutionRevealSeconds,
        sourceMode: session.sourceMode,
        selectionMode: session.selectionMode,
        themeMode: session.themeMode,
        animeScoreMin: Number.isInteger(session.animeScoreMin) ? session.animeScoreMin : MIN_SCORE_FILTER,
        animeScoreMax: Number.isInteger(session.animeScoreMax) ? session.animeScoreMax : MAX_SCORE_FILTER,
        playerScoreMin: Number.isInteger(session.playerScoreMin) ? session.playerScoreMin : MIN_SCORE_FILTER,
        playerScoreMax: Number.isInteger(session.playerScoreMax) ? session.playerScoreMax : MAX_SCORE_FILTER,
        startedAt: session.startedAt
    };
}

async function rollbackSessionStart(sessionId) {
    const session = await prisma.gameSession.findUnique({
        where: { id: sessionId },
        select: { id: true, lobbyId: true }
    });
    if (!session) return;

    await prisma.$transaction([
        prisma.gameRound.deleteMany({
            where: { sessionId: session.id }
        }),
        prisma.gameSession.update({
            where: { id: session.id },
            data: {
                status: 'CANCELLED',
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
    assertSelectionModeAllowedForPlayerCount,
    startSessionFromLobby,
    rollbackSessionStart
};
