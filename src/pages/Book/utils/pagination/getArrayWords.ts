import { getFilterWords, getWords } from 'api';
import { preloadLoad, removePreload } from 'components';
import { getStorage } from 'pages/Book/components';
import { router } from 'router/router';
import { filterParams, state } from 'state';
import { IPageWords } from 'state/interfaces';

export const getArray = async (current: IPageWords, elem: HTMLElement) => {
  preloadLoad(elem);
  const user = getStorage('authorizedUser');
  if (user) {
    const filter = current.group !== 6 ? filterParams.all : filterParams.hard;
    const array = await getFilterWords(filter, user, current);
    if (array) {
      state.pageUserWords = array.paginatedResults;
      localStorage.setItem('pageUserWords', JSON.stringify(state.pageUserWords));
    }
  } else {
    const array = await getWords(current);
    if (array) {
      state.pageWords = array;
      localStorage.setItem('pageWords', JSON.stringify(state.pageWords));
    }
  }
  removePreload(elem);
  router();
};
