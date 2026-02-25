import { io } from 'socket.io-client';

let socketInstance = null;

export function getGameSocket(token) {
    if (!socketInstance) {
        socketInstance = io({
            autoConnect: false,
            transports: ['websocket'],
            auth: { token }
        });
    } else {
        socketInstance.auth = { token };
    }

    return socketInstance;
}

export function closeGameSocket() {
    if (!socketInstance) return;
    socketInstance.disconnect();
    socketInstance = null;
}
