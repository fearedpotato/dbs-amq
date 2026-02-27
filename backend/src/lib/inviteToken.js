const crypto = require('crypto');
const jwt = require('jsonwebtoken');

function getInviteSecret() {
    const secret = String(process.env.LOBBY_INVITE_SECRET || '').trim();
    return secret || null;
}

function parseInviteTtlSeconds(expiresIn) {
    const raw = String(expiresIn || process.env.LOBBY_INVITE_TTL || '7d').trim().toLowerCase();
    const fallback = 7 * 24 * 60 * 60;
    if (!raw) return fallback;

    if (/^\d+$/.test(raw)) {
        const value = Number.parseInt(raw, 10);
        return Number.isFinite(value) && value > 0 ? value : fallback;
    }

    const match = raw.match(/^(\d+)\s*([smhdw])$/i);
    if (!match) return fallback;

    const amount = Number.parseInt(match[1], 10);
    if (!Number.isFinite(amount) || amount <= 0) return fallback;

    const unit = String(match[2] || '').toLowerCase();
    if (unit === 's') return amount;
    if (unit === 'm') return amount * 60;
    if (unit === 'h') return amount * 60 * 60;
    if (unit === 'd') return amount * 24 * 60 * 60;
    if (unit === 'w') return amount * 7 * 24 * 60 * 60;
    return fallback;
}

function signCompactInviteToken(payload, secret) {
    return crypto.createHmac('sha256', secret).update(payload).digest('base64url').slice(0, 12);
}

function verifyCompactInviteToken(token, normalizedCode, secret) {
    const parts = String(token || '').split('.');
    if (parts.length !== 3) return false;

    const [tokenCode, tokenExpPart, tokenSig] = parts;
    if (!tokenCode || !tokenExpPart || !tokenSig) return false;
    if (tokenCode !== normalizedCode) return false;

    const expiresAt = Number.parseInt(tokenExpPart, 36);
    if (!Number.isFinite(expiresAt)) return false;
    if (Math.floor(Date.now() / 1000) >= expiresAt) return false;

    const payload = `${tokenCode}.${tokenExpPart}`;
    const expectedSig = signCompactInviteToken(payload, secret);
    if (expectedSig.length !== tokenSig.length) return false;

    try {
        return crypto.timingSafeEqual(Buffer.from(expectedSig), Buffer.from(tokenSig));
    } catch (_err) {
        return false;
    }
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

    const ttlSec = parseInviteTtlSeconds(expiresIn);
    const expiresAt = Math.floor(Date.now() / 1000) + ttlSec;
    const expPart = expiresAt.toString(36);
    const payload = `${normalizedCode}.${expPart}`;
    const sig = signCompactInviteToken(payload, secret);
    return `${payload}.${sig}`;
}

function verifyLobbyInviteToken(token, lobbyCode) {
    if (!token) return false;

    const secret = getInviteSecret();
    if (!secret) return false;

    const normalizedCode = String(lobbyCode || '').toUpperCase();
    if (!normalizedCode) return false;

    if (verifyCompactInviteToken(token, normalizedCode, secret)) {
        return true;
    }

    // Backward compatibility with previously issued JWT invite links.
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
