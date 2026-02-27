# Anime Music Quiz Design (Current Implementation)

Last updated: 2026-02-26

## 1. Purpose

This document describes the currently implemented Anime Music Quiz behavior in this repository.
It reflects what is already shipped in code (backend + realtime + React client), not future design proposals.

## 2. Runtime Architecture

- Backend HTTP/API: Express 5 + Prisma + PostgreSQL (`backend/src/app.js`, `backend/src/routes/*`)
- Realtime: Socket.IO server with JWT socket auth (`backend/src/realtime/socket.js`)
- Round orchestration: server-authoritative round engine (`backend/src/realtime/roundEngine.js`)
- Frontend shell: static HTML/CSS/JS in `frontend/`
- Game UI: React client built by Vite into `frontend/game-app/` and mounted by `frontend/game.html`
- Auth: JWT bearer tokens for API/socket auth
- MAL integration: OAuth bind flow (`/api/mal/login`, `/api/mal/callback`, `/api/mal/disconnect`)

## 3. Lobby and Session Model

### 3.1 Lobby constraints and defaults

Backend lobby config currently supports:

- `name` (optional)
- `isPrivate` (default `false`)
- `minPlayers` (default `1`, range `1..8`)
- `maxPlayers` (default `8`, range `1..8`)
- `roundCount` (default `10`, range `1..50`)
- `guessSeconds` (default `20`, range `5..120`)
- `sampleSeconds` (default `10`, range `3..60`)
- `answersRevealSeconds` (default `3`, range `1..30`)
- `solutionRevealSeconds` (default `8`, range `1..60`)
- `sourceMode` (`POPULAR`, `MAL_ONLY`, `HYBRID`)
- `selectionMode` (`STANDARD`, `BALANCED_STRICT`, `BALANCED_RELAXED`)
- `themeMode` (`OP_ONLY`, `ED_ONLY`, `MIXED`)

Current React create-lobby UI exposes a subset of those fields:

- `name`, `isPrivate`, `roundCount`, `guessSeconds`, `sampleSeconds`, `sourceMode`, `selectionMode`, `themeMode`

### 3.2 Membership and access

- A user can only belong to one active lobby (`WAITING` or `IN_GAME`) at a time.
- Joining/creating another lobby forces removal from previous active lobbies.
- Private lobbies require a valid invite token unless the user is host.
- Lobby size hard cap is 8.
- Solo games are supported (`minPlayers` default is 1).

### 3.3 Lifecycle

- Lobby statuses: `WAITING`, `IN_GAME`, `CLOSED`
- Session statuses: `WAITING`, `IN_PROGRESS`, `FINISHED`, `CANCELLED`
- Starting a session sets lobby to `IN_GAME`.
- Finishing/cancelling returns lobby to `WAITING`.

## 4. Game Start and Preload Flow (Implemented)

1. Host emits `game:start`.
2. Backend validates host/requirements and creates `GameSession`.
3. Backend generates initial round seeds/media (`roundService.generateInitialRoundsForSession`).
4. Round engine state is created with `deferFirstRound = true`.
5. Backend builds preload manifest and must prewarm first round media (server-side).
6. If first-round prewarm fails, backend rolls back start (`sessionService.rollbackSessionStart`).
7. Backend emits `game:started` with `sessionId`, config, lobby snapshot, and `preloadManifest`.
8. Backend tracks pending preload readiness for connected players (fallback: all players if none connected).
9. React client blocks round start on an initial preload gate (first 2 rounds).
10. Clients signal `game:preload_ready` when gate passes.
11. When required players are ready, backend starts round 1 (`roundEngine.beginSession`).

Additional prewarm behavior:

- Backend also runs one background prewarm pass over first 3 rounds from manifest.

## 5. Client Preload Behavior (React Game Client)

- Initial gate: first 2 rounds must preload before gameplay (`INITIAL_REQUIRED_ROUNDS = 2`).
- Rolling window during match: current round + next 2 (`PRELOAD_WINDOW_ROUNDS = 3`).
- Max concurrent preload tasks: 2.
- Gate failure/timeout surfaces retry UI (`Retry preload`).
- On success, client emits `game:preload_ready` exactly once per session.

## 6. Round State Machine (Server Authoritative)

Per round status progression:

1. `PENDING`
2. `GUESSING`
3. `ANSWERS_REVEAL`
4. `SOLUTION_REVEAL`
5. `ROUND_END`

Notes:

- Transitions use DB compare-and-set guards.
- `endsAt` timestamps are emitted for client countdown sync.
- Recovery sweep runs periodically (1.5s interval) to restore timers after transient failures/restarts.

## 7. Guessing, Ready/Skip, and Scoring

- Guesses only accepted in `GUESSING`.
- `round:set_ready` implements skip/ready lock:
  - `ready: true` locks guess (or blank guess)
  - `ready: false` unlocks while still in `GUESSING`
- All-ready immediately ends guessing (`reason: all_ready`).
- Scoring is server-side only.

Correctness check order:

1. `guessAnimeId` must match any `acceptedAnimeIds` for the round (includes canonical anime ID), else
2. normalized text comparison with expected anime title.

