import { getFilterWords, getWords } from 'api';
import { preloadLoad, removePreload } from 'components';
import { router } from 'router/router';
import { state } from 'state';
import { IPageWords } from 'state/interfaces';

export const getArray = async (current: IPageWords, elem: HTMLElement) => {
  preloadLoad(elem);
  if (current.group !== 6) {
    const array = await getWords(current);
    if (array) {
      state.pageWords = array;
      localStorage.setItem('pageWords', JSON.stringify(state.pageWords));
    }
  } else {
    const adar = 'hard';
    const isUserWord = await getFilterWords(adar);
    if (isUserWord) {
      state.pageUserWords = isUserWord.paginatedResults;
    }
  }
  removePreload(elem);
  router();
};
