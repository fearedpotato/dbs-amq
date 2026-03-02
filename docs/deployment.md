# Deployment Guide

Last updated: 2026-02-27

This app deploys as one Node backend serving both API + Socket.IO + static frontend assets.

## 1. Build Artifacts

If `frontend/game-client/` changed, build before deploy:

```bash
cd frontend/game-client
npm ci
npm run build
```

Build output goes to `frontend/game-app/` and is served at `/amq`.

## 2. Backend Install and Migrations

```bash
cd backend
npm ci
npx prisma migrate deploy
```

Start:

```bash
npm run start
```

(`npm run start` -> `node src/index.js`)

## 3. Environment Requirements

Runtime-required for normal production behavior:

- `DATABASE_URL` (PostgreSQL + Prisma + session store)
- `BASE_URL` (links/redirects and origin baseline)
- `JWT_SECRET` (>=16 chars)
- `SESSION_SECRET` (>=16 chars)
- `LOBBY_INVITE_SECRET` (>=16 chars)
- `MAL_CLIENT_ID`
- `MAL_CLIENT_SECRET`
- `MAL_REDIRECT_URI` (valid `http/https`)

Fail-fast startup validation currently checks:

- `JWT_SECRET` (>=16 chars)
- `SESSION_SECRET` (>=16 chars)
- `LOBBY_INVITE_SECRET` (>=16 chars)
- `MAL_CLIENT_ID`
- `MAL_CLIENT_SECRET`
- `MAL_REDIRECT_URI` (valid `http/https`)
- `ANIMETHEMES_BASE_URL` (valid `http/https`, default provided)
- `ANIMETHEMES_TIMEOUT_MS` (range validation, default provided)
- If `MEDIA_PROXY_ENABLED=true`:
  - `MEDIA_PROXY_PATH`
  - `MEDIA_PROXY_ALLOWED_HOSTS`
  - `MEDIA_PROXY_FETCH_TIMEOUT_MS`
  - `MEDIA_PROXY_URL_TTL_SEC`
  - `MEDIA_PROXY_RATE_LIMIT_WINDOW_MS`
  - `MEDIA_PROXY_RATE_LIMIT_MAX`

Use `backend/.env.example` as baseline.

## 4. Recommended Environment (Production)

Security/auth:

- `TOKEN_ENCRYPTION_KEY` (recommended)
- `NODE_ENV=production`

Origins/CORS:

- `ALLOWED_ORIGINS` (comma-separated extra origins beyond `BASE_URL`)

Lobby lifecycle protection:

- `LOBBY_HOST_OFFLINE_TIMEOUT_MS` (default 300000)
- `LOBBY_KICK_COOLDOWN_MS` (default 120000)
- `LOBBY_ZERO_CONNECTED_ROUNDS_TO_KILL` (default 3)
- `LOBBY_IDLE_TIMEOUT_MS` (default 600000)
- `CLEANUP_SWEEP_INTERVAL_MS` (default 60000)

Media proxy:

- `MEDIA_PROXY_ENABLED` (default `true`)
- `MEDIA_PROXY_PATH` (default `/api/game/media/proxy`)
- `MEDIA_PROXY_SIGNING_SECRET` (recommended explicit secret; otherwise falls back to session/JWT secret)
- `MEDIA_PROXY_ALLOWED_HOSTS`
- `MEDIA_PROXY_URL_TTL_SEC`
- `MEDIA_PROXY_FETCH_TIMEOUT_MS`
- `MEDIA_PROXY_CACHE_DIR`
- `MEDIA_PROXY_CACHE_MAX_BYTES`
- `MEDIA_PROXY_RATE_LIMIT_WINDOW_MS`
- `MEDIA_PROXY_RATE_LIMIT_MAX`

Provider/search/catalog tuning:

- `ANIMETHEMES_*`
- `JIKAN_*`
- `ANIME_CATALOG_SYNC_*`
- `MAL_WATCHED_*`

Maintenance cleanup tuning:

- `SESSION_STALE_IN_PROGRESS_MS` (default 5400000)
- `SESSION_RETENTION_MS` (default 86400000)
- `RATE_LIMIT_GRACE_MS` (default 300000)

## 5. Reverse Proxy Notes

### TLS/cookies

- Session cookie is `secure=true` in production.
- Terminate TLS at proxy/load balancer.
- Ensure forwarded protocol/host are preserved.

### WebSockets

- `/socket.io` must allow websocket upgrade.

### Routes

Canonical routes:

- `/login`, `/register`, `/forgot`, `/reset-password`, `/verify`
- `/dashboard`
- `/amq`
- `/amq/lobby/:code`
- `/invite/:code` (redirects to `/amq/lobby/:code`)

Legacy `.html` paths redirect to the matching clean paths.
Legacy `/amq/invite/:code` also redirects to `/amq/lobby/:code`.

## 6. MAL OAuth Setup

- `MAL_REDIRECT_URI` must exactly match your MAL app callback.
- Typical production callback: `https://your-domain/api/mal/callback`
- `BASE_URL` should match externally reachable domain.

## 7. Background Jobs

Started automatically by `src/index.js`:

- Maintenance cleanup sweep (stale sessions, idle lobbies, expired rate-limit rows)
- Anime catalog incremental sync job

No extra scheduler is required.

## 8. Suggested Deploy Sequence

1. Pull code.
2. Build `frontend/game-client` if changed.
3. Install backend deps.
4. Run `npx prisma migrate deploy`.
5. Restart backend process.
6. Run smoke checks.

## 9. Smoke Checks

After deploy verify:

1. `GET /` redirects to `/dashboard`.
2. Login works and `GET /api/auth/me` succeeds with JWT.
3. Lobby list loads and create/join works.
4. Waiting-room ready flow works: all players ready before host starts.
5. Kick/promote controls work while lobby is `WAITING`.
6. Game round lifecycle emits expected events through finish/sudden death.
7. `/api/game/media/proxy` streams signed URLs.
8. MAL connect/disconnect flow works.
