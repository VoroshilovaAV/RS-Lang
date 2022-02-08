import './style.scss';
const getPreloader = () =>
  `<div class="preloader__row">
      <div class="preloader__item"></div>
      <div class="preloader__item"></div>
      <div class="preloader__item"></div>
    </div>`;

export const preloadLoad = (elem: HTMLElement) => {
  const root = document.createElement('div');
  elem.style.position = 'relative';
  root.className = 'preloader';
  root.innerHTML = getPreloader();
  elem.append(root);
  elem.classList.remove('loaded');
  elem.classList.add('loaded_hiding');
};
export const removePreload = (elem: HTMLElement) => {
  elem.classList.remove('loaded_hiding');
  setTimeout(() => {
    elem.classList.add('loaded');
  }, 300);
};
