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
