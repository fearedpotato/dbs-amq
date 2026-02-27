# Troubleshooting

## Server fails on startup with env validation error

Symptoms:

- Process exits with `Startup validation failed`.

Checks:

1. Confirm required keys exist in `backend/.env`.
2. Ensure `JWT_SECRET`, `SESSION_SECRET`, `LOBBY_INVITE_SECRET` are at least 16 characters.
3. Ensure `MAL_REDIRECT_URI` is valid `http/https`.
4. If proxy enabled, ensure `MEDIA_PROXY_ALLOWED_HOSTS` is set and valid.

Fix:

- Copy from `backend/.env.example` and fill real values.

## MAL connect fails and redirects with `error=mal_failed`

Symptoms:

- Redirect back to `/dashboard.html?error=mal_failed`.

Checks:

1. `MAL_CLIENT_ID` and `MAL_CLIENT_SECRET` are correct.
2. `MAL_REDIRECT_URI` exactly matches MAL app config.
3. `BASE_URL` and callback URL are correct for current environment.

## "Could not fetch media from upstream provider" or proxy blocked errors

Symptoms:

- `GET /api/game/media/proxy` returns `502/503/403`.

Checks:

1. Media source host appears in `MEDIA_PROXY_ALLOWED_HOSTS`.
2. Signed proxy URL params are intact (`u`, `exp`, `sig`).
3. URL has not expired (`exp`).
4. AnimeThemes provider is reachable.

## Game start fails with media/preload errors

Symptoms:

- Host receives start error like unable to cache first round media.

Cause:

- Backend requires first-round media prewarm to succeed before session begins.

Checks:

1. Provider health via `GET /api/game/media-source-status?refresh=1`.
2. `MEDIA_PROXY_ALLOWED_HOSTS` includes needed domains.
3. Network egress to AnimeThemes works from server.

## Browser autoplay blocked for sample/solution media

Symptoms:

- Media does not auto-play on round start/reveal.

Cause:

- Browser autoplay policy.

Fix:

1. Click the provided Play button.
2. Interact with page first (click/key press).
3. Test with less restrictive autoplay browser settings if needed.

## Socket stays disconnected or realtime events missing

Checks:

1. JWT exists in local storage and is valid.
2. Reverse proxy allows websocket upgrade on `/socket.io`.
3. CORS origin includes frontend origin (`BASE_URL` / `ALLOWED_ORIGINS`).

## Cannot join private lobby

Symptoms:

- 403 with invite-token related error.

Fix:

1. Use valid invite token from `GET /api/game/lobbies/:code/invite`.
2. Send token in join body (`inviteToken`) or query/header supported by API.

## Search endpoint unavailable/rate-limited

Symptoms:

- `POST /api/game/search` returns provider unavailable or rate-limited errors.

Checks:

1. Query has at least 2 chars.
2. Jikan API is reachable.
3. Wait briefly if rate-limited.

## Prisma/database issues

Symptoms:

- Startup/runtime DB errors.

Fix:

1. Verify `DATABASE_URL`.
2. Run migrations:

```bash
cd backend
npx prisma migrate deploy
```

3. Check PostgreSQL connectivity and credentials.
