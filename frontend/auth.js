const API = '/api';

const auth = {
    getToken: () => localStorage.getItem('token'),
    getUser: () => JSON.parse(localStorage.getItem('user') || 'null'),
    isLoggedIn: () => !!localStorage.getItem('token'),

    save: (token, user) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    },

    requireAuth: () => {
        if (!auth.isLoggedIn()) window.location.href = 'login.html';
    },

    requireGuest: () => {
        if (auth.isLoggedIn()) window.location.href = 'dashboard.html';
    }
};

async function apiFetch(path, options = {}) {
    const token = auth.getToken();
    const res = await fetch(`${API}${path}`, {
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers
        },
        ...options
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Something went wrong');
    return data;
}

function showAlert(el, message, type = 'error') {
    el.textContent = message;
    el.className = `alert alert-${type} show`;
}

function setLoading(btn, loading) {
    btn.disabled = loading;
    btn.innerHTML = loading
        ? '<span class="spinner"></span>'
        : btn.dataset.label;
}
