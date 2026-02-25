require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../amq-frontend')));

app.get('/', (req, res) => {
    res.redirect('/dashboard.html');
})

app.get('/verify', (req, res) => {
    res.sendFile(path.join(__dirname, '../../amq-frontend/verify.html'));
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});