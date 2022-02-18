import { currentPage, state } from 'state';
import { getStorage } from '../components';
import { getArrayToPage } from '../components';

export const getDataBookPage = async () => {
  if (getStorage('group')) {
    currentPage.group = getStorage('group');
  }
  if (getStorage('page')) {
    currentPage.page = getStorage('page');
  }
  // await getArrayToPage(currentPage, state);
  getArrayToPage(currentPage, state);
};
