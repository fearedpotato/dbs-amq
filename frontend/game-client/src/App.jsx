import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { apiFetch, getAuthToken, redirectToLogin } from './apiClient';
import { closeGameSocket, getGameSocket } from './socketClient';

const SOURCE_MODES = ['POPULAR', 'MAL_ONLY', 'HYBRID'];
const SELECTION_MODES = ['STANDARD', 'BALANCED_STRICT', 'BALANCED_RELAXED'];
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
    BALANCED_STRICT: {
        label: 'Balanced Strict',
        help: 'Equal per-player distribution; can fail if MAL pools are too small.'
    },
    BALANCED_RELAXED: {
        label: 'Balanced Relaxed',
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

const CREATE_DEFAULTS = {
    name: '',
    isPrivate: false,
    maxPlayers: 8,
    roundCount: 10,
    guessSeconds: 20,
    sourceMode: 'HYBRID',
    selectionMode: 'STANDARD',
    themeMode: 'MIXED'
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
        themeMode: THEME_MODES.includes(lobby.themeMode) ? lobby.themeMode : CREATE_DEFAULTS.themeMode
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

function normalizeMaxPlayersInput(rawValue) {
    const digits = String(rawValue || '').replace(/\D+/g, '');
    if (!digits) return '';
    return digits.slice(0, 2);
}

function byScoreDesc(a, b) {
    return (b.score || 0) - (a.score || 0);
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

function toStartErrorMessage(message) {
    const raw = normalizeErrorMessage(message).toLowerCase();
    if (!raw) return 'Could not start the game right now. Please try again.';
    if (raw.includes('only host')) return 'Only the host can start the game.';
    if (raw.includes('all players must be ready')) return 'All players must click Ready before the host can start.';
    if (raw.includes('not enough players')) return 'Not enough players to start. Invite more players or lower the minimum players setting.';
    if (raw.includes('balanced strict')) return 'Balanced strict could not build fair rounds from MAL lists. Try BALANCED_RELAXED or HYBRID.';
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
    const [readyUserIds, setReadyUserIds] = useState([]);
    const [lobbyReadyUserIds, setLobbyReadyUserIds] = useState([]);
    const [lobbyReadyRequiredUserIds, setLobbyReadyRequiredUserIds] = useState([]);

    const [guessText, setGuessText] = useState('');
    const [guessAnimeId, setGuessAnimeId] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [searchMenuOpen, setSearchMenuOpen] = useState(false);
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
    const [suddenDeathState, setSuddenDeathState] = useState(null);
    const [mediaSourceStatus, setMediaSourceStatus] = useState(null);
    const [mediaSourceError, setMediaSourceError] = useState('');

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
    }, [phase]);

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
        if (sampleAudioRef.current) sampleAudioRef.current.pause();
        if (sampleVideoRef.current) sampleVideoRef.current.pause();
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

        const urls = [entry.audioUrl, entry.videoUrl].filter((value, pos, arr) => value && arr.indexOf(value) === pos);
        preloadRoundUrlsRef.current.set(index, new Set(urls));
        preloadRoundStatusRef.current.set(index, 'loading');
        updatePreloadProgress();

        const promise = (async () => {
            if (urls.length === 0) {
                preloadRoundStatusRef.current.set(index, 'failed');
                return false;
            }

            const results = await Promise.allSettled(urls.map((url) => {
                const mediaKind = entry.audioUrl && url === entry.audioUrl ? 'audio' : 'video';
                return preloadSingleUrl(url, mediaKind);
            }));
            const ok = results.some((result) => result.status === 'fulfilled');
            preloadRoundStatusRef.current.set(index, ok ? 'ready' : 'failed');
            return ok;
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

    const waitForMediaDurationSec = useCallback(async (mediaEl) => {
        if (!mediaEl) return null;

        const current = Number(mediaEl.duration);
        if (Number.isFinite(current) && current > 0) return current;

        await new Promise((resolve) => {
            let done = false;
            const finish = () => {
                if (done) return;
                done = true;
                cleanup();
                resolve();
            };
            const cleanup = () => {
                mediaEl.removeEventListener('loadedmetadata', finish);
                mediaEl.removeEventListener('durationchange', finish);
                mediaEl.removeEventListener('loadeddata', finish);
                mediaEl.removeEventListener('error', finish);
            };

            mediaEl.addEventListener('loadedmetadata', finish);
            mediaEl.addEventListener('durationchange', finish);
            mediaEl.addEventListener('loadeddata', finish);
            mediaEl.addEventListener('error', finish);
            window.setTimeout(finish, 2000);
        });

        const next = Number(mediaEl.duration);
        return Number.isFinite(next) && next > 0 ? next : null;
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
        const mediaDurationSec = await waitForMediaDurationSec(mediaEl);
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
    }, [round?.roundId, seededUnitInterval, waitForMediaDurationSec]);

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
                setSolutionMediaError('Could not play solution video in this browser. Use "Open video source".');
            }
            setSolutionVideoAutoplayBlocked(false);
            return false;
        }
    }, []);

    const playSample = useCallback(async ({ isAutoplay = false } = {}) => {
        const audio = sampleAudioRef.current;
        const video = sampleVideoRef.current;
        const sample = round?.sample;
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
        setReadyUserIds([]);
        setLobbyReadyUserIds([]);
        setLobbyReadyRequiredUserIds([]);
        setGuessText('');
        setGuessAnimeId(null);
        setSearchResults([]);
        setSearchError('');
        setMediaError('');
        setSolutionMediaError('');
        setSampleAutoplayBlocked(false);
        setSamplePlaybackSource(null);
        setSolutionVideoAutoplayBlocked(false);
        setSuddenDeathState(null);
    }, [resetPreloadManager, stopSamplePlayback, stopSolutionVideoPlayback]);

    const applySyncState = useCallback((syncState) => {
        const state = syncState || {};
        const nextPhase = state.phase || 'WAITING';
        setPhase(nextPhase);
        setRound(state.round || null);
        setReadyUserIds(Array.isArray(state.readyUserIds) ? state.readyUserIds : []);
        setPhaseEndsAt(state.endsAt || state.solution?.endsAt || null);
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
        setError('');
        try {
            await emitWithAck(socketRef.current, 'game:start', { lobbyCode: lobby.code }, { timeoutMs: 120_000 });
        } catch (err) {
            setError(toStartErrorMessage(err.message));
        } finally {
            setBusy('');
        }
    }, [lobby]);

    const submitGuess = useCallback(async () => {
        if (!lobby?.code || !round?.roundId || !socketRef.current) return;
        setBusy('guess');
        setError('');
        try {
            await emitWithAck(socketRef.current, 'round:submit_guess', {
                lobbyCode: lobby.code,
                roundId: round.roundId,
                guessText: guessText.trim(),
                guessAnimeId: Number.isInteger(guessAnimeId) ? guessAnimeId : null
            });
            setInfo('Guess saved');
        } catch (err) {
            setError(err.message);
        } finally {
            setBusy('');
        }
    }, [guessAnimeId, guessText, lobby, round]);

    const toggleReady = useCallback(async () => {
        if (!lobby?.code || !socketRef.current || !user) return;
        setBusy('ready');
        setError('');
        try {
            const mine = readyUserIds.includes(user.id);
            await emitWithAck(socketRef.current, 'round:set_ready', { lobbyCode: lobby.code, ready: !mine });
        } catch (err) {
            setError(err.message);
        } finally {
            setBusy('');
        }
    }, [lobby, readyUserIds, user]);

    const toggleLobbyReady = useCallback(async () => {
        if (!lobby?.code || !socketRef.current || !user) return;
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
    }, [lobby, lobbyReadyUserIds, user]);

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
            }
        };
        const onGameStarted = ({ sessionId, config, preloadManifest }) => {
            setSessionInfo({ sessionId, ...(config || {}) });
            setFinalResult(null);
            setPhase('PENDING');
            setSuddenDeathState(null);
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
        const onRoundStarted = (payload) => {
            stopSamplePlayback();
            stopSolutionVideoPlayback();
            setPreloadBlocking(false);
            setPreloadGateError('');
            setPreloadRetrying(false);
            setPhase('GUESSING');
            setPhaseEndsAt(payload?.endsAt || null);
            setRound(payload || null);
            setAnswers([]);
            setSolution(null);
            setFinalResult(null);
            setReadyUserIds([]);
            setGuessText('');
            setGuessAnimeId(null);
            setSearchResults([]);
            setSearchError('');
            setMediaError('');
            setSolutionMediaError('');
            setSampleAutoplayBlocked(false);
            setSamplePlaybackSource(null);
            setSolutionVideoAutoplayBlocked(false);
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
            setPhase('ANSWERS_REVEAL');
            setPhaseEndsAt(payload?.endsAt || null);
            setAnswers(Array.isArray(payload?.answers) ? payload.answers : []);
        };
        const onSolution = (payload) => {
            stopSamplePlayback();
            setPhase('SOLUTION_REVEAL');
            setPhaseEndsAt(payload?.endsAt || null);
            setSolution(payload || null);
            setMediaError('');
            setSolutionMediaError('');
            setSolutionVideoAutoplayBlocked(false);
        };
        const onFinished = (payload) => {
            resetPreloadManager();
            stopSamplePlayback();
            stopSolutionVideoPlayback();
            setPhase('FINISHED');
            setPhaseEndsAt(null);
            setMediaError('');
            setSolutionMediaError('');
            setFinalResult(payload || null);
            setSuddenDeathState(null);
            setLobbyReadyUserIds([]);
            setLobbyReadyRequiredUserIds([]);
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
        socket.on('game:started', onGameStarted);
        socket.on('round:started', onRoundStarted);
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
            socket.off('game:started', onGameStarted);
            socket.off('round:started', onRoundStarted);
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
            setSearchError('');
            return;
        }
        const q = guessText.trim();
        if (q.length < 2) {
            searchRequestSeqRef.current += 1;
            setSearchResults([]);
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
        if (sampleAudioRef.current) sampleAudioRef.current.volume = resolvedVolume;
        if (sampleVideoRef.current) sampleVideoRef.current.volume = resolvedVolume;
        if (solutionVideoRef.current) solutionVideoRef.current.volume = resolvedVolume;
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
    const showSamplePlayer = useMemo(() => Boolean(round && hasSampleMedia && (phase === 'GUESSING' || phase === 'ANSWERS_REVEAL')), [hasSampleMedia, phase, round]);
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
    const showRoundCard = useMemo(() => Boolean(lobby) && phase !== 'WAITING' && phase !== 'FINISHED', [lobby, phase]);
    const showLobbyCard = useMemo(() => Boolean(lobby) && (phase === 'WAITING' || phase === 'FINISHED'), [lobby, phase]);

    const onSampleVolumeChange = useCallback((event) => {
        const next = Math.max(0, Math.min(1, Number.parseFloat(event.target.value)));
        setSampleVolume(Number.isFinite(next) ? next : 0.8);
    }, []);
    const displayedScores = useMemo(() => {
        if (phase === 'FINISHED') return (finalResult?.finalScores || []).slice().sort(byScoreDesc);
        if (phase === 'SOLUTION_REVEAL') return (solution?.scores || []).slice().sort(byScoreDesc);
        return [];
    }, [finalResult, phase, solution]);
    const suddenDeathMessage = useMemo(() => {
        if (!round?.isSuddenDeath || phase === 'FINISHED') return '';
        const tiedUserIds = Array.isArray(suddenDeathState?.tiedUserIds) ? suddenDeathState.tiedUserIds : [];
        const tiedNames = tiedUserIds.map((userId) => resolvePlayerName(userId)).filter(Boolean);
        if (tiedNames.length > 0) {
            return `Sudden Death: tie for first between ${tiedNames.join(', ')}.`;
        }
        return 'Sudden Death: tie for first place. Extra rounds continue until the tie is broken.';
    }, [phase, resolvePlayerName, round?.isSuddenDeath, suddenDeathState?.tiedUserIds]);
    const filteredLobbies = useMemo(() => {
        const q = String(lobbyQuery || '').trim().toLowerCase();
        if (!q) return lobbies;
        return lobbies.filter((item) => {
            const code = String(item?.code || '').toLowerCase();
            const name = String(item?.name || '').toLowerCase();
            return code.includes(q) || name.includes(q);
        });
    }, [lobbies, lobbyQuery]);
    const lobbySettingsSummary = useMemo(() => {
        if (!lobby) return [];
        return [
            `Max ${lobby.maxPlayers} players`,
            `${lobby.roundCount} rounds`,
            `${lobby.guessSeconds}s guess`,
            SOURCE_MODE_COPY[lobby.sourceMode]?.label || lobby.sourceMode,
            SELECTION_MODE_COPY[lobby.selectionMode]?.label || lobby.selectionMode,
            THEME_MODE_COPY[lobby.themeMode]?.label || lobby.themeMode
        ];
    }, [lobby]);

    if (loading) return <section className="gmq-shell">Loading game...</section>;

    return (
        <section className="gmq-shell">
            <header className="gmq-header">
                <div>
                    <h1>Anime Music Quiz</h1>
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
                        <div className="gmq-modal-backdrop" onClick={() => setHostModalOpen(false)}>
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
                                <button type="button" className="gmq-btn gmq-btn-primary" onClick={createLobby} disabled={busy === 'create'}>
                                    {busy === 'create' ? 'Hosting...' : 'Host Lobby'}
                                </button>
                            </article>
                        </div>
                    ) : null}
                </div>
            ) : (
                <div className={`gmq-grid gmq-grid-match ${showRoundCard ? 'gmq-grid-match-live' : 'gmq-grid-match-idle'} ${showRoundCard && !showLobbyCard ? 'gmq-grid-match-round-only' : ''}`}>
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
                                    <span>{player.displayName}{player.userId === lobby.host?.id ? ' (Host)' : ''}{!player.isConnected ? ' (offline)' : ''}</span>
                                    {lobby.status === 'WAITING' ? (
                                        <span className="gmq-player-row-actions">
                                            {isHost && user && player.userId !== user.id ? (
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
                                    <button
                                        type="button"
                                        className="gmq-btn gmq-btn-secondary"
                                        onClick={toggleLobbyReady}
                                        disabled={busy === 'lobby-ready'}
                                    >
                                        {myLobbyReady ? 'Not Ready' : 'Ready Up'}
                                    </button>
                                    <p className="gmq-muted">
                                        Ready {waitingLobbyReadyUserIds.length}/{waitingLobbyRequiredUserIds.length}
                                    </p>
                                </div>
                                {isHost
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

                    {showRoundCard ? (
                        <article className="gmq-card gmq-card-round">
                        <h2>Round</h2>
                        <p className="gmq-round-phase">{phase} | {countdown}</p>
                        {suddenDeathMessage ? <div className="gmq-alert gmq-alert-warning">{suddenDeathMessage}</div> : null}
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

                        {showSamplePlayer ? (
                            <div className="gmq-sample-player">
                                {round?.sample?.audioUrl ? (
                                    <audio
                                        key={`audio-${round.roundId}`}
                                        ref={sampleAudioRef}
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
                                        src={round.sample.videoUrl}
                                        preload="auto"
                                        playsInline
                                        onPlay={() => setSamplePlaying(true)}
                                        onPause={() => setSamplePlaying(false)}
                                        onEnded={() => setSamplePlaying(false)}
                                        onError={() => setMediaError(toMediaErrorMessage('source_unavailable'))}
                                    />
                                ) : null}
                                <label className="gmq-volume-row">
                                    <span>Volume {sampleVolumePercent}</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={sampleVolume}
                                        onChange={onSampleVolumeChange}
                                    />
                                </label>
                                {sampleAutoplayBlocked ? (
                                    <div className="gmq-stack">
                                        <p className="gmq-muted">Autoplay was blocked by your browser.</p>
                                        <button type="button" className="gmq-btn gmq-btn-secondary" onClick={() => playSample({ isAutoplay: false }).catch(() => {})}>
                                            Play sample
                                        </button>
                                    </div>
                                ) : (samplePlaybackSource === 'video' && !round?.sample?.audioUrl) ? (
                                    <p className="gmq-muted">Using video source audio. {sampleDurationLabel}</p>
                                ) : samplePlaying ? (
                                    <p className="gmq-muted">Sample is playing. {sampleDurationLabel}</p>
                                ) : (
                                    <p className="gmq-muted">{sampleDurationLabel}</p>
                                )}
                                {mediaError ? <p className="gmq-muted gmq-muted-warning">{mediaError}</p> : null}
                            </div>
                        ) : null}

                        {phase === 'GUESSING' && round ? (
                            <div className="gmq-stack">
                                <p>Round {round.index}/{round.totalRounds}</p>
                                {!hasSampleMedia ? (
                                    <p className="gmq-muted">Sample audio is unavailable for this round.</p>
                                ) : null}
                                <div className="gmq-search-box">
                                    <input
                                        ref={guessInputRef}
                                        value={guessText}
                                        onChange={(e) => { setGuessText(e.target.value); setGuessAnimeId(null); setSearchMenuOpen(true); }}
                                        onFocus={() => setSearchMenuOpen(true)}
                                        onBlur={() => {
                                            window.setTimeout(() => {
                                                setSearchMenuOpen(false);
                                            }, 100);
                                        }}
                                        placeholder="Type anime name"
                                    />
                                    {(searchMenuOpen && searchResults.length > 0) ? (
                                        <ul className="gmq-search-results">
                                            {searchResults.map((item) => (
                                                <li key={`${item.id}-${item.title}`}>
                                                    <button
                                                        type="button"
                                                        onMouseDown={(event) => event.preventDefault()}
                                                        onClick={() => { setGuessText(item.title || ''); setGuessAnimeId(Number.isInteger(item.id) ? item.id : null); setSearchResults([]); setSearchMenuOpen(false); }}
                                                    >
                                                        {item.title}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </div>
                                {searchError ? <p className="gmq-muted gmq-muted-warning">{searchError}</p> : null}
                                <div className="gmq-actions">
                                    <button type="button" className="gmq-btn gmq-btn-primary" onClick={submitGuess} disabled={busy === 'guess'}>Submit Guess</button>
                                    <button type="button" className="gmq-btn gmq-btn-secondary" onClick={toggleReady} disabled={busy === 'ready'}>
                                        {myReady ? 'Unskip' : 'Skip / Ready'}
                                    </button>
                                </div>
                                <p className="gmq-muted">{readyUserIds.length} ready</p>
                            </div>
                        ) : null}

                        {phase === 'ANSWERS_REVEAL' ? (
                            <div className="gmq-stack">
                                <h3>Answers</h3>
                                <ul className="gmq-answer-list">
                                    {answers.map((item) => (
                                        <li key={`${item.userId}-${item.guessText || 'blank'}`}>
                                            <span>{resolvePlayerName(item.userId)}</span>
                                            <span>{item.guessText || '(blank)'}</span>
                                            <strong>{item.isCorrect ? 'Correct' : 'Wrong'}</strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}

                        {phase === 'SOLUTION_REVEAL' && solution ? (
                            <div className="gmq-stack">
                                <h3>Solution</h3>
                                <p>{solution.correctAnime?.animeTitle} ({solution.correctAnime?.themeType})</p>
                                <p className="gmq-muted">{solution.correctAnime?.themeTitle || ''}</p>
                                {solution.video ? (
                                    <div className="gmq-solution-video-wrap">
                                        <video
                                            key={`solution-${round?.roundId || solution.correctAnime?.animeId || 'video'}`}
                                            ref={solutionVideoRef}
                                            className="gmq-solution-video"
                                            src={solution.video}
                                            preload="auto"
                                            controls
                                            playsInline
                                            onError={() => setSolutionMediaError('Could not play solution video in this browser. Use "Open video source".')}
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
                                        <a href={solution.video} target="_blank" rel="noreferrer">Open video source</a>
                                    </div>
                                ) : (
                                    <p className="gmq-muted">Solution video is unavailable for this round.</p>
                                )}
                            </div>
                        ) : null}

                        {phase === 'FINISHED' && finalResult ? (
                            <div className="gmq-stack">
                                <h3>Final Result</h3>
                                <p>Winner: {finalResult.winner?.displayName || 'Tie'}</p>
                            </div>
                        ) : null}

                        {displayedScores.length ? (
                            <div className="gmq-stack">
                                <h3>Scoreboard</h3>
                                <ul className="gmq-score-list">
                                    {displayedScores.map((row) => (
                                        <li key={row.userId} className="gmq-score-row">
                                            <span>{row.displayName}</span>
                                            <strong>{row.score}</strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                        </article>
                    ) : null}
                </div>
            )}
        </section>
    );
}
