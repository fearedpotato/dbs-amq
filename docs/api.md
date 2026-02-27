# API Reference

Base URL (local): `http://localhost:3000`  
API prefix: `/api`

All protected endpoints require:

`Authorization: Bearer <jwt_token>`

## Auth (`/api/auth`)

### `POST /api/auth/register`

Creates an account and sends verification email.

Request:

```json
{
  "username": "player1",
  "email": "player1@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

Response:

```json
{
  "message": "User created successfully. Please verify your email."
}
```

### `POST /api/auth/login`

Request:

```json
{
  "identifier": "player1",
  "password": "password123"
}
```

Response:

```json
{
  "token": "<jwt>",
  "username": "player1"
}
```

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

### `GET /api/auth/verify?token=...`

Verifies email token.

### `POST /api/auth/forgot-password`

Request:

```json
{
  "email": "player1@example.com"
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

## MAL OAuth (`/api/mal`)

### `POST /api/mal/login` (protected)

Creates MAL OAuth URL using session-backed PKCE/state.

Response:

```json
{
  "url": "https://myanimelist.net/login.php?...",
  "browserUrl": "https://myanimelist.net/login.php?...",
  "authorizeUrl": "https://myanimelist.net/v1/oauth2/authorize?..."
}
```

### `GET /api/mal/callback`

OAuth callback endpoint used by MAL redirect URI.

### `POST /api/mal/disconnect` (protected)

Disconnects MAL account from current user.

## Game REST (`/api/game`)

### `POST /api/game/lobbies` (protected)

Creates lobby.

Request (common fields):

```json
{
  "name": "Friday Match",
  "isPrivate": false,
  "roundCount": 10,
  "guessSeconds": 20,
  "sampleSeconds": 10,
  "sourceMode": "HYBRID",
  "selectionMode": "STANDARD",
  "themeMode": "MIXED"
}
```

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
  "inviteToken": "optional_private_lobby_token"
}
```

`inviteToken` can also be provided via query param or `x-invite-token` header.

### `GET /api/game/lobbies/:code` (protected)

Gets a lobby snapshot (private lobby access enforced).

### `GET /api/game/lobbies?limit=20&offset=0&q=...` (protected)

Lists joinable public lobbies.

### `GET /api/game/lobbies/:code/invite` (protected)

Returns invite URL/token for lobby.

### `POST /api/game/search` (protected)

Searches anime (catalog-first, Jikan fallback).

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

### `GET /api/game/media-source-status?refresh=1` (protected)

Checks AnimeThemes provider health summary.

### `GET /api/game/media/proxy?u=...&exp=...&sig=...&l=...`

Streams signed media proxy URL.

## Error Format

HTTP errors generally return:

```json
{
  "error": "message"
}
```

Typical statuses: `400`, `401`, `403`, `404`, `429`, `500`, `502`, `503`.
