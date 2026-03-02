# Realtime Events (Socket.IO)

Last updated: 2026-02-28

Server namespace/path: same origin, default `/socket.io`  
Auth: JWT in either:

- handshake `auth.token`
- handshake `Authorization: Bearer <token>` header

## Ack Contract

Client->server events use ack callbacks:

- success: `{ "ok": true, ... }`
- failure: `{ "ok": false, "error": "message", "code": "error_code" }`
- failures are also emitted via server -> client `error` event

## Client -> Server Events

### `lobby:join`

Payload:

```json
{
  "lobbyCode": "ABC123",
  "displayName": "Player One",
  "inviteToken": "optional_for_private_lobby"
}
```

Ack success:

```json
{
  "ok": true,
  "lobby": { "code": "ABC123", "status": "WAITING" }
}
```

### `lobby:leave`

Payload:

```json
{
  "lobbyCode": "ABC123"
}
```

Ack success:

```json
{
  "ok": true,
  "lobby": { "code": "ABC123", "status": "WAITING" }
}
```

`lobby` can be `null` if the lobby closes after leave.

### `lobby:update_settings`

Payload:

```json
{
  "lobbyCode": "ABC123",
  "settings": {
    "roundCount": 12,
    "guessSeconds": 25,
    "maxPlayers": 6,
    "animeScoreMin": 3,
    "animeScoreMax": 9,
    "playerScoreMin": 5,
    "playerScoreMax": 10
  }
}
```

Ack success:

```json
{
  "ok": true,
  "lobby": { "code": "ABC123", "status": "WAITING" }
}
```

### `lobby:set_ready`

Waiting-room readiness toggle before `game:start`.

Payload:

```json
{
  "lobbyCode": "ABC123",
  "ready": true
}
```

Ack success:

```json
{
  "ok": true,
  "lobbyCode": "ABC123",
  "readyUserIds": [1, 3],
  "requiredUserIds": [1, 2, 3],
  "allReady": false
}
```

### `lobby:kick`

Host-only, `WAITING` lobby only.

Payload:

```json
{
  "lobbyCode": "ABC123",
  "userId": 9
}
```

Ack success includes kick cooldown timestamp:

```json
{
  "ok": true,
  "kickedUserId": 9,
  "lobby": { "code": "ABC123", "status": "WAITING" },
  "cooldownUntil": 1767222000000
}
```

### `lobby:promote`

Host-only, `WAITING` lobby only.

Payload:

```json
{
  "lobbyCode": "ABC123",
  "userId": 3
}
```

Ack success:

```json
{
  "ok": true,
  "promotedUserId": 3,
  "lobby": { "code": "ABC123", "status": "WAITING" }
}
```

`lobby` in kick/promote acks can be `null` in edge cases where lobby snapshot is unavailable.

### `game:start`

Payload:

```json
{
  "lobbyCode": "ABC123"
}
```

Requirements:

- Caller is host
- Lobby status is `WAITING`
- All waiting-lobby players are ready (`lobby:set_ready`)

Ack success:

```json
{
  "ok": true,
  "session": {
    "id": 42,
    "roundCount": 10,
    "guessSeconds": 20
  }
}
```

### `game:preload_ready`

Payload:

```json
{
  "lobbyCode": "ABC123",
  "sessionId": 42
}
```

Ack includes readiness counts:

```json
{
  "ok": true,
  "readyCount": 2,
  "requiredCount": 2,
  "allReady": true,
  "started": true
}
```

If preload has already been cleared/started, ack is currently:

```json
{
  "ok": true,
  "started": true,
  "allReady": true
}
```

### `round:submit_guess`

Payload:

```json
{
  "lobbyCode": "ABC123",
  "roundId": 101,
  "guessText": "Attack on Titan",
  "guessAnimeId": 16498
}
```

Notes:

- `roundId` is optional but must match current round when provided.
- `guessAnimeId` is used only when it is an integer.

Ack success:

```json
{
  "ok": true,
  "roundId": 101
}
```

### `round:set_ready`

Round guessing readiness/skip toggle.

Payload:

```json
{
  "lobbyCode": "ABC123",
  "ready": true
}
```

`ready` defaults to `true` when omitted (`ready: false` unlocks).

Ack success:

```json
{
  "ok": true,
  "roundId": 101,
  "readyUserIds": [1, 3],
  "allReady": false
}
```

### `round:sync`

Payload:

```json
{
  "lobbyCode": "ABC123"
}
```

Ack:

```json
{
  "ok": true,
  "state": {
    "lobbyCode": "ABC123",
    "phase": "GUESSING"
  }
}
```

