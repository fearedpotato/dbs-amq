# Troubleshooting

Last updated: 2026-02-27

## Server exits with startup validation error

Symptoms:

- Process exits with `Startup validation failed`.

Checks:

1. Ensure required keys exist in `backend/.env`.
2. Ensure `JWT_SECRET`, `SESSION_SECRET`, `LOBBY_INVITE_SECRET` are >= 16 chars.
3. Ensure `MAL_REDIRECT_URI` is valid `http/https`.
4. Ensure `ANIMETHEMES_BASE_URL` is valid `http/https`.
5. Ensure `ANIMETHEMES_TIMEOUT_MS` is within valid range.
6. If proxy is enabled, ensure these are valid:
   - `MEDIA_PROXY_PATH` (starts with `/`)
   - `MEDIA_PROXY_ALLOWED_HOSTS`
   - `MEDIA_PROXY_FETCH_TIMEOUT_MS`
   - `MEDIA_PROXY_URL_TTL_SEC`
   - `MEDIA_PROXY_RATE_LIMIT_WINDOW_MS`
   - `MEDIA_PROXY_RATE_LIMIT_MAX`

Fix:

- Start from `backend/.env.example` and fill real values.

## Login/dashboard/game routes return unexpected redirects

Symptoms:

- You hit `/login.html` or `/dashboard.html` and see redirects.

Explanation:

- Canonical routes are now clean paths (`/login`, `/dashboard`, `/amq`).
- `.html` routes are kept as redirects for compatibility.
- `/game.html` redirects to `/amq`.
- Legacy `/amq/invite/:code` redirects to `/amq/lobby/:code`.

## MAL connect fails with `error=mal_failed`

Symptoms:

- Redirect to `/dashboard?error=mal_failed`.

Checks:

1. `MAL_CLIENT_ID` and `MAL_CLIENT_SECRET` are correct.
2. `MAL_REDIRECT_URI` exactly matches MAL app settings.
3. Browser can complete MAL login session/cookies.
4. Callback is completed in the same browser session that started `POST /api/mal/login` (PKCE verifier/state are session-backed).

Fix:

1. Retry the connect flow from dashboard (fresh session state).
2. Confirm cookies are allowed for your domain/environment.

## Nickname update fails with cooldown error

Symptoms:

- `PATCH /api/auth/nickname` returns `429`.

Explanation:

- Nickname changes are limited to once every 30 seconds.

Fix:

1. Wait for `Retry-After` seconds.
2. Retry the nickname change once cooldown expires.

## Cannot start game

Symptoms:

- Host sees error like `All players must be ready...`.

Common causes:

- `game:start` requires waiting-room readiness from all current lobby players.
- Lobby has fewer players than `minPlayers` (`Not enough players to start`).
- Balanced selection mode used with fewer than 2 players (`Balanced selection modes require at least 2 players`).

Fix:

1. Each player clicks ready (`lobby:set_ready`).
2. Ensure lobby player count meets `minPlayers`.
3. Use `STANDARD` selection mode for solo lobbies.
4. Host starts game after `allReady=true`.

## Lobby closes unexpectedly (termination reason)

Symptoms:

- Client receives `lobby:terminated`.

Common reasons:

- `host_offline_timeout`: host disconnected for too long.
- `zero_connected_round_streak`: no connected players for multiple rounds.

Fix:

1. Recreate lobby and keep host connected (or promote a new host before leaving).
2. Tune lifecycle env vars if needed:
   - `LOBBY_HOST_OFFLINE_TIMEOUT_MS`
   - `LOBBY_ZERO_CONNECTED_ROUNDS_TO_KILL`

## Kicked player cannot rejoin immediately

Symptoms:

- Join fails with `You were kicked from this lobby...`.

Cause:

- Per-lobby kick cooldown is active.

Fix:

1. Wait until cooldown expires (`cooldownUntil` from `lobby:kicked` event).
2. Retry join with valid invite token if lobby is private.

## Private lobby join fails

Symptoms:

- `403` with invite-token error.

Fix:

1. Generate token via `GET /api/game/lobbies/:code/invite`.
2. Join with token in one of:
   - body `inviteToken`
   - query `?i=...` (or `?inviteToken=...`)
   - header `x-invite-token`

## Media proxy returns `403`, `429`, `502`, or `503`

Symptoms:

- `GET /api/game/media/proxy` fails.

Checks:

1. Signed params are intact (`u`, `exp`, `sig`, optional `l`).
2. URL is not expired (`exp`).
3. Source host is in `MEDIA_PROXY_ALLOWED_HOSTS`.
4. Server can reach AnimeThemes endpoints.
5. `MEDIA_PROXY_ENABLED` is on and signing secret fallback/explicit secret is available.
6. If `429`, wait `Retry-After` and retry.

## Game start fails with preload/cache error

Symptoms:

- Start fails with first-round media cache error.

Cause:

- Strict first-round prewarm mode is enabled (`MEDIA_PREWARM_BLOCKING_START=true`), and first-round cache warmup failed.

Checks:

1. `GET /api/game/media-source-status?refresh=1`
2. `MEDIA_PROXY_ALLOWED_HOSTS` includes required domains.
3. Outbound network egress allows media provider access.
4. If startup speed is preferred over strict warmup guarantees, set `MEDIA_PREWARM_BLOCKING_START=false`.

## Browser autoplay blocked for sample/solution playback

Symptoms:

- Sample or solution video does not auto-play.

Fix:

1. Interact with page (click or key press).
2. Use manual playback controls.
3. Test browser autoplay policy settings if needed.

## Socket stays disconnected or events missing

Checks:

1. JWT exists and is valid.
2. Reverse proxy supports websocket upgrade on `/socket.io`.
3. Frontend origin is allowed by `BASE_URL` / `ALLOWED_ORIGINS`.

## Search endpoint unavailable or rate-limited

Symptoms:

- `POST /api/game/search` returns temporary provider error or rate-limit response.

Checks:

1. Query length is at least 2 chars.
2. Jikan API is reachable.
3. If `429`, retry after `Retry-After`.
4. If provider returns `503`, retry after a short wait.

## Prisma/database errors

Symptoms:

- Startup/runtime DB failures.

Fix:

1. Verify `DATABASE_URL`.
2. Run migrations:

```bash
cd backend
npx prisma migrate deploy
```

3. Verify PostgreSQL credentials/connectivity.
