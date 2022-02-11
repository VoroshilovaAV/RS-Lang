import { IUserCreated, IAuth, IPageWords, IState } from './interfaces';

export const userCreated: IUserCreated = {
  id: '',
  email: '',
  name: '',
};

export const authorizedUser: IAuth = {
  message: '',
  token: '',
  refreshToken: '',
  userId: '',
  name: '',
};

export const currentPage: IPageWords = {
  page: 0,
  group: 0,
};
export const state: IState = {
  pageWords: [],
  currentChapter: 1,
  currentPage: 1,
};
