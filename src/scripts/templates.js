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

// 2

export function generateStoryItemTemplate({
  createdAt,
  description,
  id,
  lat,
  lon,
  name,
  photoUrl,

}) {
  return `
    <div tabindex="0" class="story-item" data-storyid="${id}">
      <img class="story-item__image" src="${photoUrl}" alt="${name}">
      <div class="story-item__body">
        <div class="story-item__main">
          <h2 id="story-title" class="story-item__title">${name}</h2>
          <div class="story-item__more-info">
            <div class="story-item__createdat">
              <i class="fas fa-calendar-alt"></i> ${createdAt}
            </div>
            <div class="story-item__location">
              <i class="fas fa-map"></i> lokasi
            </div>
          </div>
        </div>
        <div id="story-description" class="story-item__description">
          ${description}
        </div>
        <div class="story-item__more-info">
          <div class="story-item__author">
            Dilaporkan oleh: siapa
          </div>
        </div>
        <a class="btn story-item__read-more" href="#/storys/${id}">
          Selengkapnya <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `;
}