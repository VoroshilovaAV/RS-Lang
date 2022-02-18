import { createUserWord, updateUserWord } from 'api';
import { IAuth, IPageWords, IState, IUserWordId } from 'state/interfaces';

export const addLearntWord = (currentPage: IPageWords, user: false | IAuth, userWordId: IUserWordId, state: IState) => {
  if (user && currentPage.group !== 6) {
    const checkboxLearnt = document.querySelectorAll('.form-check-input');
    checkboxLearnt.forEach(async (el, i) => {
      if (el instanceof HTMLInputElement) {
        el.addEventListener('change', async () => {
          userWordId.wordId = state.pageUserWords[i]._id;
          userWordId.userId = user.userId;
          const containerWord = document.querySelectorAll('.word-list')[i];
          if (containerWord instanceof HTMLElement && el.checked === true) {
            const imageHardWord = document.querySelectorAll('.hard-word img')[i];
            if (imageHardWord instanceof HTMLImageElement) {
              const firstSrc = './assets/icons/hard-words-empty.svg';
              imageHardWord.src = firstSrc;
            }
            containerWord.style.backgroundColor = '#f0b3262a';
            const useWord = state.pageUserWords[i].userWord;
            if (useWord) {
              userWordId.body.optional = { ...{ isLearnt: true }, ...useWord.optional };
              userWordId.body.optional.isLearnt = true;
              useWord.optional = { ...{ isLearnt: true }, ...useWord.optional };
              useWord.difficulty = 'easy';
              useWord.optional.isLearnt = true;
              userWordId.body.difficulty = 'easy';
              updateUserWord(userWordId, user.token);
              state.pageUserWords[i].userWord = useWord;
            } else {
              userWordId.body.optional = { isLearnt: true };
              userWordId.body.difficulty = 'easy';
              const userParams = { difficulty: 'easy', optional: { isLearnt: true } };
              state.pageUserWords[i].userWord = userParams;
              localStorage.setItem('pageUserWords', JSON.stringify(state.pageUserWords));
              createUserWord(userWordId, user.token);
            }
          }
          if (containerWord instanceof HTMLElement && el.checked !== true) {
            containerWord.style.backgroundColor = '#ffffff';
            const userWord = state.pageUserWords[i].userWord;
            if (userWord) {
              userWordId.body.optional = { ...{ isLearnt: false }, ...userWord.optional };
              userWordId.body.optional.isLearnt = false;
              userWord.difficulty = 'easy';
              userWord.optional = { ...{ isLearnt: false }, ...userWord.optional };
              userWord.optional.isLearnt = false;
              userWordId.body.difficulty = 'easy';
              updateUserWord(userWordId, user.token);
            }
          }
        });
      }
    });
  }
};
