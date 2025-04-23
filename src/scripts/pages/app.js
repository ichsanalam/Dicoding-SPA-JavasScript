import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';

// untuk membuat dinamis navigasi
import {
  generateAuthenticatedNavigationListTemplate,
  generateMainNavigationListTemplate,
  generateUnauthenticatedNavigationListTemplate,
} from '../templates';
import { getAccessToken, getLogout } from '../utils/auth';
import { transitionHelper } from '../utils/index';

class App {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;

  constructor({ navigationDrawer, drawerButton, content }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;

    this._setupDrawer();
  }

  _setupDrawer() {
    // untuk buka/tutup navigasi samping.
    this.#drawerButton.addEventListener('click', () => {
      this.#navigationDrawer.classList.toggle('open');
    });

    // Saat pengguna klik di luar drawer dan tombol, drawer ditutup otomatis.
    document.body.addEventListener('click', (event) => {
      if (!this.#navigationDrawer.contains(event.target) && !this.#drawerButton.contains(event.target)) {
        this.#navigationDrawer.classList.remove('open');
      }

      // Jika pengguna klik salah satu link di dalam drawer, drawer juga ditutup.
      this.#navigationDrawer.querySelectorAll('a').forEach((link) => {
        if (link.contains(event.target)) {
          this.#navigationDrawer.classList.remove('open');
        }
      })
    });
  }

  #setupNavigationList() {
    const isLogin = !!getAccessToken();
    const navListMain = this.#navigationDrawer.children.namedItem('nav-list-main');
    const navList = this.#navigationDrawer.children.namedItem('nav-list');

    // User not log in
    if (!isLogin) {
      navListMain.innerHTML = '';
      navList.innerHTML = generateUnauthenticatedNavigationListTemplate();
      return;
    }

    navListMain.innerHTML = generateMainNavigationListTemplate();
    navList.innerHTML = generateAuthenticatedNavigationListTemplate();

    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', (event) => {
      event.preventDefault();

      if (confirm('Apakah Anda yakin ingin keluar?')) {
        getLogout();

        // Redirect
        location.hash = '/login';
      }
    });
  }

  async renderPage() {
    // Mendapatkan path dari URL aktif.
    const url = getActiveRoute();
    // Mengambil halaman dari objek routes berdasarkan path tersebut.
    const route = routes[url];
    // Get page instance
    const page = route();

    // ngerender page berdasarkan route
    const transition = transitionHelper({
      updateDOM: async () => {
        this.#content.innerHTML = await page.render();
        page.afterRender();
      },
    });

    // dinamis navigasi header
    transition.ready.catch(console.error);
    transition.updateCallbackDone.then(() => {
      scrollTo({ top: 0, behavior: 'instant' });
      this.#setupNavigationList();
    });
  }
}

export default App;
