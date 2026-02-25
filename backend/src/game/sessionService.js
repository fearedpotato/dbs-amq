const { httpError } = require('./errors');

function assertSelectionModeAllowedForPlayerCount(selectionMode, playerCount) {
    if (playerCount <= 1 && selectionMode !== 'STANDARD') {
        throw httpError(400, 'Balanced selection modes require at least 2 players');
    }
}

module.exports = {
    assertSelectionModeAllowedForPlayerCount
};
