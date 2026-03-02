# API Reference

Last updated: 2026-02-28

Base URL (local): `http://localhost:3000`  
API prefix: `/api`

Protected endpoints require:

`Authorization: Bearer <jwt_token>`

## Auth (`/api/auth`)

### `POST /api/auth/register`

Creates account and sends verification email.

Request:

```json
{
  "username": "player1",
  "email": "player1@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

Success responses:

- `201` for a new account: `{ "message": "User created successfully. Please verify your email." }`
- `200` for matching unverified account (same username+email): `{ "message": "Account exists but is unverified. Verification email resent." }`

Validation notes:

- `username`: `4..20`, letters/numbers/underscore only, reserved names blocked
- `password`: minimum 8 chars and must match `confirmPassword`

### `POST /api/auth/login`

Request:

```json
{
  "identifier": "player1",
  "password": "password123"
}
```

Success response:

```json
{
  "token": "<jwt>",
  "username": "player1"
}
```

Notes:

- Returns `403` if account is not verified.

### `GET /api/auth/me` (protected)

Response:

```json
{
  "id": 1,
  "username": "player1",
  "nickname": "player1",
  "email": "player1@example.com",
  "isVerified": true,
  "malUsername": "my_mal_name"
}
```

### `PATCH /api/auth/nickname` (protected)

Request:

```json
{
  "nickname": "new_name"
}
```

Success response:

```json
{
  "message": "Nickname updated"
}
```

Notes:

- Cooldown enforced: one change every 30 seconds.
- Cooldown violation returns `429` and `Retry-After` response header.

### `GET /api/auth/verify?token=...`

Verifies email token (supports legacy un-hashed tokens for compatibility).

Success response:

```json
{
  "message": "Email verified successfully!"
}
```

### `POST /api/auth/forgot-password`

Request:

```json
{
  "email": "player1@example.com"
}
```

Response is intentionally generic:

```json
{
  "message": "If an account exists, a reset link has been sent."
}
```

### `POST /api/auth/reset-password`

Request:

```json
{
  "token": "reset_token",
  "password": "newpassword123",
  "confirmPassword": "newpassword123"
}
```

Success response:

```json
{
  "message": "Password has been reset successfully"
}
```

## MAL OAuth (`/api/mal`)

### `POST /api/mal/login` (protected)

Creates MAL OAuth URL pair using session-backed PKCE + state.

Response:

```json
{
  "url": "https://myanimelist.net/login.php?...",
  "browserUrl": "https://myanimelist.net/login.php?...",
  "authorizeUrl": "https://myanimelist.net/v1/oauth2/authorize?..."
}
```

### `GET /api/mal/callback`

OAuth callback endpoint registered in MAL app settings (`MAL_REDIRECT_URI`).

Redirects:

- Success -> `/dashboard?mal_connected=true`
- Failure -> `/dashboard?error=mal_failed`

### `POST /api/mal/disconnect` (protected)

Disconnects MAL account from current user.

Success response:

```json
{
  "message": "MAL account disconnected"
}
```

## Game REST (`/api/game`)

### `POST /api/game/lobbies` (protected)

Creates lobby.

Accepted config fields:

- `name`
- `isPrivate`
- `minPlayers` (`1..8`)
- `maxPlayers` (`1..8`)
- `roundCount` (`1..50`)
- `guessSeconds` (`5..120`)
- `sampleSeconds` (`3..60`)
- `answersRevealSeconds` (`1..30`)
- `solutionRevealSeconds` (`1..60`)
- `sourceMode` (`POPULAR | MAL_ONLY | HYBRID`)
- `selectionMode` (`STANDARD | BALANCED_STRICT | BALANCED_RELAXED`)
- `themeMode` (`OP_ONLY | ED_ONLY | MIXED`)
- `animeScoreMin` (`1..10`, default `1`)
- `animeScoreMax` (`1..10`, default `10`)
- `playerScoreMin` (`1..10`, default `1`)
- `playerScoreMax` (`1..10`, default `10`)

Score-filter behavior:

- In `POPULAR` source mode, both score filter ranges are ignored.
- `animeScore*` applies to MAL seed selection (`MAL_ONLY`, and MAL portion of `HYBRID`).
- `playerScore*` applies only to MAL-list sourced entries (`MAL_ONLY`, and MAL portion of `HYBRID`).
- MAL overall anime score is bucketed by truncation before filtering (example: `7.21` and `7.89` are both treated as `7`).
- If a user has not rated an anime in MAL (`list_status.score = 0`), that entry is excluded unless the full player-score range `1..10` is selected.

Response:

```json
{
  "lobby": {
    "id": 12,
    "code": "ABC123",
    "status": "WAITING"
  }
}
```

### `POST /api/game/lobbies/:code/join` (protected)

Request:

```json
{
  "displayName": "Player One",
  "inviteToken": "optional_for_private_lobby"
}
```

Private invite token can be provided via:

- body: `inviteToken`
- query: `?i=...` or `?inviteToken=...`
- header: `x-invite-token`

Response:

```json
{
  "lobby": {
    "code": "ABC123",
    "status": "WAITING"
  }
}
```

### `GET /api/game/lobbies/:code` (protected)

Returns lobby snapshot. Private lobby access is enforced.

### `GET /api/game/lobbies?limit=20&offset=0&q=...` (protected)

Lists joinable public waiting lobbies.
`limit` is clamped to `1..50`; `offset` is clamped to `>=0`.

Response shape:

```json
{
  "lobbies": [],
  "pagination": {
    "limit": 20,
    "offset": 0,
    "count": 0
  }
}
```

### `GET /api/game/lobbies/:code/invite` (protected)

Returns lobby invite link.

Response:

```json
{
  "lobbyCode": "ABC123",
  "inviteUrl": "http://localhost:3000/invite/ABC123?i=..."
}
```

For public lobbies, `inviteToken` is omitted and URL has no `?i=...`.
For private lobbies, response includes `inviteToken`.

### `POST /api/game/search` (protected)

Catalog-first anime search with Jikan fallback.

Request:

```json
{
  "query": "naruto",
  "limit": 8
}
```

Response:

```json
{
  "query": "naruto",
  "source": "local_catalog",
  "results": [
    {
      "id": 20,
      "title": "Naruto",
      "titleEnglish": "Naruto",
      "titleJapanese": "Naruto",
      "year": 2002,
      "imageUrl": "https://..."
    }
  ],
  "limit": 8,
  "cached": false
}
```

`source` is currently `local_catalog` or `jikan`.
`limit` is clamped to `1..20`.

### `GET /api/game/media-source-status?refresh=1` (protected)

Returns provider health:

```json
{
  "status": {
    "provider": "AnimeThemes",
    "ok": true,
    "latencyMs": 120,
    "error": null,
    "checkedAt": "2026-02-27T18:30:00.000Z",
    "cached": false
  }
}
```

### `GET /api/game/media/proxy?u=...&exp=...&sig=...&l=...`

Streams signed media URL through backend cache/proxy.

Notes:

- This endpoint is signature-protected, not bearer-token protected.
- `l` is optional lobby scope used by signed URLs.
- Route-level rate limit applies and may return `429` with `Retry-After`.

## Error Format

HTTP errors generally return:

```json
{
  "error": "message"
}
```

Typical statuses: `400`, `401`, `403`, `404`, `429`, `500`, `502`, `503`.

Rate-limited endpoints return `429` with `Retry-After` header.
