const { httpError } = require('./errors');
const prisma = require('../lib/prisma');

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
        startedAt: session.startedAt
    };
}

module.exports = {
    assertSelectionModeAllowedForPlayerCount,
    startSessionFromLobby
};
