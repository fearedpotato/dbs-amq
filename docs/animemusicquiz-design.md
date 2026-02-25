# Anime Music Quiz Game Design

## 1. Purpose

This document defines how the multiplayer anime music quiz should work end-to-end in this project.
It is written as an implementation spec for the current stack:

- Backend: Express + Prisma
- Auth: JWT + existing user accounts
- MAL integration: existing linked account flow
- Frontend: keep existing HTML pages, build game UI separately on React

## 2. Core Game Loop

1. Players join a lobby.
2. Host sets game options:
   - Number of rounds (`roundCount`)
   - Guess timer per round (`guessSeconds`)
   - Audio preview length (`sampleSeconds`)
   - Source mode (`POPULAR`, `MAL_ONLY`, `HYBRID`, etc.)
   - Selection mode (`STANDARD`, `BALANCED_STRICT`, `BALANCED_RELAXED`)
   - Theme mode (`OP_ONLY`, `ED_ONLY`, `MIXED`)
3. Server builds round pool (`roundCount` anime openings).
4. For each round:
   - Server starts timer and broadcasts round start.
   - Audio sample plays for all players.
   - Players submit exactly one guess.
   - Timer ends.
   - Server reveals submitted answers for 3 seconds.
   - Server reveals correct answer and plays synced opening video segment.
   - Server awards 1 point for correct guesses.
5. After last round, server shows final scoreboard and winner.

## 3. Product Rules

- A player gets 1 point for a correct answer in a round.
- Guess accepted only while round is in `GUESSING` phase.
- Authenticated users only (no guest players).
- Players can change their guess until they explicitly lock/skip.
- If no guess submitted before timeout, answer is blank.
- All round transitions are server-authoritative (clients cannot advance state).

### 3.1 Guess lock / skip behavior

- Each player has a `Skip` button during `GUESSING`.
- Pressing `Skip` means:
  - lock current guess (or lock blank answer if no guess typed),
  - mark the player as ready to advance.
- If every player in the lobby is marked ready, server ends `GUESSING` early and moves to reveal phase.
- A player who pressed `Skip` can press it again to cancel readiness before round advance:
  - readiness is removed,
  - guess becomes editable again.

## 4. Round Timeline (Authoritative)

Recommended defaults:

- `sampleSeconds`: 10
- `guessSeconds`: 20
- `answersRevealSeconds`: 5
- `solutionRevealSeconds`: 5 to 10

State machine per round:

1. `PENDING` (short preload)
2. `GUESSING` (audio sample + input enabled)
3. `ANSWERS_REVEAL` (show all submitted answers)
4. `SOLUTION_REVEAL` (show correct anime + play matching OP segment)
5. `ROUND_END` (score update, then next round)

Only backend controls state transitions and timestamps.

## 5. Content Sources and Strategy

### 5.1 Anime pool selection

Source options:

- `POPULAR`: use top/popular list
- `MAL_ONLY`: weighted from linked players MAL lists
- `HYBRID`: merge MAL-based picks with popular fallback

Selection constraints:

- Avoid duplicate anime in same game.
- Require playable OP media before finalizing a pick.
- If insufficient MAL content, fallback to `POPULAR`.

### 5.2 Search suggestions (Jikan)

Use Jikan only through backend proxy endpoint, never direct from clients per keystroke.

Server controls:

- Debounce at client (250-400 ms)
- Min chars (2 or 3)
- Rate limit per user/IP
- Cache suggestions (in-memory + optional Redis)

Reason: protects against external API rate limits and 429 bursts in multiplayer rooms.

### 5.3 Opening media (AnimeThemes)

Use AnimeThemes metadata for OP audio/video URLs and timestamps.

Server responsibilities:

- Resolve candidate openings before game starts
- Validate media URLs
- Store preselected media data in round payload
- Prefer cached results to reduce repeated upstream calls

### 5.4 Balanced player quotas

When `selectionMode` is enabled for MAL-based games, round picks are distributed fairly between players.

Example:

- 2 players
- `roundCount = 10`
- `selectionMode = BALANCED_STRICT`

Expected distribution:

- 5 anime sourced from Player A watched list
- 5 anime sourced from Player B watched list

Server algorithm:

1. Build watched-anime candidate pools per player.
2. Filter to entries with playable OP media.
3. Deduplicate globally by anime ID.
4. Compute quotas:
   - `quota = floor(roundCount / playerCount)`
   - distribute any remainder deterministically (host-first or seeded order).
5. Fill rounds while preserving quotas, and persist `sourcePlayerId` on each round.

Failure policy:

- `BALANCED_STRICT`:
  - if any player cannot satisfy quota after filtering, game start fails with clear error.
- `BALANCED_RELAXED`:
  - try quotas first, then fill missing slots from other player pools (or fallback source) and emit warning.
- Default policy for this project: `BALANCED_STRICT`.
- Note: expected to be rare when candidate pools are large and media filtering is healthy.

## 6. Architecture

## 6.1 Backend modules

- `src/game/lobbyService.js`: lobby create/join/leave/start
- `src/game/sessionService.js`: round generation and timers
- `src/game/mediaService.js`: AnimeThemes fetch/map/cache
- `src/game/searchService.js`: Jikan proxy + cache + throttling
- `src/game/scoringService.js`: answer normalization and scoring
- `src/realtime/socket.js`: Socket.IO setup and event routing

## 6.2 Frontend split

- Keep existing auth/dashboard HTML pages.
- Build game client in React (separate app mount for `/game` route).

Why React only for this game?

- Multiplayer state is complex (timer, players, guesses, reveals, reconnects).
- React reduces UI/state bugs without requiring a full site migration.

