import { createUserWord, getUserStatistics, updateUserStatistics, updateUserWord } from 'api';
import { learnt, secondSrc } from 'pages/Book/components';
import { IAuth, IPageWords, IState, IUserWordId } from 'state/interfaces';
import { markPageHard } from '../markedPage';

export const addLearntWord = (currentPage: IPageWords, user: false | IAuth, userWordId: IUserWordId, state: IState) => {
  if (user && currentPage.group !== 6) {
    const checkboxLearnt = document.querySelectorAll('.form-check-input');
    checkboxLearnt.forEach(async (el, i) => {
      if (el instanceof HTMLInputElement) {
        if (state.pageUserWords[i].userWord?.optional?.isLearnt === true) {
          el.disabled = true;
        }
        el.addEventListener('change', async () => {
          userWordId.wordId = state.pageUserWords[i]._id;
          userWordId.userId = user.userId;
          const containerWord = document.querySelectorAll('.word-list')[i];
          if (containerWord instanceof HTMLElement && el.checked === true) {
            const hardWord = document.querySelectorAll('.hard-word img')[i];
            if (hardWord instanceof HTMLImageElement) {
              hardWord.src = secondSrc;
            }
            el.disabled = true;
            containerWord.style.backgroundColor = '#f0b3262a';
            const useWord = state.pageUserWords[i].userWord;
            const date = new Date();
            const curFullDate = [date.getDate(), String(date.getMonth() + 1).padStart(2, '0'), date.getFullYear()].join(
              '.'
            );
            const option = {
              ...state.pageUserWords[i].userWord?.optional,
              ...{ isLearnt: true },
              ...{ lastChanged: curFullDate },
            };
            userWordId.body = {
              ...state.pageUserWords[i].userWord,
              ...{ difficulty: 'easy' },
              ...{ optional: option },
            };
            state.pageUserWords[i].userWord = {
              ...state.pageUserWords[i].userWord,
              ...{ difficulty: 'easy' },
              ...{ optional: option },
            };
            if (useWord) {
              updateUserWord(userWordId, user.token);
              localStorage.setItem('pageUserWords', JSON.stringify(state.pageUserWords));
            } else {
              localStorage.setItem('pageUserWords', JSON.stringify(state.pageUserWords));
              createUserWord(userWordId, user.token);
            }
            const statistics = await getUserStatistics(user.userId, user.token);
            if (statistics) {
              statistics.learnedWords = +1;
              const userId = user.userId;
              const statistic = {
                userId,
                statistics: {
                  learnedWords: statistics.learnedWords,
                  optional: JSON.parse(JSON.stringify(statistics.optional)),
                },
              };
              await updateUserStatistics(statistic, user.token);
            }
          }
          markPageHard(state, learnt);
        });
      }
    });
  }
};
