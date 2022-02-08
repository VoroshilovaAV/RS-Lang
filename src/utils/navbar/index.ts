export const setStorageLastPath = () => {
  const currentElement = document.querySelector('.active-link');
  if (currentElement instanceof HTMLAnchorElement) {
    localStorage.setItem('lastPath', JSON.stringify(currentElement.href.split('#')[1]));
  }
};

export const setActiveNavLink = (path: string) => {
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
  setStorageLastPath();
  removeActiveNavLink();
  setActiveNavLink(path);
  checkNavHeight();
};
