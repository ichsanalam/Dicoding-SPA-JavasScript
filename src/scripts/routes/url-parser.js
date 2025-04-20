// untuk memecah URL menjadi bagian-bagian
// misalnya: '/about/1' menjadi { resource: 'about', id: '1' }
function extractPathnameSegments(path) {
  const splitUrl = path.split('/');

  return {
    resource: splitUrl[1] || null,
    id: splitUrl[2] || null,
  };
}

// untuk mengembalikan segment menjadi parth url
// misalnya: { resource: 'about', id: '1' } menjadi '/about/:id'
function constructRouteFromSegments(pathSegments) {
  let pathname = '';

  if (pathSegments.resource) {
    pathname = pathname.concat(`/${pathSegments.resource}`);
  }

  if (pathSegments.id) {
    pathname = pathname.concat('/:id');
  }

  return pathname || '/';
}

// mengambil hash dari URL saat ini
// misalnya /#/about lalu menghapus tanda # jadi /about.
export function getActivePathname() {
  return location.hash.replace('#', '') || '/';
}

export function getActiveRoute() {
  const pathname = getActivePathname(); //pathname = '/about/1'
  const urlSegments = extractPathnameSegments(pathname); //{ resource: 'about', id: '1' }
  return constructRouteFromSegments(urlSegments); //'/about/:id'
}

export function parseActivePathname() {
  const pathname = getActivePathname(); //pathname = '/about/1'
  return extractPathnameSegments(pathname); //{ resource: 'about', id: '1' }
}

export function getRoute(pathname) {
  const urlSegments = extractPathnameSegments(pathname); //urlSegments = { resource: 'about', id: '1' }
  return constructRouteFromSegments(urlSegments); // '/about/:id'
}

export function parsePathname(pathname) {
  return extractPathnameSegments(pathname); //{ resource: 'about', id: '1' }
}
