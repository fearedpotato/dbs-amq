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
        expect(typeof res.body.browserUrl).toBe('string');
        expect(typeof res.body.authorizeUrl).toBe('string');

        const browserUrl = new URL(res.body.url);
        expect(browserUrl.origin).toBe('https://myanimelist.net');
        expect(browserUrl.pathname).toBe('/login.php');
        const from = browserUrl.searchParams.get('from');
        expect(typeof from).toBe('string');
        expect(from).toContain('/v1/oauth2/authorize?');

        const authorizeUrl = new URL(res.body.authorizeUrl);
        expect(authorizeUrl.origin).toBe('https://myanimelist.net');
        expect(authorizeUrl.pathname).toBe('/v1/oauth2/authorize');
        expect(authorizeUrl.searchParams.get('response_type')).toBe('code');
        expect(authorizeUrl.searchParams.get('client_id')).toBe('test-client-id');
        expect(authorizeUrl.searchParams.get('redirect_uri')).toBe(process.env.MAL_REDIRECT_URI);
        expect(authorizeUrl.searchParams.get('code_challenge_method')).toBe('plain');
        expect(authorizeUrl.searchParams.get('code_challenge')).toBeTruthy();
        expect(authorizeUrl.searchParams.get('state')).toBeTruthy();
    });
});
