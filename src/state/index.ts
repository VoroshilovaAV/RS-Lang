import { IUserCreated, IAuth, IPageWords, IState, IUserWordId, IUserWords } from './interfaces';

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
  pageUserWords: [],
};
export const userWords: IUserWords = {
  words: [],
};
export const userWordId: IUserWordId = {
  userId: '',
  wordId: '',
  body: {
    difficulty: 'easy',
    optional: { isLearnt: false },
  },
};
