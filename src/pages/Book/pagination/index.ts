import { getPaginationNav } from '../components';
import { currentPage } from 'state';
import { router } from 'router/router';

const ListenPrevButton = (prevButton: Element) => {
  if (currentPage.page === 1) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.addEventListener('click', () => {
      currentPage.page--;
      getPaginationNav(currentPage);
      router();
    });
  }
};

const ListenNextButton = (nextButton: Element) => {
  if (currentPage.page === 30) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.addEventListener('click', () => {
      currentPage.page++;
      getPaginationNav(currentPage);
      router();
    });
  }
};

const listenButtonPagination = (buttonGetPage: Element[]) => {
  buttonGetPage.forEach((elem, i) => {
    elem.addEventListener('click', () => {
      const currentElement = elem.firstElementChild;
      if (currentElement !== null) {
        if (Number(currentElement.textContent)) {
          currentPage.page = Number(currentElement.textContent);
          getPaginationNav(currentPage);
          router();
        } else {
          const prevDotElement = Number(buttonGetPage[i - 1].firstElementChild?.textContent);
          const nextDotElement = Number(buttonGetPage[i + 1].firstElementChild?.textContent);
          if (prevDotElement && nextDotElement) {
            currentPage.page = prevDotElement == 1 ? nextDotElement - 1 : prevDotElement + 1;
          }
          getPaginationNav(currentPage);
          router();
        }
      }
    });
  });
};

export const listenPagination = () => {
  const collectionButtons = document.querySelectorAll('.pagination li');
  if (collectionButtons !== null) {
    ListenPrevButton(collectionButtons[0]);
    listenButtonPagination([...collectionButtons].slice(1, -1));
    ListenNextButton(collectionButtons[collectionButtons.length - 1]);
  }
};
