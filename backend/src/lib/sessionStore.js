const session = require('express-session');
const connectPgSimple = require('connect-pg-simple');
const { Pool } = require('pg');

let store;

function getSessionStore() {
    if (store !== undefined) return store;

    if (process.env.NODE_ENV === 'test') {
        store = null;
        return store;
    }

    if (!process.env.DATABASE_URL) {
        store = null;
        return store;
    }

    const PgStore = connectPgSimple(session);
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL
    });

    store = new PgStore({
        pool,
        tableName: 'user_sessions',
        createTableIfMissing: true,
        pruneSessionInterval: 60 * 15
    });

    return store;
}

module.exports = {
    getSessionStore
};
