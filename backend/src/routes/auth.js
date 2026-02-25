const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const prisma = require('../lib/prisma');
const authMiddleware = require('../middleware/auth');
const crypto = require('crypto');
const mailer = require('../lib/mailer');

// Register account
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
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

    try {
        const existing = await prisma.user.findFirst({
            where: { OR: [{ email }, { username }] }
        });

        if (existing) {
            if (existing.isVerified) {
                return res.status(400).json({ error: 'Username or email already taken' });
            }
            await prisma.user.delete({ where: { id: existing.id } });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verifyToken = crypto.randomBytes(32).toString('hex');

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                nickname: username,
                verifyToken
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

// Login
router.post('/login', async (req, res) => {
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

        const token = jwt.sign(
            { userId: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

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
        const user = await prisma.user.findFirst({ where: { verifyToken: token } });

        if (!user) {
            return res.status(400).json({ error: 'Invalid or expired token' });
        }

        await prisma.user.update({
            where: { id: user.id },
            data: { isVerified: true, verifyToken: null }
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