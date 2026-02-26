import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { apiFetch, getAuthToken, redirectToLogin } from './apiClient';
import { closeGameSocket, getGameSocket } from './socketClient';

const SOURCE_MODES = ['POPULAR', 'MAL_ONLY', 'HYBRID'];
const SELECTION_MODES = ['STANDARD', 'BALANCED_STRICT', 'BALANCED_RELAXED'];
const THEME_MODES = ['OP_ONLY', 'ED_ONLY', 'MIXED'];
const INITIAL_REQUIRED_ROUNDS = 2;
const PRELOAD_WINDOW_ROUNDS = 3; // current round + next 2
const MAX_CONCURRENT_PRELOADS = 2;

const CREATE_DEFAULTS = {
    name: '',
    isPrivate: false,
    roundCount: 10,
    guessSeconds: 20,
    sampleSeconds: 10,
    sourceMode: 'HYBRID',
    selectionMode: 'STANDARD',
    themeMode: 'MIXED'
};

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

function updateUrl(lobbyCode, inviteToken) {
    const params = new URLSearchParams(window.location.search);
    if (lobbyCode) params.set('lobby', lobbyCode);
    else params.delete('lobby');
    if (inviteToken) params.set('inviteToken', inviteToken);
    else params.delete('inviteToken');
    const query = params.toString();
    window.history.replaceState({}, '', query ? `${window.location.pathname}?${query}` : window.location.pathname);
}

