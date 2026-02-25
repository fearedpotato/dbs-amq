require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');

const authRoutes = require('./routes/auth');
const malRoutes = require('./routes/mal');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../amq-frontend')));
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.redirect('/dashboard.html');
})

app.get('/verify', (req, res) => {
    res.sendFile(path.join(__dirname, '../../amq-frontend/verify.html'));
});

app.use('/api/auth', authRoutes);
app.use('/api/mal', malRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});