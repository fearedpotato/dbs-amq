const jwt = require('jsonwebtoken');

function getInviteSecret() {
    return process.env.LOBBY_INVITE_SECRET || process.env.JWT_SECRET || process.env.SESSION_SECRET || null;
}

function createLobbyInviteToken(lobbyCode, { expiresIn } = {}) {
    const secret = getInviteSecret();
    if (!secret) {
        throw new Error('Lobby invite secret is not configured');
    }

    const normalizedCode = String(lobbyCode || '').toUpperCase();
    if (!normalizedCode) {
        throw new Error('Lobby code is required for invite token generation');
    }

    return jwt.sign(
        {
            type: 'lobby_invite',
            lobbyCode: normalizedCode
        },
        secret,
        {
            expiresIn: expiresIn || process.env.LOBBY_INVITE_TTL || '7d'
        }
    );
}

function verifyLobbyInviteToken(token, lobbyCode) {
    if (!token) return false;

    const secret = getInviteSecret();
    if (!secret) return false;

    const normalizedCode = String(lobbyCode || '').toUpperCase();
    if (!normalizedCode) return false;

    try {
        const payload = jwt.verify(String(token), secret);
        return payload?.type === 'lobby_invite' && payload?.lobbyCode === normalizedCode;
    } catch (_err) {
        return false;
    }
}

module.exports = {
    createLobbyInviteToken,
    verifyLobbyInviteToken
};
