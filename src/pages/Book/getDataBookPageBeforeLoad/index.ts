import { getWords } from 'api';
import { currentPage, state } from 'state';
import { IPageWords } from 'state/interfaces';

export const getDataBookPage = () => {
  const getArray = async (current: IPageWords) => {
    const array = await getWords(current);
    if (array) {
      state.pageWords = array;
      localStorage.setItem('pageWords', JSON.stringify(state.pageWords));
      return state;
    }
  };
  const currentParent = document.querySelector('.main');
  if (!(currentParent instanceof HTMLElement)) {
    throw new Error('error');
  }
  function getStorage(textDataStorage: string) {
    const storage = localStorage.getItem(textDataStorage);
    if (storage) {
      return JSON.parse(storage);
    } else return false;
  }
  if (getStorage('group')) {
    currentPage.group = getStorage('group');
  }
  if (getStorage('page')) {
    currentPage.page = getStorage('page');
  }
  getArray(currentPage);
};
