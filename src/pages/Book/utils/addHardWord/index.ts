import { createUserWord, updateUserWord } from 'api';
import { firstSrc, hard } from 'pages/Book/components';
import { IAuth, IState, IUserWordId } from 'state/interfaces';
import { markPageHard } from '../markedPage';

export const getDifficultWord = async (userWordId: IUserWordId, user: false | IAuth, state: IState) => {
  const hardWord = document.querySelectorAll('.hard-word img');
  if (user) {
    hardWord.forEach((item, i: number) => {
      item.addEventListener('click', async () => {
        if (state.pageUserWords[i].userWord?.optional?.isLearnt !== true) {
          const checkboxLearnt = document.querySelectorAll('.form-check-input')[i];
          if (checkboxLearnt instanceof HTMLInputElement) checkboxLearnt.disabled = true;
          if (item instanceof HTMLImageElement) {
            if (item.src.indexOf('empty') !== -1 && state.pageUserWords[i].userWord?.difficulty !== 'hard') {
              item.src = firstSrc;
              userWordId.wordId = state.pageUserWords[i]._id;
              userWordId.userId = user.userId;

              const useWord = state.pageUserWords[i].userWord;
              userWordId.body = {
                ...state.pageUserWords[i].userWord,
                ...{ difficulty: 'hard' },
              };
              state.pageUserWords[i].userWord = {
                ...state.pageUserWords[i].userWord,
                ...{ difficulty: 'hard' },
              };
              markPageHard(state, hard);
              if (useWord) {
                updateUserWord(userWordId, user.token);
              } else {
                createUserWord(userWordId, user.token);
              }
            }
          }
        }
      });
    });
  }
};
