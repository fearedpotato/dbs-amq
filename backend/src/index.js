require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const { createServer } = require('./server');

const PORT = process.env.PORT || 3000;
const { httpServer } = createServer();

httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
