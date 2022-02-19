import { createUserWord, updateUserWord } from 'api';
import { firstSrc, hard } from 'pages/Book/components';
import { IAuth, IState, IUserWordId } from 'state/interfaces';
import { markPageHard } from '../markedPage';

export const getDifficultWord = async (userWordId: IUserWordId, user: false | IAuth, state: IState) => {
  const hardWord = document.querySelectorAll('.hard-word img');
  if (user) {
    hardWord.forEach((item, i: number) => {
      item.addEventListener('click', async () => {
        if (item instanceof HTMLImageElement) {
          if (item.src.indexOf('empty') !== -1 && state.pageUserWords[i].userWord?.difficulty !== 'hard') {
            item.src = firstSrc;
            const containerWord = document.querySelectorAll('.word-list')[i];
            if (containerWord instanceof HTMLElement) {
              containerWord.style.backgroundColor = '#ffffff';
            }
            const checkboxLearnt = document.querySelectorAll('.form-check-input')[i];
            if (checkboxLearnt instanceof HTMLInputElement) checkboxLearnt.checked = false;

            markPageHard(state, hard);

            userWordId.wordId = state.pageUserWords[i]._id;
            userWordId.userId = user.userId;

            const useWord = state.pageUserWords[i].userWord;
            userWordId.body = {
              ...state.pageUserWords[i].userWord,
              ...{ difficulty: 'hard' },
              ...{ optional: { isLearnt: false } },
            };
            state.pageUserWords[i].userWord = {
              ...state.pageUserWords[i].userWord,
              ...{ difficulty: 'hard' },
              ...{ optional: { isLearnt: false } },
            };
            // userWordId.body.difficulty = 'hard';
            // userWordId.body.optional?.isLearnt = false;
            // if (useWord && useWord.optional) {
            //   useWord.optional.isLearnt = false;
            //   userWordId.body.optional = useWord.optional;
            // }

            if (useWord) {
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
