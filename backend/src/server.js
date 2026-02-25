const http = require('http');
const { createApp } = require('./app');
const { attachRealtime } = require('./realtime/socket');

function createServer() {
    const app = createApp();
    const httpServer = http.createServer(app);
    const io = attachRealtime(httpServer, {
        origin: process.env.BASE_URL
    });

    return { app, httpServer, io };
}

module.exports = { createServer };
