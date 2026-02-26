const http = require('http');
const { createApp } = require('./app');
const { attachRealtime } = require('./realtime/socket');
const { getSocketCorsOrigin } = require('./config/allowedOrigins');

function createServer() {
    const app = createApp();
    const httpServer = http.createServer(app);
    const io = attachRealtime(httpServer, {
        origin: getSocketCorsOrigin(process.env)
    });

    return { app, httpServer, io };
}

module.exports = { createServer };
