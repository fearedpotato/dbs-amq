const prisma = require('../lib/prisma');
const { isGuessCorrect } = require('./scoringService');
const { httpError } = require('./errors');

const CATALOG = [
    { animeId: 5114, animeTitle: 'Fullmetal Alchemist: Brotherhood', themeTitle: 'Again' },
    { animeId: 16498, animeTitle: 'Shingeki no Kyojin', themeTitle: 'Guren no Yumiya' },
    { animeId: 11061, animeTitle: 'Hunter x Hunter (2011)', themeTitle: 'Departure!' },
    { animeId: 9253, animeTitle: 'Steins;Gate', themeTitle: 'Hacking to the Gate' },
    { animeId: 38000, animeTitle: 'Kimetsu no Yaiba', themeTitle: 'Gurenge' },
    { animeId: 40748, animeTitle: 'Jujutsu Kaisen', themeTitle: 'Kaikai Kitan' },
    { animeId: 44511, animeTitle: 'Chainsaw Man', themeTitle: 'Kick Back' },
    { animeId: 41457, animeTitle: '86', themeTitle: '3-pun 29-byou' },
    { animeId: 30276, animeTitle: 'One Punch Man', themeTitle: 'THE HERO !!' },
    { animeId: 21, animeTitle: 'One Piece', themeTitle: 'We Are!' },
    { animeId: 1735, animeTitle: 'Naruto: Shippuuden', themeTitle: 'Blue Bird' },
    { animeId: 20583, animeTitle: 'Haikyuu!!', themeTitle: 'Imagination' },
    { animeId: 1575, animeTitle: 'Code Geass', themeTitle: 'COLORS' },
    { animeId: 4224, animeTitle: 'Toradora!', themeTitle: 'Pre-Parade' },
    { animeId: 37779, animeTitle: 'Yakusoku no Neverland', themeTitle: 'Touch Off' },
    { animeId: 1535, animeTitle: 'Death Note', themeTitle: 'The World' },
    { animeId: 918, animeTitle: 'Gintama', themeTitle: 'Pray' },
    { animeId: 40028, animeTitle: 'Shingeki no Kyojin: The Final Season', themeTitle: 'Boku no Sensou' },
    { animeId: 457, animeTitle: 'Mushishi', themeTitle: 'The Sore Feet Song' },
    { animeId: 30240, animeTitle: 'Prison School', themeTitle: 'Ai no Prison' },
    { animeId: 23273, animeTitle: 'Shigatsu wa Kimi no Uso', themeTitle: 'Hikaru Nara' },
    { animeId: 1, animeTitle: 'Cowboy Bebop', themeTitle: 'Tank!' },
    { animeId: 43, animeTitle: 'Ghost in the Shell', themeTitle: 'Inner Universe' },
    { animeId: 199, animeTitle: 'Sen to Chihiro no Kamikakushi', themeTitle: 'Itsumo Nando Demo' },
    { animeId: 35968, animeTitle: 'Wotaku ni Koi wa Muzukashii', themeTitle: 'Fiction' }
];

function chooseThemeType(themeMode, index) {
    if (themeMode === 'OP_ONLY') return 'OP';
    if (themeMode === 'ED_ONLY') return 'ED';
    return index % 2 === 0 ? 'ED' : 'OP';
}

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

async function generateInitialRoundsForSession({ session, lobby }) {
    const existingCount = await prisma.gameRound.count({
        where: { sessionId: session.id }
    });
    if (existingCount > 0) return;

    const sourceAssignments = buildSourceAssignments({
        lobbyPlayers: lobby.players,
        roundCount: session.roundCount,
        selectionMode: session.selectionMode
    });

    const now = Date.now();
    const rows = [];
    for (let i = 1; i <= session.roundCount; i += 1) {
        const entry = CATALOG[(i - 1) % CATALOG.length];
        rows.push({
            sessionId: session.id,
            index: i,
            status: 'PENDING',
            animeId: entry.animeId + i, // keep reasonably unique per round
            animeTitle: entry.animeTitle,
            themeType: chooseThemeType(session.themeMode, i),
            themeTitle: entry.themeTitle,
            sampleStartSec: (i * 7) % 45,
            sampleDurationSec: session.sampleSeconds,
            solutionVideoUrl: `https://media.example.com/anime/${entry.animeId}/video`,
            solutionAudioUrl: `https://media.example.com/anime/${entry.animeId}/audio`,
            sourcePlayerId: sourceAssignments[i - 1] || null,
            createdAt: new Date(now),
            updatedAt: new Date(now)
        });
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

    const entry = CATALOG[(index - 1) % CATALOG.length];
    return prisma.gameRound.create({
        data: {
            sessionId: session.id,
            index,
            status: 'PENDING',
            animeId: entry.animeId + index,
            animeTitle: entry.animeTitle,
            themeType: chooseThemeType(session.themeMode, index),
            themeTitle: entry.themeTitle,
            sampleStartSec: (index * 7) % 45,
            sampleDurationSec: session.sampleSeconds,
            solutionVideoUrl: `https://media.example.com/anime/${entry.animeId}/video`,
            solutionAudioUrl: `https://media.example.com/anime/${entry.animeId}/audio`,
            sourcePlayerId: sourceAssignments[index - 1] || null
        }
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
    getRoundContext,
    listActiveRounds,
    getCurrentActiveRound,
    updateSessionCurrentRound,
    getScoresForSession,
    finishSession
};
