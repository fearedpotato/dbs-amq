const { createLobbyInviteToken, verifyLobbyInviteToken } = require('../inviteToken');

describe('inviteToken', () => {
    beforeAll(() => {
        process.env.LOBBY_INVITE_SECRET = 'test-lobby-invite-secret';
    });

    test('creates a token valid for the expected lobby code', () => {
        const token = createLobbyInviteToken('abc123');
        expect(verifyLobbyInviteToken(token, 'ABC123')).toBe(true);
    });

    test('rejects token when lobby code does not match', () => {
        const token = createLobbyInviteToken('ABC123');
        expect(verifyLobbyInviteToken(token, 'ZZZ999')).toBe(false);
    });
});
