# Realtime Events (Socket.IO)

Server: same origin as backend (`/socket.io`)  
Auth: send JWT via `auth.token` in socket handshake.

## Client -> Server Events

All events use ack callbacks with:

- success: `{ ok: true, ... }`
- failure: `{ ok: false, error: string, code: string }`

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

### `lobby:update_settings`

Payload:

```json
{
  "lobbyCode": "ABC123",
  "settings": {
    "roundCount": 12,
    "guessSeconds": 25
  }
}
```

### `game:start`

Payload:

```json
{
  "lobbyCode": "ABC123"
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

### `round:set_ready`

Payload:

```json
{
  "lobbyCode": "ABC123",
  "ready": true
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

## Server -> Client Events

### `lobby:state`

```json
{
  "lobby": { "code": "ABC123", "status": "WAITING", "players": [] }
}
```

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
      "sampleDurationSec": 20,
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
  "endsAt": "2026-02-26T23:00:00.000Z",
  "sample": {
    "animeId": 16498,
    "sampleStartSec": 35,
    "sampleDurationSec": 20,
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

### `round:answers_reveal`

```json
{
  "roundId": 101,
  "reason": "timeout",
  "endsAt": "2026-02-26T23:00:08.000Z",
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
  "endsAt": "2026-02-26T23:00:16.000Z"
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

Realtime error event payload:

```json
{
  "code": "forbidden",
  "message": "Only host can start the game"
}
```
