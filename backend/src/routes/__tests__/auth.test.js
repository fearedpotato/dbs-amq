const express = require('express');
const request = require('supertest');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

jest.mock('../../lib/prisma', () => ({
    user: {
        findFirst: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        create: jest.fn(),
        delete: jest.fn()
    }
}));

jest.mock('../../lib/mailer', () => ({
    sendMail: jest.fn()
}));

const prisma = require('../../lib/prisma');
const authRoutes = require('../auth');

function createApp() {
    const app = express();
    app.use(express.json());
    app.use('/api/auth', authRoutes);
    return app;
}

describe('auth routes', () => {
    beforeAll(() => {
        process.env.JWT_SECRET = 'test-jwt-secret';
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('POST /api/auth/login rejects unverified accounts', async () => {
        const hashedPassword = await bcrypt.hash('password123', 1);
        prisma.user.findFirst.mockResolvedValue({
            id: 1,
            username: 'demo',
            email: 'demo@example.com',
            password: hashedPassword,
            isVerified: false
        });

        const res = await request(createApp())
            .post('/api/auth/login')
            .send({ identifier: 'demo', password: 'password123' });

        expect(res.status).toBe(403);
        expect(res.body.error).toBe('Please verify your email before signing in');
    });

    test('POST /api/auth/login issues token for verified accounts', async () => {
        const hashedPassword = await bcrypt.hash('password123', 1);
        prisma.user.findFirst.mockResolvedValue({
            id: 7,
            username: 'verified_user',
            email: 'verified@example.com',
            password: hashedPassword,
            isVerified: true
        });

        const res = await request(createApp())
            .post('/api/auth/login')
            .send({ identifier: 'verified_user', password: 'password123' });

        expect(res.status).toBe(200);
        expect(res.body.username).toBe('verified_user');
        expect(typeof res.body.token).toBe('string');

        const decoded = jwt.verify(res.body.token, process.env.JWT_SECRET);
        expect(decoded.userId).toBe(7);
        expect(decoded.username).toBe('verified_user');
    });

    test('POST /api/auth/register rejects when passwords do not match', async () => {
        const res = await request(createApp())
            .post('/api/auth/register')
            .send({
                username: 'new_user',
                email: 'new@example.com',
                password: 'password123',
                confirmPassword: 'different123'
            });

        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Passwords do not match');
        expect(prisma.user.findFirst).not.toHaveBeenCalled();
    });

    test('POST /api/auth/reset-password rejects invalid token', async () => {
        prisma.user.findFirst.mockResolvedValue(null);

        const res = await request(createApp())
            .post('/api/auth/reset-password')
            .send({
                token: 'bad-token',
                password: 'newpassword123',
                confirmPassword: 'newpassword123'
            });

        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Invalid or expired reset token');
    });
});
