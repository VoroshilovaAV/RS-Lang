import { createUserWord, getUserIdWords, updateUserWord } from 'api';
import { IState } from 'api/interfaces';
import { IAuth, IUserWordId } from 'state/interfaces';

export const getDifficultWord = async (userWordId: IUserWordId, user: false | IAuth, state: IState) => {
  const hardWord = document.querySelectorAll('.hard-word img');
  if (user) {
    hardWord.forEach((item, i: number) => {
      item.addEventListener('click', async () => {
        if (item instanceof HTMLImageElement) {
          const firstSrc = './assets/icons/hard-words.svg';
          const secondSrc = './assets/icons/hard-words-empty.svg';
          if (item.src.indexOf('empty') !== -1) {
            item.src = firstSrc;
            userWordId.wordId = state.pageWords[i].id;
            userWordId.userId = user.userId;
            userWordId.body.difficulty = 'hard';
            const isUserWord = await getUserIdWords(userWordId.userId, user.token);
            if (isUserWord) {
              const wordId = isUserWord.find((el) => el.wordId === userWordId.wordId);
              if (wordId) {
                console.log(userWordId);
                updateUserWord(userWordId, user.token);
              } else {
                console.log(userWordId);
                createUserWord(userWordId, user.token);
              }
            }
          }
        }
      });
    });
  }
};
