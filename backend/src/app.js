require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');

const authRoutes = require('./routes/auth');
const malRoutes = require('./routes/mal');
const gameRoutes = require('./routes/game');

function createApp() {
    const app = express();
    const allowedOrigin = process.env.BASE_URL;

    app.use(cors({
        origin: (origin, callback) => {
            // Allow non-browser requests (no Origin header) and the configured frontend origin.
            if (!origin || origin === allowedOrigin) {
                return callback(null, true);
            }
            return callback(new Error('Not allowed by CORS'));
        }
    }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, '../../frontend')));
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
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

    app.use('/api/auth', authRoutes);
    app.use('/api/mal', malRoutes);
    app.use('/api/game', gameRoutes);

    return app;
}

module.exports = { createApp };
