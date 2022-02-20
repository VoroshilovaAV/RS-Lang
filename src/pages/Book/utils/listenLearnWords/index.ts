import { createUserWord, updateUserWord } from 'api';
import { learnt } from 'pages/Book/components';
import { IAuth, IPageWords, IState, IUserWordId } from 'state/interfaces';
import { markPageHard } from '../markedPage';

export const addLearntWord = (currentPage: IPageWords, user: false | IAuth, userWordId: IUserWordId, state: IState) => {
  if (user && currentPage.group !== 6) {
    const checkboxLearnt = document.querySelectorAll('.form-check-input');
    checkboxLearnt.forEach(async (el, i) => {
      if (el instanceof HTMLInputElement) {
        if (
          state.pageUserWords[i].userWord?.difficulty === 'hard' ||
          state.pageUserWords[i].userWord?.optional?.isLearnt === true
        ) {
          el.disabled = true;
        }
        el.addEventListener('change', async () => {
          userWordId.wordId = state.pageUserWords[i]._id;
          userWordId.userId = user.userId;
          const containerWord = document.querySelectorAll('.word-list')[i];
          if (containerWord instanceof HTMLElement && el.checked === true) {
            el.disabled = true;
            containerWord.style.backgroundColor = '#f0b3262a';
            const useWord = state.pageUserWords[i].userWord;
            const option = { ...state.pageUserWords[i].userWord?.optional, ...{ isLearnt: true } };
            userWordId.body = {
              ...state.pageUserWords[i].userWord,
              ...{ optional: option },
            };
            state.pageUserWords[i].userWord = {
              ...state.pageUserWords[i].userWord,
              ...{ optional: option },
            };
            if (useWord) {
              updateUserWord(userWordId, user.token);
              localStorage.setItem('pageUserWords', JSON.stringify(state.pageUserWords));
            } else {
              localStorage.setItem('pageUserWords', JSON.stringify(state.pageUserWords));
              createUserWord(userWordId, user.token);
            }
          }
          markPageHard(state, learnt);
        });
      }
    });
  }
};
