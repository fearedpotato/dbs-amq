const jwt = require('jsonwebtoken');

const AUTH_TOKEN_TYPE = 'auth_access';
const DEFAULT_EXPIRES_IN = '7d';

function getJwtSecret() {
    const secret = String(process.env.JWT_SECRET || '').trim();
    if (!secret) {
        throw new Error('JWT secret is not configured');
    }
    return secret;
}

function normalizeUsername(value) {
    return typeof value === 'string' ? value : '';
}

function signAuthToken({ userId, username }, options = {}) {
    if (!Number.isInteger(userId) || userId <= 0) {
        throw new Error('Cannot sign auth token without a valid userId');
    }

    return jwt.sign(
        {
            type: AUTH_TOKEN_TYPE,
            userId,
            username: normalizeUsername(username)
        },
        getJwtSecret(),
        {
            expiresIn: options.expiresIn || DEFAULT_EXPIRES_IN
        }
    );
}

function verifyAuthToken(token) {
    const decoded = jwt.verify(token, getJwtSecret());
    if (!decoded || typeof decoded !== 'object') {
        throw new Error('Invalid auth token payload');
    }
    if (decoded.type !== AUTH_TOKEN_TYPE) {
        throw new Error('Invalid auth token type');
    }
    if (!Number.isInteger(decoded.userId) || decoded.userId <= 0) {
        throw new Error('Invalid auth token user');
    }

    return {
        userId: decoded.userId,
        username: normalizeUsername(decoded.username)
    };
}

module.exports = {
    AUTH_TOKEN_TYPE,
    signAuthToken,
    verifyAuthToken
};
