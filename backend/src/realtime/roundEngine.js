const roundService = require('../game/roundService');
const { httpError } = require('../game/errors');
const { buildMediaProxyUrl } = require('../game/mediaProxyService');

const MAX_SUDDEN_DEATH_ROUNDS = 20;

function createRoundEngine(io) {
    const stateByLobby = new Map();

    function clearRoundTimers(state) {
        if (!state) return;
        if (state.timers.guess) clearTimeout(state.timers.guess);
        if (state.timers.answers) clearTimeout(state.timers.answers);
        if (state.timers.solution) clearTimeout(state.timers.solution);
        state.timers = {};
    }

    function sanitizeLobbyCode(value) {
        return String(value || '').toUpperCase();
    }

    function buildState(lobbyCode, session, players) {
        return {
            lobbyCode,
            sessionId: session.id,
            baseRoundCount: session.roundCount,
            players,
            config: {
                guessSeconds: session.guessSeconds,
                answersRevealSeconds: session.answersRevealSeconds,
                solutionRevealSeconds: session.solutionRevealSeconds
            },
            currentRound: null,
            phase: 'PENDING',
            timers: {},
            readyUserIds: new Set(),
            suddenDeathRounds: 0
        };
    }

    async function emitRoundStarted(state) {
        const now = Date.now();
        const endsAt = new Date(now + state.config.guessSeconds * 1000);
        await roundService.setRoundStatus(state.currentRound.id, {
            status: 'GUESSING',
            guessEndsAt: endsAt,
            answersRevealEndsAt: null,
            solutionRevealEndsAt: null
        });

        state.phase = 'GUESSING';

        io.to(state.lobbyCode).emit('round:started', {
            roundId: state.currentRound.id,
            index: state.currentRound.index,
            totalRounds: state.baseRoundCount,
            isSuddenDeath: state.currentRound.index > state.baseRoundCount,
            endsAt,
            sample: {
                animeId: state.currentRound.animeId,
                sampleStartSec: state.currentRound.sampleStartSec,
                sampleDurationSec: state.currentRound.sampleDurationSec,
                themeType: state.currentRound.themeType,
                audioUrl: buildMediaProxyUrl(state.currentRound.solutionAudioUrl) || null,
                videoUrl: buildMediaProxyUrl(state.currentRound.solutionVideoUrl) || null
            }
        });

        state.timers.guess = setTimeout(() => {
            transitionToAnswersReveal(state.lobbyCode, 'timeout').catch((err) => {
                console.error('round transition error (guess->answers):', err);
            });
        }, state.config.guessSeconds * 1000);
    }

    async function emitSolution(state) {
        const endsAt = new Date(Date.now() + state.config.solutionRevealSeconds * 1000);
        const transitioned = await roundService.compareAndSetRoundStatus(
            state.currentRound.id,
            'ANSWERS_REVEAL',
            {
            status: 'SOLUTION_REVEAL',
            solutionRevealEndsAt: endsAt
            }
        );
        if (!transitioned) return;

        state.phase = 'SOLUTION_REVEAL';
        const scores = await roundService.getScoresForSession({
            sessionId: state.sessionId,
            lobbyPlayers: state.players
        });

        io.to(state.lobbyCode).emit('round:solution', {
            roundId: state.currentRound.id,
            correctAnime: {
                animeId: state.currentRound.animeId,
                animeTitle: state.currentRound.animeTitle,
                themeType: state.currentRound.themeType,
                themeTitle: state.currentRound.themeTitle
            },
            video: buildMediaProxyUrl(state.currentRound.solutionVideoUrl) || null,
            audio: buildMediaProxyUrl(state.currentRound.solutionAudioUrl) || null,
            scores,
            endsAt
        });

        state.timers.solution = setTimeout(() => {
            finalizeRound(state.lobbyCode).catch((err) => {
                console.error('round transition error (solution->finalize):', err);
            });
        }, state.config.solutionRevealSeconds * 1000);
    }

    async function transitionToAnswersReveal(lobbyCode, reason = 'timeout') {
        const state = stateByLobby.get(lobbyCode);
        if (!state || state.phase !== 'GUESSING') return;

        clearTimeout(state.timers.guess);
        state.timers.guess = null;

        const endsAt = new Date(Date.now() + state.config.answersRevealSeconds * 1000);
        const transitioned = await roundService.compareAndSetRoundStatus(
            state.currentRound.id,
            'GUESSING',
            {
            status: 'ANSWERS_REVEAL',
            answersRevealEndsAt: endsAt
            }
        );
        if (!transitioned) return;

        state.phase = 'ANSWERS_REVEAL';
        const result = await roundService.evaluateRound(state.currentRound.id);

        io.to(lobbyCode).emit('round:answers_reveal', {
            roundId: state.currentRound.id,
            answers: result.answers,
            reason,
            endsAt
        });

        state.timers.answers = setTimeout(() => {
            emitSolution(state).catch((err) => {
                console.error('round transition error (answers->solution):', err);
            });
        }, state.config.answersRevealSeconds * 1000);
    }

    async function startRound(lobbyCode, index) {
        const state = stateByLobby.get(lobbyCode);
        if (!state) return;

        clearRoundTimers(state);

        const session = await roundService.getSessionById(state.sessionId);
        if (!session || session.status !== 'IN_PROGRESS') {
            stateByLobby.delete(lobbyCode);
            return;
        }

        const round = await roundService.ensureRoundForIndex({
            session,
            index,
            lobbyPlayers: session.lobby.players
        });

        state.players = session.lobby.players;
        state.currentRound = round;
        state.readyUserIds = new Set();
        await roundService.updateSessionCurrentRound(state.sessionId, round.index);

        await roundService.setRoundStatus(round.id, {
            status: 'PENDING'
        });

        await emitRoundStarted(state);
    }

    async function finishGame(lobbyCode) {
        const state = stateByLobby.get(lobbyCode);
        if (!state) return;
        clearRoundTimers(state);

        const scores = await roundService.getScoresForSession({
            sessionId: state.sessionId,
            lobbyPlayers: state.players
        });
        const winner = scores.length > 0 ? scores[0] : null;

        await roundService.finishSession(state.sessionId);

        io.to(lobbyCode).emit('game:finished', {
            finalScores: scores,
            winner,
            suddenDeathRounds: state.suddenDeathRounds
        });

        stateByLobby.delete(lobbyCode);
    }

    async function finalizeRound(lobbyCode) {
        const state = stateByLobby.get(lobbyCode);
        if (!state) return;

        const transitioned = await roundService.compareAndSetRoundStatus(
            state.currentRound.id,
            'SOLUTION_REVEAL',
            {
            status: 'ROUND_END'
            }
        );
        if (!transitioned) return;

        const scores = await roundService.getScoresForSession({
            sessionId: state.sessionId,
            lobbyPlayers: state.players
        });

        const isPlannedRoundsComplete = state.currentRound.index >= state.baseRoundCount;
        if (!isPlannedRoundsComplete) {
            return startRound(lobbyCode, state.currentRound.index + 1);
        }

        const topScore = scores.length > 0 ? scores[0].score : 0;
        const tied = scores.filter((item) => item.score === topScore);

        if (tied.length <= 1) {
            return finishGame(lobbyCode);
        }

        if (state.suddenDeathRounds >= MAX_SUDDEN_DEATH_ROUNDS) {
            return finishGame(lobbyCode);
        }

        state.suddenDeathRounds += 1;
        io.to(lobbyCode).emit('game:sudden_death', {
            roundIndex: state.currentRound.index + 1,
            tiedUserIds: tied.map((item) => item.userId)
        });

        return startRound(lobbyCode, state.currentRound.index + 1);
    }

    async function startSession({ lobbyCode, session, lobby, deferFirstRound = false }) {
        const code = sanitizeLobbyCode(lobbyCode);
        await roundService.generateInitialRoundsForSession({
            session,
            lobby
        });

        stateByLobby.set(code, buildState(code, session, lobby.players));

        if (deferFirstRound) {
            return;
        }

        await startRound(code, 1);
    }

    async function beginSession(lobbyCode) {
        const code = sanitizeLobbyCode(lobbyCode);
        const state = stateByLobby.get(code);
        if (!state) return;
        if (state.currentRound) return;
        await startRound(code, 1);
    }

    async function ensureStateForLobby(lobbyCode) {
        const code = sanitizeLobbyCode(lobbyCode);
        let state = stateByLobby.get(code);
        if (state) return state;

        const session = await roundService.getSessionForLobbyCode(code);
        if (!session) return null;

        state = buildState(code, session, session.lobby.players);
        const activeRound = await roundService.getCurrentActiveRound(session.id);
        if (activeRound) {
            state.currentRound = activeRound;
            state.phase = activeRound.status;
        }

        stateByLobby.set(code, state);
        return state;
    }

    async function getSyncState(lobbyCode) {
        const code = sanitizeLobbyCode(lobbyCode);
        const state = await ensureStateForLobby(code);
        if (!state || !state.currentRound) {
            return {
                lobbyCode: code,
                phase: 'WAITING',
                readyUserIds: [],
                allReady: false
            };
        }

        const context = await roundService.getRoundContext(state.currentRound.id);
        if (!context) {
            return {
                lobbyCode: code,
                phase: 'WAITING',
                readyUserIds: [],
                allReady: false
            };
        }

        state.currentRound = context;
        state.players = context.session?.lobby?.players || state.players;
        state.phase = context.status;

        const guesses = await roundService.getGuessesForRound(context.id);
        const readyUserIds = guesses.filter((guess) => guess.isReady).map((guess) => guess.userId);
        state.readyUserIds = new Set(readyUserIds);
        const allReady = state.players.length > 0 && state.players.every((player) => state.readyUserIds.has(player.userId));

        const baseRound = {
            roundId: context.id,
            index: context.index,
            totalRounds: state.baseRoundCount,
            isSuddenDeath: context.index > state.baseRoundCount,
            sample: {
                animeId: context.animeId,
                sampleStartSec: context.sampleStartSec,
                sampleDurationSec: context.sampleDurationSec,
                themeType: context.themeType,
                audioUrl: buildMediaProxyUrl(context.solutionAudioUrl) || null,
                videoUrl: buildMediaProxyUrl(context.solutionVideoUrl) || null
            }
        };

        const payload = {
            lobbyCode: code,
            phase: context.status,
            round: baseRound,
            readyUserIds,
            allReady
        };

        if (context.status === 'GUESSING') {
            payload.endsAt = context.guessEndsAt;
            return payload;
        }

        const answers = guesses.map((guess) => ({
            userId: guess.userId,
            guessText: guess.guessText,
            guessAnimeId: guess.guessAnimeId,
            isCorrect: guess.isCorrect
        }));

        if (context.status === 'ANSWERS_REVEAL') {
            payload.answers = answers;
            payload.endsAt = context.answersRevealEndsAt;
            return payload;
        }

        if (context.status === 'SOLUTION_REVEAL') {
            const scores = await roundService.getScoresForSession({
                sessionId: state.sessionId,
                lobbyPlayers: state.players
            });

            payload.answers = answers;
            payload.solution = {
                roundId: context.id,
                correctAnime: {
                    animeId: context.animeId,
                    animeTitle: context.animeTitle,
                    themeType: context.themeType,
                    themeTitle: context.themeTitle
                },
                video: buildMediaProxyUrl(context.solutionVideoUrl) || null,
                audio: buildMediaProxyUrl(context.solutionAudioUrl) || null,
                scores,
                endsAt: context.solutionRevealEndsAt
            };
            payload.endsAt = context.solutionRevealEndsAt;
            return payload;
        }

        return payload;
    }

    async function submitGuess({ lobbyCode, userId, payload = {} }) {
        const code = sanitizeLobbyCode(lobbyCode);
        const state = await ensureStateForLobby(code);
        if (!state) throw httpError(400, 'No active round session');
        if (state.phase !== 'GUESSING') throw httpError(400, 'Round is not accepting guesses');

        if (payload.roundId && Number(payload.roundId) !== state.currentRound.id) {
            throw httpError(400, 'Guess does not match current round');
        }

        if (state.readyUserIds.has(userId)) {
            throw httpError(400, 'Player is locked; unskip before changing guess');
        }

        await roundService.submitGuess({
            roundId: state.currentRound.id,
            userId,
            guessText: typeof payload.guessText === 'string' ? payload.guessText.trim() : '',
            guessAnimeId: Number.isInteger(payload.guessAnimeId) ? payload.guessAnimeId : null
        });

        return {
            roundId: state.currentRound.id
        };
    }

    async function setReady({ lobbyCode, userId, ready }) {
        const code = sanitizeLobbyCode(lobbyCode);
        const state = await ensureStateForLobby(code);
        if (!state) throw httpError(400, 'No active round session');
        if (state.phase !== 'GUESSING') throw httpError(400, 'Round is not currently in guessing phase');

        const userIds = state.players.map((player) => player.userId);
        if (!userIds.includes(userId)) {
            throw httpError(403, 'Player is not part of this session');
        }

        const isReady = ready !== false;
        await roundService.setPlayerReady({
            roundId: state.currentRound.id,
            userId,
            isReady
        });

        if (isReady) state.readyUserIds.add(userId);
        else state.readyUserIds.delete(userId);

        const readyUserIds = [...state.readyUserIds];
        const allReady = userIds.length > 0 && userIds.every((id) => state.readyUserIds.has(id));

        io.to(code).emit('round:ready_state', {
            lobbyCode: code,
            roundId: state.currentRound.id,
            readyUserIds,
            allReady
        });

        if (allReady) {
            await transitionToAnswersReveal(code, 'all_ready');
        }

        return {
            roundId: state.currentRound.id,
            readyUserIds,
            allReady
        };
    }

    async function recoverActiveSessions() {
        const now = Date.now();
        const activeRounds = await roundService.listActiveRounds();

        for (const round of activeRounds) {
            const lobbyCode = sanitizeLobbyCode(round.session.lobby.code);
            let state = stateByLobby.get(lobbyCode);
            if (!state) {
                state = buildState(lobbyCode, round.session, round.session.lobby.players);
                stateByLobby.set(lobbyCode, state);
            }

            state.players = round.session.lobby.players;
            state.currentRound = round;
            state.phase = round.status;

            if (round.status === 'GUESSING' && round.guessEndsAt) {
                const ms = new Date(round.guessEndsAt).getTime() - now;
                if (ms <= 0) {
                    await transitionToAnswersReveal(lobbyCode, 'recovery_timeout');
                } else if (!state.timers.guess) {
                    state.timers.guess = setTimeout(() => {
                        transitionToAnswersReveal(lobbyCode, 'timeout').catch((err) => {
                            console.error('round transition error (recovered guess->answers):', err);
                        });
                    }, ms);
                }
            }

            if (round.status === 'ANSWERS_REVEAL' && round.answersRevealEndsAt) {
                const ms = new Date(round.answersRevealEndsAt).getTime() - now;
                if (ms <= 0) {
                    await emitSolution(state);
                } else if (!state.timers.answers) {
                    state.timers.answers = setTimeout(() => {
                        emitSolution(state).catch((err) => {
                            console.error('round transition error (recovered answers->solution):', err);
                        });
                    }, ms);
                }
            }

            if (round.status === 'SOLUTION_REVEAL' && round.solutionRevealEndsAt) {
                const ms = new Date(round.solutionRevealEndsAt).getTime() - now;
                if (ms <= 0) {
                    await finalizeRound(lobbyCode);
                } else if (!state.timers.solution) {
                    state.timers.solution = setTimeout(() => {
                        finalizeRound(lobbyCode).catch((err) => {
                            console.error('round transition error (recovered solution->finalize):', err);
                        });
                    }, ms);
                }
            }
        }
    }

    async function onPlayerDisconnected(lobbyCode, userId) {
        const code = sanitizeLobbyCode(lobbyCode);
        const state = stateByLobby.get(code);
        if (!state) return;

        if (state.readyUserIds.has(userId)) {
            state.readyUserIds.delete(userId);
            io.to(code).emit('round:ready_state', {
                lobbyCode: code,
                roundId: state.currentRound?.id || null,
                readyUserIds: [...state.readyUserIds],
                allReady: false
            });
        }
    }

    function hasActiveSession(lobbyCode) {
        return stateByLobby.has(sanitizeLobbyCode(lobbyCode));
    }

    async function getSessionMediaManifest(sessionId) {
        const media = await roundService.listRoundMediaForSession(sessionId);
        return Array.isArray(media) ? media : [];
    }

    const recoveryInterval = setInterval(() => {
        recoverActiveSessions().catch((err) => {
            console.error('round recovery sweep failed:', err);
        });
    }, 1_500);
    if (typeof recoveryInterval.unref === 'function') recoveryInterval.unref();

    return {
        startSession,
        beginSession,
        submitGuess,
        setReady,
        getSyncState,
        onPlayerDisconnected,
        hasActiveSession,
        getSessionMediaManifest,
        recoverActiveSessions
    };
}

module.exports = {
    createRoundEngine
};
