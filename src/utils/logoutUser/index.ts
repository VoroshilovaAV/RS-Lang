import { router } from 'router/router';

export const logoutUser = () => {
  const currentElement = document.querySelector('.sign-in-btn');
  if (currentElement instanceof HTMLElement) {
    if (currentElement.textContent === 'Выход') {
      currentElement.addEventListener('click', () => {
        localStorage.clear();
        router();
      });
    }
  }
};
