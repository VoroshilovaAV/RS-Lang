import { createUserWord, deleteUserWord, getUserIdWords, updateUserWord } from 'api';
import { IAuth, IState, IUserWordId } from 'state/interfaces';

export const addLearntWord = (user: false | IAuth, userWordId: IUserWordId, state: IState) => {
  if (user) {
    const checkboxLearnt = document.querySelectorAll('.form-check-input');
    checkboxLearnt.forEach(async (el, i) => {
      if (el instanceof HTMLInputElement) {
        el.addEventListener('change', async () => {
          userWordId.wordId = state.pageWords[i].id;
          userWordId.userId = user.userId;

          const containerWord = document.querySelectorAll('.word-list')[i];
          const isUserWord = await getUserIdWords(userWordId.userId, user.token);
          if (containerWord instanceof HTMLElement && el.checked === true) {
            containerWord.style.backgroundColor = '#f0b3262a';
            if (isUserWord) {
              const wordId = isUserWord.find((item) => item.wordId === userWordId.wordId);
              if (wordId) {
                userWordId.body.difficulty = wordId.difficulty;
                userWordId.body.optional.isLearnt = true;
                updateUserWord(userWordId, user.token);
              } else {
                createUserWord(userWordId, user.token);
              }
            }
          }
          if (containerWord instanceof HTMLElement && el.checked !== true) {
            userWordId.body.optional.isLearnt = false;
            containerWord.style.backgroundColor = '#ffffff';
            if (isUserWord) {
              const wordId = isUserWord.find((item) => item.wordId === userWordId.wordId);
              if (wordId && wordId.difficulty === 'hard') {
                userWordId.body.difficulty = wordId.difficulty;
                updateUserWord(userWordId, user.token);
              } else {
                deleteUserWord(userWordId.userId, userWordId.wordId, user.token);
              }
            }
          }
        });
      }
    });
  }
};
