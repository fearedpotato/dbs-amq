require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const { createServer } = require('./server');
const { startMaintenanceCleanupJob } = require('./jobs/maintenanceCleanupJob');

const PORT = process.env.PORT || 3000;
const { httpServer } = createServer();
const stopMaintenanceCleanupJob = startMaintenanceCleanupJob();

httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

function shutdown() {
    stopMaintenanceCleanupJob();
    httpServer.close(() => process.exit(0));
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
