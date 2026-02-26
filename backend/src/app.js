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
        res.redirect('/dashboard.html');
    });

    app.get('/verify', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/verify.html'));
    });

    app.get('/reset-password', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/reset-password.html'));
    });

    app.get('/game', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/game.html'));
    });

    app.use('/api/auth', authRoutes);
    app.use('/api/mal', malRoutes);
    app.use('/api/game', gameRoutes);

    return app;
}

module.exports = { createApp };
