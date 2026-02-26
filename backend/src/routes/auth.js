const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const prisma = require('../lib/prisma');
const authMiddleware = require('../middleware/auth');
const crypto = require('crypto');
const mailer = require('../lib/mailer');
const { createRateLimit } = require('../middleware/rateLimit');
const { signAuthToken } = require('../lib/authToken');

const registerRateLimit = createRateLimit({
    keyPrefix: 'auth:register',
    windowMs: 10 * 60 * 1000,
    max: 10,
    message: 'Too many registration attempts. Please try again later.'
});

const loginRateLimit = createRateLimit({
    keyPrefix: 'auth:login',
    windowMs: 5 * 60 * 1000,
    max: 20,
    keyGenerator: (req) => `${req.ip}:${String(req.body?.identifier || '').toLowerCase()}`,
    message: 'Too many login attempts. Please try again later.'
});

const forgotPasswordRateLimit = createRateLimit({
    keyPrefix: 'auth:forgot_password',
    windowMs: 10 * 60 * 1000,
    max: 10,
    keyGenerator: (req) => `${req.ip}:${String(req.body?.email || '').toLowerCase()}`,
    message: 'Too many password reset requests. Please try again later.'
});

const resetPasswordRateLimit = createRateLimit({
    keyPrefix: 'auth:reset_password',
    windowMs: 10 * 60 * 1000,
    max: 20,
    keyGenerator: (req) => `${req.ip}:${String(req.body?.token || '').slice(0, 12)}`,
    message: 'Too many reset attempts. Please try again later.'
});

function hashToken(token) {
    return crypto.createHash('sha256').update(String(token)).digest('hex');
}

const VERIFY_TOKEN_TTL_MS = 24 * 60 * 60 * 1000;

