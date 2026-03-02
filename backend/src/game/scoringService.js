const INVISIBLE_WHITESPACE_REGEX = /[\u200B-\u200D\u2060\uFEFF]/gu;

function normalizeGuess(value) {
    return String(value || '')
        .normalize('NFKC')
        .replace(INVISIBLE_WHITESPACE_REGEX, '')
        .toLowerCase()
        .trim()
        .replace(/[^\p{L}\p{N}\s]/gu, '')
        .replace(/\s+/g, ' ');
}

function normalizeAcceptedAnimeIds(acceptedAnimeIds, expectedAnimeId) {
    const set = new Set();
    if (Array.isArray(acceptedAnimeIds)) {
        for (const value of acceptedAnimeIds) {
            const parsed = Number.parseInt(value, 10);
            if (Number.isInteger(parsed) && parsed > 0) {
                set.add(parsed);
            }
        }
    }

    const expected = Number.parseInt(expectedAnimeId, 10);
    if (Number.isInteger(expected) && expected > 0) {
        set.add(expected);
    }

    return set;
}

function isGuessCorrect({
    guessAnimeId,
    expectedAnimeId,
    acceptedAnimeIds,
    guessText,
    expectedTitle
}) {
    const parsedGuessAnimeId = Number.parseInt(guessAnimeId, 10);
    const acceptedIds = normalizeAcceptedAnimeIds(acceptedAnimeIds, expectedAnimeId);
    if (Number.isInteger(parsedGuessAnimeId) && acceptedIds.has(parsedGuessAnimeId)) {
        return true;
    }
    return normalizeGuess(guessText) === normalizeGuess(expectedTitle);
}

module.exports = {
    normalizeGuess,
    normalizeAcceptedAnimeIds,
    isGuessCorrect
};
