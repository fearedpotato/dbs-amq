const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const prisma = require('../lib/prisma');
const authMiddleware = require('../middleware/auth');
const crypto = require('crypto');
const mailer = require('../lib/mailer');

// Register user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existing = await prisma.user.findFirst({
            where: { OR: [{ email }, { username }] }
        });

        if (existing) {
            return res.status(400).json({ error: 'Username or email already taken' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const verifyToken = crypto.randomBytes(32).toString('hex');

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                verifyToken
            }
        });

        await mailer.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Verify your account',
            html: `<p>Hi ${username}! Click the link below to verify your account:</p>
             <a href="${process.env.BASE_URL}/api/auth/verify?token=${verifyToken}">Verify Email</a>`
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

router.get('/me', authMiddleware, async (req, res) => {
    const user = await prisma.user.findUnique({
        where: { id: req.user.userId },
        select: { id: true, username: true, email: true, isVerified: true }
    })

    res.json(user);
})

module.exports = router;