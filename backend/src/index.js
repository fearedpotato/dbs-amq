require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const { createServer } = require('./server');
const { startLobbyCleanupJob } = require('./jobs/lobbyCleanupJob');

const PORT = process.env.PORT || 3000;
const { httpServer } = createServer();
const stopLobbyCleanupJob = startLobbyCleanupJob();

httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

function shutdown() {
    stopLobbyCleanupJob();
    httpServer.close(() => process.exit(0));
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
