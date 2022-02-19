import { preloadLoad } from 'components';
import { getDataBookPage } from 'pages/Book/getDataBookPageBeforeLoad';
import { router } from 'router/router';

export const logoutUser = () => {
  const currentElement = document.querySelector('.sign-in-btn');
  if (currentElement instanceof HTMLElement) {
    if (currentElement.textContent === 'Выход') {
      currentElement.addEventListener('click', () => {
        localStorage.clear();
        const elem = document.querySelector('.main');
        getDataBookPage();
        if (elem instanceof HTMLElement) {
          preloadLoad(elem);
          setTimeout(router, 1000);
        }
      });
    }
  }
};
