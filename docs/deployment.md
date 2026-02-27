# Deployment Guide

This project runs as a single Node backend that also serves static frontend files.

## 1. Build Artifacts

If game UI source changed in `frontend/game-client/`, build before deploy:

```bash
cd frontend/game-client
npm ci
npm run build
```

This writes deployment assets to `frontend/game-app/` (served by backend static middleware).

## 2. Backend Install and Migrations

```bash
cd backend
npm ci
npx prisma migrate deploy
```

Start server:

```bash
npm run start
```

## 3. Required Environment

Required for startup validation:

- `JWT_SECRET` (>=16 chars)
- `SESSION_SECRET` (>=16 chars)
- `LOBBY_INVITE_SECRET` (>=16 chars)
- `MAL_CLIENT_ID`
- `MAL_CLIENT_SECRET`
- `MAL_REDIRECT_URI`
- `MEDIA_PROXY_ALLOWED_HOSTS` (when media proxy enabled)
- `BASE_URL`
- `DATABASE_URL`

Use `backend/.env.example` as template.

## 4. Production Notes

### HTTPS and cookies

- In production, session cookie is `secure=true`.
- Terminate TLS at reverse proxy/load balancer.
- Keep backend reachable by proxy and set `NODE_ENV=production`.

### CORS and origins

- Allowed origins are derived from `BASE_URL` and `ALLOWED_ORIGINS` (comma-separated).
- Socket CORS uses same origin set.

### MAL callback URL

- `MAL_REDIRECT_URI` must exactly match the callback registered in MAL app settings.
- Typical format: `https://your-domain/api/mal/callback`.

### Media proxy allowlist

- Configure `MEDIA_PROXY_ALLOWED_HOSTS` for required media hosts.
- Example: `animethemes.moe,*.animethemes.moe`.

### Reverse proxy websocket support

- `/socket.io` must support websocket upgrade.

## 5. Process Management

Use a process manager (systemd, PM2, container runtime) with automatic restarts.

Recommended:

- start command: `node src/index.js`
- graceful shutdown signals: `SIGINT`/`SIGTERM` already handled

## 6. Suggested Deploy Sequence

1. Pull code.
2. Build `frontend/game-client` if changed.
3. Install backend deps.
4. Run `prisma migrate deploy`.
5. Restart backend process.
6. Run smoke checks.

## 7. Smoke Checks

After deploy verify:

1. `GET /` redirects to `/dashboard.html`.
2. Register/login works.
3. `GET /api/auth/me` works with JWT.
4. Create lobby, start game, round events flow.
5. Media proxy URLs stream correctly.
6. MAL connect flow redirects correctly.
