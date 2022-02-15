import { getUserIdWords } from 'api';
import { getStorage } from 'pages/Book/components';
import { IAuth } from 'state/interfaces';
import { getWordList } from './getPage';

export const DictionaryComponent = {
  listen: async () => {
    const users = getStorage('authorizedUser');
    if (users) {
      const wordsUser = await getUserIdWords(users.userId, users.token);
      console.log(wordsUser); // filter
    }
    const getUserWords = async (user: false | IAuth) => {
      if (user) {
        const wordsUser = await getUserIdWords(user.userId, user.token);
        if (wordsUser) {
          console.log(wordsUser);
          // // wordsUser.forEach((el, i: number) => {
          // wordsUser.forEach((word) => {
          //   if (el.id === word.wordId && word.optional.isLearnt) {
          //     // filter
          //     const containerWord = document.querySelectorAll('.word-list')[i];
          //     const checkboxLearnt = document.querySelectorAll('.form-check-input')[i];
          //     if (containerWord instanceof HTMLElement && checkboxLearnt instanceof HTMLInputElement) {
          //       containerWord.style.backgroundColor = '#f0b3262a';
          //       checkboxLearnt.checked = true;
          //     }
          //   }
          //   if (el.id === word.wordId && word.difficulty === 'hard') {
          //     // filter;
          //     const imageHardWord = document.querySelectorAll('.hard-word img')[i];
          //     if (imageHardWord instanceof HTMLImageElement) {
          //       const firstSrc = './assets/icons/hard-words.svg';
          //       imageHardWord.src = firstSrc;
          //     }
          //   }
          // });
          // });
        }
      }
    };

    // const user = getStorage('authorizedUser');
    // const tooltipTriggerList = [].slice.call(document.querySelectorAll('.main [data-bs-toggle="tooltip"]'));
    // tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    //   new bootstrap.Tooltip(tooltipTriggerEl, { trigger: 'hover' });
    // });
    // getUserWords(state, user);
    // listenPagination(currentPage);
    // listenAudio();
    // getDifficultWord(userWordId, user, state);
    // addLearntWord(user, userWordId, state);
  },
  render: () => ``,
  //     `<div class="book">
  //       <div class="book__wrapper">
  //         <div class="book__word-list">
  //           ${getWordList(wordsUser)}
  //         </div>
  //       </div>
  //     </div>`;
};
