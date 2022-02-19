import { createUserWord, updateUserWord } from 'api';
import { firstSrc, learnt, secondSrc } from 'pages/Book/components';
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
          // markPageHard(state, learnt);
          const containerWord = document.querySelectorAll('.word-list')[i];

          // const wordsMark = document.querySelector('.user-words');
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

            // const countUsersWordLearnt = state.pageUserWords.filter(
            //   (item) => item.userWord?.optional?.isLearnt === true
            // ).length;

            // if (wordsMark) {
            //   wordsMark.innerHTML = countUsersWordLearnt === 19 ? learnt : '';
            // } else {
            //   if (countUsersWordLearnt === 19) {
            //     const element = document.createElement('div');
            //     element.className = 'user-words';
            //     element.innerHTML = learnt;
            //     const parent = document.querySelector('.book__panel-controls');
            //     parent?.appendChild(element);
            //     console.log(element);
            //   }
            // }
            if (useWord) {
              // userWordId.body.optional = { ...{ isLearnt: true }, ...useWord.optional };
              // userWordId.body.optional.isLearnt = true;
              // useWord.optional = { ...{ isLearnt: true }, ...useWord.optional };
              // useWord.difficulty = 'easy';
              // useWord.optional.isLearnt = true;
              // userWordId.body.difficulty = 'easy';
              updateUserWord(userWordId, user.token);
              state.pageUserWords[i].userWord = useWord;
              localStorage.setItem('pageUserWords', JSON.stringify(state.pageUserWords));
            } else {
              // userWordId.body.optional = { isLearnt: true };
              // userWordId.body.difficulty = 'easy';
              // const userParams = { difficulty: 'easy', optional: { isLearnt: true } };
              // state.pageUserWords[i].userWord = userParams;
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
            const userWord = state.pageUserWords[i].userWord;
            if (userWord) {
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
              // userWordId.body.optional = { ...{ isLearnt: false }, ...userWord.optional };
              // userWordId.body.optional.isLearnt = false;
              // userWord.difficulty = 'easy';
              // userWord.optional = { ...{ isLearnt: false }, ...userWord.optional };
              // userWord.optional.isLearnt = false;
              // userWordId.body.difficulty = 'easy';
              localStorage.setItem('pageUserWords', JSON.stringify(state.pageUserWords));
              updateUserWord(userWordId, user.token);
            }
          }
        });
      }
    });
  }
};
