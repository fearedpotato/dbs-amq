const API_BASE = '/api';

export function getAuthToken() {
    return window.localStorage.getItem('token');
}

export function redirectToLogin() {
    window.location.replace('/login.html');
}

export async function apiFetch(path, options = {}) {
    const token = getAuthToken();
    const headers = {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {})
    };

    const response = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers
    });

    const text = await response.text();
    let data = {};
    if (text) {
        try {
            data = JSON.parse(text);
        } catch (_err) {
            data = { message: text };
        }
    }

    if (!response.ok) {
        const message = data.error || data.message || 'Request failed';
        throw new Error(message);
    }

    return data;
}
