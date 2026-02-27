# DJABUSite (Anime Music Quiz)

Anime music quiz web app with:

- Express + Prisma backend (`backend/`)
- Socket.IO realtime round engine
- Static frontend shell (`frontend/`)
- React game client source in `frontend/game-client/` (built output goes to `frontend/game-app/`)

## Quick Start

1. Create/configure `backend/.env` (see required keys below).
2. Start backend:

```powershell
cd backend
npm install
npx prisma migrate deploy
npm run dev
```

3. Open `http://localhost:3000/login.html`.

Notes:

- There is no root-level `package.json`; run commands inside `backend/` or `frontend/game-client/`.
- If you edit React game UI code, rebuild `frontend/game-app` from `frontend/game-client/`.

## Repository Layout

- `backend/`: API, auth, MAL OAuth, realtime game engine, Prisma schema/migrations, jobs, tests
- `frontend/`: static pages (`login.html`, `dashboard.html`, `game.html`, etc.) + built game bundle (`game-app/`)
- `frontend/game-client/`: React/Vite source for the game UI
- `docs/`: technical docs (`animemusicquiz-design.md`, `api.md`, `realtime-events.md`, `deployment.md`, `troubleshooting.md`)
- `CONTRIBUTING.md`: contributor workflow and checklist

## Prerequisites

- Node.js 20+ recommended
- npm
- PostgreSQL

## Environment Variables (backend/.env)

Use the template first:

```powershell
cd backend
Copy-Item .env.example .env
```

Minimum required for startup/runtime:

- `DATABASE_URL`
- `BASE_URL`
- `JWT_SECRET`
- `SESSION_SECRET`
- `LOBBY_INVITE_SECRET`
- `MAL_CLIENT_ID`
- `MAL_CLIENT_SECRET`
- `MAL_REDIRECT_URI`
- `MEDIA_PROXY_ALLOWED_HOSTS` (required when media proxy is enabled; enabled by default)

Important validation details:

- `JWT_SECRET`, `SESSION_SECRET`, `LOBBY_INVITE_SECRET` must be at least 16 characters.
- `MAL_REDIRECT_URI` should be your backend callback URL (typically `${BASE_URL}/api/mal/callback`).
- `MEDIA_PROXY_ALLOWED_HOSTS` is a comma-separated allowlist (example: `animethemes.moe,*.animethemes.moe`).

Needed for full auth/email flows:

- `EMAIL_USER`
- `EMAIL_PASS`

Recommended:

- `TOKEN_ENCRYPTION_KEY` (otherwise token encryption falls back to session/JWT secret)

Optional/common:

- `PORT` (default `3000`)
- `MEDIA_PROXY_ENABLED` (`true` by default; set `false` to disable proxy signing/cache behavior)
- `ANIMETHEMES_BASE_URL`, `ANIMETHEMES_TIMEOUT_MS`, and rate-limit/proxy tuning vars (have defaults in code)

## Setup and Run

### 1. Backend

```powershell
cd backend
npm install
npx prisma migrate deploy
npm run dev
```

Backend dev server defaults to: `http://localhost:3000`

### 2. React game client (if you change game UI code)

Install dependencies:

```powershell
cd frontend/game-client
npm install
```

Build bundle used by `frontend/game.html` (served at `/amq`):

```powershell
npm run build
```

This writes output to `frontend/game-app/`.

Without this build step after UI source changes, `frontend/game.html` will still use the previous compiled bundle.

Optional standalone client dev server:

```powershell
npm run dev
```

Vite dev server runs on `http://localhost:5174` and proxies `/api` and `/socket.io` to `http://localhost:3000`.

## Local Usage

With backend running:

- `http://localhost:3000/login.html`
- `http://localhost:3000/dashboard.html`
- `http://localhost:3000/game` (loads React game client from `/game-app/main.js`)

## Tests

Backend tests:

```powershell
cd backend
npm test
```

## Useful Scripts

Backend (`backend/package.json`):

- `npm run dev`
- `npm run start`
- `npm test`
- `npm run catalog:backfill`

Game client (`frontend/game-client/package.json`):

- `npm run dev`
- `npm run build`
- `npm run preview`

## Notes

- The backend serves the static `frontend/` directory directly.
- Socket auth uses JWT token passed in Socket.IO auth payload.
- Media URLs are signed proxy URLs and cached on disk under `.cache/media/`.
