import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { apiFetch, getAuthToken, redirectToLogin } from './apiClient';
import { closeGameSocket, getGameSocket } from './socketClient';

const SOURCE_MODES = ['POPULAR', 'MAL_ONLY', 'HYBRID'];
const SELECTION_MODES = ['STANDARD', 'BALANCED_STRICT', 'BALANCED_RELAXED'];
const THEME_MODES = ['OP_ONLY', 'ED_ONLY', 'MIXED'];

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

function emitWithAck(socket, eventName, payload) {
    return new Promise((resolve, reject) => {
        let done = false;
        const timer = window.setTimeout(() => {
            if (done) return;
            done = true;
            reject(new Error('Request timed out'));
        }, 10_000);

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

export default function App() {
    const token = getAuthToken();
    const socketRef = useRef(null);
    const lobbyRef = useRef(null);
    const inviteTokenRef = useRef('');
    const pendingJoinRef = useRef(null);
    const autoJoinDoneRef = useRef(false);

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

    useEffect(() => {
        lobbyRef.current = lobby;
    }, [lobby]);

    useEffect(() => {
        inviteTokenRef.current = inviteToken;
    }, [inviteToken]);

    const playerNameById = useMemo(() => {
        const map = new Map();
        for (const player of lobby?.players || []) {
            map.set(player.userId, player.displayName);
        }
        return map;
    }, [lobby]);

    const resolvePlayerName = useCallback((userId) => playerNameById.get(userId) || `User ${userId}`, [playerNameById]);

    const clearRoundState = useCallback(() => {
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
    }, []);

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
            await emitWithAck(socketRef.current, 'game:start', { lobbyCode: lobby.code });
        } catch (err) {
            setError(err.message);
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
        const onSocketError = (payload) => setError(payload?.message || 'Realtime error');
        const onLobbyState = ({ lobby: nextLobby }) => nextLobby && setLobby(nextLobby);
        const onGameStarted = ({ sessionId, config }) => {
            setSessionInfo({ sessionId, ...(config || {}) });
            setFinalResult(null);
            setPhase('PENDING');
            if (lobbyRef.current?.code) {
                requestRoundSync(lobbyRef.current.code).catch(() => {});
            }
        };
        const onRoundStarted = (payload) => {
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
        };
        const onAnswersReveal = (payload) => {
            setPhase('ANSWERS_REVEAL');
            setPhaseEndsAt(payload?.endsAt || null);
            setAnswers(Array.isArray(payload?.answers) ? payload.answers : []);
        };
        const onSolution = (payload) => {
            setPhase('SOLUTION_REVEAL');
            setPhaseEndsAt(payload?.endsAt || null);
            setSolution(payload || null);
        };
        const onFinished = (payload) => {
            setPhase('FINISHED');
            setPhaseEndsAt(null);
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
    }, [requestRoundSync, token]);

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
        if (phase !== 'GUESSING') return setSearchResults([]);
        const q = guessText.trim();
        if (q.length < 2) return setSearchResults([]);
        const timer = window.setTimeout(async () => {
            try {
                const data = await apiFetch('/game/search', {
                    method: 'POST',
                    body: JSON.stringify({ query: q, limit: 8 })
                });
                setSearchResults(Array.isArray(data.results) ? data.results : []);
            } catch (_err) {
                setSearchResults([]);
            }
        }, 300);
        return () => window.clearTimeout(timer);
    }, [guessText, phase]);

    const isHost = useMemo(() => Boolean(lobby && user && lobby.host?.id === user.id), [lobby, user]);
    const myReady = useMemo(() => Boolean(user && readyUserIds.includes(user.id)), [readyUserIds, user]);
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
                        <h2>Round</h2>
                        <p className="gmq-round-phase">{phase} | {countdown}</p>

                        {phase === 'GUESSING' && round ? (
                            <div className="gmq-stack">
                                <p>Round {round.index}/{round.totalRounds}</p>
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
                                {solution.video ? <a href={solution.video} target="_blank" rel="noreferrer">Open video source</a> : null}
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
