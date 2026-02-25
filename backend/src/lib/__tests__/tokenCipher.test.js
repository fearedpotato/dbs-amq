const { encryptToken, decryptToken } = require('../tokenCipher');

describe('tokenCipher', () => {
    beforeAll(() => {
        process.env.TOKEN_ENCRYPTION_KEY = 'test-token-encryption-key';
    });

    test('encrypts and decrypts token values', () => {
        const plain = 'sample-access-token';
        const encrypted = encryptToken(plain);

        expect(typeof encrypted).toBe('string');
        expect(encrypted.startsWith('enc.')).toBe(true);
        expect(encrypted).not.toBe(plain);
        expect(decryptToken(encrypted)).toBe(plain);
    });

    test('keeps plaintext legacy token readable', () => {
        expect(decryptToken('legacy-plaintext-token')).toBe('legacy-plaintext-token');
    });
});
