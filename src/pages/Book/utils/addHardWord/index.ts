import { createUserWord, updateUserWord } from 'api';
import { firstSrc, hard } from 'pages/Book/components';
import { IAuth, IState, IUserWordId } from 'state/interfaces';
import { markPageHard } from '../markedPage';

export const getDifficultWord = async (userWordId: IUserWordId, user: false | IAuth, state: IState) => {
  const hardWord = document.querySelectorAll('.hard-word img');
  if (user) {
    hardWord.forEach((item, i: number) => {
      if (!state.pageUserWords[i].userWord?.optional?.isLearnt) {
        item.addEventListener('click', async () => {
          if (item instanceof HTMLImageElement) {
            if (item.src.indexOf('empty') !== -1 && state.pageUserWords[i].userWord?.difficulty !== 'hard') {
              item.src = firstSrc;
              const checkboxLearnt = document.querySelectorAll('.form-check-input')[i];
              if (checkboxLearnt instanceof HTMLInputElement) checkboxLearnt.disabled = true;
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
        });
      }
    });
  }
};
