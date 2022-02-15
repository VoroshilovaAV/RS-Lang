import { IPageWords } from 'state/interfaces';
import { getArray } from './getArrayWords';

const ListenPrevButton = (prevButton: Element, elem: HTMLElement, currentPage: IPageWords) => {
  if (currentPage.page === 0) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.addEventListener('click', () => {
      currentPage.page--;
      getArray(currentPage, elem);
    });
  }
};

const ListenNextButton = (nextButton: Element, elem: HTMLElement, currentPage: IPageWords) => {
  if (currentPage.page === 29) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.addEventListener('click', () => {
      currentPage.page++;
      getArray(currentPage, elem);
    });
  }
};

const listenButtonPagination = (buttonGetPage: Element[], elem: HTMLElement, currentPage: IPageWords) => {
  buttonGetPage.forEach((el, i) => {
    el.addEventListener('click', () => {
      const currentElement = el.firstElementChild;
      if (currentElement !== null) {
        if (Number(currentElement.textContent)) {
          currentPage.page = Number(currentElement.textContent) - 1;
        } else {
          const prevDotElement = Number(buttonGetPage[i - 1].firstElementChild?.textContent);
          const nextDotElement = Number(buttonGetPage[i + 1].firstElementChild?.textContent);
          if (prevDotElement && nextDotElement) {
            currentPage.page = prevDotElement == 1 ? nextDotElement - 2 : prevDotElement;
          }
        }
        getArray(currentPage, elem);
      }
    });
  });
};

const listenSelectPart = (currentParent: HTMLElement, currentPage: IPageWords) => {
  const partPageLink = document.querySelector('.form-select');
  if (partPageLink instanceof HTMLSelectElement) {
    const selectedPart = partPageLink.children[currentPage.group];
    if (selectedPart instanceof HTMLOptionElement) {
      selectedPart.selected = true;
    }
    partPageLink.addEventListener('input', (e) => {
      e.preventDefault();
      currentPage.group = +partPageLink.value - 1;
      getArray(currentPage, currentParent);
    });
    const main = document.querySelector('.book');
    if (main instanceof HTMLElement) {
      switch (partPageLink.value) {
        case '1': {
          main.style.backgroundColor = '#ffd6d677';
          break;
        }
        case '2': {
          main.style.backgroundColor = '#fffbd677';
          break;
        }
        case '3': {
          main.style.backgroundColor = '#edffd677';
          break;
        }
        case '4': {
          main.style.backgroundColor = '#d6feff77';
          break;
        }
        case '5': {
          main.style.backgroundColor = '#ffd6f877';
          break;
        }
        case '6': {
          main.style.backgroundColor = '#ffd2dd81';
          break;
        }
      }
    }
  }
};

export const listenPagination = (currentPage: IPageWords) => {
  const pageLink = document.querySelector('.pagination');
  if (pageLink !== null) {
    pageLink.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
  const currentParent = document.querySelector('.book__wrapper');
  if (!(currentParent instanceof HTMLElement)) {
    throw new Error('error');
  }
  listenSelectPart(currentParent, currentPage);
  const collectionButtons = document.querySelectorAll('.pagination li');
  if (collectionButtons !== null) {
    ListenPrevButton(collectionButtons[0], currentParent, currentPage);
    listenButtonPagination([...collectionButtons].slice(1, -1), currentParent, currentPage);
    ListenNextButton(collectionButtons[collectionButtons.length - 1], currentParent, currentPage);
  }
  localStorage.setItem('group', JSON.stringify(currentPage.group));
  localStorage.setItem('page', JSON.stringify(currentPage.page));
};
