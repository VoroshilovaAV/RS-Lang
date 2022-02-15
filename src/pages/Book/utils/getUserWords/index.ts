import { getUserIdWords } from 'api';
import { IAuth, IState } from 'state/interfaces';

export const getUserWords = async (state: IState, user: false | IAuth) => {
  if (user) {
    const wordsUser = await getUserIdWords(user.userId, user.token);
    if (wordsUser) {
      state.pageWords.forEach((el, i: number) => {
        wordsUser.forEach((word) => {
          if (el.id === word.wordId) {
            if (word.optional.isLearnt === true) {
              const containerWord = document.querySelectorAll('.word-list')[i];
              const checkboxLearnt = document.querySelectorAll('.form-check-input')[i];
              if (containerWord instanceof HTMLElement && checkboxLearnt instanceof HTMLInputElement) {
                containerWord.style.backgroundColor = '#f0b3262a';
                checkboxLearnt.checked = true;
              }
            }
            if (word.difficulty === 'hard') {
              const imageHardWord = document.querySelectorAll('.hard-word img')[i];
              if (imageHardWord instanceof HTMLImageElement) {
                const firstSrc = './assets/icons/hard-words.svg';
                imageHardWord.src = firstSrc;
              }
            }
            console.log(1);
          }
        });
      });
    }
  }
};
