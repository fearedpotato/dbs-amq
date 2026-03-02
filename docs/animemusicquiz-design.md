# Anime Music Quiz Design (Current Implementation)

Last updated: 2026-02-28

## 1. Purpose

This document describes implemented behavior in this repository (backend + realtime + React client).
It is not a future roadmap.

## 2. Runtime Architecture

- Backend HTTP/API: Express 5 + Prisma + PostgreSQL (`backend/src/app.js`, `backend/src/routes/*`)
- Realtime: Socket.IO with JWT auth (`backend/src/realtime/socket.js`)
- Round orchestration: server-authoritative state machine (`backend/src/realtime/roundEngine.js`)
- Frontend shell: static pages in `frontend/`
- Game UI: React/Vite client built into `frontend/game-app/`, mounted by `frontend/game.html`
- MAL integration: OAuth bind/unbind flow (`/api/mal/login`, `/api/mal/callback`, `/api/mal/disconnect`)

## 3. Routing and Entry Points

Canonical routes:

- `/login`, `/register`, `/forgot`, `/reset-password`, `/verify`
- `/dashboard`
- `/amq`
- `/amq/lobby/:code`
- `/invite/:code` -> redirects to `/amq/lobby/:code`

Legacy `.html` routes are redirected to clean paths.
Legacy `/amq/invite/:code` is also redirected to `/amq/lobby/:code`.

## 4. Lobby Model and Controls

### 4.1 Config surface and validation

Backend lobby config supports:

- `name` (optional)
- `isPrivate` (`false` default)
- `minPlayers` (`1..8`, default `1`)
- `maxPlayers` (`1..8`, default `8`)
- `roundCount` (`1..50`, default `10`)
- `guessSeconds` (`5..120`, default `20`)
- `sampleSeconds` (`3..60`, default `10`)
- `answersRevealSeconds` (`1..30`, default `3`)
- `solutionRevealSeconds` (`1..60`, default `8`)
- `sourceMode` (`POPULAR`, `MAL_ONLY`, `HYBRID`)
- `selectionMode` (`STANDARD`, `BALANCED_STRICT`, `BALANCED_RELAXED`)
- `themeMode` (`OP_ONLY`, `ED_ONLY`, `MIXED`)
- `animeScoreMin` (`1..10`, default `1`)
- `animeScoreMax` (`1..10`, default `10`)
- `playerScoreMin` (`1..10`, default `1`)
- `playerScoreMax` (`1..10`, default `10`)

Current React host UI exposes a subset:

- `name`, `isPrivate`, `maxPlayers`, `roundCount`, `guessSeconds`, `sourceMode`, `selectionMode`, `themeMode`, `animeScoreMin`, `animeScoreMax`, `playerScoreMin`, `playerScoreMax`

### 4.2 Membership and access

- A user can only be in one active lobby (`WAITING` or `IN_GAME`) at a time.
- Joining/creating another active lobby forces removal from previous active lobbies.
- Private lobbies require a valid invite token unless user is host.
- Lobby size cap is 8.

### 4.3 Host powers in waiting room

Host can, while lobby is `WAITING`:

- update settings (`lobby:update_settings`)
- promote another player to host (`lobby:promote`)
- kick a player (`lobby:kick`)

Kick behavior:

- kicked player is removed from lobby room/membership
- rejoin cooldown is enforced per lobby (default 2 minutes)

### 4.4 Waiting-room readiness gate

- Players toggle readiness via `lobby:set_ready`.
- Host can start only when all current waiting players are ready.
- Realtime readiness is broadcast through `lobby:ready_state`.

## 5. Lifecycle Safety and Auto-Termination

Statuses:

- Lobby: `WAITING`, `IN_GAME`, `CLOSED`
- Session: `WAITING`, `IN_PROGRESS`, `FINISHED`, `CANCELLED`

Additional lifecycle guards:

- Host offline timeout (`LOBBY_HOST_OFFLINE_TIMEOUT_MS`, default 5 minutes):
  - If lobby is `WAITING` and a connected non-host exists, host transfers and offline host is removed.
  - Otherwise lobby is closed and active session cancelled.
- Zero-connected round streak kill (`LOBBY_ZERO_CONNECTED_ROUNDS_TO_KILL`, default 3):
  - If zero connected players across consecutive round finalizations, lobby is terminated.
- Idle lobby cleanup + maintenance sweep prune stale entities and rate-limit rows.

## 6. Game Start and Preload Flow

Current flow:

1. Host emits `game:start`.
2. Backend validates host status + waiting-room readiness.
3. Session is created from lobby settings.
4. Initial rounds/media are generated.
5. First-round proxy prewarm is started at game start.
   - Non-blocking by default (`MEDIA_PREWARM_BLOCKING_START=false`).
   - Optional strict mode can block and roll back on prewarm failure (`MEDIA_PREWARM_BLOCKING_START=true`).
6. Backend emits `game:started` with preload manifest.
7. Backend currently calls `beginSession` immediately after `game:started`.

Notes:

- `game:preload_ready` still exists and returns readiness acks for compatibility.
- Background media prewarm runs for early rounds (`roundLimit=3`).
- Client still performs its own preload gate UX.

## 7. Round State Machine (Server Authoritative)

Round progression:

1. `PENDING`
2. `GUESSING`
3. `ANSWERS_REVEAL`
4. `SOLUTION_REVEAL`
5. `ROUND_END`

