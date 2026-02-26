const { isGuessCorrect, normalizeAcceptedAnimeIds } = require('../scoringService');

describe('scoringService', () => {
    test('normalizes accepted ids and always includes expected anime id', () => {
        const ids = normalizeAcceptedAnimeIds(['10', null, 'bad', 20], 30);
        expect([...ids]).toEqual([10, 20, 30]);
    });

    test('marks guess correct when guessed anime id is in accepted anime ids', () => {
        const isCorrect = isGuessCorrect({
            guessAnimeId: 200,
            expectedAnimeId: 100,
            acceptedAnimeIds: [100, 200, 300],
            guessText: 'Some title',
            expectedTitle: 'Expected Title'
        });

        expect(isCorrect).toBe(true);
    });

    test('falls back to expected anime id when accepted ids are empty', () => {
        const isCorrect = isGuessCorrect({
            guessAnimeId: 777,
            expectedAnimeId: 777,
            acceptedAnimeIds: [],
            guessText: 'Wrong title',
            expectedTitle: 'Expected Title'
        });

        expect(isCorrect).toBe(true);
    });

    test('still accepts exact normalized title match', () => {
        const isCorrect = isGuessCorrect({
            guessAnimeId: null,
            expectedAnimeId: 100,
            acceptedAnimeIds: [100],
            guessText: 'Komi-san wa, Comyushou desu!',
            expectedTitle: 'Komi-san wa Comyushou desu'
        });

        expect(isCorrect).toBe(true);
    });
});
