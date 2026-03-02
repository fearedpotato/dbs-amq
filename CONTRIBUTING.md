# Contributing

## Local Setup

1. Configure backend env:
   - Copy `backend/.env.example` to `backend/.env`
2. Install backend deps and run migrations:

```bash
cd backend
npm install
npx prisma migrate deploy
```

3. Start backend:

```bash
npm run dev
```

4. Open `http://localhost:3000/login` (or `http://localhost:3000/login.html`).

## Project Structure

- Backend API/realtime: `backend/src`
- Prisma schema/migrations: `backend/prisma`
- Static frontend shell pages: `frontend/*.html`
- React game client source: `frontend/game-client/src`
- Built game bundle served by backend: `frontend/game-app`
- Technical docs: `docs/`

## Development Workflow

1. Create a focused feature branch.
2. Make scoped changes.
3. Run backend tests:

```bash
cd backend
npm test
```

4. If `frontend/game-client/src` changed, rebuild:

```bash
cd frontend/game-client
npm run build
```

5. Update docs for contract, behavior, or operational changes.

## Coding Expectations

- Keep match logic server-authoritative (round state, scoring, transitions).
- Keep HTTP/socket validation strict.
- Prefer small, testable service-level changes in `backend/src/game`.
- Preserve contract compatibility where practical (REST payloads, Socket events).
- If changing route conventions (`/login`, `/dashboard`, `/amq`, invite paths), update docs and redirects together.

## Documentation Scope To Update

- `readme.md`
- `docs/animemusicquiz-design.md`
- `docs/api.md`
- `docs/realtime-events.md`
- `docs/deployment.md`
- `docs/troubleshooting.md`
- `backend/.env.example` when env keys/default guidance changes

## Pull Request Checklist

1. Backend tests pass.
2. `frontend/game-client` build regenerated if source changed.
3. Documentation reflects all user-visible or contract-level changes.
4. Env template/docs updated for new variables or defaults.
5. No secrets committed (`.env` remains local).
