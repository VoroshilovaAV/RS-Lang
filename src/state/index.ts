import { IPageWords } from 'api/interfaces';
import { IUserCreated, IAuth, ISprintState } from './interfaces';

export const userCreated: IUserCreated = {
  id: '',
  email: '',
  name: '',
};

export const currentPage: IPageWords = {
  page: 0,
  group: 0,
};

export const authorizedUser: IAuth = {
  message: '',
  token: '',
  refreshToken: '',
  userId: '',
  name: '',
};

export const sprintState: ISprintState = {
  pageWords: [],
  words: [],
  translates: [],
  rightAnswers: [],
  wrongAnswers: [],
  series: 0,
  score: 0,
  longestSeries: 0,
  userWords: [],
  wordAnswer: {
    isRightTranslate: false,
  },
};
