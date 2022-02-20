import { IAuth, IPageWords, IState } from 'state/interfaces';

export const getUserWords = async (currentPage: IPageWords, state: IState, user: false | IAuth) => {
  if (user && currentPage.group !== 6) {
    state.pageUserWords.forEach((el, i: number) => {
      if (el.userWord?.difficulty === 'hard') {
        const imageHardWord = document.querySelectorAll('.hard-word img')[i];
        if (imageHardWord instanceof HTMLImageElement) {
          const firstSrc = './assets/icons/hard-words.svg';
          imageHardWord.src = firstSrc;
        }
      }
      if (el.userWord?.optional?.isLearnt === true) {
        const containerWord = document.querySelectorAll('.word-list')[i];
        const checkboxLearnt = document.querySelectorAll('.form-check-input')[i];
        if (containerWord instanceof HTMLElement && checkboxLearnt instanceof HTMLInputElement) {
          containerWord.style.backgroundColor = '#f0b3262a';
          checkboxLearnt.checked = true;
        }
      }
    });
  }
};
