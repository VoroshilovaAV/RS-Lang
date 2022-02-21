import {
  IUserCreated,
  IAuth,
  IPageWords,
  IState,
  IUserWordId,
  IUserWords,
  IFilterParam,
  ISprintState,
  IAudiocallState,
  IStatistic,
} from './interfaces';

export const userCreated: IUserCreated = {
  id: '',
  email: '',
  name: '',
};

export const filterParams: IFilterParam = {
  hard: 'hard',
  all: 'all',
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
  },
};
export const sprintState: ISprintState = {
  wordsUser: [],
  words: [],
  translates: [],
  rightAnswers: [],
  wrongAnswers: [],
  series: 0,
  score: 0,
  longestSeries: 0,
  wordAnswer: {
    isRightTranslate: false,
  },
};

export const audiocallState: IAudiocallState = {
  wordsUser: [],
  words: [],
  engWords: [],
  translates: [],
  rightAnswers: [],
  wrongAnswers: [],
  series: 0,
  score: 0,
  longestSeries: 0,
  counter: 0,
  responseNumber: [],
  wordAnswer: {
    isRightTranslate: false,
  },
};

export const statsState: IStatistic = {
  learnedWords: 0,
};
