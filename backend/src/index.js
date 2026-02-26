require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const { validateStartupEnv } = require('./config/startupValidation');
const { createServer } = require('./server');
const { startMaintenanceCleanupJob } = require('./jobs/maintenanceCleanupJob');
const { startAnimeCatalogSyncJob } = require('./jobs/animeCatalogSyncJob');

try {
    validateStartupEnv();
} catch (err) {
    console.error(`Startup validation failed: ${err.message}`);
    process.exit(1);
}

const PORT = process.env.PORT || 3000;
const { httpServer } = createServer();
const stopMaintenanceCleanupJob = startMaintenanceCleanupJob();
const stopAnimeCatalogSyncJob = startAnimeCatalogSyncJob();

httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

function shutdown() {
    stopAnimeCatalogSyncJob();
    stopMaintenanceCleanupJob();
    httpServer.close(() => process.exit(0));
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
