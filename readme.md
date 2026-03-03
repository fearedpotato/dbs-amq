# DJABUSite (Anime Music Quiz)

Last updated: 2026-03-03

Anime music quiz app with:

- Express + Prisma backend (`backend/`)
- Socket.IO realtime engine (server-authoritative rounds/scoring)
- Static frontend shell (`frontend/`)
- React game client source (`frontend/game-client/`) built into `frontend/game-app/`

## Quick Start

1. Configure backend env:

```powershell
cd backend
Copy-Item .env.example .env
```

2. Install deps, migrate DB, run backend:

```powershell
cd backend
npm install
npx prisma migrate deploy
npm run dev
```

3. Open `http://localhost:3000/login` (or `http://localhost:3000/login.html`).

Notes:

- There is no root-level `package.json`; run commands from `backend/` or `frontend/game-client/`.
- If you change `frontend/game-client/src`, rebuild `frontend/game-app`.

## Repository Layout

- `backend/`: API, auth, MAL OAuth, realtime engine, Prisma schema/migrations, jobs, tests
- `frontend/`: static pages + built game bundle under `game-app/`
- `frontend/game-client/`: React/Vite source for game UI
- `docs/`: design/API/realtime/deployment/troubleshooting docs
- `CONTRIBUTING.md`: workflow and contribution checklist

## Prerequisites

- Node.js 20+
- npm
- PostgreSQL

## Environment Variables (`backend/.env`)

Runtime-required for normal local/prod behavior:

- `DATABASE_URL`
- `BASE_URL`
- `JWT_SECRET` (min 16 chars)
- `SESSION_SECRET` (min 16 chars)
- `LOBBY_INVITE_SECRET` (min 16 chars)
- `MAL_CLIENT_ID`
- `MAL_CLIENT_SECRET`
- `MAL_REDIRECT_URI`
- `MEDIA_PROXY_ALLOWED_HOSTS` (required when `MEDIA_PROXY_ENABLED=true`, default enabled)

Fail-fast startup validation currently checks:

- `JWT_SECRET` (min 16 chars)
- `SESSION_SECRET` (min 16 chars)
- `LOBBY_INVITE_SECRET` (min 16 chars)
- `MAL_CLIENT_ID`
- `MAL_CLIENT_SECRET`
- `MAL_REDIRECT_URI` (`http/https`)
- `ANIMETHEMES_BASE_URL` (`http/https`)
- `ANIMETHEMES_TIMEOUT_MS` (range-validated)
- When `MEDIA_PROXY_ENABLED=true`:
  - `MEDIA_PROXY_PATH`
  - `MEDIA_PROXY_ALLOWED_HOSTS`
  - `MEDIA_PROXY_FETCH_TIMEOUT_MS`
  - `MEDIA_PROXY_URL_TTL_SEC`
  - `MEDIA_PROXY_RATE_LIMIT_WINDOW_MS`
  - `MEDIA_PROXY_RATE_LIMIT_MAX`
  - `MEDIA_PROXY_LAST_USED_TOUCH_INTERVAL_MS`

Common production additions:

- `ALLOWED_ORIGINS` (extra CORS origins)
- `TOKEN_ENCRYPTION_KEY` (recommended for MAL token-at-rest encryption)
- `EMAIL_USER`, `EMAIL_PASS` (verify/reset flows)

Common tuning:

- `PORT` (default `3000`)
- `LOBBY_HOST_OFFLINE_TIMEOUT_MS`
- `LOBBY_KICK_COOLDOWN_MS`
- `LOBBY_ZERO_CONNECTED_ROUNDS_TO_KILL`
- `LOBBY_IDLE_TIMEOUT_MS`
- `CLEANUP_SWEEP_INTERVAL_MS`
- `MEDIA_PROXY_*`
- `ANIMETHEMES_*`
- `JIKAN_*`
- `MAL_WATCHED_*`
- `ANIME_CATALOG_SYNC_*`
- `TELEMETRY_ENABLED`, `TELEMETRY_LEVEL`

Media cache behavior:

- Shared global cache directory (default `backend/.cache/media`) reused across lobbies/sessions.
- Cache entries track `cachedAt` + `lastUsedAt`.
- `lastUsedAt` is updated on cache hits with throttling via `MEDIA_PROXY_LAST_USED_TOUCH_INTERVAL_MS` (default `60000`).
- Eviction is size-based (`MEDIA_PROXY_CACHE_MAX_BYTES`) and removes oldest-by-`lastUsedAt`.

## Frontend Build Flow

If you changed game client source:

```powershell
cd frontend/game-client
npm install
npm run build
```

This writes compiled assets to `frontend/game-app/` (served by backend at `/amq`).

Optional standalone Vite dev server:

```powershell
npm run dev
```

Vite default: `http://localhost:5174` (proxies `/api` and `/socket.io` to backend).

## Local Routes

- `/login`, `/register`, `/forgot`, `/reset-password`, `/verify`
- `/dashboard`
- `/amq`
- `/amq/lobby/:code`
- `/invite/:code` (redirects to `/amq/lobby/:code`)

Legacy `.html` routes still work and redirect to clean paths.
Legacy `/amq/invite/:code` also redirects to `/amq/lobby/:code`.

## Useful Scripts

Backend:

- `npm run dev`
- `npm run start`
- `npm test`
- `npm run catalog:backfill`

Game client:

- `npm run dev`
- `npm run build`
- `npm run preview`

Optional helper script:

- `scripts/start-cloudflare-tunnel.ps1` updates `BASE_URL` and `MAL_REDIRECT_URI` in `backend/.env` for temporary sharing URLs.

## Tests

```powershell
cd backend
npm test
```

## Related Docs

- `docs/animemusicquiz-design.md`
- `docs/api.md`
- `docs/realtime-events.md`
- `docs/deployment.md`
- `docs/troubleshooting.md`
