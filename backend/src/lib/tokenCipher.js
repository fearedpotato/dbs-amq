const crypto = require('crypto');

function getEncryptionKey() {
    const secret = process.env.TOKEN_ENCRYPTION_KEY || process.env.SESSION_SECRET || process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('Token encryption secret is not configured');
    }
    return crypto.createHash('sha256').update(String(secret)).digest();
}

function encryptToken(value) {
    if (value === null || value === undefined) return null;

    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv('aes-256-gcm', getEncryptionKey(), iv);
    const encrypted = Buffer.concat([cipher.update(String(value), 'utf8'), cipher.final()]);
    const tag = cipher.getAuthTag();

    return `enc.${iv.toString('base64url')}.${tag.toString('base64url')}.${encrypted.toString('base64url')}`;
}

function decryptToken(value) {
    if (value === null || value === undefined) return null;

    const raw = String(value);
    if (!raw.startsWith('enc.')) {
        // Legacy plaintext value.
        return raw;
    }

    const parts = raw.split('.');
    if (parts.length !== 4) {
        return raw;
    }

    const iv = Buffer.from(parts[1], 'base64url');
    const tag = Buffer.from(parts[2], 'base64url');
    const encrypted = Buffer.from(parts[3], 'base64url');

    try {
        const decipher = crypto.createDecipheriv('aes-256-gcm', getEncryptionKey(), iv);
        decipher.setAuthTag(tag);
        const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
        return decrypted.toString('utf8');
    } catch (_err) {
        // Keep backward compatibility if value format is invalid or key changed.
        return raw;
    }
}

module.exports = {
    encryptToken,
    decryptToken
};
