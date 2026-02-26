const express = require('express');
const session = require('express-session');
const request = require('supertest');
const jwt = require('jsonwebtoken');

jest.mock('../../lib/prisma', () => ({
    user: {
        update: jest.fn()
    }
}));

const malRoutes = require('../mal');

function createApp() {
    const app = express();
    app.use(express.json());
    app.use(
        session({
            secret: 'test-session-secret',
            resave: false,
            saveUninitialized: false
        })
    );
    app.use('/api/mal', malRoutes);
    return app;
}

describe('mal routes', () => {
    beforeAll(() => {
        process.env.JWT_SECRET = 'test-jwt-secret';
        process.env.MAL_CLIENT_ID = 'test-client-id';
        process.env.MAL_REDIRECT_URI = 'http://localhost:3000/api/mal/callback';
    });

    test('POST /api/mal/login requires auth', async () => {
        const res = await request(createApp()).post('/api/mal/login').send({});
        expect(res.status).toBe(401);
        expect(res.body.error).toBe('Access denied, no token provided');
    });

    test('POST /api/mal/login returns authorize URL for authenticated user', async () => {
        const token = jwt.sign({ type: 'auth_access', userId: 15, username: 'demo' }, process.env.JWT_SECRET);

        const res = await request(createApp())
            .post('/api/mal/login')
            .set('Authorization', `Bearer ${token}`)
            .send({});

        expect(res.status).toBe(200);
        expect(typeof res.body.url).toBe('string');

        const url = new URL(res.body.url);
        expect(url.origin).toBe('https://myanimelist.net');
        expect(url.pathname).toBe('/v1/oauth2/authorize');
        expect(url.searchParams.get('response_type')).toBe('code');
        expect(url.searchParams.get('client_id')).toBe('test-client-id');
        expect(url.searchParams.get('redirect_uri')).toBe(process.env.MAL_REDIRECT_URI);
        expect(url.searchParams.get('code_challenge_method')).toBe('plain');
        expect(url.searchParams.get('code_challenge')).toBeTruthy();
        expect(url.searchParams.get('state')).toBeTruthy();
    });
});
