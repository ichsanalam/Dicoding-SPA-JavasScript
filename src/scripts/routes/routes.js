// fungsinya untuk mencocokkan URL path dengan halaman yang akan ditampilkan.
import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import RegisterPage from '../pages/register/register-page';
import LoginPage from '../pages/login/login-page';

import { checkAuthenticatedRoute, checkUnauthenticatedRouteOnly } from '../utils/auth';

const routes = {
  '/login': () => checkUnauthenticatedRouteOnly(new LoginPage()),
  '/register': () => checkUnauthenticatedRouteOnly(new RegisterPage()),

  '/':  () => checkAuthenticatedRoute(new HomePage()),
  '/about':  () => checkAuthenticatedRoute(new AboutPage()),


  // '/login': new LoginPage(),
  // '/register': new RegisterPage(),

  // '/': new HomePage(),
  // '/about': new AboutPage(),

  // '/login': () => new LoginPage(),
  // '/register': () => new RegisterPage(),

  // '/': () => new HomePage(),
  // '/about': () => new AboutPage(),
};

export default routes;
