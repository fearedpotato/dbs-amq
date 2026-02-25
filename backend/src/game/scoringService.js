function normalizeGuess(value) {
    return (value || '')
        .toLowerCase()
        .trim()
        .replace(/[^\p{L}\p{N}\s]/gu, '')
        .replace(/\s+/g, ' ');
}

function isGuessCorrect({ guessAnimeId, expectedAnimeId, guessText, expectedTitle }) {
    if (guessAnimeId && expectedAnimeId && Number(guessAnimeId) === Number(expectedAnimeId)) {
        return true;
    }
    return normalizeGuess(guessText) === normalizeGuess(expectedTitle);
}

module.exports = {
    normalizeGuess,
    isGuessCorrect
};
