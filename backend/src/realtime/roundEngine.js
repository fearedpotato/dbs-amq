const roundService = require('../game/roundService');
const animeCatalogService = require('../game/animeCatalogService');
const { httpError } = require('../game/errors');
const {
    buildMediaProxyUrl,
    prewarmManifest,
    evictCacheForMediaUrls
} = require('../game/mediaProxyService');
const telemetry = require('../lib/telemetry');

const MAX_SUDDEN_DEATH_ROUNDS = 20;
const DEFAULT_ZERO_CONNECTED_ROUNDS_TO_KILL = 3;
const DEFAULT_EVICT_COMPLETED_ROUND_MEDIA = false;
const ALL_READY_REVEAL_DELAY_MS = 1_000;
const INVISIBLE_WHITESPACE_REGEX = /[\u200B-\u200D\u2060\uFEFF]/gu;

function parsePositiveInt(value, fallback) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function parseBoolean(value, fallback) {
    if (typeof value === 'boolean') return value;
    const normalized = String(value || '').trim().toLowerCase();
    if (!normalized) return fallback;
    if (['1', 'true', 'yes', 'on'].includes(normalized)) return true;
    if (['0', 'false', 'no', 'off'].includes(normalized)) return false;
    return fallback;
}

function getZeroConnectedRoundsToKill() {
    return parsePositiveInt(
        process.env.LOBBY_ZERO_CONNECTED_ROUNDS_TO_KILL,
        DEFAULT_ZERO_CONNECTED_ROUNDS_TO_KILL
    );
}

function shouldEvictCompletedRoundMedia() {
    return parseBoolean(
        process.env.MEDIA_PROXY_EVICT_COMPLETED_ROUND_MEDIA,
        DEFAULT_EVICT_COMPLETED_ROUND_MEDIA
    );
}

