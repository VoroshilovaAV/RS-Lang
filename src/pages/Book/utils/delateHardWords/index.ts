import { updateUserWord } from 'api';
import { currentPage, userWordId } from 'state';
import { IAuth, IState } from 'state/interfaces';
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
              userWordId.body = { ...state.pageUserWords[i].userWord };
              userWordId.body.difficulty = 'easy';

              await updateUserWord(userWordId, user.token);
              await getArray(currentPage, currentParent);
            }
          });
        });
      }
    }
  }
};
