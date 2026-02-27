require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const { getSessionStore } = require('./lib/sessionStore');
const { getAllowedOrigins, isOriginAllowed } = require('./config/allowedOrigins');

const authRoutes = require('./routes/auth');
const malRoutes = require('./routes/mal');
const gameRoutes = require('./routes/game');

function createApp() {
    const app = express();
    const allowedOrigins = getAllowedOrigins(process.env);
    const sessionStore = getSessionStore();
    const cleanPathByHtmlPath = new Map([
        ['/dashboard.html', '/dashboard'],
        ['/login.html', '/login'],
        ['/register.html', '/register'],
        ['/forgot.html', '/forgot'],
        ['/verify.html', '/verify'],
        ['/reset-password.html', '/reset-password'],
        ['/game.html', '/amq']
    ]);

    if (process.env.NODE_ENV === 'production') {
        app.set('trust proxy', 1);
    }

    app.use(cors({
        origin: (origin, callback) => {
            // Allow non-browser requests (no Origin header) and configured frontend origins.
            if (isOriginAllowed(origin, allowedOrigins)) {
                return callback(null, true);
            }
            // Reject by omitting CORS headers instead of throwing (prevents noisy 500 logs).
            return callback(null, false);
        }
    }));
    app.use(express.json());
    app.use((req, res, next) => {
        const target = cleanPathByHtmlPath.get(req.path);
        if (!target) return next();
        const queryStart = String(req.originalUrl || '').indexOf('?');
        const query = queryStart >= 0 ? String(req.originalUrl).slice(queryStart) : '';
        return res.redirect(302, `${target}${query}`);
    });
    app.use(express.static(path.join(__dirname, '../../frontend')));
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        ...(sessionStore ? { store: sessionStore } : {}),
        cookie: {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production'
        }
    }));

    app.get('/', (req, res) => {
        res.redirect('/dashboard');
    });

    app.get('/dashboard', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/dashboard.html'));
    });

    app.get('/login', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/login.html'));
    });

    app.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/register.html'));
    });

    app.get('/forgot', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/forgot.html'));
    });

    app.get('/verify', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/verify.html'));
    });

    app.get('/reset-password', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/reset-password.html'));
    });

    app.get('/amq', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/game.html'));
    });

    app.get('/amq/lobby/:code', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/game.html'));
    });

    // Legacy AMQ path kept as redirect to canonical AMQ lobby path.
    app.get('/amq/invite/:code', (req, res) => {
        const code = encodeURIComponent(String(req.params.code || '').trim());
        const queryStart = String(req.originalUrl || '').indexOf('?');
        const query = queryStart >= 0 ? String(req.originalUrl).slice(queryStart) : '';
        res.redirect(302, `/amq/lobby/${code}${query}`);
    });

    // General invite entrypoint (future games can be routed from here).
    app.get('/invite/:code', (req, res) => {
        const code = encodeURIComponent(String(req.params.code || '').trim());
        const queryStart = String(req.originalUrl || '').indexOf('?');
        const query = queryStart >= 0 ? String(req.originalUrl).slice(queryStart) : '';
        res.redirect(302, `/amq/lobby/${code}${query}`);
    });

    app.use('/api/auth', authRoutes);
    app.use('/api/mal', malRoutes);
    app.use('/api/game', gameRoutes);

    return app;
}

module.exports = { createApp };