Details:

- Transitions use compare-and-set DB guards.
- `endsAt` timestamps are emitted for client countdown sync.
- Recovery sweep runs every 1.5s for active rounds.

## 8. Guessing, Ready Lock, and Scoring

- Guesses accepted only in `GUESSING`.
- `round:set_ready` toggles player lock:
  - `ready: true` locks answer/blank
  - `ready: false` unlocks while still `GUESSING`
- All-ready in round immediately transitions to answers reveal (`reason: all_ready`).
- Scoring is server-side only.

Correctness precedence:

1. `guessAnimeId` matches `acceptedAnimeIds` set
2. normalized text fallback against expected anime title

## 9. Source, Selection, MAL, and Theme Modes

### 9.1 Source modes

- `POPULAR`: popular catalog only
- `MAL_ONLY`: MAL-derived pool only when MAL-linked players are available; currently falls back to popular seed planning when none are linked
- `HYBRID`: MAL first, popular fallback

### 9.2 Selection modes

- `STANDARD`: rotating source attribution
- `BALANCED_STRICT`: strict per-player quota, fails when quotas cannot be met
- `BALANCED_RELAXED`: attempts balance, relaxes constraints with fallback

Rules:

- Balanced modes are blocked at session start when lobby player count is `< 2`.
- In `MAL_ONLY`, round-seed planning uses only linked players and currently falls back to `STANDARD`-style planning if selected players are `< 2`.
- `BALANCED_STRICT` enforces MAL-linked coverage for all required users in non-`MAL_ONLY` planning; in `MAL_ONLY`, unlinked players are excluded from the required set.

### 9.3 MAL watched-list filtering

Included MAL statuses:

- `watching`
- `completed`

Excluded examples:

- `plan_to_watch`
- `on_hold`
- `dropped`

Score-range filtering:

- `animeScoreMin..animeScoreMax` applies to all planned seeds (MAL and popular fallback pools).
- `playerScoreMin..playerScoreMax` applies only to MAL-list sourced seeds.
- Unrated MAL entries (`list_status.score = 0`) are excluded unless full player-score range `1..10` is selected.
- MAL overall score (`node.mean`) is truncated to integer before applying `animeScore` filter (example: `7.21`, `7.89` -> `7`).

### 9.4 Theme modes

- `OP_ONLY`
- `ED_ONLY`
- `MIXED` (`OP`, `ED`, and `IN` accepted when available)

## 10. Media Resolution, Proxy, and Playback

### 10.1 Round media resolution

- Provider: AnimeThemes
- Deterministic candidate selection by round index over filtered candidates
- `acceptedAnimeIds` captured for equivalent-song answer acceptance

### 10.2 Sample duration behavior

- Requested round sample duration is currently derived from:
  - `guessSeconds + answersRevealSeconds`
  - fallback to `sampleSeconds` only when guess duration is unavailable

### 10.3 Client playback

- Sample player shown during `GUESSING` and `ANSWERS_REVEAL`
- Client prefers audio URL, falls back to video audio
- Autoplay failures surface manual play controls
- Solution video autoplay is attempted in `SOLUTION_REVEAL` with fallback control

### 10.4 Proxy/cache

- Client-facing links are signed URLs under `/api/game/media/proxy`
- Signature + TTL + host allowlist + SSRF protections enforced
- Cache is lobby-scoped under `backend/.cache/media/<LOBBY_CODE>` by default (overridable via `MEDIA_PROXY_CACHE_DIR`)
- Round media is evicted after round finalize
- Lobby cache directory is deleted when session finishes

## 11. Search and Catalog

Search pipeline (`POST /api/game/search`):

1. local catalog (`AnimeCatalogEntry`)
2. Jikan fallback
3. async upsert of fallback results into local catalog

Behavior:

- unreleased/upcoming entries filtered
- in-memory query cache with TTL
- route-level rate limit

Catalog jobs:

- startup incremental sync
- interval incremental sync (default every 24h)
- full backfill script (`npm run catalog:backfill`)

## 12. Realtime Contract (Current)

Client -> server:

- `lobby:join`
- `lobby:leave`
- `lobby:update_settings`
- `lobby:set_ready`
- `lobby:kick`
- `lobby:promote`
- `game:start`
- `game:preload_ready`
- `round:submit_guess`
- `round:set_ready`
- `round:sync`

Server -> client:

- `lobby:state`
- `lobby:ready_state`
- `lobby:directory_changed`
- `lobby:kicked`
- `lobby:terminated`
- `media:source_status`
- `game:started`
- `round:started`
- `round:ready_state`
- `round:answers_reveal`
- `round:solution`
- `game:sudden_death`
- `game:finished`
- `error`

## 13. Sudden Death

If planned rounds end with tie for top score:

- backend emits `game:sudden_death`
- additional rounds continue until tie breaks or hard cap is reached
- hard cap: `MAX_SUDDEN_DEATH_ROUNDS = 20`

## 14. Operations and Validation

- Startup env validation is strict/fail-fast.
- Background cleanup handles:
  - idle lobbies
  - stale in-progress sessions
  - old finished/cancelled sessions
  - expired rate-limit buckets
- Structured telemetry spans startup, realtime, media, catalog sync, and cleanup.

## 15. Known Constraints

- MAL OAuth success depends on exact redirect URI registration and active MAL browser session.
- Start-time preload readiness is currently not server-blocking despite `game:preload_ready` support.