// Register account
router.post('/register', registerRateLimit, async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Username validation
    const forbiddenUsernames = ['admin', 'root', 'moderator', 'mod', 'administrator', 'system', 'support'];
    if (username.length < 4) {
        return res.status(400).json({ error: 'Username must be at least 4 characters long' });
    }
    if (username.length > 20) {
        return res.status(400).json({ error: 'Username must be at most 20 characters long' });
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return res.status(400).json({ error: 'Username can only contain letters, numbers and underscores' });
    }
    if (forbiddenUsernames.includes(username.toLowerCase())) {
        return res.status(400).json({ error: 'This username is not allowed' });
    }

    // Password validation
    if (password.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const existing = await prisma.user.findFirst({
            where: { OR: [{ email }, { username }] }
        });

        if (existing) {
            if (existing.isVerified) {
                return res.status(400).json({ error: 'Username or email already taken' });
            }

            const sameEmail = String(existing.email || '').toLowerCase() === String(email).toLowerCase();
            const sameUsername = String(existing.username || '').toLowerCase() === String(username).toLowerCase();
            if (!sameEmail || !sameUsername) {
                return res.status(400).json({ error: 'Username or email already taken' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const verifyToken = crypto.randomBytes(32).toString('hex');
            const verifyTokenHash = hashToken(verifyToken);
            const verifyTokenExpires = new Date(Date.now() + VERIFY_TOKEN_TTL_MS);

            await prisma.user.update({
                where: { id: existing.id },
                data: {
                    password: hashedPassword,
                    nickname: username,
                    isVerified: false,
                    verifyToken: verifyTokenHash,
                    verifyTokenExpires
                }
            });

            await mailer.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Verify your account',
                html: `<p>Hi ${username}! Click the link below to verify your account:</p>
             <a href="${process.env.BASE_URL}/verify?token=${verifyToken}">Verify Email</a>`
            });

            return res.status(200).json({ message: 'Account exists but is unverified. Verification email resent.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verifyToken = crypto.randomBytes(32).toString('hex');
        const verifyTokenHash = hashToken(verifyToken);
        const verifyTokenExpires = new Date(Date.now() + VERIFY_TOKEN_TTL_MS);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                nickname: username,
                verifyToken: verifyTokenHash,
                verifyTokenExpires
            }
        });

        await mailer.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Verify your account',
            html: `<p>Hi ${username}! Click the link below to verify your account:</p>
             <a href="${process.env.BASE_URL}/verify?token=${verifyToken}">Verify Email</a>`
        });

        res.status(201).json({ message: 'User created successfully. Please verify your email.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

router.post('/forgot-password', forgotPasswordRateLimit, async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        // Keep response generic to avoid account enumeration.
        if (!user) {
            return res.json({ message: 'If an account exists, a reset link has been sent.' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenHash = hashToken(resetToken);
        const resetPasswordExpires = new Date(Date.now() + 10 * 60 * 1000);

        await prisma.user.update({
            where: { id: user.id },
            data: { resetPasswordToken: resetTokenHash, resetPasswordExpires }
        });

        await mailer.sendMail({
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Reset your password',
            html: `<p>Hi ${user.username}, click below to reset your password:</p>
             <a href="${process.env.BASE_URL}/reset-password?token=${resetToken}">Reset Password</a>
             <p>This link expires in 10 minutes.</p>`
        });

        res.json({ message: 'If an account exists, a reset link has been sent.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

router.post('/reset-password', resetPasswordRateLimit, async (req, res) => {
    const { token, password, confirmPassword } = req.body;

    if (!token || !password || !confirmPassword) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    if (password.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const tokenHash = hashToken(token);
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { resetPasswordToken: tokenHash }, // hashed-at-rest format (current)
                    { resetPasswordToken: token } // backward compatibility for pre-hash records
                ],
                resetPasswordExpires: { gt: new Date() }
            }
        });

        if (!user) {
            return res.status(400).json({ error: 'Invalid or expired reset token' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.update({
            where: { id: user.id },
            data: {
                password: hashedPassword,
                resetPasswordToken: null,
                resetPasswordExpires: null
            }
        });

        res.json({ message: 'Password has been reset successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Login
router.post('/login', loginRateLimit, async (req, res) => {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: identifier },
                    { username: identifier }
                ]
            }
        });

        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        if (!user.isVerified) {
            return res.status(403).json({ error: 'Please verify your email before signing in' });
        }

        const token = signAuthToken({
            userId: user.id,
            username: user.username
        });

        res.json({ token, username: user.username });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Verify email
router.get('/verify', async (req, res) => {
    const { token } = req.query;

    if (!token) {
        return res.status(400).json({ error: 'No token provided' });
    }

    try {
        const tokenHash = hashToken(token);
        const user = await prisma.user.findFirst({
            where: {
                verifyTokenExpires: { gt: new Date() },
                OR: [
                    { verifyToken: tokenHash }, // hashed-at-rest format (current)
                    { verifyToken: token } // backward compatibility for pre-hash records
                ]
            }
        });

        if (!user) {
            return res.status(400).json({ error: 'Invalid or expired token' });
        }

        await prisma.user.update({
            where: { id: user.id },
            data: { isVerified: true, verifyToken: null, verifyTokenExpires: null }
        });

        res.json({ message: 'Email verified successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Change username
router.patch('/nickname', authMiddleware, async (req, res) => {
    const { nickname } = req.body;

    const forbiddenNickname = ['admin', 'root', 'moderator', 'mod', 'administrator', 'system', 'support'];
    if (!nickname) return res.status(400).json({ error: 'Nickname is required' });
    if (nickname.length < 3) return res.status(400).json({ error: 'Nickname must be at least 3 characters' });
    if (nickname.length > 20) return res.status(400).json({ error: 'Nickname must be at most 20 characters' });
    if (!/^[a-zA-Z0-9_]+$/.test(nickname)) return res.status(400).json({ error: 'Nickname can only contain letters, numbers and underscores' });
    if (forbiddenNickname.includes(nickname.toLowerCase())) return res.status(400).json({ error: 'This nickname is not allowed' });

    try {
        await prisma.user.update({
            where: { id: req.user.userId },
            data: { nickname }
        });
        res.json({ message: 'Nickname updated' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Get user's info
router.get('/me', authMiddleware, async (req, res) => {
    const user = await prisma.user.findUnique({
        where: { id: req.user.userId },
        select: { id: true, username: true, nickname: true, email: true, isVerified: true, malUsername: true }
    });

    res.json(user);
});

module.exports = router;
