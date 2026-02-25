const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const router = express.Router();
const prisma = require('../lib/prisma');
const authMiddleware = require('../middleware/auth');

// Step 1: Redirect user to MAL login
router.get('/login', authMiddleware, (req, res) => {
    const codeVerifier = crypto.randomBytes(32).toString('base64url');

    req.session.codeVerifier = codeVerifier;
    req.session.userId = req.user.userId;

    const params = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.MAL_CLIENT_ID,
        redirect_uri: process.env.MAL_REDIRECT_URI,
        code_challenge: codeVerifier,
        code_challenge_method: 'plain'
    });

    res.redirect(`https://myanimelist.net/v1/oauth2/authorize?${params}`);
});

// Step 2: MAL redirects back here with a code
router.get('/callback', async (req, res) => {
    const { code } = req.query;
    const codeVerifier = req.session.codeVerifier;
    const userId = req.session.userId;

    if (!code || !codeVerifier || !userId) {
        return res.redirect('/dashboard.html?error=mal_failed');
    }

    try {
        const tokenRes = await axios.post(
            'https://myanimelist.net/v1/oauth2/token',
            new URLSearchParams({
                client_id: process.env.MAL_CLIENT_ID,
                client_secret: process.env.MAL_CLIENT_SECRET,
                grant_type: 'authorization_code',
                code,
                redirect_uri: process.env.MAL_REDIRECT_URI,
                code_verifier: codeVerifier
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );

        const { access_token, refresh_token } = tokenRes.data;

        const userRes = await axios.get('https://api.myanimelist.net/v2/users/@me', {
            headers: { Authorization: `Bearer ${access_token}` }
        });

        const malUsername = userRes.data.name;

        await prisma.user.update({
            where: { id: userId },
            data: { malAccessToken: access_token, malRefreshToken: refresh_token, malUsername }
        });

        req.session.codeVerifier = null;
        req.session.userId = null;

        res.redirect('/dashboard.html?mal_connected=true');
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.redirect('/dashboard.html?error=mal_failed');
    }
});

router.post('/disconnect', authMiddleware, async (req, res) => {
    await prisma.user.update({
        where: { id: req.user.userId },
        data: { malAccessToken: null, malRefreshToken: null, malUsername: null }
    });
    res.json({ message: 'MAL account disconnected' });
});

module.exports = router;