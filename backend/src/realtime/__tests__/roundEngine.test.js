jest.mock('../../game/roundService', () => ({
    generateInitialRoundsForSession: jest.fn(),
    ensureRoundForIndex: jest.fn(),
    getSessionForLobbyCode: jest.fn(),
    getSessionById: jest.fn(),
    getCurrentActiveRound: jest.fn(),
    listActiveRounds: jest.fn(),
    updateSessionCurrentRound: jest.fn(),
    setRoundStatus: jest.fn(),
    compareAndSetRoundStatus: jest.fn(),
    submitGuess: jest.fn(),
    setPlayerReady: jest.fn(),
    evaluateRound: jest.fn(),
    getScoresForSession: jest.fn(),
    finishSession: jest.fn()
}));

const roundService = require('../../game/roundService');
const { createRoundEngine } = require('../roundEngine');

function createIoStub() {
    const events = [];
    return {
        events,
        to(room) {
            return {
                emit(event, payload) {
                    events.push({ room, event, payload });
                }
            };
        }
    };
}

function createSession(roundCount = 1) {
    return {
        id: 100,
        status: 'IN_PROGRESS',
        roundCount,
        guessSeconds: 1,
        answersRevealSeconds: 1,
        solutionRevealSeconds: 1,
        selectionMode: 'STANDARD',
        lobby: {
            players: [
                { userId: 1, displayName: 'P1' },
                { userId: 2, displayName: 'P2' }
            ]
        }
    };
}

function createRound(index = 1) {
    return {
        id: 500 + index,
        index,
        animeId: 999 + index,
        animeTitle: `Anime ${index}`,
        themeType: 'OP',
        themeTitle: `Theme ${index}`,
        sampleStartSec: 5,
        sampleDurationSec: 10,
        solutionVideoUrl: `video-${index}`,
        solutionAudioUrl: `audio-${index}`
    };
}

describe('round engine', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        roundService.compareAndSetRoundStatus.mockResolvedValue(true);
        roundService.updateSessionCurrentRound.mockResolvedValue();
        roundService.listActiveRounds.mockResolvedValue([]);
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('startSession emits round:started', async () => {
        const io = createIoStub();
        const engine = createRoundEngine(io);

        roundService.generateInitialRoundsForSession.mockResolvedValue();
        roundService.getSessionById.mockResolvedValue(createSession(1));
        roundService.ensureRoundForIndex.mockResolvedValue(createRound(1));
        roundService.setRoundStatus.mockResolvedValue({});

        await engine.startSession({
            lobbyCode: 'ABC123',
            session: createSession(1),
            lobby: { players: [{ userId: 1 }, { userId: 2 }] }
        });

        const started = io.events.find((event) => event.event === 'round:started');
        expect(started).toBeTruthy();
        expect(started.room).toBe('ABC123');
        expect(started.payload.roundId).toBe(501);
    });

    test('submitGuess saves guess and blocks locked users', async () => {
        const io = createIoStub();
        const engine = createRoundEngine(io);

        roundService.generateInitialRoundsForSession.mockResolvedValue();
        roundService.getSessionById.mockResolvedValue(createSession(1));
        roundService.ensureRoundForIndex.mockResolvedValue(createRound(1));
        roundService.setRoundStatus.mockResolvedValue({});
        roundService.submitGuess.mockResolvedValue({});
        roundService.setPlayerReady.mockResolvedValue({});

        await engine.startSession({
            lobbyCode: 'ABC123',
            session: createSession(1),
            lobby: { players: [{ userId: 1 }, { userId: 2 }] }
        });

        const submitted = await engine.submitGuess({
            lobbyCode: 'ABC123',
            userId: 1,
            payload: { guessText: 'Anime 1' }
        });
        expect(submitted.roundId).toBe(501);
        expect(roundService.submitGuess).toHaveBeenCalled();

        await engine.setReady({ lobbyCode: 'ABC123', userId: 1, ready: true });
        await expect(engine.submitGuess({
            lobbyCode: 'ABC123',
            userId: 1,
            payload: { guessText: 'Edited' }
        })).rejects.toThrow('Player is locked; unskip before changing guess');
    });

    test('all ready moves round early to answers reveal', async () => {
        const io = createIoStub();
        const engine = createRoundEngine(io);

        roundService.generateInitialRoundsForSession.mockResolvedValue();
        roundService.getSessionById.mockResolvedValue(createSession(1));
        roundService.ensureRoundForIndex.mockResolvedValue(createRound(1));
        roundService.setRoundStatus.mockResolvedValue({});
        roundService.setPlayerReady.mockResolvedValue({});
        roundService.evaluateRound.mockResolvedValue({
            round: createRound(1),
            answers: [{ userId: 1, guessText: 'Anime 1', isCorrect: true }]
        });
        roundService.getScoresForSession.mockResolvedValue([
            { userId: 1, displayName: 'P1', score: 1 },
            { userId: 2, displayName: 'P2', score: 0 }
        ]);
        roundService.finishSession.mockResolvedValue();

        await engine.startSession({
            lobbyCode: 'ABC123',
            session: createSession(1),
            lobby: { players: [{ userId: 1 }, { userId: 2 }] }
        });

        await engine.setReady({ lobbyCode: 'ABC123', userId: 1, ready: true });
        await engine.setReady({ lobbyCode: 'ABC123', userId: 2, ready: true });

        const answersReveal = io.events.find((event) => event.event === 'round:answers_reveal');
        expect(answersReveal).toBeTruthy();
        expect(answersReveal.payload.reason).toBe('all_ready');
    });

    test('timer lifecycle ends game and emits game:finished', async () => {
        const io = createIoStub();
        const engine = createRoundEngine(io);

        roundService.generateInitialRoundsForSession.mockResolvedValue();
        roundService.getSessionById.mockResolvedValue(createSession(1));
        roundService.ensureRoundForIndex.mockResolvedValue(createRound(1));
        roundService.setRoundStatus.mockResolvedValue({});
        roundService.evaluateRound.mockResolvedValue({
            round: createRound(1),
            answers: []
        });
        roundService.getScoresForSession.mockResolvedValue([
            { userId: 1, displayName: 'P1', score: 1 },
            { userId: 2, displayName: 'P2', score: 0 }
        ]);
        roundService.finishSession.mockResolvedValue();

        await engine.startSession({
            lobbyCode: 'ABC123',
            session: createSession(1),
            lobby: { players: [{ userId: 1 }, { userId: 2 }] }
        });

        await jest.advanceTimersByTimeAsync(1000); // GUESSING -> ANSWERS_REVEAL
        await jest.advanceTimersByTimeAsync(1000); // ANSWERS_REVEAL -> SOLUTION_REVEAL
        await jest.advanceTimersByTimeAsync(1000); // SOLUTION_REVEAL -> FINISH

        const finished = io.events.find((event) => event.event === 'game:finished');
        expect(finished).toBeTruthy();
        expect(roundService.finishSession).toHaveBeenCalled();
    });
});
