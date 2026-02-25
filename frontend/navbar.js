// ── Navbar & Settings Modal ─────────────────────────────────────────────────

function renderNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    nav.innerHTML = `
    <a class="navbar-brand" href="/dashboard.html">DBS<span>.</span></a>
    <div class="navbar-links">
      <div class="nav-user" id="navUser">
        <button class="nav-user-btn" id="navUserBtn" onclick="toggleDropdown()">
          <span id="navUsername">...</span>
          <span class="chevron">▼</span>
        </button>
        <div class="dropdown" id="dropdown">
          <button class="dropdown-item" onclick="openSettings()">⚙️ Settings</button>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item danger" onclick="auth.logout()">↩ Sign out</button>
        </div>
      </div>
    </div>
  `;
    document.body.prepend(nav);

    // Settings modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'settingsModal';
    modal.onclick = handleOverlayClick;
    modal.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h2>Settings</h2>
        <button class="modal-close" onclick="closeSettings()">✕</button>
      </div>
      <div class="modal-body">

        <div class="settings-section">
          <div class="settings-section-title">Account</div>
          <div class="settings-row">
            <div class="settings-row-info">
              <h4>Nickname</h4>
              <p id="settingsNickname">—</p>
              <input type="text" id="usernameInput" style="
                display:none;
                background: var(--surface2);
                border: 1px solid var(--accent);
                border-radius: var(--radius-sm);
                padding: 0.35rem 0.6rem;
                color: var(--text);
                font-family: 'DM Sans', sans-serif;
                font-size: 0.85rem;
                outline: none;
                width: 180px;
              "/>
            </div>
            <div class="settings-row-action" id="usernameActions">
              <button class="btn btn-ghost btn-sm" onclick="startEditNickname()">Edit</button>
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <h4>Email</h4>
              <p id="settingsEmail">—</p>
            </div>
            <div class="settings-row-action">
              <span class="badge" id="settingsVerifiedBadge"></span>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-section-title">MyAnimeList</div>
          <div class="settings-row">
            <div class="settings-row-info">
              <h4>MAL Account</h4>
              <p id="malStatus">Not connected</p>
            </div>
            <div class="settings-row-action">
              <button class="btn btn-primary btn-sm" id="malBtn">Connect</button>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-section-title">Danger Zone</div>
          <div class="settings-row">
            <div class="settings-row-info">
              <h4>Sign out</h4>
              <p>Sign out of your account</p>
            </div>
            <div class="settings-row-action">
              <button class="btn btn-danger btn-sm" onclick="auth.logout()">Sign out</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
    document.body.appendChild(modal);

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        const navUser = document.getElementById('navUser');
        if (navUser && !navUser.contains(e.target)) {
            document.getElementById('navUserBtn')?.classList.remove('open');
            document.getElementById('dropdown')?.classList.remove('open');
        }
    });
}

function updateNavbarUI(user) {
    if (!user) return;

    const navUsername = document.getElementById('navUsername');
    if (navUsername) navUsername.textContent = user.username || '';

    const settingsNickname = document.getElementById('settingsNickname');
    if (settingsNickname) settingsNickname.textContent = user.nickname || user.username || '—';

    const settingsEmail = document.getElementById('settingsEmail');
    if (settingsEmail) settingsEmail.textContent = user.email || '—';

    const settingsBadge = document.getElementById('settingsVerifiedBadge');
    if (settingsBadge) {
        settingsBadge.textContent = user.isVerified ? '✓ Verified' : '⚠ Not verified';
        settingsBadge.className = user.isVerified ? 'badge badge-success' : 'badge badge-warning';
    }

    const malStatus = document.getElementById('malStatus');
    const malBtn = document.getElementById('malBtn');
    if (malStatus && malBtn) {
        if (user.malUsername) {
            malStatus.textContent = `Connected as ${user.malUsername}`;
            malBtn.textContent = 'Unbind Account';
            malBtn.className = 'btn btn-ghost btn-sm';
            malBtn.onclick = disconnectMAL;
        } else {
            malStatus.textContent = 'Not connected';
            malBtn.textContent = 'Connect';
            malBtn.className = 'btn btn-primary btn-sm';
            malBtn.onclick = connectMAL;
        }
    }
}

function toggleDropdown() {
    document.getElementById('navUserBtn').classList.toggle('open');
    document.getElementById('dropdown').classList.toggle('open');
}

function openSettings() {
    document.getElementById('settingsModal').classList.add('open');
    document.getElementById('navUserBtn')?.classList.remove('open');
    document.getElementById('dropdown')?.classList.remove('open');
}

function closeSettings() {
    document.getElementById('settingsModal').classList.remove('open');
    cancelEditNickname();
}

function handleOverlayClick(e) {
    if (e.target === document.getElementById('settingsModal')) closeSettings();
}

function startEditNickname() {
    const current = auth.getUser()?.nickname || '';
    document.getElementById('settingsNickname').style.display = 'none';
    const input = document.getElementById('usernameInput');
    input.style.display = 'inline-block';
    input.value = current;
    input.focus();
    document.getElementById('usernameActions').innerHTML = `
    <button class="btn btn-primary btn-sm" onclick="saveNickname()">Save</button>
    <button class="btn btn-ghost btn-sm" onclick="cancelEditNickname()">Cancel</button>
    `;
}

function cancelEditNickname() {
    document.getElementById('settingsNickname').style.display = '';
    document.getElementById('usernameInput').style.display = 'none';
    document.getElementById('usernameActions').innerHTML = `
    <button class="btn btn-ghost btn-sm" onclick="startEditNickname()">Edit</button>
  `;
}

async function saveNickname() {
    const current = auth.getUser()?.nickname || '';
    const newNickname = document.getElementById('usernameInput').value.trim();
    if (!newNickname || newNickname === current) { cancelEditNickname(); return; }
    try {
        await apiFetch('/auth/nickname', {
            method: 'PATCH',
            body: JSON.stringify({ nickname: newNickname })
        });
        const user = auth.getUser();
        user.nickname = newNickname;
        auth.save(auth.getToken(), user);
        updateNavbarUI(user);
        cancelEditNickname();
    } catch (err) {
        alert(err.message);
    }
}

async function connectMAL() {
    try {
        const data = await apiFetch('/mal/login', { method: 'POST' });
        if (!data?.url) throw new Error('Could not start MAL connection');
        window.location.href = data.url;
    } catch (err) {
        alert(err.message);
    }
}

function disconnectMAL() {
    if (!confirm('Unbind your MAL account?')) return;
    apiFetch('/mal/disconnect', { method: 'POST' })
        .then(() => {
            const user = auth.getUser();
            user.malUsername = null;
            auth.save(auth.getToken(), user);
            updateNavbarUI(user);
        })
        .catch(err => alert(err.message));
}
