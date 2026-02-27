# Contributing

## Local Setup

1. Configure backend env:
   - copy `backend/.env.example` to `backend/.env`
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

4. Open `http://localhost:3000/login.html`.

## Project Structure

- Backend API/realtime: `backend/src`
- Prisma schema/migrations: `backend/prisma`
- Static frontend pages: `frontend/*.html`
- React game client source: `frontend/game-client/src`
- Built game client bundle: `frontend/game-app`
- Technical docs: `docs/`

## Development Workflow

1. Create a feature branch.
2. Make focused changes.
3. Run backend tests:

```bash
cd backend
npm test
```

4. If you changed `frontend/game-client/src`, rebuild:

```bash
cd frontend/game-client
npm run build
```

5. Update docs for API/event/config behavior changes.

## Coding Expectations

- Keep game logic server-authoritative (scoring/timers/phase transitions).
- Keep route/socket payload validation strict.
- Prefer small, testable service-level changes in `backend/src/game`.
- Preserve backward compatibility for key API/event contracts when possible.

## Docs to Keep Updated

- `readme.md`
- `docs/animemusicquiz-design.md`
- `docs/api.md`
- `docs/realtime-events.md`
- `docs/deployment.md`
- `docs/troubleshooting.md`

## Pull Request Checklist

1. Tests pass (`backend`).
2. Game-client bundle rebuilt if React client source changed.
3. Docs updated for user-visible or contract changes.
4. No secrets committed (`.env` stays local).
