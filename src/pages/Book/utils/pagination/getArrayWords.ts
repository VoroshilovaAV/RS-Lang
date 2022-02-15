import { getWords } from 'api';
import { preloadLoad, removePreload } from 'components';
import { router } from 'router/router';
import { state } from 'state';
import { IPageWords } from 'state/interfaces';

export const getArray = async (current: IPageWords, elem: HTMLElement) => {
  preloadLoad(elem);
  const array = await getWords(current);
  if (array) {
    state.pageWords = array;
    localStorage.setItem('pageWords', JSON.stringify(state.pageWords));
  }
  removePreload(elem);
  router();
};
