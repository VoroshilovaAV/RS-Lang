import { createUserWord, updateUserWord } from 'api';
import { learnt, secondSrc } from 'pages/Book/components';
import { IAuth, IPageWords, IState, IUserWordId } from 'state/interfaces';
import { markPageHard } from '../markedPage';

export const addLearntWord = (currentPage: IPageWords, user: false | IAuth, userWordId: IUserWordId, state: IState) => {
  if (user && currentPage.group !== 6) {
    const checkboxLearnt = document.querySelectorAll('.form-check-input');
    checkboxLearnt.forEach(async (el, i) => {
      if (el instanceof HTMLInputElement) {
        el.addEventListener('change', async () => {
          userWordId.wordId = state.pageUserWords[i]._id;
          userWordId.userId = user.userId;
          const imageHardWord = document.querySelectorAll('.hard-word img')[i];
          if (imageHardWord instanceof HTMLImageElement) {
            imageHardWord.src = secondSrc;
          }
          const containerWord = document.querySelectorAll('.word-list')[i];
          if (containerWord instanceof HTMLElement && el.checked === true) {
            containerWord.style.backgroundColor = '#f0b3262a';
            const useWord = state.pageUserWords[i].userWord;
            userWordId.body = {
              ...state.pageUserWords[i].userWord,
              ...{ optional: { isLearnt: true } },
              ...{ difficulty: 'easy' },
            };
            state.pageUserWords[i].userWord = {
              ...state.pageUserWords[i].userWord,
              ...{ optional: { isLearnt: true } },
              ...{ difficulty: 'easy' },
            };
            console.log(state.pageUserWords[i].userWord?.difficulty);
            if (useWord) {
              updateUserWord(userWordId, user.token);
              localStorage.setItem('pageUserWords', JSON.stringify(state.pageUserWords));
            } else {
              localStorage.setItem('pageUserWords', JSON.stringify(state.pageUserWords));
              createUserWord(userWordId, user.token);
            }
          }
          if (containerWord instanceof HTMLElement && el.checked !== true) {
            const wordsMark = document.querySelector('.user-words');
            if (wordsMark) {
              wordsMark.innerHTML = '';
            }
            containerWord.style.backgroundColor = '#ffffff';
            userWordId.body = {
              ...state.pageUserWords[i].userWord,
              ...{ optional: { isLearnt: false } },
              ...{ difficulty: 'easy' },
            };
            state.pageUserWords[i].userWord = {
              ...state.pageUserWords[i].userWord,
              ...{ optional: { isLearnt: false } },
              ...{ difficulty: 'easy' },
            };
            console.log(state.pageUserWords[i].userWord?.difficulty);

            localStorage.setItem('pageUserWords', JSON.stringify(state.pageUserWords));
            updateUserWord(userWordId, user.token);
          }
          markPageHard(state, learnt);
        });
      }
    });
  }
};
