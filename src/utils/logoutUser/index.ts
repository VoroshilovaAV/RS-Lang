import { preloadLoad } from 'components';
import { getDataBookPage } from 'pages/Book/getDataBookPageBeforeLoad';
import { router } from 'router/router';
import { currentPage } from 'state';

export const logoutUser = () => {
  const currentElement = document.querySelector('.sign-in-btn');
  if (currentElement instanceof HTMLElement) {
    if (currentElement.textContent === 'Выход') {
      currentElement.addEventListener('click', () => {
        localStorage.clear();
        const elem = document.querySelector('.main');
        currentPage.group = currentPage.group === 6 ? 0 : currentPage.group;
        localStorage.setItem('group', JSON.stringify(currentPage.group));
        getDataBookPage();
        if (elem instanceof HTMLElement) {
          preloadLoad(elem);
          setTimeout(router, 1000);
        }
      });
    }
  }
};
