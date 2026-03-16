import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { apiFetch, getAuthToken, redirectToLogin } from './apiClient';
import { closeGameSocket, getGameSocket } from './socketClient';
import malBadgeImage from './assets/mal-badge.png';

const SOURCE_MODES = ['POPULAR', 'MAL_ONLY', 'HYBRID'];
const SELECTION_MODES = ['STANDARD', 'BALANCED_RELAXED'];
const THEME_MODES = ['OP_ONLY', 'ED_ONLY', 'MIXED'];
const SOURCE_MODE_COPY = {
    POPULAR: {
        label: 'Popular Catalog',
        help: 'Use only the global popular anime catalog.'
    },
    MAL_ONLY: {
        label: 'MAL Only',
        help: 'Use only anime from linked MyAnimeList accounts.'
    },
    HYBRID: {
        label: 'Hybrid',
        help: 'Prefer MAL picks, fill remaining rounds with popular catalog.'
    }
};
const SELECTION_MODE_COPY = {
    STANDARD: {
        label: 'Standard',
        help: 'Simple rotation; no strict player balancing.'
    },
    BALANCED_RELAXED: {
        label: 'Balanced',
        help: 'Try to balance players, then relax constraints when needed.'
    }
};
const THEME_MODE_COPY = {
    OP_ONLY: {
        label: 'Openings Only',
        help: 'Only OP songs.'
    },
    ED_ONLY: {
        label: 'Endings Only',
        help: 'Only ED songs.'
    },
    MIXED: {
        label: 'Mixed',
        help: 'Mix OP, ED, and insert songs when available.'
    }
};
const INITIAL_REQUIRED_ROUNDS = 2;
const PRELOAD_WINDOW_ROUNDS = 3; // current round + next 2
const MAX_CONCURRENT_PRELOADS = 2;
const SCORE_RANGE_TICKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CREATE_DEFAULTS = {
    name: '',
    isPrivate: false,
    maxPlayers: 8,
    roundCount: 10,
    guessSeconds: 20,
    sourceMode: 'MAL_ONLY',
    selectionMode: 'BALANCED_RELAXED',
    themeMode: 'OP_ONLY',
    animeScoreMin: 1,
    animeScoreMax: 10,
    playerScoreMin: 1,
    playerScoreMax: 10
};

function toLobbyConfig(lobby) {
    if (!lobby) return { ...CREATE_DEFAULTS };
    return {
        name: typeof lobby.name === 'string' ? lobby.name : '',
        isPrivate: Boolean(lobby.isPrivate),
        maxPlayers: Number.isInteger(lobby.maxPlayers) ? lobby.maxPlayers : CREATE_DEFAULTS.maxPlayers,
        roundCount: Number.isInteger(lobby.roundCount) ? lobby.roundCount : CREATE_DEFAULTS.roundCount,
        guessSeconds: Number.isInteger(lobby.guessSeconds) ? lobby.guessSeconds : CREATE_DEFAULTS.guessSeconds,
        sourceMode: SOURCE_MODES.includes(lobby.sourceMode) ? lobby.sourceMode : CREATE_DEFAULTS.sourceMode,
        selectionMode: SELECTION_MODES.includes(lobby.selectionMode) ? lobby.selectionMode : CREATE_DEFAULTS.selectionMode,
        themeMode: THEME_MODES.includes(lobby.themeMode) ? lobby.themeMode : CREATE_DEFAULTS.themeMode,
        animeScoreMin: Number.isInteger(lobby.animeScoreMin) ? lobby.animeScoreMin : CREATE_DEFAULTS.animeScoreMin,
        animeScoreMax: Number.isInteger(lobby.animeScoreMax) ? lobby.animeScoreMax : CREATE_DEFAULTS.animeScoreMax,
        playerScoreMin: Number.isInteger(lobby.playerScoreMin) ? lobby.playerScoreMin : CREATE_DEFAULTS.playerScoreMin,
        playerScoreMax: Number.isInteger(lobby.playerScoreMax) ? lobby.playerScoreMax : CREATE_DEFAULTS.playerScoreMax
    };
}

function emitWithAck(socket, eventName, payload, { timeoutMs = 10_000 } = {}) {
    return new Promise((resolve, reject) => {
        let done = false;
        const timer = window.setTimeout(() => {
            if (done) return;
            done = true;
            reject(new Error('Request timed out'));
        }, timeoutMs);

        socket.emit(eventName, payload, (ack) => {
            if (done) return;
            done = true;
            window.clearTimeout(timer);
            if (!ack?.ok) return reject(new Error(ack?.error || ack?.code || 'Request failed'));
            return resolve(ack);
        });
    });
}

function toCode(value) {
    return String(value || '').trim().toUpperCase();
}

