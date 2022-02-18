import { updateUserWord } from 'api';
import { getWordList } from 'pages/Book/components';
import { router } from 'router/router';
import { currentPage, userWordId } from 'state';
import { IAuth, IState } from 'state/interfaces';
import { hardWords, hardWordsDelete, learnProgress } from '../constants';
import { getArray } from '../pagination/getArrayWords';

export const deleteHardWords = async (state: IState, user: IAuth) => {
  const hardWordImage = document.querySelectorAll('.hard-word-delete');
  const currentParent = document.querySelector('.book__wrapper');
  if (currentParent instanceof HTMLElement) {
    if (currentPage.group === 6) {
      if (user) {
        hardWordImage.forEach((img, i: number) => {
          img.addEventListener('click', async () => {
            if (img instanceof HTMLElement) {
              userWordId.wordId = state.pageUserWords[i]._id;
              userWordId.userId = user.userId;
              userWordId.body.difficulty = 'easy';
              await updateUserWord(userWordId, user.token);
              await getArray(currentPage, currentParent);
              // router();
              // const list = document.querySelector('.book__word-list');
              // if (list instanceof HTMLElement) {
              //   list.innerHTML = `${getWordList(state, learnProgress, hardWords, hardWordsDelete, currentPage)}`;
              // }
            }
          });
        });
      }
    }
  }
};
