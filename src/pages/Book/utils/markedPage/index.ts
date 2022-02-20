import { IState } from 'state/interfaces';

export const markPageHard = (state: IState, string: string) => {
  const gameButton = document.querySelectorAll('.book__games a');
  const wordsMark = document.querySelector('.user-words');
  const paginationButton = document.querySelector('.page-item.active');
  const countUsersWordHard = state.pageUserWords.filter((el) => el.userWord?.difficulty === 'hard').length;
  const countUsersWordLearnt = state.pageUserWords.filter((item) => item.userWord?.optional?.isLearnt === true).length;
  if (string.indexOf('learned') === -1) {
    if (wordsMark) {
      if (countUsersWordHard === 20) {
        paginationButton?.classList.add('full-page');
        wordsMark.innerHTML = string;
        gameButton.forEach((el) => {
          if (el instanceof HTMLAnchorElement) {
            el.style.pointerEvents = 'none';
          }
        });
      } else {
        wordsMark.innerHTML = '';
        paginationButton?.classList.remove('full-page');
        gameButton.forEach((el) => {
          if (el instanceof HTMLAnchorElement) {
            el.style.pointerEvents = 'auto';
          }
        });
      }
    } else {
      if (countUsersWordHard === 20) {
        paginationButton?.classList.add('full-page');
        const element = document.createElement('div');
        element.className = 'user-words';
        element.innerHTML = string;
        const parent = document.querySelector('.book__panel-controls');
        parent?.appendChild(element);
        gameButton.forEach((el) => {
          if (el instanceof HTMLAnchorElement) {
            el.style.pointerEvents = 'none';
          }
        });
      }
    }
  } else {
    if (wordsMark) {
      if (countUsersWordLearnt === 20) {
        console.log(paginationButton);
        paginationButton?.classList.add('full-page');
        wordsMark.innerHTML = string;
        gameButton.forEach((el) => {
          if (el instanceof HTMLAnchorElement) {
            el.style.pointerEvents = 'none';
          }
        });
      } else {
        paginationButton?.classList.remove('full-page');
        wordsMark.innerHTML = '';
        gameButton.forEach((el) => {
          if (el instanceof HTMLAnchorElement) {
            el.style.pointerEvents = 'auto';
          }
        });
      }
    } else {
      if (countUsersWordLearnt === 20) {
        paginationButton?.classList.add('full-page');
        const element = document.createElement('div');
        element.className = 'user-words';
        element.innerHTML = string;
        const parent = document.querySelector('.book__panel-controls');
        parent?.appendChild(element);
        gameButton.forEach((el) => {
          if (el instanceof HTMLAnchorElement) {
            el.style.pointerEvents = 'none';
          }
        });
      }
    }
  }
};