function lobbyCodeFromInvitePath(pathname) {
    const rawPath = String(pathname || '').trim();
    const match = rawPath.match(/^\/(?:amq\/lobby|amq\/invite|invite)\/([^/?#]+)/i);
    if (!match) return '';
    try {
        return toCode(decodeURIComponent(match[1]));
    } catch (_err) {
        return '';
    }
}

function updateUrl(lobbyCode, inviteToken) {
    const code = toCode(lobbyCode);
    const nextPath = code ? `/amq/lobby/${encodeURIComponent(code)}` : '/amq';
    const params = new URLSearchParams(window.location.search);
    if (inviteToken) {
        params.set('i', inviteToken);
        params.delete('inviteToken');
        params.delete('lobby');
    } else {
        params.delete('lobby');
        params.delete('i');
        params.delete('inviteToken');
    }
    const query = params.toString();
    window.history.replaceState({}, '', query ? `${nextPath}?${query}` : nextPath);
}

function lobbyCodeFromInviteToken(token) {
    const value = String(token || '').trim();
    if (!value) return '';
    const parts = value.split('.');
    if (parts.length !== 3) return '';
    const code = String(parts[0] || '').toUpperCase();
    if (!/^[A-Z0-9]{4,12}$/.test(code)) return '';
    return code;
}

function formatCountdown(ms) {
    if (!Number.isFinite(ms) || ms <= 0) return '00:00';
    const total = Math.ceil(ms / 1000);
    const min = Math.floor(total / 60);
    const sec = total % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function clampInteger(value, min, max) {
    const parsed = Number.parseInt(value, 10);
    if (!Number.isFinite(parsed)) return min;
    return Math.max(min, Math.min(max, parsed));
}

function nextScoreRangeConfig(config, minKey, maxKey, boundary, rawValue) {
    const currentMin = clampInteger(config?.[minKey], 1, 10);
    const currentMax = clampInteger(config?.[maxKey], 1, 10);
    const nextValue = clampInteger(rawValue, 1, 10);

    if (boundary === 'min') {
        return {
            ...config,
            [minKey]: Math.min(nextValue, currentMax),
            [maxKey]: currentMax
        };
    }

    return {
        ...config,
        [minKey]: currentMin,
        [maxKey]: Math.max(nextValue, currentMin)
    };
}

function ScoreRangeSlider({
    label,
    minValue,
    maxValue,
    onMinChange,
    onMaxChange,
    hint = ''
}) {
    const railRef = useRef(null);
    const clampedMin = clampInteger(minValue, 1, 10);
    const clampedMax = clampInteger(maxValue, 1, 10);
    const startPercent = ((clampedMin - 1) / 9) * 100;
    const endPercent = ((clampedMax - 1) / 9) * 100;
    const selectedWidthPercent = Math.max(0, endPercent - startPercent);
    const minRef = useRef(clampedMin);
    const maxRef = useRef(clampedMax);

    useEffect(() => {
        minRef.current = clampedMin;
        maxRef.current = clampedMax;
    }, [clampedMax, clampedMin]);

    const valueFromClientX = useCallback((clientX) => {
        const rail = railRef.current;
        if (!rail) return null;
        const rect = rail.getBoundingClientRect();
        if (!Number.isFinite(rect.width) || rect.width <= 0) return null;

        const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        return Math.max(1, Math.min(10, Math.round(ratio * 9) + 1));
    }, []);

    const applyBoundaryValue = useCallback((boundary, rawValue) => {
        const next = clampInteger(rawValue, 1, 10);
        if (boundary === 'min') {
            const resolved = Math.min(next, maxRef.current);
            minRef.current = resolved;
            onMinChange(String(resolved));
            return;
        }
        const resolved = Math.max(next, minRef.current);
        maxRef.current = resolved;
        onMaxChange(String(resolved));
    }, [onMaxChange, onMinChange]);

    const startBoundaryDrag = useCallback((boundary, event) => {
        if (event.button !== 0) return;
        event.preventDefault();
        const initial = valueFromClientX(event.clientX);
        if (initial != null) {
            applyBoundaryValue(boundary, initial);
        }

        const onMove = (moveEvent) => {
            const next = valueFromClientX(moveEvent.clientX);
            if (next == null) return;
            applyBoundaryValue(boundary, next);
        };
        const onUp = () => {
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onUp);
        };

        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
    }, [applyBoundaryValue, valueFromClientX]);

    const handleRailPointerDown = useCallback((event) => {
        if (event.button !== 0) return;
        const next = valueFromClientX(event.clientX);
        if (next == null) return;
        const toMin = Math.abs(next - minRef.current);
        const toMax = Math.abs(next - maxRef.current);
        const boundary = toMin <= toMax ? 'min' : 'max';
        startBoundaryDrag(boundary, event);
    }, [startBoundaryDrag, valueFromClientX]);

    return (
        <div className="gmq-field-card gmq-score-range-card">
            <div className="gmq-score-range-head">
                <span>{label}</span>
                <strong>{clampedMin} - {clampedMax}</strong>
            </div>
            <div
                className="gmq-score-range-slider"
                style={{
                    '--range-start': `${startPercent}%`,
                    '--range-end': `${endPercent}%`
                }}
            >
                <div className="gmq-score-range-rail" ref={railRef} onPointerDown={handleRailPointerDown}>
                    <div
                        className="gmq-score-range-selected"
                        style={{ left: `${startPercent}%`, width: `${selectedWidthPercent}%` }}
                    >
                        <button
                            type="button"
                            className="gmq-score-range-handle gmq-score-range-handle-min"
                            aria-label={`${label} minimum`}
                            onPointerDown={(event) => {
                                event.stopPropagation();
                                startBoundaryDrag('min', event);
                            }}
                        />
                        <button
                            type="button"
                            className="gmq-score-range-handle gmq-score-range-handle-max"
                            aria-label={`${label} maximum`}
                            onPointerDown={(event) => {
                                event.stopPropagation();
                                startBoundaryDrag('max', event);
                            }}
                        />
                    </div>
                </div>
                <div className="gmq-score-range-scale" aria-hidden="true">
                    {SCORE_RANGE_TICKS.map((tick) => (
                        <span
                            key={tick}
                            className={`gmq-score-range-scale-tick${tick >= clampedMin && tick <= clampedMax ? ' is-selected' : ''}`}
                            style={{ '--tick-pos': `${((tick - 1) / 9) * 100}%` }}
                        >
                            <span className="gmq-score-range-scale-dot" />
                            <span className="gmq-score-range-scale-label">{tick}</span>
                        </span>
                    ))}
                </div>
            </div>
            {hint ? <p className="gmq-field-help gmq-muted">{hint}</p> : null}
        </div>
    );
}

function normalizeMaxPlayersInput(rawValue) {
    const digits = String(rawValue || '').replace(/\D+/g, '');
    if (!digits) return '';
    return digits.slice(0, 2);
}

function byScoreDesc(a, b) {
    const scoreDiff = (Number(b?.score) || 0) - (Number(a?.score) || 0);
    if (scoreDiff !== 0) return scoreDiff;
    return String(a?.displayName || '').localeCompare(String(b?.displayName || ''));
}

function normalizePreloadManifest(rawManifest) {
    if (!Array.isArray(rawManifest)) return [];
    return rawManifest
        .map((row) => ({
            index: Number.parseInt(row?.index, 10),
            audioUrl: typeof row?.audioUrl === 'string' ? row.audioUrl : null,
            videoUrl: typeof row?.videoUrl === 'string' ? row.videoUrl : null,
            sampleStartSec: Number.isFinite(row?.sampleStartSec) ? row.sampleStartSec : 0,
            sampleDurationSec: Number.isFinite(row?.sampleDurationSec) ? row.sampleDurationSec : 0
        }))
        .filter((row) => Number.isInteger(row.index) && row.index > 0)
        .sort((a, b) => a.index - b.index);
}

function normalizeErrorMessage(message) {
    return String(message || '').trim();
}

function normalizeGuessComparable(value) {
    return String(value || '')
        .normalize('NFKC')
        .toLowerCase()
        .trim()
        .replace(/[^\p{L}\p{N}\s]/gu, '')
        .replace(/\s+/g, ' ');
}

function toStartErrorMessage(message) {
    const raw = normalizeErrorMessage(message).toLowerCase();
    if (!raw) return 'Could not start the game right now. Please try again.';
    if (raw.includes('only host')) return 'Only the host can start the game.';
    if (raw.includes('all players must be ready')) return 'All players must click Ready before the host can start.';
    if (raw.includes('not enough players')) return 'Not enough players to start. Invite more players or lower the minimum players setting.';
    if (raw.includes('balanced strict')) return 'Balanced mode could not build fair rounds from MAL lists. Try Standard or Hybrid.';
    if (raw.includes('mal_only')) return 'MAL_ONLY could not build enough rounds from linked MAL lists. Try HYBRID or POPULAR.';
    if (raw.includes('playable round media') || raw.includes('round seeds') || raw.includes('media provider')) {
        return 'Could not prepare enough playable songs for this match. Try fewer rounds or different source/theme settings.';
    }
    if (raw.includes('timed out')) return 'Game start timed out. Please try again.';
    return normalizeErrorMessage(message);
}

function toSearchErrorMessage(message) {
    const raw = normalizeErrorMessage(message).toLowerCase();
    if (!raw) return 'Search is temporarily unavailable. You can still submit a typed guess.';
    if (raw.includes('at least 2 characters')) return 'Type at least 2 characters to search.';
    if (raw.includes('too many') || raw.includes('rate')) return 'Search is rate-limited right now. Wait a few seconds and try again.';
    if (raw.includes('timed out')) return 'Search timed out. Please try again.';
    return 'Search is temporarily unavailable. You can still submit a typed guess.';
}

function toMediaErrorMessage(reason) {
    if (reason === 'autoplay_blocked') {
        return 'Autoplay was blocked or the sample failed to auto-start. Press Play sample.';
    }
    if (reason === 'source_unavailable') {
        return 'This sample source failed to load for your browser.';
    }
    return 'Could not play sample audio for this round.';
}

function shouldRefreshLobbyDirectoryOnJoinError(message) {
    const raw = normalizeErrorMessage(message).toLowerCase();
    if (!raw) return false;
    return raw.includes('lobby not found')
        || raw.includes('not accepting new players')
        || raw.includes('lobby is full');
}

function toJoinErrorMessage(message) {
    const raw = normalizeErrorMessage(message).toLowerCase();
    if (!raw) return 'Could not join this lobby right now.';
    if (raw.includes('kicked from this lobby')) {
        return normalizeErrorMessage(message);
    }
    if (raw.includes('valid invite token is required')) {
        return 'This lobby is private. Ask the host for the invite link.';
    }
    return normalizeErrorMessage(message);
}

function toLobbyTerminatedMessage(reason) {
    const value = String(reason || '').trim().toLowerCase();
    if (value === 'host_offline_timeout') {
        return 'Lobby was closed because the host stayed offline too long.';
    }
    if (value === 'zero_connected_round_streak') {
        return 'Lobby was closed due to inactivity (no connected players for multiple rounds).';
    }
    return 'Lobby was closed.';
}

function classifyPlaybackError(err) {
    const name = String(err?.name || '');
    const message = normalizeErrorMessage(err?.message).toLowerCase();

    if (
        name === 'NotAllowedError' ||
        message.includes('notallowederror') ||
        message.includes('user gesture') ||
        message.includes('permission') ||
        message.includes('autoplay')
    ) {
        return 'autoplay_blocked';
    }

    if (name === 'AbortError') {
        return 'aborted';
    }

    if (
        name === 'NotSupportedError' ||
        message.includes('failed to load') ||
        message.includes('no supported source') ||
        message.includes('not supported')
    ) {
        return 'source_unavailable';
    }

    return 'play_failed';
}

export default function App() {
    const token = getAuthToken();
    const socketRef = useRef(null);
    const lobbyRef = useRef(null);
    const inviteTokenRef = useRef('');
    const pendingJoinRef = useRef(null);
    const autoJoinDoneRef = useRef(false);
    const lobbyDirectoryRefreshTimerRef = useRef(null);
    const fetchLobbiesInFlightRef = useRef(false);
    const joinInFlightRef = useRef(false);
    const joinCooldownUntilRef = useRef(0);
    const kickInFlightRef = useRef(false);
    const promoteInFlightRef = useRef(false);
    const sampleAudioRef = useRef(null);
    const sampleVideoRef = useRef(null);
    const solutionVideoRef = useRef(null);
    const guessInputRef = useRef(null);
    const searchResultButtonsRef = useRef([]);
    const sampleActiveMediaRef = useRef(null);
    const sampleStopTimerRef = useRef(null);
    const sampleVolumeRef = useRef(0.25);
    const sampleResolvedStartSecRef = useRef(null);
    const preloadManifestByIndexRef = useRef(new Map());
    const preloadRoundStatusRef = useRef(new Map());
    const preloadRoundPromiseRef = useRef(new Map());
    const preloadRoundUrlsRef = useRef(new Map());
    const preloadUrlStatusRef = useRef(new Map());
    const preloadUrlPromiseRef = useRef(new Map());
    const preloadElementsByUrlRef = useRef(new Map());
    const preloadQueueRef = useRef([]);
    const preloadQueuedSetRef = useRef(new Set());
    const preloadInFlightRef = useRef(0);
    const preloadRequiredRoundIndexesRef = useRef([]);
    const preloadDestroyedRef = useRef(false);
    const preloadSessionIdRef = useRef(null);
    const preloadReadySentRef = useRef(false);
    const searchRequestSeqRef = useRef(0);
    const autoSubmitTimerRef = useRef(null);
    const deadlineSubmitTimerRef = useRef(null);
    const lastSubmittedGuessRef = useRef({ roundId: null, key: '' });
    const guessTextRef = useRef('');
    const guessAnimeIdRef = useRef(null);
    const hostBackdropPointerDownRef = useRef(false);

    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState('');
    const [error, setError] = useState('');
    const [info, setInfo] = useState('');
    const [socketConnected, setSocketConnected] = useState(false);

    const [user, setUser] = useState(null);
    const [lobbies, setLobbies] = useState([]);
    const [lobbyQuery, setLobbyQuery] = useState('');
    const [hostModalOpen, setHostModalOpen] = useState(false);
    const [settingsModalOpen, setSettingsModalOpen] = useState(false);
    const [promoteConfirmTarget, setPromoteConfirmTarget] = useState(null);
    const [kickConfirmTarget, setKickConfirmTarget] = useState(null);
    const [lobbiesRefreshing, setLobbiesRefreshing] = useState(false);

    const [createConfig, setCreateConfig] = useState(CREATE_DEFAULTS);
    const [editConfig, setEditConfig] = useState(CREATE_DEFAULTS);
    const [createMaxPlayersInput, setCreateMaxPlayersInput] = useState(String(CREATE_DEFAULTS.maxPlayers));
    const [editMaxPlayersInput, setEditMaxPlayersInput] = useState(String(CREATE_DEFAULTS.maxPlayers));
    const [joinCode, setJoinCode] = useState('');
    const [inviteToken, setInviteToken] = useState('');

    const [lobby, setLobby] = useState(null);
    const [sessionInfo, setSessionInfo] = useState(null);
    const [phase, setPhase] = useState('WAITING');
    const [phaseEndsAt, setPhaseEndsAt] = useState(null);
    const [countdown, setCountdown] = useState('00:00');
    const [round, setRound] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [solution, setSolution] = useState(null);
    const [finalResult, setFinalResult] = useState(null);
    const [scoreboard, setScoreboard] = useState([]);
    const [readyUserIds, setReadyUserIds] = useState([]);
    const [lobbyReadyUserIds, setLobbyReadyUserIds] = useState([]);
    const [lobbyReadyRequiredUserIds, setLobbyReadyRequiredUserIds] = useState([]);

    const [guessText, setGuessText] = useState('');
    const [guessAnimeId, setGuessAnimeId] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [searchMenuOpen, setSearchMenuOpen] = useState(false);
    const [searchActiveIndex, setSearchActiveIndex] = useState(-1);
    const [sampleAutoplayBlocked, setSampleAutoplayBlocked] = useState(false);
    const [samplePlaying, setSamplePlaying] = useState(false);
    const [samplePlaybackSource, setSamplePlaybackSource] = useState(null);
    const [solutionVideoAutoplayBlocked, setSolutionVideoAutoplayBlocked] = useState(false);
    const [sampleVolume, setSampleVolume] = useState(0.25);
    const [searchError, setSearchError] = useState('');
    const [mediaError, setMediaError] = useState('');
    const [solutionMediaError, setSolutionMediaError] = useState('');
    const [preloadBlocking, setPreloadBlocking] = useState(false);
    const [preloadProgress, setPreloadProgress] = useState({ ready: 0, failed: 0, total: 0 });
    const [preloadGateError, setPreloadGateError] = useState('');
    const [preloadRetrying, setPreloadRetrying] = useState(false);
    const [roundPreparation, setRoundPreparation] = useState({ active: false, nextRoundIndex: null });
    const [suddenDeathState, setSuddenDeathState] = useState(null);
    const [mediaSourceStatus, setMediaSourceStatus] = useState(null);
    const [mediaSourceError, setMediaSourceError] = useState('');
    const [gameStartPending, setGameStartPending] = useState(false);
    const [floatingTooltip, setFloatingTooltip] = useState({
        visible: false,
        x: 0,
        y: 0,
        text: ''
    });

    const showMalBadgeTooltipAtCursor = useCallback((event) => {
        setFloatingTooltip({
            visible: true,
            x: Number.isFinite(event?.clientX) ? event.clientX : 0,
            y: Number.isFinite(event?.clientY) ? event.clientY : 0,
            text: 'User has connected a MAL account.'
        });
    }, []);

    const hideFloatingTooltip = useCallback(() => {
        setFloatingTooltip((previous) => (
            previous.visible
                ? { ...previous, visible: false }
                : previous
        ));
    }, []);

    useEffect(() => {
        if (phase === 'WAITING' && lobby?.status === 'WAITING') return;
        hideFloatingTooltip();
    }, [phase, lobby?.status, hideFloatingTooltip]);

    const handleCreateMaxPlayersChange = useCallback((rawValue) => {
        const nextInput = normalizeMaxPlayersInput(rawValue);
        setCreateMaxPlayersInput(nextInput);
        if (!nextInput) return;
        setCreateConfig((previous) => ({
            ...previous,
            maxPlayers: clampInteger(nextInput, 1, 8)
        }));
    }, []);

    const handleEditMaxPlayersChange = useCallback((rawValue) => {
        const nextInput = normalizeMaxPlayersInput(rawValue);
        setEditMaxPlayersInput(nextInput);
        if (!nextInput) return;
        setEditConfig((previous) => ({
            ...previous,
            maxPlayers: clampInteger(nextInput, 1, 8)
        }));
    }, []);

    const handleCreateAnimeScoreMinChange = useCallback((rawValue) => {
        setCreateConfig((previous) => nextScoreRangeConfig(previous, 'animeScoreMin', 'animeScoreMax', 'min', rawValue));
    }, []);

    const handleCreateAnimeScoreMaxChange = useCallback((rawValue) => {
        setCreateConfig((previous) => nextScoreRangeConfig(previous, 'animeScoreMin', 'animeScoreMax', 'max', rawValue));
    }, []);

    const handleCreatePlayerScoreMinChange = useCallback((rawValue) => {
        setCreateConfig((previous) => nextScoreRangeConfig(previous, 'playerScoreMin', 'playerScoreMax', 'min', rawValue));
    }, []);

    const handleCreatePlayerScoreMaxChange = useCallback((rawValue) => {
        setCreateConfig((previous) => nextScoreRangeConfig(previous, 'playerScoreMin', 'playerScoreMax', 'max', rawValue));
    }, []);

    const handleEditAnimeScoreMinChange = useCallback((rawValue) => {
        setEditConfig((previous) => nextScoreRangeConfig(previous, 'animeScoreMin', 'animeScoreMax', 'min', rawValue));
    }, []);

    const handleEditAnimeScoreMaxChange = useCallback((rawValue) => {
        setEditConfig((previous) => nextScoreRangeConfig(previous, 'animeScoreMin', 'animeScoreMax', 'max', rawValue));
    }, []);

    const handleEditPlayerScoreMinChange = useCallback((rawValue) => {
        setEditConfig((previous) => nextScoreRangeConfig(previous, 'playerScoreMin', 'playerScoreMax', 'min', rawValue));
    }, []);

    const handleEditPlayerScoreMaxChange = useCallback((rawValue) => {
        setEditConfig((previous) => nextScoreRangeConfig(previous, 'playerScoreMin', 'playerScoreMax', 'max', rawValue));
    }, []);

    const commitCreateMaxPlayersInput = useCallback(() => {
        const fallback = clampInteger(createConfig.maxPlayers, 1, 8);
        const committed = createMaxPlayersInput
            ? clampInteger(createMaxPlayersInput, 1, 8)
            : fallback;
        setCreateConfig((previous) => ({ ...previous, maxPlayers: committed }));
        setCreateMaxPlayersInput(String(committed));
        return committed;
    }, [createConfig.maxPlayers, createMaxPlayersInput]);

    const commitEditMaxPlayersInput = useCallback(() => {
        const fallback = clampInteger(editConfig.maxPlayers, 1, 8);
        const committed = editMaxPlayersInput
            ? clampInteger(editMaxPlayersInput, 1, 8)
            : fallback;
        setEditConfig((previous) => ({ ...previous, maxPlayers: committed }));
        setEditMaxPlayersInput(String(committed));
        return committed;
    }, [editConfig.maxPlayers, editMaxPlayersInput]);

    useEffect(() => {
        lobbyRef.current = lobby;
    }, [lobby]);

    useEffect(() => {
        inviteTokenRef.current = inviteToken;
    }, [inviteToken]);

    useEffect(() => {
        sampleVolumeRef.current = sampleVolume;
    }, [sampleVolume]);

    useEffect(() => {
        guessTextRef.current = guessText;
    }, [guessText]);

    useEffect(() => {
        guessAnimeIdRef.current = Number.isInteger(guessAnimeId) ? guessAnimeId : null;
    }, [guessAnimeId]);

    useEffect(() => {
        if (hostModalOpen) {
            hostBackdropPointerDownRef.current = false;
        }
    }, [hostModalOpen]);

    const handleHostBackdropPointerDown = useCallback((event) => {
        hostBackdropPointerDownRef.current = event.target === event.currentTarget;
    }, []);

    const handleHostBackdropClick = useCallback((event) => {
        if (event.target !== event.currentTarget) return;
        if (!hostBackdropPointerDownRef.current) return;
        setHostModalOpen(false);
    }, []);

    useEffect(() => {
        if (!hostModalOpen && !settingsModalOpen && !promoteConfirmTarget && !kickConfirmTarget) return undefined;
        const onKeyDown = (event) => {
            if (event.key !== 'Escape') return;
            if (kickConfirmTarget) {
                setKickConfirmTarget(null);
                return;
            }
            if (promoteConfirmTarget) {
                setPromoteConfirmTarget(null);
                return;
            }
            if (settingsModalOpen) {
                setSettingsModalOpen(false);
                return;
            }
            setHostModalOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [hostModalOpen, kickConfirmTarget, promoteConfirmTarget, settingsModalOpen]);

    useEffect(() => {
        if (!kickConfirmTarget) return;
        const stillInLobby = (lobby?.players || []).some((player) => player.userId === kickConfirmTarget.userId);
        if (!stillInLobby) {
            setKickConfirmTarget(null);
        }
    }, [kickConfirmTarget, lobby]);

    useEffect(() => {
        if (!promoteConfirmTarget) return;
        const stillInLobby = (lobby?.players || []).some((player) => player.userId === promoteConfirmTarget.userId);
        if (!stillInLobby) {
            setPromoteConfirmTarget(null);
        }
    }, [promoteConfirmTarget, lobby]);

    useEffect(() => {
        if (!gameStartPending) return;
        setPromoteConfirmTarget(null);
        setKickConfirmTarget(null);
    }, [gameStartPending]);

    useEffect(() => {
        if (!lobby || lobby.status !== 'WAITING') {
            setSettingsModalOpen(false);
            return;
        }
        if (settingsModalOpen) return;
        const nextConfig = toLobbyConfig(lobby);
        setEditConfig(nextConfig);
        setEditMaxPlayersInput(String(nextConfig.maxPlayers));
    }, [lobby, settingsModalOpen]);

    useEffect(() => {
        if (!error) return undefined;
        const timer = window.setTimeout(() => setError(''), 7000);
        return () => window.clearTimeout(timer);
    }, [error]);

    useEffect(() => {
        if (!info) return undefined;
        const timer = window.setTimeout(() => setInfo(''), 4500);
        return () => window.clearTimeout(timer);
    }, [info]);

    useEffect(() => {
        if (!searchMenuOpen || phase !== 'GUESSING') return undefined;

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setSearchMenuOpen(false);
                guessInputRef.current?.blur?.();
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [phase, searchMenuOpen]);

    useEffect(() => {
        if (phase === 'GUESSING') return;
        setSearchMenuOpen(false);
        setSearchActiveIndex(-1);
    }, [phase]);

    useEffect(() => {
        searchResultButtonsRef.current = searchResultButtonsRef.current.slice(0, searchResults.length);
    }, [searchResults.length]);

    useEffect(() => {
        if (!searchMenuOpen || phase !== 'GUESSING' || searchResults.length <= 0) {
            setSearchActiveIndex(-1);
            return;
        }
        setSearchActiveIndex((previous) => {
            if (previous >= 0 && previous < searchResults.length) return previous;
            return 0;
        });
    }, [phase, searchMenuOpen, searchResults]);

    useEffect(() => {
        if (searchActiveIndex < 0) return;
        const node = searchResultButtonsRef.current[searchActiveIndex];
        node?.scrollIntoView?.({ block: 'nearest' });
    }, [searchActiveIndex]);

    const playerNameById = useMemo(() => {
        const map = new Map();
        for (const player of lobby?.players || []) {
            map.set(player.userId, player.displayName);
        }
        return map;
    }, [lobby]);

    const resolvePlayerName = useCallback((userId) => playerNameById.get(userId) || `User ${userId}`, [playerNameById]);

    const clearSampleStopTimer = useCallback(() => {
        if (!sampleStopTimerRef.current) return;
        window.clearTimeout(sampleStopTimerRef.current);
        sampleStopTimerRef.current = null;
    }, []);

    const stopSamplePlayback = useCallback(() => {
        clearSampleStopTimer();
        const activeMedia = sampleActiveMediaRef.current;
        if (activeMedia?.pause) activeMedia.pause();
        if (sampleAudioRef.current && sampleAudioRef.current !== activeMedia) sampleAudioRef.current.pause();
        if (sampleVideoRef.current && sampleVideoRef.current !== activeMedia) sampleVideoRef.current.pause();
        sampleActiveMediaRef.current = null;
        setSamplePlaying(false);
    }, [clearSampleStopTimer]);

    const stopSolutionVideoPlayback = useCallback(() => {
        const video = solutionVideoRef.current;
        if (!video) return;
        video.pause();
        try {
            video.currentTime = 0;
        } catch (_err) {
            // Ignore seek failures for not-yet-ready media.
        }
    }, []);

    const updatePreloadProgress = useCallback(() => {
        const required = preloadRequiredRoundIndexesRef.current;
        if (!Array.isArray(required) || required.length === 0) {
            setPreloadProgress({ ready: 0, failed: 0, total: 0 });
            return;
        }

        let ready = 0;
        let failed = 0;
        for (const index of required) {
            const status = preloadRoundStatusRef.current.get(index);
            if (status === 'ready') ready += 1;
            else if (status === 'failed') failed += 1;
        }
        setPreloadProgress({ ready, failed, total: required.length });
    }, []);

    const cleanupPreloadedElements = useCallback((keepUrls = null) => {
        const keepSet = keepUrls instanceof Set ? keepUrls : null;
        const toRemove = [];
        for (const [url] of preloadElementsByUrlRef.current) {
            if (keepSet && keepSet.has(url)) continue;
            toRemove.push(url);
        }

        for (const url of toRemove) {
            const element = preloadElementsByUrlRef.current.get(url);
            if (element) {
                try {
                    element.pause?.();
                    element.removeAttribute('src');
                    element.load?.();
                } catch (_err) {
                    // Ignore cleanup errors from detached media.
                }
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }
            preloadElementsByUrlRef.current.delete(url);
            preloadUrlPromiseRef.current.delete(url);
            preloadUrlStatusRef.current.delete(url);
        }
    }, []);

    const resetPreloadManager = useCallback(() => {
        preloadDestroyedRef.current = true;
        preloadManifestByIndexRef.current.clear();
        preloadRoundStatusRef.current.clear();
        preloadRoundPromiseRef.current.clear();
        preloadRoundUrlsRef.current.clear();
        preloadQueueRef.current = [];
        preloadQueuedSetRef.current.clear();
        preloadInFlightRef.current = 0;
        preloadRequiredRoundIndexesRef.current = [];
        preloadSessionIdRef.current = null;
        preloadReadySentRef.current = false;
        cleanupPreloadedElements();
        setPreloadBlocking(false);
        setPreloadProgress({ ready: 0, failed: 0, total: 0 });
        setPreloadGateError('');
        setPreloadRetrying(false);
    }, [cleanupPreloadedElements]);

    const preloadSingleUrl = useCallback((url, mediaKind = 'video') => {
        const source = typeof url === 'string' ? url.trim() : '';
        if (!source) {
            return Promise.reject(new Error('Missing media url'));
        }

        const cachedStatus = preloadUrlStatusRef.current.get(source);
        if (cachedStatus === 'ready') {
            return Promise.resolve(true);
        }

        const inFlightPromise = preloadUrlPromiseRef.current.get(source);
        if (cachedStatus === 'loading' && inFlightPromise) {
            return inFlightPromise;
        }

        preloadUrlStatusRef.current.set(source, 'loading');
        const promise = new Promise((resolve, reject) => {
            if (preloadDestroyedRef.current) {
                preloadUrlStatusRef.current.set(source, 'failed');
                reject(new Error('Preload manager was reset'));
                return;
            }

            const mediaEl = document.createElement(mediaKind === 'audio' ? 'audio' : 'video');
            mediaEl.preload = 'auto';
            mediaEl.muted = true;
            mediaEl.playsInline = true;
            mediaEl.style.position = 'absolute';
            mediaEl.style.left = '-10000px';
            mediaEl.style.width = '1px';
            mediaEl.style.height = '1px';
            mediaEl.style.opacity = '0';

            const finish = (ok) => {
                cleanup();
                if (ok) {
                    preloadUrlStatusRef.current.set(source, 'ready');
                    preloadElementsByUrlRef.current.set(source, mediaEl);
                    resolve(true);
                    return;
                }

                preloadUrlStatusRef.current.set(source, 'failed');
                preloadElementsByUrlRef.current.delete(source);
                if (mediaEl.parentNode) {
                    mediaEl.parentNode.removeChild(mediaEl);
                }
                reject(new Error('Media preload failed'));
            };

            const cleanup = () => {
                window.clearTimeout(timeoutId);
                mediaEl.removeEventListener('loadeddata', onLoaded);
                mediaEl.removeEventListener('canplaythrough', onLoaded);
                mediaEl.removeEventListener('error', onError);
            };

            const onLoaded = () => finish(true);
            const onError = () => finish(false);

            const timeoutId = window.setTimeout(() => finish(false), 12_000);
            mediaEl.addEventListener('loadeddata', onLoaded, { once: true });
            mediaEl.addEventListener('canplaythrough', onLoaded, { once: true });
            mediaEl.addEventListener('error', onError, { once: true });

            document.body.appendChild(mediaEl);
            mediaEl.src = source;
            mediaEl.load();
        }).finally(() => {
            if (preloadUrlStatusRef.current.get(source) !== 'loading') {
                preloadUrlPromiseRef.current.delete(source);
            }
        });

        preloadUrlPromiseRef.current.set(source, promise);
        return promise;
    }, []);

    const preloadRoundMedia = useCallback(async (roundIndex) => {
        const index = Number.parseInt(roundIndex, 10);
        if (!Number.isInteger(index) || index <= 0) return false;
        if (preloadDestroyedRef.current) return false;

        const existingPromise = preloadRoundPromiseRef.current.get(index);
        if (existingPromise) return existingPromise;

        const currentStatus = preloadRoundStatusRef.current.get(index);
        if (currentStatus === 'ready') return true;

        const entry = preloadManifestByIndexRef.current.get(index);
        if (!entry) {
            preloadRoundStatusRef.current.set(index, 'failed');
            updatePreloadProgress();
            return false;
        }

        const primaryUrl = entry.audioUrl || entry.videoUrl || null;
        const secondaryUrl = entry.audioUrl && entry.videoUrl ? entry.videoUrl : null;
        const urls = [primaryUrl, secondaryUrl].filter((value, pos, arr) => value && arr.indexOf(value) === pos);
        preloadRoundUrlsRef.current.set(index, new Set(urls));
        preloadRoundStatusRef.current.set(index, 'loading');
        updatePreloadProgress();

        const promise = (async () => {
            if (urls.length === 0) {
                preloadRoundStatusRef.current.set(index, 'failed');
                return false;
            }

            const primaryKind = entry.audioUrl && primaryUrl === entry.audioUrl ? 'audio' : 'video';
            const primaryResult = await Promise.allSettled([
                preloadSingleUrl(primaryUrl, primaryKind)
            ]);
            const primaryReady = primaryResult.some((result) => result.status === 'fulfilled');
            if (primaryReady) {
                preloadRoundStatusRef.current.set(index, 'ready');
                return true;
            }

            if (!secondaryUrl || secondaryUrl === primaryUrl) {
                preloadRoundStatusRef.current.set(index, 'failed');
                return false;
            }

            const secondaryKind = entry.audioUrl && secondaryUrl === entry.audioUrl ? 'audio' : 'video';
            const secondaryResult = await Promise.allSettled([
                preloadSingleUrl(secondaryUrl, secondaryKind)
            ]);
            const secondaryReady = secondaryResult.some((result) => result.status === 'fulfilled');
            preloadRoundStatusRef.current.set(index, secondaryReady ? 'ready' : 'failed');
            return secondaryReady;
        })().finally(() => {
            preloadRoundPromiseRef.current.delete(index);
            updatePreloadProgress();
        });

        preloadRoundPromiseRef.current.set(index, promise);
        return promise;
    }, [preloadSingleUrl, updatePreloadProgress]);

    const pumpPreloadQueue = useCallback(() => {
        if (preloadDestroyedRef.current) return;

        while (preloadInFlightRef.current < MAX_CONCURRENT_PRELOADS && preloadQueueRef.current.length > 0) {
            const nextIndex = preloadQueueRef.current.shift();
            preloadQueuedSetRef.current.delete(nextIndex);
            const status = preloadRoundStatusRef.current.get(nextIndex);
            if (status === 'ready' || status === 'loading') continue;

            preloadInFlightRef.current += 1;
            preloadRoundMedia(nextIndex).catch(() => false).finally(() => {
                preloadInFlightRef.current = Math.max(0, preloadInFlightRef.current - 1);
                pumpPreloadQueue();
            });
        }
    }, [preloadRoundMedia]);

    const enqueueRoundsForPreload = useCallback((roundIndexes = []) => {
        for (const value of roundIndexes) {
            const index = Number.parseInt(value, 10);
            if (!Number.isInteger(index) || index <= 0) continue;
            if (!preloadManifestByIndexRef.current.has(index)) continue;

            const status = preloadRoundStatusRef.current.get(index);
            if (status === 'ready' || status === 'loading') continue;
            if (preloadQueuedSetRef.current.has(index)) continue;

            preloadRoundStatusRef.current.set(index, 'pending');
            preloadQueueRef.current.push(index);
            preloadQueuedSetRef.current.add(index);
        }
        updatePreloadProgress();
        pumpPreloadQueue();
    }, [pumpPreloadQueue, updatePreloadProgress]);

    const waitForRoundsReady = useCallback(async (roundIndexes, timeoutMs = 20_000) => {
        const indexes = (Array.isArray(roundIndexes) ? roundIndexes : [])
            .map((value) => Number.parseInt(value, 10))
            .filter((value) => Number.isInteger(value) && value > 0);

        if (indexes.length === 0) return { ok: true };
        const startedAt = Date.now();

        while (!preloadDestroyedRef.current) {
            const failedIndexes = indexes.filter((index) => preloadRoundStatusRef.current.get(index) === 'failed');
            if (failedIndexes.length > 0) {
                return { ok: false, reason: 'failed', failedIndexes };
            }

            const allReady = indexes.every((index) => {
                const status = preloadRoundStatusRef.current.get(index);
                return status === 'ready';
            });
            if (allReady) return { ok: true };

            if (Date.now() - startedAt >= timeoutMs) {
                return { ok: false, reason: 'timeout' };
            }
            await new Promise((resolve) => window.setTimeout(resolve, 120));
        }
        return { ok: false, reason: 'cancelled' };
    }, []);

    const describePreloadGateError = useCallback((result) => {
        if (!result || result.ok) return '';
        if (result.reason === 'failed') {
            return 'Failed to preload required round media. Retry to continue.';
        }
        if (result.reason === 'timeout') {
            return 'Preloading required media timed out. Retry to continue.';
        }
        return 'Preloading was interrupted. Retry to continue.';
    }, []);

    const trimPreloadedWindow = useCallback((targetRoundIndexes = []) => {
        const keepRoundSet = new Set(
            (Array.isArray(targetRoundIndexes) ? targetRoundIndexes : [])
                .map((value) => Number.parseInt(value, 10))
                .filter((value) => Number.isInteger(value) && value > 0)
        );

        const keepUrls = new Set();
        for (const [index, urls] of preloadRoundUrlsRef.current) {
            if (!keepRoundSet.has(index)) continue;
            for (const url of urls || []) keepUrls.add(url);
        }

        for (const index of [...preloadRoundUrlsRef.current.keys()]) {
            if (keepRoundSet.has(index)) continue;
            preloadRoundUrlsRef.current.delete(index);
            preloadRoundStatusRef.current.delete(index);
            preloadRoundPromiseRef.current.delete(index);
        }

        preloadQueueRef.current = preloadQueueRef.current.filter((index) => keepRoundSet.has(index));
        preloadQueuedSetRef.current = new Set(preloadQueueRef.current);
        cleanupPreloadedElements(keepUrls);
    }, [cleanupPreloadedElements]);

    const signalPreloadReady = useCallback(async (lobbyCode, sessionId) => {
        const code = toCode(lobbyCode);
        const session = Number.parseInt(sessionId, 10);
        if (!code || !Number.isInteger(session)) return;
        if (preloadReadySentRef.current) return;

        const socket = socketRef.current;
        if (!socket?.connected) return;

        preloadReadySentRef.current = true;
        try {
            await emitWithAck(socket, 'game:preload_ready', {
                lobbyCode: code,
                sessionId: session
            });
        } catch (err) {
            preloadReadySentRef.current = false;
            setError(err.message);
        }
    }, []);

    const beginSessionPreload = useCallback(async ({ sessionId, lobbyCode, manifest }) => {
        resetPreloadManager();
        preloadDestroyedRef.current = false;

        const normalized = normalizePreloadManifest(manifest);
        preloadManifestByIndexRef.current = new Map(normalized.map((row) => [row.index, row]));
        preloadSessionIdRef.current = Number.parseInt(sessionId, 10) || null;
        preloadReadySentRef.current = false;
        setPreloadGateError('');
        setPreloadRetrying(false);

        const initialRoundIndexes = normalized.slice(0, INITIAL_REQUIRED_ROUNDS).map((row) => row.index);
        preloadRequiredRoundIndexesRef.current = initialRoundIndexes;
        updatePreloadProgress();

        if (initialRoundIndexes.length === 0) {
            await signalPreloadReady(lobbyCode, preloadSessionIdRef.current);
            return;
        }

        setPreloadBlocking(true);
        enqueueRoundsForPreload(initialRoundIndexes);
        const gateResult = await waitForRoundsReady(initialRoundIndexes);
        if (preloadDestroyedRef.current) return;
        if (!gateResult.ok) {
            setPreloadGateError(describePreloadGateError(gateResult));
            setPreloadBlocking(true);
            return;
        }

        setPreloadBlocking(false);
        await signalPreloadReady(lobbyCode, preloadSessionIdRef.current);
    }, [
        describePreloadGateError,
        enqueueRoundsForPreload,
        resetPreloadManager,
        signalPreloadReady,
        updatePreloadProgress,
        waitForRoundsReady
    ]);

    const retryInitialPreloadGate = useCallback(async () => {
        if (preloadDestroyedRef.current) return;
        if (preloadReadySentRef.current) return;

        const lobbyCode = lobbyRef.current?.code;
        const sessionId = preloadSessionIdRef.current;
        const requiredIndexes = preloadRequiredRoundIndexesRef.current;
        if (!lobbyCode || !Number.isInteger(sessionId) || !Array.isArray(requiredIndexes) || requiredIndexes.length === 0) {
            return;
        }

        setPreloadRetrying(true);
        setPreloadGateError('');
        setPreloadBlocking(true);
        enqueueRoundsForPreload(requiredIndexes);
        const gateResult = await waitForRoundsReady(requiredIndexes);
        if (preloadDestroyedRef.current) return;

        if (!gateResult.ok) {
            setPreloadGateError(describePreloadGateError(gateResult));
            setPreloadRetrying(false);
            return;
        }

        setPreloadRetrying(false);
        setPreloadBlocking(false);
        await signalPreloadReady(lobbyCode, sessionId);
    }, [describePreloadGateError, enqueueRoundsForPreload, signalPreloadReady, waitForRoundsReady]);

    const preloadRollingWindow = useCallback((roundIndex) => {
        const currentIndex = Number.parseInt(roundIndex, 10);
        if (!Number.isInteger(currentIndex) || currentIndex <= 0) return;

        const target = [];
        for (let i = 0; i < PRELOAD_WINDOW_ROUNDS; i += 1) {
            target.push(currentIndex + i);
        }

        enqueueRoundsForPreload(target);
        trimPreloadedWindow(target);
    }, [enqueueRoundsForPreload, trimPreloadedWindow]);

    const seededUnitInterval = useCallback((seedInput) => {
        const seed = String(seedInput || '0');
        let hash = 2166136261;
        for (let i = 0; i < seed.length; i += 1) {
            hash ^= seed.charCodeAt(i);
            hash = Math.imul(hash, 16777619);
        }
        return (hash >>> 0) / 4294967295;
    }, []);

    const resolveSampleStartSec = useCallback(async (mediaEl, sample) => {
        const cached = sampleResolvedStartSecRef.current;
        if (Number.isFinite(cached) && cached >= 0) return cached;

        const configuredStart = Number.isFinite(sample?.sampleStartSec)
            ? Math.max(0, sample.sampleStartSec)
            : 0;

        if (configuredStart > 0) {
            sampleResolvedStartSecRef.current = configuredStart;
            return configuredStart;
        }

        const sampleDurationSec = Number.isFinite(sample?.sampleDurationSec) ? Math.max(1, sample.sampleDurationSec) : 10;
        const immediateDuration = Number(mediaEl?.duration);
        const mediaDurationSec = Number.isFinite(immediateDuration) && immediateDuration > 0 ? immediateDuration : null;
        if (!Number.isFinite(mediaDurationSec) || mediaDurationSec <= 0) {
            sampleResolvedStartSecRef.current = configuredStart;
            return configuredStart;
        }

        const maxStart = Math.floor(mediaDurationSec - sampleDurationSec);
        if (maxStart <= 0) {
            sampleResolvedStartSecRef.current = 0;
            return 0;
        }

        const seed = `${round?.roundId || 0}:${sample?.animeId || 0}:${sampleDurationSec}`;
        const randomUnit = seededUnitInterval(seed);
        const randomStartSec = Math.floor(randomUnit * (maxStart + 1));
        sampleResolvedStartSecRef.current = randomStartSec;
        return randomStartSec;
    }, [round?.roundId, seededUnitInterval]);

    const playSolutionVideo = useCallback(async () => {
        const video = solutionVideoRef.current;
        if (!video) return false;
        video.volume = Math.max(0, Math.min(1, Number(sampleVolumeRef.current)));
        video.muted = false;
        try {
            await video.play();
            setSolutionVideoAutoplayBlocked(false);
            setSolutionMediaError('');
            return true;
        } catch (err) {
            const reason = classifyPlaybackError(err);
            if (reason === 'autoplay_blocked') {
                setSolutionVideoAutoplayBlocked(true);
                return false;
            }
            if (reason !== 'aborted') {
                setSolutionMediaError('Could not play solution video in this browser.');
            }
            setSolutionVideoAutoplayBlocked(false);
            return false;
        }
    }, []);

    const playSample = useCallback(async ({ isAutoplay = false } = {}) => {
        const sample = round?.sample;
        const preloadedAudio = sample?.audioUrl
            ? preloadElementsByUrlRef.current.get(sample.audioUrl)
            : null;
        const preloadedVideo = sample?.videoUrl
            ? preloadElementsByUrlRef.current.get(sample.videoUrl)
            : null;
        const audio = preloadedAudio || sampleAudioRef.current;
        const video = preloadedVideo || sampleVideoRef.current;
        if (phase !== 'GUESSING' || (!audio && !video) || (!sample?.audioUrl && !sample?.videoUrl)) return false;

        clearSampleStopTimer();
        stopSamplePlayback();
        setMediaError('');

        const durationSec = Number.isFinite(sample.sampleDurationSec) ? Math.max(1, sample.sampleDurationSec) : 10;
        const resolvedVolume = Math.max(0, Math.min(1, Number(sampleVolumeRef.current)));

        const attemptPlay = async (mediaEl, sourceName) => {
            if (!mediaEl) return { ok: false, reason: 'source_unavailable' };
            mediaEl.volume = resolvedVolume;
            mediaEl.muted = false;

            const startSec = await resolveSampleStartSec(mediaEl, sample);
            try {
                mediaEl.currentTime = startSec;
            } catch (_err) {
                // Ignore currentTime set failures when metadata is not yet ready.
            }

            try {
                await mediaEl.play();
                sampleActiveMediaRef.current = mediaEl;
                setSamplePlaybackSource(sourceName);
                setSampleAutoplayBlocked(false);
                setMediaError('');
                setSamplePlaying(true);
                sampleStopTimerRef.current = window.setTimeout(() => {
                    const active = sampleActiveMediaRef.current;
                    if (!active) return;
                    active.pause();
                    setSamplePlaying(false);
                    sampleActiveMediaRef.current = null;
                }, durationSec * 1000);
                return { ok: true, reason: null };
            } catch (err) {
                return { ok: false, reason: classifyPlaybackError(err) };
            }
        };

        const audioResult = sample?.audioUrl
            ? await attemptPlay(audio, 'audio')
            : { ok: false, reason: 'source_unavailable' };
        if (audioResult.ok) return true;

        const videoResult = sample?.videoUrl
            ? await attemptPlay(video, 'video')
            : { ok: false, reason: 'source_unavailable' };
        if (videoResult.ok) return true;

        const reasons = [audioResult.reason, videoResult.reason].filter(Boolean);
        if (reasons.includes('autoplay_blocked')) {
            setSampleAutoplayBlocked(true);
            setMediaError(toMediaErrorMessage('autoplay_blocked'));
            return false;
        }

        setSampleAutoplayBlocked(false);
        if (reasons.includes('source_unavailable')) {
            setMediaError(toMediaErrorMessage('source_unavailable'));
            return false;
        }
        if (!reasons.includes('aborted') || !isAutoplay) {
            setMediaError(toMediaErrorMessage('play_failed'));
        }

        return false;
    }, [clearSampleStopTimer, phase, resolveSampleStartSec, round, stopSamplePlayback]);

    const clearRoundState = useCallback(() => {
        if (autoSubmitTimerRef.current) {
            window.clearTimeout(autoSubmitTimerRef.current);
            autoSubmitTimerRef.current = null;
        }
        if (deadlineSubmitTimerRef.current) {
            window.clearTimeout(deadlineSubmitTimerRef.current);
            deadlineSubmitTimerRef.current = null;
        }
        lastSubmittedGuessRef.current = { roundId: null, key: '' };
        resetPreloadManager();
        stopSamplePlayback();
        stopSolutionVideoPlayback();
        setSessionInfo(null);
        setPhase('WAITING');
        setPhaseEndsAt(null);
        setRound(null);
        setAnswers([]);
        setSolution(null);
        setFinalResult(null);
        setScoreboard([]);
        setReadyUserIds([]);
        setLobbyReadyUserIds([]);
        setLobbyReadyRequiredUserIds([]);
        setGuessText('');
        setGuessAnimeId(null);
        guessTextRef.current = '';
        guessAnimeIdRef.current = null;
        setSearchResults([]);
        setSearchError('');
        setMediaError('');
        setSolutionMediaError('');
        setSampleAutoplayBlocked(false);
        setSamplePlaybackSource(null);
        setSolutionVideoAutoplayBlocked(false);
        setRoundPreparation({ active: false, nextRoundIndex: null });
        setSuddenDeathState(null);
        setGameStartPending(false);
    }, [resetPreloadManager, stopSamplePlayback, stopSolutionVideoPlayback]);

    const applySyncState = useCallback((syncState) => {
        const state = syncState || {};
        const nextPhase = state.phase || 'WAITING';
        const syncedScores = Array.isArray(state?.solution?.scores) ? state.solution.scores : null;
        setPhase(nextPhase);
        setRound(state.round || null);
        setReadyUserIds(Array.isArray(state.readyUserIds) ? state.readyUserIds : []);
        setPhaseEndsAt(state.endsAt || state.solution?.endsAt || null);
        if (nextPhase === 'WAITING') {
            setScoreboard([]);
        } else if (Array.isArray(syncedScores)) {
            setScoreboard(syncedScores.slice().sort(byScoreDesc));
        }
        if (!state?.round?.isSuddenDeath) {
            setSuddenDeathState(null);
        } else {
            setSuddenDeathState((prev) => ({
                roundIndex: Number.parseInt(state?.round?.index, 10) || prev?.roundIndex || null,
                tiedUserIds: Array.isArray(prev?.tiedUserIds) ? prev.tiedUserIds : []
            }));
        }

        if (nextPhase === 'ANSWERS_REVEAL') {
            setAnswers(Array.isArray(state.answers) ? state.answers : []);
            setSolution(null);
            return;
        }

        if (nextPhase === 'SOLUTION_REVEAL') {
            setAnswers(Array.isArray(state.answers) ? state.answers : []);
            setSolution(state.solution || null);
            return;
        }

        if (nextPhase === 'WAITING') {
            setAnswers([]);
            setSolution(null);
        }
    }, []);

    const requestRoundSync = useCallback(async (lobbyCode) => {
        const socket = socketRef.current;
        if (!socket?.connected || !lobbyCode) return;
        try {
            const ack = await emitWithAck(socket, 'round:sync', { lobbyCode });
            applySyncState(ack?.state || {});
        } catch (err) {
            setError(err.message);
        }
    }, [applySyncState]);

    const fetchLobbies = useCallback(async () => {
        if (fetchLobbiesInFlightRef.current) return;
        fetchLobbiesInFlightRef.current = true;
        setLobbiesRefreshing(true);
        try {
            const data = await apiFetch('/game/lobbies');
            setLobbies(Array.isArray(data.lobbies) ? data.lobbies : []);
        } finally {
            fetchLobbiesInFlightRef.current = false;
            setLobbiesRefreshing(false);
        }
    }, []);

    const joinSocketLobby = useCallback(async (code, invite) => {
        const socket = socketRef.current;
        if (!socket) return;

        const payload = {
            lobbyCode: code,
            ...(invite ? { inviteToken: invite } : {})
        };

        if (!socket.connected) {
            pendingJoinRef.current = payload;
            socket.connect();
            return;
        }

        await emitWithAck(socket, 'lobby:join', payload);
        await requestRoundSync(code);
    }, [requestRoundSync]);

    const joinLobby = useCallback(async (codeInput, inviteInput = '', options = {}) => {
        const code = toCode(codeInput);
        if (!code) return setError('Lobby code is required');
        const fromDirectory = Boolean(options?.fromDirectory);
        const now = Date.now();
        if (joinInFlightRef.current) return;
        if (joinCooldownUntilRef.current > now) return;

        joinInFlightRef.current = true;
        setBusy('join');
        setError('');
        setInfo('');

        try {
            const body = {};
            if (inviteInput) body.inviteToken = inviteInput;

            const data = await apiFetch(`/game/lobbies/${code}/join`, {
                method: 'POST',
                body: JSON.stringify(body)
            });

            setLobby(data.lobby);
            setInviteToken(inviteInput || '');
            clearRoundState();
            updateUrl(code, inviteInput || '');
            await joinSocketLobby(code, inviteInput || '');
            setInfo(`Joined lobby ${code}`);
        } catch (err) {
            joinCooldownUntilRef.current = Date.now() + 800;
            setError(toJoinErrorMessage(err?.message));
            if (fromDirectory || shouldRefreshLobbyDirectoryOnJoinError(err?.message)) {
                setLobbies((current) => current.filter((item) => item?.code !== code));
                fetchLobbies().catch(() => {});
            }
        } finally {
            joinInFlightRef.current = false;
            setBusy('');
        }
    }, [clearRoundState, fetchLobbies, joinSocketLobby]);

    const createLobby = useCallback(async () => {
        setBusy('create');
        setError('');
        setInfo('');
        try {
            const committedMaxPlayers = commitCreateMaxPlayersInput();
            const payload = {
                ...createConfig,
                maxPlayers: committedMaxPlayers
            };
            const data = await apiFetch('/game/lobbies', {
                method: 'POST',
                body: JSON.stringify(payload)
            });
            setLobby(data.lobby);
            setHostModalOpen(false);
            clearRoundState();
            updateUrl(data.lobby.code, '');
            await joinSocketLobby(data.lobby.code, '');
            setInfo(`Created lobby ${data.lobby.code}`);
        } catch (err) {
            setError(err.message);
        } finally {
            setBusy('');
        }
    }, [clearRoundState, commitCreateMaxPlayersInput, createConfig, joinSocketLobby]);

    const openSettingsModal = useCallback(() => {
        if (!lobby || lobby.status !== 'WAITING') return;
        const nextConfig = toLobbyConfig(lobby);
        setEditConfig(nextConfig);
        setEditMaxPlayersInput(String(nextConfig.maxPlayers));
        setSettingsModalOpen(true);
    }, [lobby]);

    const saveLobbySettings = useCallback(async () => {
        if (!lobby?.code || !socketRef.current) return;
        setBusy('settings');
        setError('');
        try {
            const committedMaxPlayers = commitEditMaxPlayersInput();
            const payload = {
                ...editConfig,
                maxPlayers: committedMaxPlayers
            };
            await emitWithAck(socketRef.current, 'lobby:update_settings', {
                lobbyCode: lobby.code,
                settings: payload
            });
            setSettingsModalOpen(false);
            setInfo('Lobby settings updated.');
        } catch (err) {
            setError(err.message);
        } finally {
            setBusy('');
        }
    }, [commitEditMaxPlayersInput, editConfig, lobby]);

    const leaveLobby = useCallback(async () => {
        if (!lobby?.code) return;
        setBusy('leave');
        setError('');
        try {
            if (socketRef.current?.connected) {
                await emitWithAck(socketRef.current, 'lobby:leave', { lobbyCode: lobby.code });
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLobby(null);
            setInviteToken('');
            setSettingsModalOpen(false);
            setPromoteConfirmTarget(null);
            setKickConfirmTarget(null);
            updateUrl('', '');
            clearRoundState();
            setBusy('');
            fetchLobbies().catch(() => {});
        }
    }, [clearRoundState, fetchLobbies, lobby]);

    const startGame = useCallback(async () => {
        if (!lobby?.code || !socketRef.current) return;
        setBusy('start');
        setGameStartPending(true);
        setError('');
        try {
            await emitWithAck(socketRef.current, 'game:start', { lobbyCode: lobby.code }, { timeoutMs: 120_000 });
        } catch (err) {
            setGameStartPending(false);
            setError(toStartErrorMessage(err.message));
        } finally {
            setBusy('');
        }
    }, [lobby]);

    const submitGuess = useCallback(async ({ force = false, guessTextOverride, guessAnimeIdOverride } = {}) => {
        if (!lobby?.code || !round?.roundId || !socketRef.current) return;
        if (user && readyUserIds.includes(user.id)) return;
        const rawGuessText = typeof guessTextOverride === 'string' ? guessTextOverride : guessTextRef.current;
        const rawGuessAnimeId = guessAnimeIdOverride !== undefined ? guessAnimeIdOverride : guessAnimeIdRef.current;
        const normalizedGuessText = String(rawGuessText || '').trim();
        let normalizedGuessAnimeId = Number.isInteger(rawGuessAnimeId) ? rawGuessAnimeId : null;
        if (!Number.isInteger(normalizedGuessAnimeId) && normalizedGuessText) {
            const normalizedGuess = normalizeGuessComparable(normalizedGuessText);
            const matchedResult = (searchResults || []).find((item) => (
                normalizeGuessComparable(item?.title) === normalizedGuess
            ));
            const parsedMatchedAnimeId = Number.parseInt(matchedResult?.id, 10);
            if (Number.isInteger(parsedMatchedAnimeId) && parsedMatchedAnimeId > 0) {
                normalizedGuessAnimeId = parsedMatchedAnimeId;
            }
        }
        const submissionKey = `${normalizedGuessText.toLowerCase()}|${normalizedGuessAnimeId ?? ''}`;
        const previousSubmission = lastSubmittedGuessRef.current;
        if (
            !force
            && previousSubmission.roundId === round.roundId
            && previousSubmission.key === submissionKey
        ) {
            return;
        }

        try {
            await emitWithAck(socketRef.current, 'round:submit_guess', {
                lobbyCode: lobby.code,
                roundId: round.roundId,
                guessText: normalizedGuessText,
                guessAnimeId: normalizedGuessAnimeId
            });
            lastSubmittedGuessRef.current = {
                roundId: round.roundId,
                key: submissionKey
            };
        } catch (err) {
            // Auto-submit is best-effort; deadline force submit still runs separately.
        }
    }, [lobby, readyUserIds, round, searchResults, user]);

    const commitSearchResult = useCallback((item) => {
        const nextGuessText = String(item?.title || '');
        const parsedAnimeId = Number.parseInt(item?.id, 10);
        const nextGuessAnimeId = Number.isInteger(parsedAnimeId) ? parsedAnimeId : null;
        guessTextRef.current = nextGuessText;
        guessAnimeIdRef.current = nextGuessAnimeId;
        setGuessText(nextGuessText);
        setGuessAnimeId(nextGuessAnimeId);
        setSearchResults([]);
        setSearchMenuOpen(false);
        setSearchActiveIndex(-1);
        submitGuess({
            force: true,
            guessTextOverride: nextGuessText,
            guessAnimeIdOverride: nextGuessAnimeId
        }).catch(() => {});
    }, [submitGuess]);

    const toggleReady = useCallback(async () => {
        if (!lobby?.code || !socketRef.current || !user) return;
        setBusy('ready');
        setError('');
        try {
            const mine = readyUserIds.includes(user.id);
            if (!mine) {
                await submitGuess({ force: true });
            }
            await emitWithAck(socketRef.current, 'round:set_ready', { lobbyCode: lobby.code, ready: !mine });
        } catch (err) {
            setError(err.message);
        } finally {
            setBusy('');
        }
    }, [lobby, readyUserIds, submitGuess, user]);

    const toggleLobbyReady = useCallback(async () => {
        if (!lobby?.code || !socketRef.current || !user || gameStartPending) return;
        setBusy('lobby-ready');
        setError('');
        try {
            const mine = lobbyReadyUserIds.includes(user.id);
            await emitWithAck(socketRef.current, 'lobby:set_ready', {
                lobbyCode: lobby.code,
                ready: !mine
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setBusy('');
        }
    }, [gameStartPending, lobby, lobbyReadyUserIds, user]);

    const kickPlayer = useCallback((player) => {
        if (!lobby?.code) return;
        if (!user || lobby.host?.id !== user.id) return;
        const targetUserId = Number.parseInt(player?.userId, 10);
        if (!Number.isInteger(targetUserId)) return;
        if (targetUserId === user?.id) return;
        const displayName = player?.displayName || `User ${targetUserId}`;
        setPromoteConfirmTarget(null);
        setKickConfirmTarget({
            userId: targetUserId,
            displayName
        });
    }, [lobby, user]);

    const promotePlayer = useCallback((player) => {
        if (!lobby?.code) return;
        if (!user || lobby.host?.id !== user.id) return;
        const targetUserId = Number.parseInt(player?.userId, 10);
        if (!Number.isInteger(targetUserId)) return;
        if (targetUserId === user?.id) return;
        const displayName = player?.displayName || `User ${targetUserId}`;
        setKickConfirmTarget(null);
        setPromoteConfirmTarget({
            userId: targetUserId,
            displayName
        });
    }, [lobby, user]);

    const confirmPromotePlayer = useCallback(async () => {
        if (!lobby?.code || !socketRef.current || !promoteConfirmTarget) return;
        if (promoteInFlightRef.current) return;
        promoteInFlightRef.current = true;
        setBusy('promote');
        setError('');
        try {
            await emitWithAck(socketRef.current, 'lobby:promote', {
                lobbyCode: lobby.code,
                userId: promoteConfirmTarget.userId
            });
            setInfo(`${promoteConfirmTarget.displayName} is now the host.`);
            setPromoteConfirmTarget(null);
        } catch (err) {
            setError(err.message);
        } finally {
            promoteInFlightRef.current = false;
            setBusy('');
        }
    }, [lobby, promoteConfirmTarget]);

    const confirmKickPlayer = useCallback(async () => {
        if (!lobby?.code || !socketRef.current || !kickConfirmTarget) return;
        if (kickInFlightRef.current) return;
        kickInFlightRef.current = true;
        setBusy('kick');
        setError('');
        try {
            await emitWithAck(socketRef.current, 'lobby:kick', {
                lobbyCode: lobby.code,
                userId: kickConfirmTarget.userId
            });
            setInfo(`${kickConfirmTarget.displayName} was kicked from the lobby.`);
            setKickConfirmTarget(null);
        } catch (err) {
            setError(err.message);
        } finally {
            kickInFlightRef.current = false;
            setBusy('');
        }
    }, [kickConfirmTarget, lobby]);

    const copyInvite = useCallback(async () => {
        if (!lobby?.code) return;
        setBusy('invite');
        setError('');
        setInfo('');
        try {
            const data = await apiFetch(`/game/lobbies/${lobby.code}/invite`);
            if (data.inviteToken) {
                setInviteToken(data.inviteToken);
                updateUrl(lobby.code, data.inviteToken);
            } else {
                setInviteToken('');
                updateUrl(lobby.code, '');
            }
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(data.inviteUrl);
                setInfo('Invite link copied');
            } else {
                setInfo(data.inviteUrl);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setBusy('');
        }
    }, [lobby]);

    useEffect(() => {
        if (!token) return redirectToLogin();
        const socket = getGameSocket(token);
        socketRef.current = socket;

        const onConnect = async () => {
            setSocketConnected(true);
            setError('');
            try {
                if (pendingJoinRef.current) {
                    await emitWithAck(socket, 'lobby:join', pendingJoinRef.current);
                    await requestRoundSync(pendingJoinRef.current.lobbyCode);
                    pendingJoinRef.current = null;
                } else if (lobbyRef.current?.code) {
                    await emitWithAck(socket, 'lobby:join', {
                        lobbyCode: lobbyRef.current.code,
                        ...(inviteTokenRef.current ? { inviteToken: inviteTokenRef.current } : {})
                    });
                    await requestRoundSync(lobbyRef.current.code);
                } else {
                    fetchLobbies().catch(() => {});
                }
            } catch (err) {
                setError(err.message);
            }
        };

        const onDisconnect = () => setSocketConnected(false);
        const onSocketError = (payload) => {
            const code = String(payload?.code || '');
            const message = normalizeErrorMessage(payload?.message);
            if (code === 'game_start_failed') {
                setGameStartPending(false);
                setError(toStartErrorMessage(message));
                return;
            }
            setError(message || 'Realtime error');
        };
        const onLobbyState = ({ lobby: nextLobby }) => {
            if (!nextLobby) return;
            setLobby(nextLobby);
            if (nextLobby.status !== 'WAITING') {
                setLobbyReadyUserIds([]);
                setLobbyReadyRequiredUserIds([]);
                setGameStartPending(false);
            }
        };
        const onGameStarting = (payload) => {
            const eventCode = toCode(payload?.lobbyCode);
            const currentCode = toCode(lobbyRef.current?.code);
            if (eventCode && currentCode && eventCode !== currentCode) return;
            setGameStartPending(true);
        };
        const onGameStarted = ({ sessionId, config, preloadManifest, lobby: startedLobby }) => {
            setGameStartPending(false);
            if (startedLobby) {
                setLobby(startedLobby);
            }
            setSessionInfo({ sessionId, ...(config || {}) });
            setFinalResult(null);
            setPhase('PENDING');
            setSuddenDeathState(null);
            setScoreboard(
                (lobbyRef.current?.players || [])
                    .map((player) => ({
                        userId: player.userId,
                        displayName: player.displayName,
                        score: 0
                    }))
                    .sort(byScoreDesc)
            );
            setLobbyReadyUserIds([]);
            setLobbyReadyRequiredUserIds([]);
            if (lobbyRef.current?.code) {
                beginSessionPreload({
                    sessionId,
                    lobbyCode: lobbyRef.current.code,
                    manifest: preloadManifest
                }).catch(() => {});
            }
        };
        const onGameStartCancelled = (payload) => {
            const eventCode = toCode(payload?.lobbyCode);
            const currentCode = toCode(lobbyRef.current?.code);
            if (eventCode && currentCode && eventCode !== currentCode) return;
            clearRoundState();
            setLobby((prev) => (prev ? { ...prev, status: 'WAITING' } : prev));
        };
        const onRoundStarted = (payload) => {
            stopSamplePlayback();
            stopSolutionVideoPlayback();
            setPreloadBlocking(false);
            setPreloadGateError('');
            setPreloadRetrying(false);
            setRoundPreparation({ active: false, nextRoundIndex: null });
            setPhase('GUESSING');
            setPhaseEndsAt(payload?.endsAt || null);
            setRound(payload || null);
            setAnswers([]);
            setSolution(null);
            setFinalResult(null);
            setReadyUserIds([]);
            setGuessText('');
            setGuessAnimeId(null);
            guessTextRef.current = '';
            guessAnimeIdRef.current = null;
            setSearchResults([]);
            setSearchError('');
            setMediaError('');
            setSolutionMediaError('');
            setSampleAutoplayBlocked(false);
            setSamplePlaybackSource(null);
            setSolutionVideoAutoplayBlocked(false);
            lastSubmittedGuessRef.current = {
                roundId: Number.isInteger(payload?.roundId) ? payload.roundId : null,
                key: ''
            };
            sampleResolvedStartSecRef.current = null;
            if (payload?.isSuddenDeath) {
                setSuddenDeathState((prev) => ({
                    roundIndex: Number.parseInt(payload?.index, 10) || prev?.roundIndex || null,
                    tiedUserIds: Array.isArray(prev?.tiedUserIds) ? prev.tiedUserIds : []
                }));
            } else {
                setSuddenDeathState(null);
            }
            preloadRollingWindow(payload?.index);
        };
        const onAnswersReveal = (payload) => {
            setRoundPreparation({ active: false, nextRoundIndex: null });
            setPhase('ANSWERS_REVEAL');
            setPhaseEndsAt(payload?.endsAt || null);
            setAnswers(Array.isArray(payload?.answers) ? payload.answers : []);
        };
        const onSolution = (payload) => {
            stopSamplePlayback();
            setRoundPreparation({ active: false, nextRoundIndex: null });
            setPhase('SOLUTION_REVEAL');
            setPhaseEndsAt(payload?.endsAt || null);
            setSolution(payload || null);
            if (Array.isArray(payload?.scores)) {
                setScoreboard(payload.scores.slice().sort(byScoreDesc));
            }
            setMediaError('');
            setSolutionMediaError('');
            setSolutionVideoAutoplayBlocked(false);
        };
        const onFinished = (payload) => {
            resetPreloadManager();
            stopSamplePlayback();
            stopSolutionVideoPlayback();
            setRoundPreparation({ active: false, nextRoundIndex: null });
            setPhase('FINISHED');
            setGameStartPending(false);
            setPhaseEndsAt(null);
            setMediaError('');
            setSolutionMediaError('');
            setFinalResult(payload || null);
            setLobby((prev) => (prev ? { ...prev, status: 'WAITING' } : prev));
            if (Array.isArray(payload?.finalScores)) {
                setScoreboard(payload.finalScores.slice().sort(byScoreDesc));
            }
            setSuddenDeathState(null);
            setLobbyReadyUserIds([]);
            setLobbyReadyRequiredUserIds([]);
        };
        const onRoundPreparing = (payload) => {
            const eventCode = toCode(payload?.lobbyCode);
            const currentCode = toCode(lobbyRef.current?.code);
            if (eventCode && currentCode && eventCode !== currentCode) return;

            const preparing = payload?.preparing === true;
            if (!preparing) {
                setRoundPreparation({ active: false, nextRoundIndex: null });
                return;
            }

            const nextRoundIndex = Number.parseInt(payload?.nextRoundIndex, 10);
            setRoundPreparation({
                active: true,
                nextRoundIndex: Number.isInteger(nextRoundIndex) ? nextRoundIndex : null
            });
        };
        const onSuddenDeath = (payload) => {
            const tiedUserIds = Array.isArray(payload?.tiedUserIds)
                ? payload.tiedUserIds.filter((value) => Number.isInteger(value))
                : [];
            const roundIndex = Number.parseInt(payload?.roundIndex, 10);
            setSuddenDeathState({
                roundIndex: Number.isInteger(roundIndex) ? roundIndex : null,
                tiedUserIds
            });

            const tiedNames = tiedUserIds.map((userId) => {
                const player = (lobbyRef.current?.players || []).find((item) => item.userId === userId);
                return player?.displayName || null;
            }).filter(Boolean);

            if (tiedNames.length > 0) {
                setInfo(`Sudden Death started: ${tiedNames.join(', ')} are tied for first.`);
            } else {
                setInfo('Sudden Death started: tie for first place.');
            }
        };
        const onReadyState = (payload) => {
            setReadyUserIds(Array.isArray(payload?.readyUserIds) ? payload.readyUserIds : []);
        };
        const onLobbyReadyState = (payload) => {
            setLobbyReadyUserIds(Array.isArray(payload?.readyUserIds) ? payload.readyUserIds : []);
            setLobbyReadyRequiredUserIds(Array.isArray(payload?.requiredUserIds) ? payload.requiredUserIds : []);
        };
        const onLobbyKicked = (payload) => {
            const code = toCode(payload?.lobbyCode);
            const currentCode = toCode(lobbyRef.current?.code);
            if (currentCode && code && code !== currentCode) return;

            const cooldownUntil = Number.parseInt(payload?.cooldownUntil, 10);
            let message = 'You were kicked from the lobby.';
            if (Number.isFinite(cooldownUntil)) {
                const remainingMs = cooldownUntil - Date.now();
                if (remainingMs > 0) {
                    const remainingSec = Math.max(1, Math.ceil(remainingMs / 1000));
                    message = `You were kicked from the lobby. Rejoin available in about ${remainingSec}s.`;
                }
            }
            setError(message);
            setLobby(null);
            setInviteToken('');
            setSettingsModalOpen(false);
            setPromoteConfirmTarget(null);
            setKickConfirmTarget(null);
            updateUrl('', '');
            clearRoundState();
            fetchLobbies().catch(() => {});
        };
        const onLobbyTerminated = (payload) => {
            const code = toCode(payload?.lobbyCode);
            const currentCode = toCode(lobbyRef.current?.code);
            if (currentCode && code && code !== currentCode) return;

            setError(toLobbyTerminatedMessage(payload?.reason));
            setLobby(null);
            setInviteToken('');
            setSettingsModalOpen(false);
            setPromoteConfirmTarget(null);
            setKickConfirmTarget(null);
            updateUrl('', '');
            clearRoundState();
            fetchLobbies().catch(() => {});
        };
        const onLobbyDirectoryChanged = () => {
            if (lobbyRef.current?.code) return;
            if (lobbyDirectoryRefreshTimerRef.current) {
                window.clearTimeout(lobbyDirectoryRefreshTimerRef.current);
            }
            lobbyDirectoryRefreshTimerRef.current = window.setTimeout(() => {
                lobbyDirectoryRefreshTimerRef.current = null;
                fetchLobbies().catch(() => {});
            }, 150);
        };
        const onMediaSourceStatus = (payload) => {
            const status = payload?.status || null;
            if (!status || typeof status !== 'object') return;
            setMediaSourceStatus(status);
            setMediaSourceError('');
        };

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('error', onSocketError);
        socket.on('lobby:state', onLobbyState);
        socket.on('lobby:directory_changed', onLobbyDirectoryChanged);
        socket.on('game:starting', onGameStarting);
        socket.on('game:started', onGameStarted);
        socket.on('game:start_cancelled', onGameStartCancelled);
        socket.on('round:started', onRoundStarted);
        socket.on('round:preparing', onRoundPreparing);
        socket.on('round:answers_reveal', onAnswersReveal);
        socket.on('round:solution', onSolution);
        socket.on('game:finished', onFinished);
        socket.on('game:sudden_death', onSuddenDeath);
        socket.on('round:ready_state', onReadyState);
        socket.on('lobby:ready_state', onLobbyReadyState);
        socket.on('lobby:kicked', onLobbyKicked);
        socket.on('lobby:terminated', onLobbyTerminated);
        socket.on('media:source_status', onMediaSourceStatus);
        socket.connect();

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('error', onSocketError);
            socket.off('lobby:state', onLobbyState);
            socket.off('lobby:directory_changed', onLobbyDirectoryChanged);
            socket.off('game:starting', onGameStarting);
            socket.off('game:started', onGameStarted);
            socket.off('game:start_cancelled', onGameStartCancelled);
            socket.off('round:started', onRoundStarted);
            socket.off('round:preparing', onRoundPreparing);
            socket.off('round:answers_reveal', onAnswersReveal);
            socket.off('round:solution', onSolution);
            socket.off('game:finished', onFinished);
            socket.off('game:sudden_death', onSuddenDeath);
            socket.off('round:ready_state', onReadyState);
            socket.off('lobby:ready_state', onLobbyReadyState);
            socket.off('lobby:kicked', onLobbyKicked);
            socket.off('lobby:terminated', onLobbyTerminated);
            socket.off('media:source_status', onMediaSourceStatus);
            if (lobbyDirectoryRefreshTimerRef.current) {
                window.clearTimeout(lobbyDirectoryRefreshTimerRef.current);
                lobbyDirectoryRefreshTimerRef.current = null;
            }
            closeGameSocket();
        };
    }, [beginSessionPreload, clearRoundState, fetchLobbies, preloadRollingWindow, requestRoundSync, resetPreloadManager, stopSamplePlayback, stopSolutionVideoPlayback, token]);

    useEffect(() => {
        if (!token) return;
        let active = true;
        (async () => {
            try {
                const me = await apiFetch('/auth/me');
                if (!active) return;
                setUser(me);
                await fetchLobbies();
            } catch (_err) {
                redirectToLogin();
                return;
            } finally {
                if (active) setLoading(false);
            }
        })();
        return () => {
            active = false;
        };
    }, [fetchLobbies, token]);

    useEffect(() => {
        if (loading || !user || autoJoinDoneRef.current) return;
        autoJoinDoneRef.current = true;
        const params = new URLSearchParams(window.location.search);
        const tokenFromUrl = params.get('i') || params.get('inviteToken') || '';
        const code = lobbyCodeFromInvitePath(window.location.pathname)
            || toCode(params.get('lobby'))
            || lobbyCodeFromInviteToken(tokenFromUrl);
        if (code) {
            setJoinCode(code);
            setInviteToken(tokenFromUrl);
            joinLobby(code, tokenFromUrl).catch(() => {});
        }
    }, [joinLobby, loading, user]);

    useEffect(() => {
        if (!phaseEndsAt) return setCountdown('00:00');
        const tick = () => setCountdown(formatCountdown(new Date(phaseEndsAt).getTime() - Date.now()));
        tick();
        const timer = window.setInterval(tick, 250);
        return () => window.clearInterval(timer);
    }, [phaseEndsAt]);

    useEffect(() => {
        if (phase !== 'GUESSING') {
            searchRequestSeqRef.current += 1;
            setSearchResults([]);
            setSearchActiveIndex(-1);
            setSearchError('');
            return;
        }
        const q = guessText.trim();
        if (q.length < 2) {
            searchRequestSeqRef.current += 1;
            setSearchResults([]);
            setSearchActiveIndex(-1);
            setSearchError('');
            return;
        }
        const requestSeq = ++searchRequestSeqRef.current;
        const timer = window.setTimeout(async () => {
            try {
                const data = await apiFetch('/game/search', {
                    method: 'POST',
                    body: JSON.stringify({ query: q, limit: 8 })
                });
                if (searchRequestSeqRef.current !== requestSeq) return;
                setSearchResults(Array.isArray(data.results) ? data.results : []);
                setSearchError('');
            } catch (err) {
                if (searchRequestSeqRef.current !== requestSeq) return;
                setSearchResults([]);
                setSearchError(toSearchErrorMessage(err?.message));
            }
        }, 120);
        return () => window.clearTimeout(timer);
    }, [guessText, phase]);

    useEffect(() => {
        const mineReady = Boolean(user && readyUserIds.includes(user.id));
        if (phase !== 'GUESSING' || !lobby?.code || !round?.roundId || !socketConnected || mineReady) {
            if (autoSubmitTimerRef.current) {
                window.clearTimeout(autoSubmitTimerRef.current);
                autoSubmitTimerRef.current = null;
            }
            return;
        }

        if (autoSubmitTimerRef.current) {
            window.clearTimeout(autoSubmitTimerRef.current);
            autoSubmitTimerRef.current = null;
        }
        autoSubmitTimerRef.current = window.setTimeout(() => {
            submitGuess().catch(() => {});
        }, 420);

        return () => {
            if (!autoSubmitTimerRef.current) return;
            window.clearTimeout(autoSubmitTimerRef.current);
            autoSubmitTimerRef.current = null;
        };
    }, [guessAnimeId, guessText, lobby?.code, phase, readyUserIds, round?.roundId, socketConnected, submitGuess, user]);

    useEffect(() => {
        const mineReady = Boolean(user && readyUserIds.includes(user.id));
        if (phase !== 'GUESSING' || !phaseEndsAt || !lobby?.code || !round?.roundId || !socketConnected || mineReady) {
            if (deadlineSubmitTimerRef.current) {
                window.clearTimeout(deadlineSubmitTimerRef.current);
                deadlineSubmitTimerRef.current = null;
            }
            return;
        }
        const submitAtMs = new Date(phaseEndsAt).getTime() - Date.now() - 120;
        if (!Number.isFinite(submitAtMs)) return;
        if (submitAtMs <= 0) {
            submitGuess({ force: true }).catch(() => {});
            return;
        }

        if (deadlineSubmitTimerRef.current) {
            window.clearTimeout(deadlineSubmitTimerRef.current);
            deadlineSubmitTimerRef.current = null;
        }
        deadlineSubmitTimerRef.current = window.setTimeout(() => {
            submitGuess({ force: true }).catch(() => {});
            deadlineSubmitTimerRef.current = null;
        }, submitAtMs);

        return () => {
            if (!deadlineSubmitTimerRef.current) return;
            window.clearTimeout(deadlineSubmitTimerRef.current);
            deadlineSubmitTimerRef.current = null;
        };
    }, [lobby?.code, phase, phaseEndsAt, readyUserIds, round?.roundId, socketConnected, submitGuess, user]);

    useEffect(() => {
        const hasSampleMedia = Boolean(round?.sample?.audioUrl || round?.sample?.videoUrl);
        if (!hasSampleMedia) {
            setSampleAutoplayBlocked(false);
            stopSamplePlayback();
            return;
        }

        if (phase !== 'GUESSING') {
            if (phase === 'SOLUTION_REVEAL' || phase === 'WAITING' || phase === 'FINISHED' || phase === 'PENDING') {
                setSampleAutoplayBlocked(false);
                stopSamplePlayback();
            }
            return;
        }

        let cancelled = false;
        const timer = window.setTimeout(() => {
            if (cancelled) return;
            playSample({ isAutoplay: true }).catch(() => {});
        }, 0);

        return () => {
            cancelled = true;
            window.clearTimeout(timer);
        };
    }, [phase, playSample, round?.roundId, round?.sample?.audioUrl, round?.sample?.videoUrl, stopSamplePlayback]);

    useEffect(() => {
        sampleResolvedStartSecRef.current = null;
    }, [round?.roundId]);

    useEffect(() => {
        if (!sampleAutoplayBlocked || phase !== 'GUESSING') return;

        const retry = () => {
            playSample({ isAutoplay: false }).catch(() => {});
        };

        window.addEventListener('pointerdown', retry);
        window.addEventListener('keydown', retry);

        return () => {
            window.removeEventListener('pointerdown', retry);
            window.removeEventListener('keydown', retry);
        };
    }, [phase, playSample, sampleAutoplayBlocked]);

    useEffect(() => {
        if (phase !== 'SOLUTION_REVEAL' || !solution?.video) {
            setSolutionVideoAutoplayBlocked(false);
            setSolutionMediaError('');
            stopSolutionVideoPlayback();
            return;
        }

        let cancelled = false;
        const timer = window.setTimeout(() => {
            if (cancelled) return;
            playSolutionVideo().catch(() => {});
        }, 0);

        return () => {
            cancelled = true;
            window.clearTimeout(timer);
            stopSolutionVideoPlayback();
        };
    }, [phase, playSolutionVideo, solution?.video, stopSolutionVideoPlayback]);

    useEffect(() => {
        if (!solutionVideoAutoplayBlocked || phase !== 'SOLUTION_REVEAL') return;

        const retry = () => {
            playSolutionVideo().catch(() => {});
        };

        window.addEventListener('pointerdown', retry);
        window.addEventListener('keydown', retry);

        return () => {
            window.removeEventListener('pointerdown', retry);
            window.removeEventListener('keydown', retry);
        };
    }, [phase, playSolutionVideo, solutionVideoAutoplayBlocked]);

    useEffect(() => {
        const resolvedVolume = Math.max(0, Math.min(1, Number(sampleVolume)));
        const applyVolume = (mediaEl) => {
            if (!mediaEl) return;
            mediaEl.volume = resolvedVolume;
        };

        applyVolume(sampleAudioRef.current);
        applyVolume(sampleVideoRef.current);
        applyVolume(solutionVideoRef.current);
        applyVolume(sampleActiveMediaRef.current);
        for (const mediaEl of preloadElementsByUrlRef.current.values()) {
            applyVolume(mediaEl);
        }
    }, [sampleVolume, round?.roundId, solution?.video]);

    const isHost = useMemo(() => Boolean(lobby && user && lobby.host?.id === user.id), [lobby, user]);
    const myReady = useMemo(() => Boolean(user && readyUserIds.includes(user.id)), [readyUserIds, user]);
    const waitingLobbyRequiredUserIds = useMemo(() => {
        const required = Array.isArray(lobbyReadyRequiredUserIds)
            ? lobbyReadyRequiredUserIds.filter((value) => Number.isInteger(value))
            : [];
        if (required.length > 0) return required;
        return (lobby?.players || []).map((player) => player.userId).filter((value) => Number.isInteger(value));
    }, [lobby, lobbyReadyRequiredUserIds]);
    const waitingLobbyReadyUserIds = useMemo(() => {
        const readySet = new Set(Array.isArray(lobbyReadyUserIds) ? lobbyReadyUserIds : []);
        return waitingLobbyRequiredUserIds.filter((memberUserId) => readySet.has(memberUserId));
    }, [lobbyReadyUserIds, waitingLobbyRequiredUserIds]);
    const myLobbyReady = useMemo(() => Boolean(user && waitingLobbyReadyUserIds.includes(user.id)), [user, waitingLobbyReadyUserIds]);
    const allWaitingPlayersReady = useMemo(() => {
        if (!lobby || lobby.status !== 'WAITING') return false;
        return waitingLobbyRequiredUserIds.length > 0
            && waitingLobbyReadyUserIds.length === waitingLobbyRequiredUserIds.length;
    }, [lobby, waitingLobbyReadyUserIds.length, waitingLobbyRequiredUserIds.length]);
    const hasSampleMedia = useMemo(() => Boolean(round?.sample?.audioUrl || round?.sample?.videoUrl), [round]);
    const isGuessingPhase = useMemo(() => phase === 'GUESSING', [phase]);
    const isAnswersRevealPhase = useMemo(() => phase === 'ANSWERS_REVEAL', [phase]);
    const isSolutionRevealPhase = useMemo(() => phase === 'SOLUTION_REVEAL', [phase]);
    const showRevealContent = useMemo(() => Boolean(isSolutionRevealPhase && solution), [isSolutionRevealPhase, solution]);
    const showAnswerBubbles = useMemo(
        () => isAnswersRevealPhase || isSolutionRevealPhase,
        [isAnswersRevealPhase, isSolutionRevealPhase]
    );
    const showAnswerCorrectness = useMemo(
        () => Boolean(showRevealContent),
        [showRevealContent]
    );
    const sampleDurationLabel = useMemo(() => {
        const seconds = Number.parseInt(round?.sample?.sampleDurationSec, 10);
        if (!Number.isFinite(seconds) || seconds <= 0) return 'Sample ready';
        return `${seconds}s preview`;
    }, [round]);
    const sampleVolumePercent = useMemo(() => `${Math.round(sampleVolume * 100)}%`, [sampleVolume]);
    const mediaSourceHealth = useMemo(() => {
        if (!socketConnected) {
            return { label: 'Disconnected', tone: 'down' };
        }
        if (!mediaSourceStatus) {
            return { label: 'Checking', tone: 'neutral' };
        }
        if (!mediaSourceStatus.ok) {
            return { label: 'Down', tone: 'down' };
        }
        const latencyMs = Number(mediaSourceStatus.latencyMs);
        if (Number.isFinite(latencyMs) && latencyMs >= 1200) {
            return { label: 'Slow', tone: 'warn' };
        }
        return { label: 'Healthy', tone: 'ok' };
    }, [mediaSourceStatus, socketConnected]);
    const mediaSourceLatencyLabel = useMemo(() => {
        const latencyMs = Number(mediaSourceStatus?.latencyMs);
        return Number.isFinite(latencyMs) ? `${Math.round(latencyMs)} ms` : 'n/a';
    }, [mediaSourceStatus]);
    const mediaSourceCheckedLabel = useMemo(() => {
        if (!mediaSourceStatus?.checkedAt) return 'n/a';
        const parsed = new Date(mediaSourceStatus.checkedAt);
        if (Number.isNaN(parsed.getTime())) return 'n/a';
        return parsed.toLocaleTimeString();
    }, [mediaSourceStatus]);
    const mediaConnectionDetails = useMemo(() => {
        const details = [
            `Provider: ${mediaSourceStatus?.provider || 'AnimeThemes'}`,
            `State: ${mediaSourceHealth.label}`,
            `Latency: ${mediaSourceLatencyLabel}`,
            `Last check: ${mediaSourceCheckedLabel}${mediaSourceStatus?.cached ? ' (cached)' : ''}`
        ];
        if (mediaSourceStatus?.ok === false && mediaSourceStatus?.error) {
            details.push(`Error: ${mediaSourceStatus.error}`);
        }
        if (mediaSourceError) {
            details.push(`Client: ${mediaSourceError}`);
        }
        return details;
    }, [mediaSourceCheckedLabel, mediaSourceError, mediaSourceHealth.label, mediaSourceLatencyLabel, mediaSourceStatus]);
    const latestMatchResult = useMemo(() => {
        if (finalResult && Array.isArray(finalResult.finalScores) && finalResult.finalScores.length > 0) {
            return finalResult;
        }
        if (lobby?.lastMatchResult && Array.isArray(lobby.lastMatchResult.finalScores) && lobby.lastMatchResult.finalScores.length > 0) {
            return lobby.lastMatchResult;
        }
        return null;
    }, [finalResult, lobby?.lastMatchResult]);
    const postGameRows = useMemo(() => {
        const rawRows = Array.isArray(latestMatchResult?.finalScores) && latestMatchResult.finalScores.length > 0
            ? latestMatchResult.finalScores
            : scoreboard;
        return rawRows.slice().sort(byScoreDesc);
    }, [latestMatchResult?.finalScores, scoreboard]);
    const postGameWinnerName = useMemo(() => {
        const winnerUserId = Number.parseInt(latestMatchResult?.winner?.userId, 10);
        if (Number.isInteger(winnerUserId)) {
            return resolvePlayerName(winnerUserId);
        }
        return postGameRows[0]?.displayName || '';
    }, [latestMatchResult?.winner?.userId, postGameRows, resolvePlayerName]);
    const showFinalStandingsCard = useMemo(
        () => Boolean(lobby) && postGameRows.length > 0 && (phase === 'WAITING' || phase === 'FINISHED'),
        [lobby, phase, postGameRows.length]
    );
    const showRoundCard = useMemo(
        () => Boolean(lobby) && phase !== 'WAITING' && phase !== 'FINISHED',
        [lobby, phase]
    );
    const showLobbyCard = useMemo(
        () => Boolean(lobby) && (phase === 'WAITING' || phase === 'FINISHED'),
        [lobby, phase]
    );
    const answerByUserId = useMemo(() => {
        const map = new Map();
        for (const answer of answers || []) {
            if (!Number.isInteger(answer?.userId)) continue;
            map.set(answer.userId, answer);
        }
        return map;
    }, [answers]);
    const standingsRows = useMemo(() => {
        const raw = Array.isArray(scoreboard) && scoreboard.length > 0
            ? scoreboard
            : (lobby?.players || []).map((player) => ({
                userId: player.userId,
                displayName: player.displayName,
                score: 0
            }));
        return raw.slice().sort(byScoreDesc);
    }, [lobby, scoreboard]);
    const standingsPanelHeight = useMemo(() => {
        const rowCount = Math.max(1, standingsRows.length);
        return Math.max(118, Math.min(300, 92 + (rowCount * 24)));
    }, [standingsRows.length]);
    const playerSquares = useMemo(() => (
        (lobby?.players || [])
            .filter((player) => Number.isInteger(player?.userId))
            .map((player) => ({
                userId: player.userId,
                displayName: String(player?.displayName || `Player ${player.userId}`)
            }))
    ), [lobby]);

    const onSampleVolumeChange = useCallback((event) => {
        const next = Math.max(0, Math.min(1, Number.parseFloat(event.target.value)));
        const resolved = Number.isFinite(next) ? next : 0.8;
        sampleVolumeRef.current = resolved;
        setSampleVolume(resolved);
    }, []);
    const filteredLobbies = useMemo(() => {
        const q = String(lobbyQuery || '').trim().toLowerCase();
        if (!q) return lobbies;
        return lobbies.filter((item) => {
            const code = String(item?.code || '').toLowerCase();
            const name = String(item?.name || '').toLowerCase();
            return code.includes(q) || name.includes(q);
        });
    }, [lobbies, lobbyQuery]);
    const createUsesScoreFilters = useMemo(
        () => createConfig.sourceMode !== 'POPULAR',
        [createConfig.sourceMode]
    );
    const editUsesScoreFilters = useMemo(
        () => editConfig.sourceMode !== 'POPULAR',
        [editConfig.sourceMode]
    );
    const lobbySettingsSummary = useMemo(() => {
        if (!lobby) return [];
        const base = [
            `Max ${lobby.maxPlayers} players`,
            `${lobby.roundCount} rounds`,
            `${lobby.guessSeconds}s guess`,
            SOURCE_MODE_COPY[lobby.sourceMode]?.label || lobby.sourceMode,
            SELECTION_MODE_COPY[lobby.selectionMode]?.label || lobby.selectionMode,
            THEME_MODE_COPY[lobby.themeMode]?.label || lobby.themeMode
        ];
        if (lobby.sourceMode !== 'POPULAR') {
            base.push(`Anime score ${lobby.animeScoreMin ?? 1}-${lobby.animeScoreMax ?? 10}`);
            base.push(`Player score ${lobby.playerScoreMin ?? 1}-${lobby.playerScoreMax ?? 10}`);
        }
        return base;
    }, [lobby]);

    if (loading) return <section className="gmq-shell">Loading game...</section>;

    return (
        <section className="gmq-shell">
            <header className="gmq-header">
                <div>
                    {!showRoundCard ? <h1>Anime Music Quiz</h1> : null}
                    <p className="gmq-muted">
                        Socket: {socketConnected ? 'Connected' : 'Disconnected'}
                        {lobby ? ` | Lobby ${lobby.code}` : ''}
                        {sessionInfo?.sessionId ? ` | Session ${sessionInfo.sessionId}` : ''}
                    </p>
                </div>
                <div className="gmq-header-right">
                    <div className="gmq-connection-indicator" role="status" aria-label={`Media source ${mediaSourceHealth.label}`}>
                        <span className={`gmq-connection-dot gmq-status-dot-${mediaSourceHealth.tone}`} />
                        <div className="gmq-connection-tooltip">
                            {mediaConnectionDetails.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </div>
                    {lobby ? (
                        <div className="gmq-actions">
                            <button type="button" className="gmq-btn gmq-btn-secondary" onClick={copyInvite} disabled={busy === 'invite'}>Copy Invite</button>
                            <button type="button" className="gmq-btn gmq-btn-danger" onClick={leaveLobby} disabled={busy === 'leave'}>Leave</button>
                        </div>
                    ) : null}
                </div>
            </header>

            <div className="gmq-toast-viewport" aria-live="polite" aria-atomic="false">
                {error ? (
                    <div className="gmq-alert gmq-alert-error gmq-toast" role="alert">
                        <p>{error}</p>
                        <button type="button" className="gmq-toast-close" onClick={() => setError('')} aria-label="Dismiss error">x</button>
                    </div>
                ) : null}
                {info ? (
                    <div className="gmq-alert gmq-alert-info gmq-toast" role="status">
                        <p>{info}</p>
                        <button type="button" className="gmq-toast-close" onClick={() => setInfo('')} aria-label="Dismiss message">x</button>
                    </div>
                ) : null}
            </div>

            {promoteConfirmTarget ? (
                <div className="gmq-modal-backdrop" onClick={() => setPromoteConfirmTarget(null)}>
                    <article className="gmq-card gmq-modal-card gmq-modal-confirm-card" onClick={(event) => event.stopPropagation()}>
                        <div className="gmq-modal-header">
                            <h2>Promote Player</h2>
                        </div>
                        <p>Transfer host to <strong>{promoteConfirmTarget.displayName}</strong>?</p>
                        <div className="gmq-modal-actions">
                            <button
                                type="button"
                                className="gmq-btn gmq-btn-secondary"
                                onClick={() => setPromoteConfirmTarget(null)}
                                disabled={busy === 'promote'}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="gmq-btn gmq-btn-primary"
                                onClick={confirmPromotePlayer}
                                disabled={busy === 'promote'}
                            >
                                {busy === 'promote' ? 'Promoting...' : 'Promote'}
                            </button>
                        </div>
                    </article>
                </div>
            ) : null}

            {kickConfirmTarget ? (
                <div className="gmq-modal-backdrop" onClick={() => setKickConfirmTarget(null)}>
                    <article className="gmq-card gmq-modal-card gmq-modal-confirm-card" onClick={(event) => event.stopPropagation()}>
                        <div className="gmq-modal-header">
                            <h2>Kick Player</h2>
                        </div>
                        <p>Kick <strong>{kickConfirmTarget.displayName}</strong> from this lobby?</p>
                        <div className="gmq-modal-actions">
                            <button
                                type="button"
                                className="gmq-btn gmq-btn-secondary"
                                onClick={() => setKickConfirmTarget(null)}
                                disabled={busy === 'kick'}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="gmq-btn gmq-btn-danger"
                                onClick={confirmKickPlayer}
                                disabled={busy === 'kick'}
                            >
                                {busy === 'kick' ? 'Kicking...' : 'Kick Player'}
                            </button>
                        </div>
                    </article>
                </div>
            ) : null}

            {settingsModalOpen && lobby && lobby.status === 'WAITING' && isHost ? (
                <div className="gmq-modal-backdrop" onClick={() => setSettingsModalOpen(false)}>
                    <article className="gmq-card gmq-modal-card" onClick={(event) => event.stopPropagation()}>
                        <div className="gmq-modal-header">
                            <h2>Match Settings</h2>
                            <button
                                type="button"
                                className="gmq-btn gmq-btn-secondary gmq-btn-modal-close"
                                onClick={() => setSettingsModalOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                        <div className="gmq-name-private-row">
                            <div className="gmq-field-stack">
                                <label htmlFor="edit-lobby-name">Lobby name</label>
                                <input
                                    id="edit-lobby-name"
                                    value={editConfig.name}
                                    onChange={(e) => setEditConfig((p) => ({ ...p, name: e.target.value }))}
                                    placeholder="Lobby name"
                                />
                            </div>
                            <label className="gmq-checkbox gmq-checkbox-inline">
                                <input
                                    type="checkbox"
                                    checked={editConfig.isPrivate}
                                    onChange={(e) => setEditConfig((p) => ({ ...p, isPrivate: e.target.checked }))}
                                />
                                Private lobby
                            </label>
                        </div>
                        <div className="gmq-field-grid">
                            <div className="gmq-field-card">
                                <label htmlFor="edit-max-players">Max Players</label>
                                <input
                                    id="edit-max-players"
                                    type="number"
                                    min="1"
                                    max="8"
                                    value={editMaxPlayersInput}
                                    onChange={(e) => handleEditMaxPlayersChange(e.target.value)}
                                    onBlur={commitEditMaxPlayersInput}
                                />
                            </div>
                            <div className="gmq-field-card">
                                <label htmlFor="edit-round-count">Rounds</label>
                                <input
                                    id="edit-round-count"
                                    type="number"
                                    min="1"
                                    max="50"
                                    value={editConfig.roundCount}
                                    onChange={(e) => setEditConfig((p) => ({ ...p, roundCount: Number(e.target.value || 10) }))}
                                />
                            </div>
                            <div className="gmq-field-card">
                                <label htmlFor="edit-guess-seconds">Guess Time (sec)</label>
                                <input
                                    id="edit-guess-seconds"
                                    type="number"
                                    min="5"
                                    max="120"
                                    value={editConfig.guessSeconds}
                                    onChange={(e) => setEditConfig((p) => ({ ...p, guessSeconds: Number(e.target.value || 20) }))}
                                />
                            </div>
                        </div>
                        <div className="gmq-field-grid">
                            <div className="gmq-field-card">
                                <label htmlFor="edit-source-mode">Song Source</label>
                                <select
                                    id="edit-source-mode"
                                    value={editConfig.sourceMode}
                                    onChange={(e) => setEditConfig((p) => ({ ...p, sourceMode: e.target.value }))}
                                >
                                    {SOURCE_MODES.map((mode) => <option key={mode} value={mode}>{SOURCE_MODE_COPY[mode]?.label || mode}</option>)}
                                </select>
                            </div>
                            <div className="gmq-field-card">
                                <label htmlFor="edit-selection-mode">Selection Style</label>
                                <select
                                    id="edit-selection-mode"
                                    value={editConfig.selectionMode}
                                    onChange={(e) => setEditConfig((p) => ({ ...p, selectionMode: e.target.value }))}
                                >
                                    {SELECTION_MODES.map((mode) => <option key={mode} value={mode}>{SELECTION_MODE_COPY[mode]?.label || mode}</option>)}
                                </select>
                            </div>
                            <div className="gmq-field-card">
                                <label htmlFor="edit-theme-mode">Song Types</label>
                                <select
                                    id="edit-theme-mode"
                                    value={editConfig.themeMode}
                                    onChange={(e) => setEditConfig((p) => ({ ...p, themeMode: e.target.value }))}
                                >
                                    {THEME_MODES.map((mode) => <option key={mode} value={mode}>{THEME_MODE_COPY[mode]?.label || mode}</option>)}
                                </select>
                            </div>
                        </div>
                        {editUsesScoreFilters ? (
                            <div className="gmq-field-grid gmq-field-grid-2">
                                <ScoreRangeSlider
                                    label="Anime MAL Score"
                                    minValue={editConfig.animeScoreMin}
                                    maxValue={editConfig.animeScoreMax}
                                    onMinChange={handleEditAnimeScoreMinChange}
                                    onMaxChange={handleEditAnimeScoreMaxChange}
                                />
                                <ScoreRangeSlider
                                    label="Player MAL Score"
                                    minValue={editConfig.playerScoreMin}
                                    maxValue={editConfig.playerScoreMax}
                                    onMinChange={handleEditPlayerScoreMinChange}
                                    onMaxChange={handleEditPlayerScoreMaxChange}
                                    hint="Used for MAL-list entries (MAL_ONLY, and MAL portion of HYBRID)."
                                />
                            </div>
                        ) : null}
                        <button
                            type="button"
                            className="gmq-btn gmq-btn-primary"
                            onClick={saveLobbySettings}
                            disabled={busy === 'settings'}
                        >
                            {busy === 'settings' ? 'Saving...' : 'Save Settings'}
                        </button>
                    </article>
                </div>
            ) : null}

            {!lobby ? (
                <div className="gmq-menu">
                    <div className="gmq-menu-host-wrap">
                        <button type="button" className="gmq-btn gmq-btn-primary gmq-btn-host" onClick={() => setHostModalOpen(true)}>
                            Host Lobby
                        </button>
                    </div>

                    <article className="gmq-card gmq-card-directory">
                        <div className="gmq-directory-header">
                            <h2>Available Lobbies</h2>
                        </div>

                        <div className="gmq-directory-top">
                            <div className="gmq-card gmq-card-toolbar">
                                <div className="gmq-directory-controls">
                                    <input value={lobbyQuery} onChange={(e) => setLobbyQuery(e.target.value)} placeholder="Search by code/name"/>
                                <button type="button" className="gmq-btn gmq-btn-secondary" onClick={() => fetchLobbies()} disabled={lobbiesRefreshing}>Refresh</button>
                                </div>
                            </div>
                            <div className="gmq-card gmq-card-manual-join">
                                <div className="gmq-inline gmq-inline-manual">
                                    <input value={joinCode} onChange={(e) => setJoinCode(toCode(e.target.value))} placeholder="Lobby code (ABC123)"/>
                                    <button type="button" className="gmq-btn gmq-btn-primary" onClick={() => joinLobby(joinCode, '')} disabled={busy === 'join'}>Join Lobby</button>
                                </div>
                            </div>
                        </div>

                        <div className="gmq-lobby-table-head">
                            <span>Lobby</span>
                            <span>Match Settings</span>
                            <span>Action</span>
                        </div>
                        <ul className="gmq-lobby-list gmq-lobby-list-detailed">
                            {filteredLobbies.map((item) => (
                                <li key={item.code} className="gmq-lobby-item gmq-lobby-item-detailed">
                                    <div>
                                        <div className="gmq-lobby-title">{item.name || item.code}</div>
                                        <div className="gmq-muted">{item.code} | {item.playerCount}/{item.maxPlayers} players</div>
                                    </div>
                                    <div className="gmq-lobby-settings">
                                        <span>{item.roundCount} rounds</span>
                                        <span>{item.guessSeconds}s guess</span>
                                        <span>{SOURCE_MODE_COPY[item.sourceMode]?.label || item.sourceMode}</span>
                                        <span>{SELECTION_MODE_COPY[item.selectionMode]?.label || item.selectionMode}</span>
                                        <span>{THEME_MODE_COPY[item.themeMode]?.label || item.themeMode}</span>
                                    </div>
                                    <button type="button" className="gmq-btn gmq-btn-secondary" onClick={() => joinLobby(item.code, '', { fromDirectory: true })} disabled={busy === 'join'}>Join</button>
                                </li>
                            ))}
                            {filteredLobbies.length === 0 ? (
                                <li className="gmq-lobby-empty gmq-muted">No open public lobbies right now.</li>
                            ) : null}
                        </ul>
                    </article>

                    {hostModalOpen ? (
                        <div
                            className="gmq-modal-backdrop"
                            onPointerDown={handleHostBackdropPointerDown}
                            onClick={handleHostBackdropClick}
                        >
                            <article className="gmq-card gmq-modal-card" onClick={(event) => event.stopPropagation()}>
                                <div className="gmq-modal-header">
                                    <h2>Host Lobby</h2>
                                    <button type="button" className="gmq-btn gmq-btn-secondary gmq-btn-modal-close" onClick={() => setHostModalOpen(false)}>Close</button>
                                </div>
                                <div className="gmq-name-private-row">
                                    <div className="gmq-field-stack">
                                        <label htmlFor="create-lobby-name">Lobby name</label>
                                        <input
                                            id="create-lobby-name"
                                            value={createConfig.name}
                                            onChange={(e) => setCreateConfig((p) => ({ ...p, name: e.target.value }))}
                                            placeholder="Lobby name"
                                        />
                                    </div>
                                    <label className="gmq-checkbox gmq-checkbox-inline">
                                        <input
                                            type="checkbox"
                                            checked={createConfig.isPrivate}
                                            onChange={(e) => setCreateConfig((p) => ({ ...p, isPrivate: e.target.checked }))}
                                        />
                                        Private lobby
                                    </label>
                                </div>
                                <div className="gmq-field-grid">
                                    <div className="gmq-field-card">
                                        <label htmlFor="create-max-players">Max Players</label>
                                        <input
                                            id="create-max-players"
                                            type="number"
                                            min="1"
                                            max="8"
                                            value={createMaxPlayersInput}
                                            onChange={(e) => handleCreateMaxPlayersChange(e.target.value)}
                                            onBlur={commitCreateMaxPlayersInput}
                                        />
                                    </div>
                                    <div className="gmq-field-card">
                                        <label htmlFor="create-round-count">Rounds</label>
                                        <input id="create-round-count" type="number" min="1" max="50" value={createConfig.roundCount} onChange={(e) => setCreateConfig((p) => ({ ...p, roundCount: Number(e.target.value || 10) }))}/>
                                    </div>
                                    <div className="gmq-field-card">
                                        <label htmlFor="create-guess-seconds">Guess Time (sec)</label>
                                        <input id="create-guess-seconds" type="number" min="5" max="120" value={createConfig.guessSeconds} onChange={(e) => setCreateConfig((p) => ({ ...p, guessSeconds: Number(e.target.value || 20) }))}/>
                                    </div>
                                </div>
                                <div className="gmq-field-grid">
                                    <div className="gmq-field-card">
                                        <label htmlFor="create-source-mode">Song Source</label>
                                        <select id="create-source-mode" value={createConfig.sourceMode} onChange={(e) => setCreateConfig((p) => ({ ...p, sourceMode: e.target.value }))}>
                                            {SOURCE_MODES.map((mode) => <option key={mode} value={mode}>{SOURCE_MODE_COPY[mode]?.label || mode}</option>)}
                                        </select>
                                    </div>
                                    <div className="gmq-field-card">
                                        <label htmlFor="create-selection-mode">Selection Style</label>
                                        <select id="create-selection-mode" value={createConfig.selectionMode} onChange={(e) => setCreateConfig((p) => ({ ...p, selectionMode: e.target.value }))}>
                                            {SELECTION_MODES.map((mode) => <option key={mode} value={mode}>{SELECTION_MODE_COPY[mode]?.label || mode}</option>)}
                                        </select>
                                    </div>
                                    <div className="gmq-field-card">
                                        <label htmlFor="create-theme-mode">Song Types</label>
                                        <select id="create-theme-mode" value={createConfig.themeMode} onChange={(e) => setCreateConfig((p) => ({ ...p, themeMode: e.target.value }))}>
                                            {THEME_MODES.map((mode) => <option key={mode} value={mode}>{THEME_MODE_COPY[mode]?.label || mode}</option>)}
                                        </select>
                                    </div>
                                </div>
                                {createUsesScoreFilters ? (
                                    <div className="gmq-field-grid gmq-field-grid-2">
                                        <ScoreRangeSlider
                                            label="Anime MAL Score"
                                            minValue={createConfig.animeScoreMin}
                                            maxValue={createConfig.animeScoreMax}
                                            onMinChange={handleCreateAnimeScoreMinChange}
                                            onMaxChange={handleCreateAnimeScoreMaxChange}
                                        />
                                        <ScoreRangeSlider
                                            label="Player MAL Score"
                                            minValue={createConfig.playerScoreMin}
                                            maxValue={createConfig.playerScoreMax}
                                            onMinChange={handleCreatePlayerScoreMinChange}
                                            onMaxChange={handleCreatePlayerScoreMaxChange}
                                            hint="Used for MAL-list entries (MAL_ONLY, and MAL portion of HYBRID)."
                                        />
                                    </div>
                                ) : null}
                                <button type="button" className="gmq-btn gmq-btn-primary" onClick={createLobby} disabled={busy === 'create'}>
                                    {busy === 'create' ? 'Hosting...' : 'Host Lobby'}
                                </button>
                            </article>
                        </div>
                    ) : null}
                </div>
            ) : (
                <div className={`gmq-grid gmq-grid-match ${showRoundCard ? 'gmq-grid-match-live' : 'gmq-grid-match-idle'} ${showRoundCard && !showLobbyCard ? 'gmq-grid-match-round-only' : ''} ${!showRoundCard && showLobbyCard && showFinalStandingsCard ? 'gmq-grid-match-idle-with-standings' : ''}`}>
                    {showLobbyCard ? (
                    <article className="gmq-card gmq-card-lobby">
                        <h2>
                            Lobby {lobby.code}
                            <span className={`gmq-lobby-visibility ${lobby.isPrivate ? 'private' : 'public'}`}>
                                {lobby.isPrivate ? 'Private' : 'Public'}
                            </span>
                        </h2>
                        <p className="gmq-muted">{lobby.name || 'Untitled'} | {lobby.playerCount}/{lobby.maxPlayers} players</p>
                        <div className="gmq-stack gmq-lobby-settings-block">
                            <strong>Current Match Settings</strong>
                            <div className="gmq-lobby-settings">
                                {lobbySettingsSummary.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                        <ul className="gmq-player-list">
                            {(lobby.players || []).map((player) => (
                                <li key={player.userId}>
                                    <span className="gmq-player-name">
                                        <span>{player.displayName}{player.userId === lobby.host?.id ? ' (Host)' : ''}{!player.isConnected ? ' (offline)' : ''}</span>
                                        {player.hasMalConnected ? (
                                            <img
                                                className="gmq-mal-badge"
                                                src={malBadgeImage}
                                                alt="MAL connected"
                                                draggable={false}
                                                onDragStart={(event) => event.preventDefault()}
                                                onMouseEnter={showMalBadgeTooltipAtCursor}
                                                onMouseMove={showMalBadgeTooltipAtCursor}
                                                onMouseLeave={hideFloatingTooltip}
                                            />
                                        ) : null}
                                    </span>
                                    {lobby.status === 'WAITING' ? (
                                        <span className="gmq-player-row-actions">
                                            {isHost && user && player.userId !== user.id && !gameStartPending ? (
                                                <>
                                                    <button
                                                        type="button"
                                                        className="gmq-btn gmq-btn-secondary gmq-btn-kick"
                                                        onClick={() => promotePlayer(player)}
                                                        disabled={busy === 'promote' || busy === 'kick'}
                                                    >
                                                        Promote
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="gmq-btn gmq-btn-danger gmq-btn-kick"
                                                        onClick={() => kickPlayer(player)}
                                                        disabled={busy === 'kick' || busy === 'promote'}
                                                    >
                                                        Kick
                                                    </button>
                                                </>
                                            ) : null}
                                            <strong>{waitingLobbyReadyUserIds.includes(player.userId) ? 'Ready' : 'Not Ready'}</strong>
                                        </span>
                                    ) : null}
                                    {phase === 'GUESSING' ? <strong>{readyUserIds.includes(player.userId) ? 'Ready' : 'Thinking'}</strong> : null}
                                </li>
                            ))}
                        </ul>
                        {lobby.status === 'WAITING' ? (
                            <div className="gmq-stack">
                                <div className="gmq-actions">
                                    {!gameStartPending ? (
                                        <button
                                            type="button"
                                            className="gmq-btn gmq-btn-secondary"
                                            onClick={toggleLobbyReady}
                                            disabled={busy === 'lobby-ready'}
                                        >
                                            {myLobbyReady ? 'Not Ready' : 'Ready Up'}
                                        </button>
                                    ) : null}
                                    <p className="gmq-muted">
                                        Ready {waitingLobbyReadyUserIds.length}/{waitingLobbyRequiredUserIds.length}
                                    </p>
                                </div>
                                {gameStartPending
                                    ? <p className="gmq-muted">Preparing game...</p>
                                    : isHost
                                    ? (
                                        <>
                                            <button
                                                type="button"
                                                className="gmq-btn gmq-btn-secondary"
                                                onClick={openSettingsModal}
                                                disabled={busy === 'settings'}
                                            >
                                                Match Settings
                                            </button>
                                            <button
                                                type="button"
                                                className="gmq-btn gmq-btn-primary"
                                                onClick={startGame}
                                                disabled={busy === 'start' || !allWaitingPlayersReady}
                                            >
                                                Start Game
                                            </button>
                                            {!allWaitingPlayersReady ? (
                                                <p className="gmq-muted">All players must be ready before start.</p>
                                            ) : null}
                                        </>
                                    )
                                    : <p className="gmq-muted">Waiting for host to start.</p>}
                            </div>
                        ) : null}
                    </article>
                    ) : null}
                    {showFinalStandingsCard ? (
                        <article className="gmq-card gmq-card-standings-latest">
                            <div className="gmq-postgame-header">
                                <h2>Latest Standings</h2>
                                {postGameWinnerName ? (
                                    <p className="gmq-postgame-winner">Winner: {postGameWinnerName}</p>
                                ) : null}
                            </div>
                            <ol className="gmq-postgame-list">
                                {postGameRows.map((row, index) => (
                                    <li key={`${row.userId || 'row'}-${index}`} className={`gmq-postgame-row${index === 0 ? ' gmq-postgame-row-winner' : ''}`}>
                                        <span>{index + 1}. {row.displayName}</span>
                                        <strong>{row.score || 0}</strong>
                                    </li>
                                ))}
                            </ol>
                        </article>
                    ) : null}

                    {showRoundCard ? (
                        <article className="gmq-card gmq-card-round gmq-match-shell">
                            <div className="gmq-match-round-pill">
                                <h2>{round?.isSuddenDeath ? 'Sudden Death' : `Round ${round?.index || '-'}/${round?.totalRounds || '-'}`}</h2>
                                <p className="gmq-round-phase">{countdown}</p>
                            </div>

                            <div className="gmq-match-stage">
                                <div className="gmq-match-grid gmq-match-main-row">
                                    <section
                                        className="gmq-match-panel gmq-standings-panel"
                                        style={{ minHeight: `${standingsPanelHeight}px`, maxHeight: `${standingsPanelHeight}px` }}
                                    >
                                    <h3>Standings</h3>
                                    <ul className="gmq-score-list">
                                        {standingsRows.map((row) => (
                                            <li key={row.userId} className="gmq-score-row">
                                                <span>{row.displayName}</span>
                                                <strong>{row.score || 0}</strong>
                                            </li>
                                        ))}
                                    </ul>
                                    </section>

                                <section className="gmq-match-center-column">
                                    <div className="gmq-match-panel gmq-video-panel">
                                        {round?.sample?.audioUrl ? (
                                            <audio
                                                key={`audio-${round.roundId}`}
                                                ref={sampleAudioRef}
                                                className="gmq-hidden-media"
                                                src={round.sample.audioUrl}
                                                preload="auto"
                                                onPlay={() => setSamplePlaying(true)}
                                                onPause={() => setSamplePlaying(false)}
                                                onEnded={() => setSamplePlaying(false)}
                                                onError={() => setMediaError(toMediaErrorMessage('source_unavailable'))}
                                            />
                                        ) : null}
                                        {round?.sample?.videoUrl ? (
                                            <video
                                                key={`video-${round.roundId}`}
                                                ref={sampleVideoRef}
                                                className="gmq-hidden-media"
                                                src={round.sample.videoUrl}
                                                preload="auto"
                                                playsInline
                                                onPlay={() => setSamplePlaying(true)}
                                                onPause={() => setSamplePlaying(false)}
                                                onEnded={() => setSamplePlaying(false)}
                                                onError={() => setMediaError(toMediaErrorMessage('source_unavailable'))}
                                            />
                                        ) : null}

                                        {showRevealContent ? (
                                            solution.video ? (
                                                <div className="gmq-solution-video-wrap">
                                                    <video
                                                        key={`solution-${round?.roundId || solution.correctAnime?.animeId || 'video'}`}
                                                        ref={solutionVideoRef}
                                                        className="gmq-solution-video"
                                                        src={solution.video}
                                                        preload="auto"
                                                        controls
                                                        playsInline
                                                        onError={() => setSolutionMediaError('Could not play solution video in this browser.')}
                                                    />
                                                    {solutionVideoAutoplayBlocked ? (
                                                        <div className="gmq-stack">
                                                            <p className="gmq-muted">Autoplay was blocked by your browser.</p>
                                                            <button type="button" className="gmq-btn gmq-btn-secondary" onClick={() => playSolutionVideo().catch(() => {})}>
                                                                Play solution video
                                                            </button>
                                                        </div>
                                                    ) : null}
                                                    {solutionMediaError ? <p className="gmq-muted gmq-muted-warning">{solutionMediaError}</p> : null}
                                                </div>
                                            ) : (
                                                <p className="gmq-muted">Solution video is unavailable for this round.</p>
                                            )
                                        ) : (
                                            <div className="gmq-video-placeholder">
                                                <span>Video hidden until solution reveal</span>
                                            </div>
                                        )}

                                        {phase === 'PENDING' && preloadBlocking ? (
                                            <div className="gmq-stack">
                                                <p>Preparing media cache before round 1...</p>
                                                <p className="gmq-muted">
                                                    Ready {preloadProgress.ready}/{preloadProgress.total}
                                                    {preloadProgress.failed > 0 ? ` | Failed ${preloadProgress.failed}` : ''}
                                                </p>
                                                {preloadGateError ? <p className="gmq-muted gmq-muted-warning">{preloadGateError}</p> : null}
                                                {preloadGateError ? (
                                                    <button
                                                        type="button"
                                                        className="gmq-btn gmq-btn-secondary"
                                                        onClick={() => retryInitialPreloadGate().catch(() => {})}
                                                        disabled={preloadRetrying}
                                                    >
                                                        {preloadRetrying ? 'Retrying...' : 'Retry preload'}
                                                    </button>
                                                ) : null}
                                            </div>
                                        ) : null}

                                        {isGuessingPhase ? (
                                            !hasSampleMedia ? (
                                                <p className="gmq-muted">Sample audio is unavailable for this round.</p>
                                            ) : sampleAutoplayBlocked ? (
                                                <div className="gmq-stack">
                                                    <p className="gmq-muted">Autoplay was blocked by your browser.</p>
                                                    <button type="button" className="gmq-btn gmq-btn-secondary" onClick={() => playSample({ isAutoplay: false }).catch(() => {})}>
                                                        Play sample
                                                    </button>
                                                </div>
                                            ) : null
                                        ) : null}
                                        {mediaError ? <p className="gmq-muted gmq-muted-warning">{mediaError}</p> : null}
                                        <label className="gmq-volume-row gmq-volume-row-compact gmq-video-volume">
                                            <span>Volume {sampleVolumePercent}</span>
                                            <input
                                                className="gmq-volume-slider-small"
                                                type="range"
                                                min="0"
                                                max="1"
                                                step="0.01"
                                                value={sampleVolume}
                                                onChange={onSampleVolumeChange}
                                            />
                                        </label>
                                        {roundPreparation.active ? (
                                            <p className="gmq-muted gmq-round-preparing">Preparing next round...</p>
                                        ) : null}
                                    </div>

                                    <div className="gmq-match-panel gmq-guess-panel">
                                        <div className="gmq-search-row">
                                            <div className="gmq-search-box">
                                                <input
                                                    ref={guessInputRef}
                                                    value={guessText}
                                                    disabled={!isGuessingPhase}
                                                    onChange={(e) => {
                                                        const nextGuessText = e.target.value;
                                                        guessTextRef.current = nextGuessText;
                                                        guessAnimeIdRef.current = null;
                                                        setGuessText(nextGuessText);
                                                        setGuessAnimeId(null);
                                                        setSearchMenuOpen(true);
                                                    }}
                                                    onKeyDown={(event) => {
                                                        if (!isGuessingPhase) return;

                                                        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                                                            if (searchResults.length <= 0) return;
                                                            event.preventDefault();
                                                            setSearchMenuOpen(true);
                                                            setSearchActiveIndex((previous) => {
                                                                if (previous < 0 || previous >= searchResults.length) {
                                                                    return event.key === 'ArrowDown' ? 0 : searchResults.length - 1;
                                                                }
                                                                const delta = event.key === 'ArrowDown' ? 1 : -1;
                                                                return (previous + delta + searchResults.length) % searchResults.length;
                                                            });
                                                            return;
                                                        }

                                                        if (event.key === 'Enter') {
                                                            if (!searchMenuOpen || searchResults.length <= 0) return;
                                                            event.preventDefault();
                                                            const nextIndex = (searchActiveIndex >= 0 && searchActiveIndex < searchResults.length)
                                                                ? searchActiveIndex
                                                                : 0;
                                                            const item = searchResults[nextIndex];
                                                            if (!item) return;
                                                            commitSearchResult(item);
                                                        }
                                                    }}
                                                    onFocus={() => {
                                                        if (isGuessingPhase) setSearchMenuOpen(true);
                                                    }}
                                                    onBlur={() => {
                                                        window.setTimeout(() => {
                                                            setSearchMenuOpen(false);
                                                            setSearchActiveIndex(-1);
                                                        }, 100);
                                                    }}
                                                    placeholder={isGuessingPhase ? 'Type anime name' : 'Waiting for guessing phase'}
                                                />
                                                {(searchMenuOpen && searchResults.length > 0 && isGuessingPhase) ? (
                                                    <ul className="gmq-search-results" role="listbox">
                                                        {searchResults.map((item, index) => (
                                                            <li key={`${item.id}-${item.title}`}>
                                                                <button
                                                                    type="button"
                                                                    role="option"
                                                                    aria-selected={index === searchActiveIndex}
                                                                    className={index === searchActiveIndex ? 'is-active' : ''}
                                                                    ref={(node) => {
                                                                        searchResultButtonsRef.current[index] = node;
                                                                    }}
                                                                    onMouseDown={(event) => event.preventDefault()}
                                                                    onMouseEnter={() => setSearchActiveIndex(index)}
                                                                    onClick={() => commitSearchResult(item)}
                                                                >
                                                                    {item.title}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : null}
                                            </div>
                                            <button
                                                type="button"
                                                className="gmq-btn gmq-btn-secondary"
                                                onClick={toggleReady}
                                                disabled={busy === 'ready' || !isGuessingPhase}
                                            >
                                                {myReady ? 'Unskip' : 'Skip'}
                                            </button>
                                        </div>
                                        {searchError ? <p className="gmq-muted gmq-muted-warning">{searchError}</p> : null}
                                    </div>
                                </section>

                                    <section className="gmq-match-panel gmq-info-panel">
                                    <h3>Music Info</h3>
                                    {showRevealContent ? (
                                        <div className="gmq-stack">
                                            <p>{solution.correctAnime?.animeTitle} ({solution.correctAnime?.themeType})</p>
                                            {(solution.correctAnime?.animeTitleEnglish
                                                && String(solution.correctAnime.animeTitleEnglish).trim().toLowerCase() !== String(solution.correctAnime?.animeTitle || '').trim().toLowerCase()) ? (
                                                    <p className="gmq-muted">{solution.correctAnime.animeTitleEnglish}</p>
                                                ) : null}
                                            {solution.correctAnime?.themeTitle ? (
                                                <p className="gmq-muted">Artist: {solution.correctAnime.themeTitle}</p>
                                            ) : null}
                                        </div>
                                    ) : (
                                        <p className="gmq-muted">Music info hidden until solution reveal.</p>
                                    )}
                                    </section>
                                </div>

                                <section className="gmq-player-grid gmq-match-player-row">
                                    {playerSquares.map((player) => {
                                        const answer = answerByUserId.get(player.userId) || null;
                                        const hasScoredAnswer = showAnswerCorrectness && typeof answer?.isCorrect === 'boolean';
                                        const bubbleToneClass = hasScoredAnswer
                                            ? (answer.isCorrect ? ' gmq-answer-bubble-correct' : ' gmq-answer-bubble-wrong')
                                            : '';
                                        const answerText = (typeof answer?.guessText === 'string' && answer.guessText.trim())
                                            ? answer.guessText
                                            : '-';
                                        return (
                                            <div key={player.userId} className="gmq-player-square-wrap">
                                                {showAnswerBubbles ? (
                                                    <div className={`gmq-answer-bubble${bubbleToneClass}`}>
                                                        {answerText}
                                                    </div>
                                                ) : null}
                                                {isGuessingPhase && readyUserIds.includes(player.userId) ? (
                                                    <span className="gmq-player-ready-indicator">Ready</span>
                                                ) : null}
                                                <div className="gmq-player-square">
                                                    <span>{player.displayName}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </section>
                            </div>
                        </article>
                    ) : null}
                </div>
            )}
            {floatingTooltip.visible ? (
                <div
                    className="gmq-floating-tooltip"
                    style={{
                        left: `${floatingTooltip.x}px`,
                        top: `${floatingTooltip.y}px`
                    }}
                >
                    {floatingTooltip.text}
                </div>
            ) : null}
        </section>
    );
}