`state.phase` can also be `WAITING`. For active rounds, payload shape varies by phase and may include `round`, `readyUserIds`, `endsAt`, `answers`, and `solution`.

## Server -> Client Events

### `lobby:state`

```json
{
  "lobby": { "code": "ABC123", "status": "WAITING", "players": [] }
}
```

### `lobby:ready_state`

```json
{
  "lobbyCode": "ABC123",
  "readyUserIds": [1, 3],
  "requiredUserIds": [1, 2, 3],
  "allReady": false
}
```

### `lobby:directory_changed`

Broadcast when lobby list should refresh.

```json
{
  "reason": "join",
  "lobbyCode": "ABC123",
  "at": 1767220000000
}
```

Payload may include `lobbyCodes` array and/or `lobbyClosed`.
Common reasons include `create`, `join`, `leave`, `settings`, `kick`, `promote`, `game_started`, `host_offline_transfer`, and termination reasons.

### `lobby:kicked`

```json
{
  "lobbyCode": "ABC123",
  "kickedUserId": 9,
  "cooldownUntil": 1767222000000
}
```

### `lobby:terminated`

```json
{
  "lobbyCode": "ABC123",
  "reason": "host_offline_timeout"
}
```

Common reasons:

- `host_offline_timeout`
- `zero_connected_round_streak`
- `terminated`

### `media:source_status`

```json
{
  "status": {
    "provider": "AnimeThemes",
    "ok": true,
    "latencyMs": 140,
    "error": null,
    "checkedAt": "2026-02-27T19:00:00.000Z",
    "cached": false
  },
  "at": 1767220000000
}
```

Emitted on connect and periodically (current broadcast interval is 10s).

### `game:started`

```json
{
  "sessionId": 42,
  "config": {
    "id": 42,
    "roundCount": 10,
    "guessSeconds": 20
  },
  "lobby": { "code": "ABC123", "status": "IN_GAME" },
  "preloadManifest": [
    {
      "index": 1,
      "sampleStartSec": 35,
      "sampleDurationSec": 23,
      "audioUrl": "/api/game/media/proxy?...",
      "videoUrl": "/api/game/media/proxy?..."
    }
  ]
}
```

### `round:started`

```json
{
  "roundId": 101,
  "index": 1,
  "totalRounds": 10,
  "isSuddenDeath": false,
  "endsAt": "2026-02-27T19:00:00.000Z",
  "sample": {
    "animeId": 16498,
    "sampleStartSec": 35,
    "sampleDurationSec": 23,
    "themeType": "OP",
    "audioUrl": "/api/game/media/proxy?...",
    "videoUrl": "/api/game/media/proxy?..."
  }
}
```

### `round:ready_state`

```json
{
  "lobbyCode": "ABC123",
  "roundId": 101,
  "readyUserIds": [1, 3],
  "allReady": false
}
```

`roundId` can be `null` during disconnect reconciliation.

### `round:answers_reveal`

```json
{
  "roundId": 101,
  "reason": "timeout",
  "endsAt": "2026-02-27T19:00:08.000Z",
  "answers": [
    {
      "userId": 1,
      "guessText": "Attack on Titan",
      "guessAnimeId": 16498,
      "isCorrect": true
    }
  ]
}
```

`reason` is currently `timeout`, `all_ready`, or `recovery_timeout`.

### `round:solution`

```json
{
  "roundId": 101,
  "correctAnime": {
    "animeId": 16498,
    "animeTitle": "Shingeki no Kyojin",
    "themeType": "OP",
    "themeTitle": "Guren no Yumiya"
  },
  "video": "/api/game/media/proxy?...",
  "audio": "/api/game/media/proxy?...",
  "scores": [{ "userId": 1, "displayName": "Player One", "score": 5 }],
  "endsAt": "2026-02-27T19:00:16.000Z"
}
```

### `game:sudden_death`

```json
{
  "roundIndex": 11,
  "tiedUserIds": [1, 3]
}
```

### `game:finished`

```json
{
  "finalScores": [{ "userId": 1, "displayName": "Player One", "score": 7 }],
  "winner": { "userId": 1, "displayName": "Player One", "score": 7 },
  "suddenDeathRounds": 1
}
```

### `error`

Realtime error payload:

```json
{
  "code": "forbidden",
  "message": "Only host can start the game"
}
```

Common error `code` values:

- `bad_request`
- `unauthorized`
- `forbidden`
- `not_found`
- `rate_limited`

Implementation may also return event-specific fallback codes (for example `game_start_failed`) or `internal_error`.
