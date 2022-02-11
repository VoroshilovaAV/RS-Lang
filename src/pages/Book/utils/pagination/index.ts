import { getPaginationNav } from '../../components';
import { currentPage, state } from 'state';
import { getArray } from './getArrayWords';

const ListenPrevButton = (prevButton: Element) => {
  if (currentPage.page === 0) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.addEventListener('click', () => {
      currentPage.page--;
      getPaginationNav(currentPage);
      getArray(currentPage);
    });
  }
};

const ListenNextButton = (nextButton: Element) => {
  if (currentPage.page === 29) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.addEventListener('click', () => {
      currentPage.page++;
      getPaginationNav(currentPage);
      getArray(currentPage);
    });
  }
};

const listenButtonPagination = (buttonGetPage: Element[]) => {
  buttonGetPage.forEach((elem, i) => {
    elem.addEventListener('click', () => {
      const currentElement = elem.firstElementChild;
      if (currentElement !== null) {
        if (Number(currentElement.textContent)) {
          currentPage.page = Number(currentElement.textContent) - 1;
          getPaginationNav(currentPage);
          getPaginationNav(currentPage);
          getArray(currentPage);
        } else {
          const prevDotElement = Number(buttonGetPage[i - 1].firstElementChild?.textContent);
          const nextDotElement = Number(buttonGetPage[i + 1].firstElementChild?.textContent);
          if (prevDotElement && nextDotElement) {
            currentPage.page = prevDotElement == 1 ? nextDotElement - 2 : prevDotElement;
          }
          getPaginationNav(currentPage);
          getArray(currentPage);
        }
      }
    });
  });
};

export const listenPagination = () => {
  const pageLink = document.querySelector('.pagination');
  if (pageLink !== null) {
    pageLink.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
  const partPageLink = document.querySelector('.form-select');
  if (partPageLink instanceof HTMLSelectElement) {
    partPageLink.addEventListener('input', () => {
      currentPage.group = +partPageLink.value - 1;
      state.currentChapter = +partPageLink.value - 1;
      getArray(currentPage);
    });
  }
  const collectionButtons = document.querySelectorAll('.pagination li');
  if (collectionButtons !== null) {
    ListenPrevButton(collectionButtons[0]);
    listenButtonPagination([...collectionButtons].slice(1, -1));
    ListenNextButton(collectionButtons[collectionButtons.length - 1]);
  }
};
