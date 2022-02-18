import { createUserWord, updateUserWord } from 'api';
import { IAuth, IState, IUserWordId } from 'state/interfaces';

export const getDifficultWord = async (userWordId: IUserWordId, user: false | IAuth, state: IState) => {
  const hardWord = document.querySelectorAll('.hard-word img');
  if (user) {
    hardWord.forEach((item, i: number) => {
      item.addEventListener('click', async () => {
        if (item instanceof HTMLImageElement) {
          const firstSrc = './assets/icons/hard-words.svg';
          if (item.src.indexOf('empty') !== -1 && state.pageUserWords[i].userWord?.difficulty !== 'hard') {
            item.src = firstSrc;
            userWordId.wordId = state.pageUserWords[i]._id;
            const useWord = state.pageUserWords[i].userWord;
            userWordId.userId = user.userId;
            userWordId.body.difficulty = 'hard';
            const containerWord = document.querySelectorAll('.word-list')[i];
            if (useWord && useWord.optional) {
              useWord.optional.isLearnt = false;
              userWordId.body.optional = useWord.optional;
            }
            if (containerWord instanceof HTMLElement) {
              containerWord.style.backgroundColor = '#ffffff';
            }
            const checkboxLearnt = document.querySelectorAll('.form-check-input')[i];
            if (checkboxLearnt instanceof HTMLInputElement) checkboxLearnt.checked = false;
            if (state.pageUserWords[i].userWord || state.pageUserWords[i].userWord?.optional) {
              updateUserWord(userWordId, user.token);
            } else {
              createUserWord(userWordId, user.token);
            }
          }
        }
      });
    });
  }
};
