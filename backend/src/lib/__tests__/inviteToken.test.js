const jwt = require('jsonwebtoken');
const { createLobbyInviteToken, verifyLobbyInviteToken } = require('../inviteToken');

describe('inviteToken', () => {
    beforeAll(() => {
        process.env.LOBBY_INVITE_SECRET = 'test-lobby-invite-secret';
    });

    test('creates a token valid for the expected lobby code', () => {
        const token = createLobbyInviteToken('abc123');
        expect(verifyLobbyInviteToken(token, 'ABC123')).toBe(true);
        expect(token).toMatch(/^ABC123\.[0-9a-z]+\.[A-Za-z0-9_-]{12}$/);
    });

    test('rejects token when lobby code does not match', () => {
        const token = createLobbyInviteToken('ABC123');
        expect(verifyLobbyInviteToken(token, 'ZZZ999')).toBe(false);
    });

    test('accepts legacy JWT invite tokens for backward compatibility', () => {
        const token = jwt.sign(
            { type: 'lobby_invite', lobbyCode: 'ABC123' },
            process.env.LOBBY_INVITE_SECRET,
            { expiresIn: '1h' }
        );
        expect(verifyLobbyInviteToken(token, 'ABC123')).toBe(true);
    });
});