function createRoundEngine(io, options = {}) {
    const stateByLobby = new Map();
    const englishTitleByAnimeId = new Map();

    async function getEnglishAnimeTitle(animeId) {
        if (process.env.NODE_ENV === 'test') return null;

        const parsedAnimeId = Number.parseInt(animeId, 10);
        if (!Number.isInteger(parsedAnimeId) || parsedAnimeId <= 0) return null;

        if (englishTitleByAnimeId.has(parsedAnimeId)) {
            return englishTitleByAnimeId.get(parsedAnimeId);
        }

        let titleEnglish = null;
        try {
            const titleInfo = await animeCatalogService.getCatalogTitleByMalId(parsedAnimeId);
            titleEnglish = titleInfo?.titleEnglish || null;
        } catch (_err) {
            titleEnglish = null;
        }

        englishTitleByAnimeId.set(parsedAnimeId, titleEnglish);
        return titleEnglish;
    }

    function getReadyRequiredUserIds(players = []) {
        const list = Array.isArray(players) ? players : [];
        return list
            .filter((player) => Number.isInteger(player?.userId) && player?.isConnected !== false)
            .map((player) => player.userId);
    }

    function clearRoundTimers(state) {
        if (!state) return;
        if (state.timers.guess) clearTimeout(state.timers.guess);
        if (state.timers.answers) clearTimeout(state.timers.answers);
        if (state.timers.solution) clearTimeout(state.timers.solution);
        if (state.timers.allReady) clearTimeout(state.timers.allReady);
        state.timers = {};
    }

    function isAllReady(state) {
        const requiredUserIds = getReadyRequiredUserIds(state?.players);
        return requiredUserIds.length > 0 && requiredUserIds.every((id) => state.readyUserIds.has(id));
    }

    function clearAllReadyTransitionTimer(state) {
        if (!state?.timers?.allReady) return;
        clearTimeout(state.timers.allReady);
        state.timers.allReady = null;
    }

    function scheduleAllReadyTransition(state) {
        if (!state || state.phase !== 'GUESSING' || !state.currentRound) return;
        if (state.timers.allReady) return;

        state.timers.allReady = setTimeout(() => {
            state.timers.allReady = null;
            if (state.phase !== 'GUESSING' || !isAllReady(state)) return;

            transitionToAnswersReveal(state.lobbyCode, 'all_ready').catch((err) => {
                telemetry.error('round.transition_failed', err, {
                    from: 'GUESSING',
                    to: 'ANSWERS_REVEAL',
                    lobbyCode: state.lobbyCode,
                    sessionId: state.sessionId,
                    roundId: state.currentRound?.id || null,
                    reason: 'all_ready'
                });
            });
        }, ALL_READY_REVEAL_DELAY_MS);
    }

    function updateAllReadyTransition(state, allReady) {
        if (!state || state.phase !== 'GUESSING') return;
        if (allReady) {
            scheduleAllReadyTransition(state);
            return;
        }
        clearAllReadyTransitionTimer(state);
    }

    function sanitizeLobbyCode(value) {
        return String(value || '').toUpperCase();
    }

    function sanitizeGuessText(value) {
        return String(value || '')
            .normalize('NFKC')
            .replace(INVISIBLE_WHITESPACE_REGEX, '')
            .trim();
    }

    function parseGuessAnimeId(value) {
        const parsed = Number.parseInt(value, 10);
        if (!Number.isInteger(parsed) || parsed <= 0) return null;
        return parsed;
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
            suddenDeathRounds: 0,
            zeroConnectedRoundStreak: 0,
            prewarmingRoundIndexes: new Set()
        };
    }

    function buildRoundMediaManifestEntry(round) {
        if (!round) return null;
        const index = Number.parseInt(round.index, 10);
        if (!Number.isInteger(index) || index <= 0) return null;

        return {
            index,
            sampleStartSec: round.sampleStartSec,
            sampleDurationSec: round.sampleDurationSec,
            audioUrl: buildMediaProxyUrl(round.solutionAudioUrl) || null,
            videoUrl: buildMediaProxyUrl(round.solutionVideoUrl) || null
        };
    }

    async function prewarmRoundMedia(state, round, reason = 'round_prefetch') {
        if (!state || !round) return;

        const manifestEntry = buildRoundMediaManifestEntry(round);
        if (!manifestEntry) return;

        const summary = await prewarmManifest([manifestEntry], {
            roundLimit: 1,
            maxConcurrent: 2
        });
        telemetry.info('media.prewarm_round', {
            lobbyCode: state.lobbyCode,
            sessionId: state.sessionId,
            roundId: round.id,
            index: round.index,
            reason,
            ...summary
        });
    }

    async function prewarmUpcomingRound(state, nextIndex) {
        if (!state) return;
        const index = Number.parseInt(nextIndex, 10);
        if (!Number.isInteger(index) || index <= 0) return;

        const maxPotentialRoundIndex = state.baseRoundCount + MAX_SUDDEN_DEATH_ROUNDS;
        if (index > maxPotentialRoundIndex) return;
        if (state.prewarmingRoundIndexes.has(index)) return;
        state.prewarmingRoundIndexes.add(index);

        try {
            const session = await roundService.getSessionById(state.sessionId);
            if (!session || session.status !== 'IN_PROGRESS') return;

            const upcomingRound = await roundService.ensureRoundForIndex({
                session,
                index,
                lobbyPlayers: session.lobby.players
            });
            await prewarmRoundMedia(state, upcomingRound, 'upcoming_round');
        } catch (err) {
            telemetry.warn('media.prewarm_upcoming_round_failed', {
                lobbyCode: state.lobbyCode,
                sessionId: state.sessionId,
                index,
                error: err?.message || String(err)
            });
        } finally {
            state.prewarmingRoundIndexes.delete(index);
        }
    }

    function parseScoreValue(value) {
        const parsed = Number.parseInt(value, 10);
        return Number.isFinite(parsed) ? parsed : 0;
    }

    async function shouldPrewarmUpcomingRound(state, currentRoundIndex, nextRoundIndex) {
        if (!state) return false;
        if (nextRoundIndex <= state.baseRoundCount) return true;

        const scores = await roundService.getScoresForSession({
            sessionId: state.sessionId,
            lobbyPlayers: state.players
        });
        const sortedScores = Array.isArray(scores) ? scores : [];
        if (sortedScores.length < 2) {
            telemetry.info('media.prewarm_sudden_death_skipped', {
                lobbyCode: state.lobbyCode,
                sessionId: state.sessionId,
                currentRoundIndex,
                nextRoundIndex,
                reason: 'insufficient_players'
            });
            return false;
        }

        const topScore = parseScoreValue(sortedScores[0]?.score);
        const secondScore = parseScoreValue(sortedScores[1]?.score);
        const lead = topScore - secondScore;
        const shouldPrewarm = lead <= 1;

        telemetry.info('media.prewarm_sudden_death_evaluated', {
            lobbyCode: state.lobbyCode,
            sessionId: state.sessionId,
            currentRoundIndex,
            nextRoundIndex,
            topScore,
            secondScore,
            lead,
            shouldPrewarm
        });

        return shouldPrewarm;
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
        telemetry.info('round.started', {
            lobbyCode: state.lobbyCode,
            sessionId: state.sessionId,
            roundId: state.currentRound.id,
            index: state.currentRound.index,
            totalRounds: state.baseRoundCount,
            isSuddenDeath: state.currentRound.index > state.baseRoundCount
        });

        state.timers.guess = setTimeout(() => {
            transitionToAnswersReveal(state.lobbyCode, 'timeout').catch((err) => {
                telemetry.error('round.transition_failed', err, {
                    from: 'GUESSING',
                    to: 'ANSWERS_REVEAL',
                    lobbyCode: state.lobbyCode,
                    sessionId: state.sessionId,
                    roundId: state.currentRound?.id || null
                });
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
        const animeTitleEnglish = await getEnglishAnimeTitle(state.currentRound.animeId);
        const scores = await roundService.getScoresForSession({
            sessionId: state.sessionId,
            lobbyPlayers: state.players
        });

        io.to(state.lobbyCode).emit('round:solution', {
            roundId: state.currentRound.id,
            correctAnime: {
                animeId: state.currentRound.animeId,
                animeTitle: state.currentRound.animeTitle,
                animeTitleEnglish,
                themeType: state.currentRound.themeType,
                themeTitle: state.currentRound.themeTitle
            },
            video: buildMediaProxyUrl(state.currentRound.solutionVideoUrl) || null,
            audio: buildMediaProxyUrl(state.currentRound.solutionAudioUrl) || null,
            scores,
            endsAt
        });
        telemetry.info('round.solution_reveal', {
            lobbyCode: state.lobbyCode,
            sessionId: state.sessionId,
            roundId: state.currentRound.id,
            index: state.currentRound.index
        });

        state.timers.solution = setTimeout(() => {
            finalizeRound(state.lobbyCode).catch((err) => {
                telemetry.error('round.transition_failed', err, {
                    from: 'SOLUTION_REVEAL',
                    to: 'ROUND_END',
                    lobbyCode: state.lobbyCode,
                    sessionId: state.sessionId,
                    roundId: state.currentRound?.id || null
                });
            });
        }, state.config.solutionRevealSeconds * 1000);
    }

    async function transitionToAnswersReveal(lobbyCode, reason = 'timeout') {
        const state = stateByLobby.get(lobbyCode);
        if (!state || state.phase !== 'GUESSING') return;

        clearTimeout(state.timers.guess);
        state.timers.guess = null;
        clearAllReadyTransitionTimer(state);

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
        telemetry.info('round.answers_reveal', {
            lobbyCode,
            sessionId: state.sessionId,
            roundId: state.currentRound.id,
            index: state.currentRound.index,
            reason
        });

        state.timers.answers = setTimeout(() => {
            emitSolution(state).catch((err) => {
                telemetry.error('round.transition_failed', err, {
                    from: 'ANSWERS_REVEAL',
                    to: 'SOLUTION_REVEAL',
                    lobbyCode,
                    sessionId: state.sessionId,
                    roundId: state.currentRound?.id || null
                });
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

        (async () => {
            const nextRoundIndex = index + 1;
            const shouldPrewarm = await shouldPrewarmUpcomingRound(state, index, nextRoundIndex);
            if (!shouldPrewarm) return;

            await prewarmUpcomingRound(state, nextRoundIndex);
        })().catch((err) => {
            telemetry.warn('media.prewarm_upcoming_round_unhandled', {
                lobbyCode,
                sessionId: state.sessionId,
                nextRoundIndex: index + 1,
                error: err?.message || String(err)
            });
        });
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
        if (typeof options.onSessionFinished === 'function') {
            try {
                await options.onSessionFinished({
                    lobbyCode,
                    sessionId: state.sessionId,
                    finalScores: scores,
                    winner,
                    suddenDeathRounds: state.suddenDeathRounds
                });
            } catch (err) {
                telemetry.warn('session.finish_callback_failed', {
                    lobbyCode,
                    sessionId: state.sessionId,
                    error: err?.message || String(err)
                });
            }
        }

        io.to(lobbyCode).emit('game:finished', {
            finalScores: scores,
            winner,
            suddenDeathRounds: state.suddenDeathRounds
        });
        telemetry.info('session.finished', {
            lobbyCode,
            sessionId: state.sessionId,
            suddenDeathRounds: state.suddenDeathRounds,
            winnerUserId: winner?.userId || null,
            winnerScore: winner?.score || null
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

        const completedRound = state.currentRound;
        if (shouldEvictCompletedRoundMedia()) {
            evictCacheForMediaUrls([
                completedRound?.solutionAudioUrl,
                completedRound?.solutionVideoUrl
            ]).then((summary) => {
                telemetry.info('media.cache_evicted_after_round', {
                    lobbyCode,
                    sessionId: state.sessionId,
                    roundId: completedRound?.id || null,
                    index: completedRound?.index || null,
                    ...summary
                });
            }).catch((err) => {
                telemetry.warn('media.cache_evict_failed', {
                    lobbyCode,
                    sessionId: state.sessionId,
                    roundId: completedRound?.id || null,
                    index: completedRound?.index || null,
                    error: err?.message || String(err)
                });
            });
        }

        const sessionSnapshot = await roundService.getSessionById(state.sessionId);
        if (sessionSnapshot?.lobby?.players) {
            state.players = sessionSnapshot.lobby.players;
        }
        const connectedPlayers = (state.players || []).filter((player) => player?.isConnected !== false);
        if (connectedPlayers.length === 0) {
            state.zeroConnectedRoundStreak += 1;
        } else {
            state.zeroConnectedRoundStreak = 0;
        }

        if (state.zeroConnectedRoundStreak >= getZeroConnectedRoundsToKill()) {
            telemetry.info('lobby.auto_close_zero_connected_round_streak', {
                lobbyCode,
                sessionId: state.sessionId,
                streak: state.zeroConnectedRoundStreak,
                roundIndex: state.currentRound?.index || null
            });

            if (typeof options.onNoConnectedRoundStreakExceeded === 'function') {
                await options.onNoConnectedRoundStreakExceeded({
                    lobbyCode,
                    sessionId: state.sessionId,
                    streak: state.zeroConnectedRoundStreak,
                    roundIndex: state.currentRound?.index || null
                });
            }
            return;
        }

        const scores = await roundService.getScoresForSession({
            sessionId: state.sessionId,
            lobbyPlayers: state.players
        });

        const isPlannedRoundsComplete = state.currentRound.index >= state.baseRoundCount;
        if (!isPlannedRoundsComplete) {
            telemetry.info('round.completed', {
                lobbyCode,
                sessionId: state.sessionId,
                roundId: state.currentRound.id,
                index: state.currentRound.index,
                nextRoundIndex: state.currentRound.index + 1
            });
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
        telemetry.info('session.sudden_death_started', {
            lobbyCode,
            sessionId: state.sessionId,
            nextRoundIndex: state.currentRound.index + 1,
            tiedUserIds: tied.map((item) => item.userId)
        });
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
        telemetry.info('session.engine_state_created', {
            lobbyCode: code,
            sessionId: session.id,
            players: (lobby.players || []).length,
            deferFirstRound
        });

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
        telemetry.info('session.begin_requested', {
            lobbyCode: code,
            sessionId: state.sessionId
        });
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
        const requiredUserIds = getReadyRequiredUserIds(state.players);
        const allReady = requiredUserIds.length > 0 && requiredUserIds.every((id) => state.readyUserIds.has(id));

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
            const animeTitleEnglish = await getEnglishAnimeTitle(context.animeId);
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
                    animeTitleEnglish,
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
            guessText: sanitizeGuessText(payload.guessText),
            guessAnimeId: parseGuessAnimeId(payload.guessAnimeId)
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

        const userIds = getReadyRequiredUserIds(state.players);
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

        updateAllReadyTransition(state, allReady);
        telemetry.debug('round.ready_state_changed', {
            lobbyCode: code,
            sessionId: state.sessionId,
            roundId: state.currentRound.id,
            userId,
            ready: isReady,
            readyCount: readyUserIds.length,
            allReady
        });

        return {
            roundId: state.currentRound.id,
            readyUserIds,
            allReady
        };
    }

    async function syncLobbyPlayers(lobbyCode, players = []) {
        const code = sanitizeLobbyCode(lobbyCode);
        const state = stateByLobby.get(code);
        if (!state) return;

        state.players = Array.isArray(players) ? players : [];
        const validUserIds = new Set(state.players
            .filter((player) => Number.isInteger(player?.userId))
            .map((player) => player.userId));

        for (const memberUserId of [...state.readyUserIds]) {
            if (!validUserIds.has(memberUserId)) {
                state.readyUserIds.delete(memberUserId);
            }
        }

        if (state.phase !== 'GUESSING' || !state.currentRound) return;

        const requiredUserIds = getReadyRequiredUserIds(state.players);
        const readyUserIds = [...state.readyUserIds];
        const allReady = requiredUserIds.length > 0 && requiredUserIds.every((id) => state.readyUserIds.has(id));

        io.to(code).emit('round:ready_state', {
            lobbyCode: code,
            roundId: state.currentRound.id,
            readyUserIds,
            allReady
        });

        updateAllReadyTransition(state, allReady);
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
                            telemetry.error('round.recovery_transition_failed', err, {
                                from: 'GUESSING',
                                to: 'ANSWERS_REVEAL',
                                lobbyCode,
                                sessionId: state.sessionId,
                                roundId: state.currentRound?.id || null
                            });
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
                            telemetry.error('round.recovery_transition_failed', err, {
                                from: 'ANSWERS_REVEAL',
                                to: 'SOLUTION_REVEAL',
                                lobbyCode,
                                sessionId: state.sessionId,
                                roundId: state.currentRound?.id || null
                            });
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
                            telemetry.error('round.recovery_transition_failed', err, {
                                from: 'SOLUTION_REVEAL',
                                to: 'ROUND_END',
                                lobbyCode,
                                sessionId: state.sessionId,
                                roundId: state.currentRound?.id || null
                            });
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
            updateAllReadyTransition(state, false);
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

    async function forceStopLobby(lobbyCode, reason = 'terminated') {
        const code = sanitizeLobbyCode(lobbyCode);
        const state = stateByLobby.get(code);
        if (!state) return false;

        clearRoundTimers(state);
        stateByLobby.delete(code);
        io.to(code).emit('lobby:terminated', {
            lobbyCode: code,
            reason
        });
        telemetry.info('lobby.force_stopped', {
            lobbyCode: code,
            sessionId: state.sessionId,
            reason
        });
        return true;
    }

    async function getSessionMediaManifest(sessionId) {
        const media = await roundService.listRoundMediaForSession(sessionId);
        return Array.isArray(media) ? media : [];
    }

    const recoveryInterval = setInterval(() => {
        recoverActiveSessions().catch((err) => {
            telemetry.error('round.recovery_sweep_failed', err);
        });
    }, 1_500);
    if (typeof recoveryInterval.unref === 'function') recoveryInterval.unref();

    return {
        startSession,
        beginSession,
        submitGuess,
        setReady,
        syncLobbyPlayers,
        getSyncState,
        onPlayerDisconnected,
        hasActiveSession,
        forceStopLobby,
        getSessionMediaManifest,
        recoverActiveSessions
    };
}

module.exports = {
    createRoundEngine
};