## 6.3 Real-time transport

Use Socket.IO for:

- Lobby presence
- Round state changes
- Timer sync
- Guess submissions
- Scoreboard updates

Keep REST for:

- Initial lobby creation
- Game configuration
- Search endpoint
- Historical stats

## 6.4 Lobby system

- A user can create a lobby and become host.
- Host waits in pre-game lobby until players join.
- Maximum lobby size: 8 players.
- Players can join via:
  - invite link,
  - lobby search menu.
- Lobby search should return only joinable lobbies (for example: `status=WAITING`, not full, not private if privacy rules exist).
- Host can start match only when minimum player count is met.

## 7. Data Model (Prisma proposal)

Current `Game` and `Round` models are not enough for multiplayer sessions/lobbies.
Add the following models (or equivalent):

- `Lobby`
  - `id`, `code`, `hostUserId`, `status`, `createdAt`
- `LobbyPlayer`
  - `id`, `lobbyId`, `userId`, `displayName`, `joinedAt`, `isConnected`
- `GameSession`
  - `id`, `lobbyId`, `status`, `currentRound`, `roundCount`, `startedAt`, `endedAt`
- `GameRound`
  - `id`, `sessionId`, `index`, `animeId`, `animeTitle`, `opTitle`, `sampleStartSec`, `sampleDurationSec`, `solutionVideoUrl`, `sourcePlayerId`
- `RoundGuess`
  - `id`, `roundId`, `userId`, `guessText`, `guessAnimeId`, `isCorrect`, `submittedAt`

This supports live sessions plus replay/history.

## 8. Event Contract (Socket.IO)

Client -> server:

- `lobby:join` `{ lobbyCode }`
- `lobby:leave`
- `game:start` `{ roundCount, guessSeconds, sampleSeconds, sourceMode, selectionMode }` (host only)
- `round:submit_guess` `{ roundId, guessText, guessAnimeId }`
- `round:set_ready` `{ roundId, ready: true|false }`  // tied to Skip toggle
- `presence:ping`

Server -> client:

- `lobby:state` `{ players, hostUserId, status }`
- `game:started` `{ sessionId, config }` (includes resolved quotas when balanced mode is used)
- `round:started` `{ roundId, index, totalRounds, endsAt, sample }`
- `round:answers_reveal` `{ roundId, answers }`
- `round:solution` `{ roundId, correctAnime, video, scores }`
- `game:finished` `{ finalScores, winner }`
- `error` `{ code, message }`

## 9. REST API Contract (minimum)

- `POST /api/game/lobbies`
  - create lobby
- `POST /api/game/lobbies/:code/join`
  - join lobby
- `GET /api/game/lobbies/:code`
  - lobby snapshot
- `GET /api/game/lobbies`
  - lobby search/list (filter joinable lobbies)
- `GET /api/game/lobbies/:code/invite`
  - returns invite link metadata
- `POST /api/game/search`
  - backend Jikan search proxy
- `GET /api/game/history`
  - recent sessions for current user

All protected routes require JWT auth.

## 10. Answer Matching

Implement deterministic normalization before scoring:

- Lowercase
- Trim spaces
- Remove punctuation
- Collapse repeated spaces
- Optionally normalize romanization aliases

Preferred correctness check order:

1. `guessAnimeId` exact match (if selected from search list)
2. fallback normalized title string compare

Use server-side scoring only.

## 11. Security and Abuse Controls

- Server-authoritative timers and scoring
- Ignore late guesses after deadline
- Per-user and per-IP rate limits on search and guess events
- Input length limits and sanitization on guess text
- JWT auth required for lobby/game actions
- Do not expose MAL refresh tokens to frontend

## 12. Reliability

- Handle disconnect/reconnect:
  - keep seat for N seconds
  - restore current round state on reconnect
- Idempotent guess updates (same user+round replaces previous guess if allowed)
- Guard against host disconnect:
  - assign new host or end lobby by policy

## 13. Performance

- Cache Jikan search results (`q`, page) for short TTL (e.g., 5-30 min)
- Cache AnimeThemes metadata for longer TTL (e.g., 1-24 h)
- Pre-resolve all round media before `game:start` broadcast
- Send lightweight events; avoid large payloads every tick
- Use a single authoritative timer and broadcast `endsAt` instead of per-second spam

## 14. MVP Scope (recommended)

Phase 1:

- Private lobby by code
- 2 to 6 players
- Popular-only source
- Fixed config: 10 rounds, 20s guess, 10s sample
- Jikan live search proxy
- Basic score table

### 14.1 Tiebreaker policy

- If top score is tied after final round, run sudden-death rounds:
  - each extra round can break the tie,
  - continue until one player (or team, if added later) leads after a sudden-death round.

Phase 2:

- MAL-based pool (`MAL_ONLY` and `HYBRID`)
- Better answer aliases
- Round replay improvements
- Public lobby search

Phase 3:

- Ranked mode
- Anti-cheat hardening
- Matchmaking

## 15. Build Order in This Repo

1. Add multiplayer Prisma models and migrate.
2. Implement `/api/game` REST endpoints and Socket.IO server.
3. Implement server round engine and scoring.
4. Implement balanced selection quota engine (`BALANCED_STRICT` and `BALANCED_RELAXED`).
5. Add Jikan proxy endpoint with cache and rate limit.
6. Add AnimeThemes media integration and prefetch pipeline.
7. Build React game client mounted at `/game`.
8. Add integration tests for lobby lifecycle, balanced selection, and round scoring.

## 16. Open Decisions

No open decision blockers at this stage.