## 8. Source, Selection, MAL, and Theme Modes

### 8.1 Source modes

- `POPULAR`: popular catalog only
- `MAL_ONLY`: MAL-derived only (fails if insufficient)
- `HYBRID`: MAL first with popular fallback

### 8.2 Selection modes

- `STANDARD`: rotating source attribution
- `BALANCED_STRICT`: strict per-player quota, fails on quota gaps
- `BALANCED_RELAXED`: per-player target with relaxed fallback

Rules:

- Balanced modes require at least 2 players.
- `MAL_ONLY` requires enough MAL pool.
- `BALANCED_STRICT` requires MAL linked and fetchable for all players.

### 8.3 MAL watched-list filter

Included statuses:

- `watching`
- `completed`

Excluded statuses:

- `dropped`
- `plan_to_watch`
- `on_hold`

### 8.4 Theme modes

- `OP_ONLY`: opening themes only
- `ED_ONLY`: ending themes only
- `MIXED`: currently allows `OP`, `ED`, and `IN`

## 9. Media Resolution, Playback, and Proxy

### 9.1 Round media resolution

- Media provider: AnimeThemes
- Candidate pick is deterministic by round index over filtered candidates.
- Sample start is generated server-side when possible (`sampleStartSec`).
- Accepted equivalent anime IDs for reused songs are resolved and stored in `GameRound.acceptedAnimeIds`.

### 9.2 Sample playback behavior (client)

- Sample player shown in `GUESSING` and `ANSWERS_REVEAL`.
- Client tries audio first, falls back to video audio.
- Autoplay failures show fallback controls (`Play sample`).
- Default volume is 25%.
- On `SOLUTION_REVEAL`, sample playback is stopped.

### 9.3 Solution playback behavior

- On `SOLUTION_REVEAL`, solution video attempts autoplay.
- Browser-blocked autoplay surfaces manual play fallback.

### 9.4 Proxy and cache

- Client-facing media links are signed proxy URLs (`/api/game/media/proxy`).
- Proxy validates signatures/TTL and enforces SSRF protections.
- Host allowlist is enforced (`MEDIA_PROXY_ALLOWED_HOSTS`).
- Disk cache is scoped by lobby (`.cache/media/<LOBBY_CODE>`).
- Completed round media is evicted after round finalize.
- Entire lobby cache directory is removed when match finishes.

## 10. Search and Catalog

### 10.1 Anime search (`POST /api/game/search`)

Pipeline:

1. local catalog (`AnimeCatalogEntry`)
2. Jikan fallback
3. async upsert of fallback results into local catalog

Behavior:

- unreleased/upcoming entries are filtered out
- title fields include English/Japanese when available
- in-memory query cache with TTL
- route-level rate limit

### 10.2 Catalog sync jobs

- startup incremental sweep (default startup pages = 8)
- interval incremental sweep (default 24h)
- optional full backfill script (`npm run catalog:backfill`)
- retry/backoff for 429/5xx/network transient errors

## 11. Realtime Contract

Client -> server:

- `lobby:join`
- `lobby:leave`
- `lobby:update_settings`
- `game:start`
- `game:preload_ready`
- `round:submit_guess`
- `round:set_ready`
- `round:sync` (ack-based state snapshot)

Server -> client:

- `lobby:state`
- `game:started`
- `round:started`
- `round:ready_state`
- `round:answers_reveal`
- `round:solution`
- `game:sudden_death`
- `game:finished`
- `error`

## 12. REST Surface (Game)

- `POST /api/game/lobbies`
- `POST /api/game/lobbies/:code/join`
- `GET /api/game/lobbies/:code`
- `GET /api/game/lobbies`
- `GET /api/game/lobbies/:code/invite`
- `POST /api/game/search`
- `GET /api/game/media-source-status`
- `GET /api/game/media/proxy`

## 13. Sudden Death

If planned rounds end with a top-score tie:

- backend emits `game:sudden_death`
- extra rounds continue until tie breaks or hard cap reached
- hard cap: `MAX_SUDDEN_DEATH_ROUNDS = 20`

## 14. Cleanup, Validation, and Telemetry

- Idle lobby cleanup defaults:
  - timeout: 10 minutes (`LOBBY_IDLE_TIMEOUT_MS`)
  - sweep: 60 seconds (`LOBBY_CLEANUP_INTERVAL_MS`)
- Maintenance sweep also:
  - cancels stale `IN_PROGRESS` sessions
  - prunes old `FINISHED`/`CANCELLED` sessions
  - prunes expired rate-limit rows
- Startup env validation is strict and fails fast.
- Structured JSON telemetry spans startup, rounds, media, search, and cleanup.

## 15. Known Gaps / Follow-ups

- `sampleSeconds` is stored in lobby/session config, but current round media resolution uses `guessSeconds` for `sampleDurationSec`.
- React UI currently does not expose host lobby setting updates (`lobby:update_settings`) after lobby creation.
- MAL OAuth success depends on correct redirect URI registration and MAL browser session/cookie state.
