import { getWords } from 'api';
import { router } from 'router/router';
import { currentPage, state } from 'state';
import { IPageWords } from 'state/interfaces';

export const getArray = async (current: IPageWords) => {
  const array = await getWords(current);
  if (array) {
    state.pageWords = array;
  }
  state.currentPage = currentPage.page;
  router();
};
