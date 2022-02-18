export const setStorageLastPathOfNavBar = () => {
  const currentElement = document.querySelector('.active-link');
  if (currentElement instanceof HTMLAnchorElement) {
    localStorage.setItem('lastPath', JSON.stringify(currentElement.href.split('#')[1]));
  }
};
export const setStorageCurPath = (path: string) => {
  localStorage.setItem('curPath', JSON.stringify(path));
};

export const setActiveNavLink = (path: string) => {
  if (
    path === '/sprint' ||
    path === '/audiocall' ||
    path === '/pre-audiocall' ||
    path === '/pre-sprint' ||
    path === '/audiocall-result' ||
    path === '/sprint-result'
  ) {
    path = '/games';
  }
  const navLink = document.querySelector(`[href="#${path}"]`);
  navLink?.classList.add('active-link');
};

export const removeActiveNavLink = () => {
  document.querySelectorAll('.active-link').forEach((el) => el.classList.remove('active-link'));
};

export const checkNavHeight = () => {
  const nav = document.querySelector('.nav-container');
  if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
    nav?.classList.add('nav-min');
  } else {
    nav?.classList.remove('nav-min');
  }
};

export const changeNavBar = (path: string) => {
  setStorageCurPath(path);
  setStorageLastPathOfNavBar();
  removeActiveNavLink();
  setActiveNavLink(path);
  checkNavHeight();
};
