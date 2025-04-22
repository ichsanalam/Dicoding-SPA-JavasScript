export function generateUnauthenticatedNavigationListTemplate() {
    return `
      <li id="push-notification-tools" class="push-notification-tools"></li>
      <li><a id="login-button" href="#/login">Login</a></li>
      <li><a id="register-button" href="#/register">Register</a></li>
    `;
}

export function generateMainNavigationListTemplate() {
    return `
      <li><a id="story-list-button" class="story-list-button" href="#/">Daftar Cerita</a></li>
    `;
}

export function generateAuthenticatedNavigationListTemplate() {
    return `
      <li id="push-notification-tools" class="push-notification-tools"></li>
      <li><a id="new-report-button" class="btn new-report-button" href="#/new">Tambah Cerita</a></li>
      <li><a id="logout-button" class="logout-button" href="#/logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
    `;
}