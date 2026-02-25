/*
  Warnings:

  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Round` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "LobbyStatus" AS ENUM ('WAITING', 'IN_GAME', 'CLOSED');

-- CreateEnum
CREATE TYPE "GameSessionStatus" AS ENUM ('WAITING', 'IN_PROGRESS', 'FINISHED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "RoundStatus" AS ENUM ('PENDING', 'GUESSING', 'ANSWERS_REVEAL', 'SOLUTION_REVEAL', 'ROUND_END');

-- CreateEnum
CREATE TYPE "SourceMode" AS ENUM ('POPULAR', 'MAL_ONLY', 'HYBRID');

-- CreateEnum
CREATE TYPE "SelectionMode" AS ENUM ('STANDARD', 'BALANCED_STRICT', 'BALANCED_RELAXED');

-- CreateEnum
CREATE TYPE "ThemeMode" AS ENUM ('OP_ONLY', 'ED_ONLY', 'MIXED');

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_userId_fkey";

-- DropForeignKey
ALTER TABLE "Round" DROP CONSTRAINT "Round_gameId_fkey";

-- DropTable
DROP TABLE "Game";

-- DropTable
DROP TABLE "Round";

-- CreateTable
CREATE TABLE "Lobby" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT,
    "hostUserId" INTEGER NOT NULL,
    "status" "LobbyStatus" NOT NULL DEFAULT 'WAITING',
    "isPrivate" BOOLEAN NOT NULL DEFAULT false,
    "minPlayers" INTEGER NOT NULL DEFAULT 2,
    "maxPlayers" INTEGER NOT NULL DEFAULT 8,
    "roundCount" INTEGER NOT NULL DEFAULT 10,
    "guessSeconds" INTEGER NOT NULL DEFAULT 20,
    "sampleSeconds" INTEGER NOT NULL DEFAULT 10,
    "answersRevealSeconds" INTEGER NOT NULL DEFAULT 3,
    "solutionRevealSeconds" INTEGER NOT NULL DEFAULT 8,
    "sourceMode" "SourceMode" NOT NULL DEFAULT 'HYBRID',
    "selectionMode" "SelectionMode" NOT NULL DEFAULT 'STANDARD',
    "themeMode" "ThemeMode" NOT NULL DEFAULT 'MIXED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lobby_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LobbyPlayer" (
    "id" SERIAL NOT NULL,
    "lobbyId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "displayName" TEXT NOT NULL,
    "isConnected" BOOLEAN NOT NULL DEFAULT true,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LobbyPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameSession" (
    "id" SERIAL NOT NULL,
    "lobbyId" INTEGER NOT NULL,
    "status" "GameSessionStatus" NOT NULL DEFAULT 'WAITING',
    "currentRound" INTEGER NOT NULL DEFAULT 0,
    "roundCount" INTEGER NOT NULL,
    "guessSeconds" INTEGER NOT NULL,
    "sampleSeconds" INTEGER NOT NULL,
    "answersRevealSeconds" INTEGER NOT NULL DEFAULT 3,
    "solutionRevealSeconds" INTEGER NOT NULL DEFAULT 8,
    "sourceMode" "SourceMode" NOT NULL,
    "selectionMode" "SelectionMode" NOT NULL,
    "themeMode" "ThemeMode" NOT NULL,
    "startedAt" TIMESTAMP(3),
    "endedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GameSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameRound" (
    "id" SERIAL NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "index" INTEGER NOT NULL,
    "status" "RoundStatus" NOT NULL DEFAULT 'PENDING',
    "animeId" INTEGER NOT NULL,
    "animeTitle" TEXT NOT NULL,
    "themeType" TEXT NOT NULL,
    "themeTitle" TEXT,
    "sampleStartSec" INTEGER NOT NULL DEFAULT 0,
    "sampleDurationSec" INTEGER NOT NULL,
    "solutionVideoUrl" TEXT,
    "solutionAudioUrl" TEXT,
    "sourcePlayerId" INTEGER,
    "guessEndsAt" TIMESTAMP(3),
    "answersRevealEndsAt" TIMESTAMP(3),
    "solutionRevealEndsAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GameRound_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoundGuess" (
    "id" SERIAL NOT NULL,
    "roundId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "guessText" TEXT,
    "guessAnimeId" INTEGER,
    "isCorrect" BOOLEAN,
    "isReady" BOOLEAN NOT NULL DEFAULT false,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoundGuess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lobby_code_key" ON "Lobby"("code");

-- CreateIndex
CREATE INDEX "LobbyPlayer_lobbyId_idx" ON "LobbyPlayer"("lobbyId");

-- CreateIndex
CREATE UNIQUE INDEX "LobbyPlayer_lobbyId_userId_key" ON "LobbyPlayer"("lobbyId", "userId");

-- CreateIndex
CREATE INDEX "GameSession_lobbyId_status_idx" ON "GameSession"("lobbyId", "status");

-- CreateIndex
CREATE INDEX "GameRound_sessionId_status_idx" ON "GameRound"("sessionId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "GameRound_sessionId_index_key" ON "GameRound"("sessionId", "index");

-- CreateIndex
CREATE INDEX "RoundGuess_roundId_idx" ON "RoundGuess"("roundId");

-- CreateIndex
CREATE UNIQUE INDEX "RoundGuess_roundId_userId_key" ON "RoundGuess"("roundId", "userId");

-- AddForeignKey
ALTER TABLE "Lobby" ADD CONSTRAINT "Lobby_hostUserId_fkey" FOREIGN KEY ("hostUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LobbyPlayer" ADD CONSTRAINT "LobbyPlayer_lobbyId_fkey" FOREIGN KEY ("lobbyId") REFERENCES "Lobby"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LobbyPlayer" ADD CONSTRAINT "LobbyPlayer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_lobbyId_fkey" FOREIGN KEY ("lobbyId") REFERENCES "Lobby"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameRound" ADD CONSTRAINT "GameRound_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "GameSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameRound" ADD CONSTRAINT "GameRound_sourcePlayerId_fkey" FOREIGN KEY ("sourcePlayerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundGuess" ADD CONSTRAINT "RoundGuess_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "GameRound"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundGuess" ADD CONSTRAINT "RoundGuess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