function formatCountdown(ms) {
    if (!Number.isFinite(ms) || ms <= 0) return '00:00';
    const total = Math.ceil(ms / 1000);
    const min = Math.floor(total / 60);
    const sec = total % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
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
    const sampleAudioRef = useRef(null);
    const sampleVideoRef = useRef(null);
    const solutionVideoRef = useRef(null);
    const sampleActiveMediaRef = useRef(null);
    const sampleStopTimerRef = useRef(null);
    const sampleVolumeRef = useRef(0.8);
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

    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState('');
    const [error, setError] = useState('');
    const [info, setInfo] = useState('');
    const [socketConnected, setSocketConnected] = useState(false);

    const [user, setUser] = useState(null);
    const [lobbies, setLobbies] = useState([]);
    const [lobbyQuery, setLobbyQuery] = useState('');

    const [createConfig, setCreateConfig] = useState(CREATE_DEFAULTS);
    const [joinCode, setJoinCode] = useState('');
    const [inviteToken, setInviteToken] = useState('');
    const [displayName, setDisplayName] = useState('');

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

    const [guessText, setGuessText] = useState('');
    const [guessAnimeId, setGuessAnimeId] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [sampleAutoplayBlocked, setSampleAutoplayBlocked] = useState(false);
    const [samplePlaying, setSamplePlaying] = useState(false);
    const [samplePlaybackSource, setSamplePlaybackSource] = useState(null);
    const [solutionVideoAutoplayBlocked, setSolutionVideoAutoplayBlocked] = useState(false);
    const [sampleVolume, setSampleVolume] = useState(0.8);
    const [searchError, setSearchError] = useState('');
    const [mediaError, setMediaError] = useState('');
    const [solutionMediaError, setSolutionMediaError] = useState('');
    const [preloadBlocking, setPreloadBlocking] = useState(false);
    const [preloadProgress, setPreloadProgress] = useState({ ready: 0, failed: 0, total: 0 });
    const [preloadGateError, setPreloadGateError] = useState('');
    const [preloadRetrying, setPreloadRetrying] = useState(false);
    const [mediaSourceStatus, setMediaSourceStatus] = useState(null);
    const [mediaSourceLoading, setMediaSourceLoading] = useState(false);
    const [mediaSourceError, setMediaSourceError] = useState('');

    useEffect(() => {
        lobbyRef.current = lobby;
    }, [lobby]);

    useEffect(() => {
        inviteTokenRef.current = inviteToken;
    }, [inviteToken]);

    useEffect(() => {
        sampleVolumeRef.current = sampleVolume;
    }, [sampleVolume]);

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
        setGuessText('');
        setGuessAnimeId(null);
        setSearchResults([]);
        setSearchError('');
        setMediaError('');
        setSolutionMediaError('');
        setSampleAutoplayBlocked(false);
        setSamplePlaybackSource(null);
        setSolutionVideoAutoplayBlocked(false);
    }, [resetPreloadManager, stopSamplePlayback, stopSolutionVideoPlayback]);

    const applySyncState = useCallback((syncState) => {
        const state = syncState || {};
        const nextPhase = state.phase || 'WAITING';
        setPhase(nextPhase);
        setRound(state.round || null);
        setReadyUserIds(Array.isArray(state.readyUserIds) ? state.readyUserIds : []);
        setPhaseEndsAt(state.endsAt || state.solution?.endsAt || null);

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

    const fetchLobbies = useCallback(async (query = '') => {
        const q = String(query || '').trim();
        const params = new URLSearchParams();
        if (q) params.set('q', q);
        const data = await apiFetch(`/game/lobbies${params.toString() ? `?${params}` : ''}`);
        setLobbies(Array.isArray(data.lobbies) ? data.lobbies : []);
    }, []);

    const joinSocketLobby = useCallback(async (code, invite, name) => {
        const socket = socketRef.current;
        if (!socket) return;

        const payload = {
            lobbyCode: code,
            ...(invite ? { inviteToken: invite } : {}),
            ...(name ? { displayName: name } : {})
        };

        if (!socket.connected) {
            pendingJoinRef.current = payload;
            socket.connect();
            return;
        }

        await emitWithAck(socket, 'lobby:join', payload);
        await requestRoundSync(code);
    }, [requestRoundSync]);

    const joinLobby = useCallback(async (codeInput, inviteInput = '') => {
        const code = toCode(codeInput);
        if (!code) return setError('Lobby code is required');

        setBusy('join');
        setError('');
        setInfo('');

        try {
            const body = {};
            if (displayName.trim()) body.displayName = displayName.trim();
            if (inviteInput) body.inviteToken = inviteInput;

            const data = await apiFetch(`/game/lobbies/${code}/join`, {
                method: 'POST',
                body: JSON.stringify(body)
            });

            setLobby(data.lobby);
            setInviteToken(inviteInput || '');
            clearRoundState();
            updateUrl(code, inviteInput || '');
            await joinSocketLobby(code, inviteInput || '', displayName.trim());
            setInfo(`Joined lobby ${code}`);
        } catch (err) {
            setError(err.message);
        } finally {
            setBusy('');
        }
    }, [clearRoundState, displayName, joinSocketLobby]);

    const createLobby = useCallback(async () => {
        setBusy('create');
        setError('');
        setInfo('');
        try {
            const data = await apiFetch('/game/lobbies', {
                method: 'POST',
                body: JSON.stringify(createConfig)
            });
            setLobby(data.lobby);
            clearRoundState();
            updateUrl(data.lobby.code, '');
            await joinSocketLobby(data.lobby.code, '', displayName.trim());
            setInfo(`Created lobby ${data.lobby.code}`);
        } catch (err) {
            setError(err.message);
        } finally {
            setBusy('');
        }
    }, [clearRoundState, createConfig, displayName, joinSocketLobby]);

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
            updateUrl('', '');
            clearRoundState();
            setBusy('');
            fetchLobbies(lobbyQuery).catch(() => {});
        }
    }, [clearRoundState, fetchLobbies, lobby, lobbyQuery]);

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
        const onLobbyState = ({ lobby: nextLobby }) => nextLobby && setLobby(nextLobby);
        const onGameStarted = ({ sessionId, config, preloadManifest }) => {
            setSessionInfo({ sessionId, ...(config || {}) });
            setFinalResult(null);
            setPhase('PENDING');
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
        };
        const onReadyState = (payload) => {
            setReadyUserIds(Array.isArray(payload?.readyUserIds) ? payload.readyUserIds : []);
        };

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('error', onSocketError);
        socket.on('lobby:state', onLobbyState);
        socket.on('game:started', onGameStarted);
        socket.on('round:started', onRoundStarted);
        socket.on('round:answers_reveal', onAnswersReveal);
        socket.on('round:solution', onSolution);
        socket.on('game:finished', onFinished);
        socket.on('round:ready_state', onReadyState);
        socket.connect();

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('error', onSocketError);
            socket.off('lobby:state', onLobbyState);
            socket.off('game:started', onGameStarted);
            socket.off('round:started', onRoundStarted);
            socket.off('round:answers_reveal', onAnswersReveal);
            socket.off('round:solution', onSolution);
            socket.off('game:finished', onFinished);
            socket.off('round:ready_state', onReadyState);
            closeGameSocket();
        };
    }, [beginSessionPreload, preloadRollingWindow, requestRoundSync, resetPreloadManager, stopSamplePlayback, stopSolutionVideoPlayback, token]);

    const refreshMediaSourceStatus = useCallback(async ({ forceRefresh = false, silent = false } = {}) => {
        if (!silent) setMediaSourceLoading(true);
        try {
            const path = forceRefresh ? '/game/media-source-status?refresh=1' : '/game/media-source-status';
            const data = await apiFetch(path);
            setMediaSourceStatus(data?.status || null);
            setMediaSourceError('');
        } catch (err) {
            setMediaSourceError(normalizeErrorMessage(err?.message) || 'Could not fetch media source status');
        } finally {
            if (!silent) setMediaSourceLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!token) return;
        let active = true;
        (async () => {
            try {
                const me = await apiFetch('/auth/me');
                if (!active) return;
                setUser(me);
                await fetchLobbies('');
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
        if (!token) return;
        let active = true;

        refreshMediaSourceStatus({ forceRefresh: true }).catch(() => {});
        const timer = window.setInterval(() => {
            if (!active) return;
            refreshMediaSourceStatus({ silent: true }).catch(() => {});
        }, 15_000);

        return () => {
            active = false;
            window.clearInterval(timer);
        };
    }, [refreshMediaSourceStatus, token]);

    useEffect(() => {
        if (loading || !user || autoJoinDoneRef.current) return;
        autoJoinDoneRef.current = true;
        const params = new URLSearchParams(window.location.search);
        const code = toCode(params.get('lobby'));
        const tokenFromUrl = params.get('inviteToken') || '';
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
            setSearchResults([]);
            setSearchError('');
            return;
        }
        const q = guessText.trim();
        if (q.length < 2) {
            setSearchResults([]);
            setSearchError('');
            return;
        }
        const timer = window.setTimeout(async () => {
            try {
                const data = await apiFetch('/game/search', {
                    method: 'POST',
                    body: JSON.stringify({ query: q, limit: 8 })
                });
                setSearchResults(Array.isArray(data.results) ? data.results : []);
                setSearchError('');
            } catch (err) {
                setSearchResults([]);
                setSearchError(toSearchErrorMessage(err?.message));
            }
        }, 300);
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
    const hasSampleMedia = useMemo(() => Boolean(round?.sample?.audioUrl || round?.sample?.videoUrl), [round]);
    const showSamplePlayer = useMemo(() => Boolean(round && hasSampleMedia && (phase === 'GUESSING' || phase === 'ANSWERS_REVEAL')), [hasSampleMedia, phase, round]);
    const sampleDurationLabel = useMemo(() => {
        const seconds = Number.parseInt(round?.sample?.sampleDurationSec, 10);
        if (!Number.isFinite(seconds) || seconds <= 0) return 'Sample ready';
        return `${seconds}s preview`;
    }, [round]);
    const sampleVolumePercent = useMemo(() => `${Math.round(sampleVolume * 100)}%`, [sampleVolume]);
    const mediaSourceHealth = useMemo(() => {
        if (!mediaSourceStatus) {
            return { label: mediaSourceLoading ? 'Checking' : 'Unknown', tone: 'neutral' };
        }
        if (!mediaSourceStatus.ok) {
            return { label: 'Down', tone: 'down' };
        }
        const latencyMs = Number(mediaSourceStatus.latencyMs);
        if (Number.isFinite(latencyMs) && latencyMs >= 2500) {
            return { label: 'Slow', tone: 'warn' };
        }
        return { label: 'Healthy', tone: 'ok' };
    }, [mediaSourceLoading, mediaSourceStatus]);
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
    const localMediaHealth = useMemo(() => {
        if (preloadBlocking) {
            const detail = preloadProgress.total > 0
                ? `Preloading required rounds (${preloadProgress.ready}/${preloadProgress.total})`
                : 'Preloading required rounds';
            return { label: 'Busy', tone: 'warn', detail };
        }
        if (preloadProgress.failed > 0) {
            return { label: 'Degraded', tone: 'warn', detail: `Preload failures detected (${preloadProgress.failed})` };
        }
        if (mediaError || solutionMediaError) {
            return { label: 'Degraded', tone: 'warn', detail: 'Client playback errors detected in this session' };
        }
        if (sampleAutoplayBlocked || solutionVideoAutoplayBlocked) {
            return { label: 'Blocked', tone: 'warn', detail: 'Browser autoplay restrictions require user interaction' };
        }
        if (samplePlaying) {
            return { label: 'Active', tone: 'ok', detail: 'Sample playback is running' };
        }
        return { label: 'Idle', tone: 'neutral', detail: `Phase ${phase}` };
    }, [
        mediaError,
        phase,
        preloadBlocking,
        preloadProgress.failed,
        preloadProgress.ready,
        preloadProgress.total,
        sampleAutoplayBlocked,
        samplePlaying,
        solutionMediaError,
        solutionVideoAutoplayBlocked
    ]);

    const onSampleVolumeChange = useCallback((event) => {
        const next = Math.max(0, Math.min(1, Number.parseFloat(event.target.value)));
        setSampleVolume(Number.isFinite(next) ? next : 0.8);
    }, []);
    const displayedScores = useMemo(() => {
        if (phase === 'FINISHED') return (finalResult?.finalScores || []).slice().sort(byScoreDesc);
        if (phase === 'SOLUTION_REVEAL') return (solution?.scores || []).slice().sort(byScoreDesc);
        return [];
    }, [finalResult, phase, solution]);

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
                {lobby ? (
                    <div className="gmq-actions">
                        <button type="button" className="gmq-btn gmq-btn-secondary" onClick={copyInvite} disabled={busy === 'invite'}>Copy Invite</button>
                        <button type="button" className="gmq-btn gmq-btn-danger" onClick={leaveLobby} disabled={busy === 'leave'}>Leave</button>
                    </div>
                ) : null}
            </header>

            {error ? <div className="gmq-alert gmq-alert-error">{error}</div> : null}
            {info ? <div className="gmq-alert gmq-alert-info">{info}</div> : null}

            {!lobby ? (
                <div className="gmq-grid">
                    <article className="gmq-card">
                        <h2>Create Lobby</h2>
                        <label>Name</label>
                        <input value={createConfig.name} onChange={(e) => setCreateConfig((p) => ({ ...p, name: e.target.value }))} placeholder="Optional lobby name"/>
                        <label className="gmq-checkbox"><input type="checkbox" checked={createConfig.isPrivate} onChange={(e) => setCreateConfig((p) => ({ ...p, isPrivate: e.target.checked }))}/> Private lobby</label>
                        <div className="gmq-inline">
                            <input type="number" min="1" max="50" value={createConfig.roundCount} onChange={(e) => setCreateConfig((p) => ({ ...p, roundCount: Number(e.target.value || 10) }))}/>
                            <input type="number" min="5" max="120" value={createConfig.guessSeconds} onChange={(e) => setCreateConfig((p) => ({ ...p, guessSeconds: Number(e.target.value || 20) }))}/>
                            <input type="number" min="3" max="60" value={createConfig.sampleSeconds} onChange={(e) => setCreateConfig((p) => ({ ...p, sampleSeconds: Number(e.target.value || 10) }))}/>
                        </div>
                        <div className="gmq-inline">
                            <select value={createConfig.sourceMode} onChange={(e) => setCreateConfig((p) => ({ ...p, sourceMode: e.target.value }))}>{SOURCE_MODES.map((mode) => <option key={mode} value={mode}>{mode}</option>)}</select>
                            <select value={createConfig.selectionMode} onChange={(e) => setCreateConfig((p) => ({ ...p, selectionMode: e.target.value }))}>{SELECTION_MODES.map((mode) => <option key={mode} value={mode}>{mode}</option>)}</select>
                            <select value={createConfig.themeMode} onChange={(e) => setCreateConfig((p) => ({ ...p, themeMode: e.target.value }))}>{THEME_MODES.map((mode) => <option key={mode} value={mode}>{mode}</option>)}</select>
                        </div>
                        <label>Display Name</label>
                        <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder={user?.nickname || user?.username || 'Player'}/>
                        <button type="button" className="gmq-btn gmq-btn-primary" onClick={createLobby} disabled={busy === 'create'}>Create Lobby</button>
                    </article>

                    <article className="gmq-card">
                        <h2>Join Lobby</h2>
                        <label>Lobby Code</label>
                        <input value={joinCode} onChange={(e) => setJoinCode(toCode(e.target.value))} placeholder="ABC123"/>
                        <label>Invite Token (private lobby)</label>
                        <input value={inviteToken} onChange={(e) => setInviteToken(e.target.value.trim())} placeholder="Paste invite token"/>
                        <button type="button" className="gmq-btn gmq-btn-primary" onClick={() => joinLobby(joinCode, inviteToken)} disabled={busy === 'join'}>Join Lobby</button>
                    </article>

                    <article className="gmq-card">
                        <h2>Joinable Lobbies</h2>
                        <div className="gmq-inline">
                            <input value={lobbyQuery} onChange={(e) => setLobbyQuery(e.target.value)} placeholder="Search by code/name"/>
                            <button type="button" className="gmq-btn gmq-btn-secondary" onClick={() => fetchLobbies(lobbyQuery)}>Refresh</button>
                        </div>
                        <ul className="gmq-lobby-list">
                            {lobbies.map((item) => (
                                <li key={item.code} className="gmq-lobby-item">
                                    <div>
                                        <div className="gmq-lobby-title">{item.name || item.code}</div>
                                        <div className="gmq-muted">{item.code} | {item.playerCount}/{item.maxPlayers}</div>
                                    </div>
                                    <button type="button" className="gmq-btn gmq-btn-secondary" onClick={() => joinLobby(item.code, '')}>Join</button>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            ) : (
                <div className="gmq-grid">
                    <article className="gmq-card">
                        <h2>Lobby {lobby.code}</h2>
                        <p className="gmq-muted">{lobby.name || 'Untitled'} | {lobby.playerCount}/{lobby.maxPlayers} players</p>
                        <ul className="gmq-player-list">
                            {(lobby.players || []).map((player) => (
                                <li key={player.userId}>
                                    <span>{player.displayName}{player.userId === lobby.host?.id ? ' (Host)' : ''}{!player.isConnected ? ' (offline)' : ''}</span>
                                    {phase === 'GUESSING' ? <strong>{readyUserIds.includes(player.userId) ? 'Ready' : 'Thinking'}</strong> : null}
                                </li>
                            ))}
                        </ul>
                        {lobby.status === 'WAITING' ? (
                            isHost
                                ? <button type="button" className="gmq-btn gmq-btn-primary" onClick={startGame} disabled={busy === 'start'}>Start Game</button>
                                : <p className="gmq-muted">Waiting for host to start.</p>
                        ) : null}
                    </article>

                    <article className="gmq-card">
                        <h2>Media Status</h2>
                        <div className="gmq-status-row">
                            <span className={`gmq-status-dot gmq-status-dot-${mediaSourceHealth.tone}`} />
                            <div className="gmq-stack">
                                <strong>Source API: {mediaSourceHealth.label}</strong>
                                <p className="gmq-muted">{mediaSourceStatus?.provider || 'AnimeThemes'} | Latency {mediaSourceLatencyLabel}</p>
                                <p className="gmq-muted">
                                    Last check: {mediaSourceCheckedLabel}
                                    {mediaSourceStatus?.cached ? ' (cached)' : ''}
                                </p>
                                {mediaSourceStatus?.ok === false && mediaSourceStatus?.error ? (
                                    <p className="gmq-muted gmq-muted-warning">{mediaSourceStatus.error}</p>
                                ) : null}
                                {mediaSourceError ? <p className="gmq-muted gmq-muted-warning">{mediaSourceError}</p> : null}
                            </div>
                        </div>
                        <div className="gmq-status-row">
                            <span className={`gmq-status-dot gmq-status-dot-${localMediaHealth.tone}`} />
                            <div className="gmq-stack">
                                <strong>Local Client: {localMediaHealth.label}</strong>
                                <p className="gmq-muted">{localMediaHealth.detail}</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="gmq-btn gmq-btn-secondary"
                            onClick={() => refreshMediaSourceStatus({ forceRefresh: true }).catch(() => {})}
                            disabled={mediaSourceLoading}
                        >
                            {mediaSourceLoading ? 'Checking...' : 'Refresh Source Status'}
                        </button>
                    </article>

                    <article className="gmq-card">
                        <h2>Round</h2>
                        <p className="gmq-round-phase">{phase} | {countdown}</p>
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
                                <input value={guessText} onChange={(e) => { setGuessText(e.target.value); setGuessAnimeId(null); }} placeholder="Type anime name"/>
                                <ul className="gmq-search-results">
                                    {searchResults.map((item) => (
                                        <li key={`${item.id}-${item.title}`}>
                                            <button type="button" onClick={() => { setGuessText(item.title || ''); setGuessAnimeId(Number.isInteger(item.id) ? item.id : null); setSearchResults([]); }}>
                                                {item.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
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
                </div>
            )}
        </section>
    );
}
