import { getActiveRoute } from '../routes/url-parser';
import { ACCESS_TOKEN_KEY } from '../../scripts/config';

console.log('token: ' + ACCESS_TOKEN_KEY);
// Mengambil token dari localStorage
export function getAccessToken() {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (accessToken === 'null' || accessToken === 'undefined') {
      return null;
    }

    return accessToken;
  } catch (error) {
    console.error('getAccessToken: error:', error);
    return null;
  }
}

// Menyimpan token ke localStorage saat user berhasil login.
export function putAccessToken(token) {
  try {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return true;
  } catch (error) {
    console.error('putAccessToken: error:', error);
    return false;
  }
}

// Menghapus token dari localStorage, artinya user dianggap logout
export function removeAccessToken() {
  try {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    return true;
  } catch (error) {
    console.error('getLogout: error:', error);
    return false;
  }
}

const unauthenticatedRoutesOnly = ['/login', '/register'];

// Melindungi route yang hanya boleh diakses oleh user yang belum login seperti /login dan /register
export function checkUnauthenticatedRouteOnly(page) {
  const url = getActiveRoute();
  const isLogin = !!getAccessToken();

  // Jika user sudah login, maka akan langsung dialihkan ke halaman utama (/)
  if (unauthenticatedRoutesOnly.includes(url) && isLogin) {
    location.hash = '/';
    // Fungsi mengembalikan null, agar halaman login tidak dirender
    return null;
  }

  return page;
}

// Melindungi route yang hanya bisa diakses oleh user yang sudah login.
export function checkAuthenticatedRoute(page) {
  const isLogin = !!getAccessToken();
  const test = getAccessToken();
  console.log('token2: ' + test);
  console.log(isLogin);

  if (!isLogin) {
    location.hash = '/login';
    return null;
  }

  return page;
}

// Menghapus token dari localStorage.
export function getLogout() {
  removeAccessToken();
}