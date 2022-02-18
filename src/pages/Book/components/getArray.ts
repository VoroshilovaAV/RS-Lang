import { getFilterWords, getWords } from 'api';
import { filterParams } from 'state';
import { IPageWords, IState } from 'state/interfaces';
import { getStorage } from '.';

export const getArrayToPage = async (current: IPageWords, state: IState) => {
  const user = getStorage('authorizedUser');
  if (user) {
    const array =
      current.group === 6
        ? await getFilterWords(filterParams.hard, current, user)
        : await getFilterWords(filterParams.all, current, user);
    if (array) {
      state.pageUserWords = array.paginatedResults;
      localStorage.setItem('pageUserWords', JSON.stringify(state.pageUserWords));
    }
  } else {
    const array = await getWords(current);
    if (array) {
      state.pageWords = array;
      localStorage.setItem('pageWords', JSON.stringify(state.pageWords));
      return state;
    }
  }
};
