export interface IWord {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

export interface IUserWordAggregated {
  _id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
  userWord: IUserWordParams;
}

export interface IUserWord {
  _id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

export interface IUserWordParams {
  difficulty: string;
  optional?: { isLearnt: boolean };
}

export interface IStatistic {
  learnedWords: number;
  optional?: object;
}

export interface ISetting {
  wordsPerDay: number;
  optional?: object;
}

export interface IGetNewToken {
  token: string;
  refreshToken: string;
}
export interface IUser {
  email: string;
  password: string;
  name?: string;
}

export interface IUserCreated {
  email: string;
  id: string;
  name: string;
}

export interface IAuth {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export interface IUserWordId {
  userId: string;
  wordId: string;
  body: { difficulty: string; optional: { isLearnt: boolean } };
}

export interface IStatisticUser {
  userId: string;
  statistics: IStatistic;
}

export interface ISettingsUser {
  userId: string;
  settings: ISetting;
}

export interface IAggregateWords {
  userId: string;
  group?: number;
  wordsPerPage: number;
}
export interface IUserWordsGet {
  difficulty: string;
  id: string;
  optional: { isLearnt: boolean };
  wordId: string;
}

export interface IPageWords {
  page: number;
  group: number;
}

export interface IState {
  pageWords: IWord[] | [];
}

export interface IUsersWords {
  paginatedResults: IUserWordAggregated[] | IUserWord[];
  totalCount: {
    count: number;
  };
}
