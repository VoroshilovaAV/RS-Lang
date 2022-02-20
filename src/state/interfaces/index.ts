export interface IUserCreated {
  email: string;
  id: string;
  name: string;
}

export interface IFilterParam {
  hard: string;
  all: string;
}
export interface IAuth {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
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
  userWord?: IUserWord;
}

export interface IUserWord {
  difficulty?: string;
  optional?: IWordOptionalParams;
}

export interface IGameCount {
  correct: number;
  wrong: number;
}
export interface IWordOptionalParams {
  isLearnt: boolean;
  sprint?: IGameCount;
  audiocall?: IGameCount;
  lastChanged?: string;
  correctSeries?: string;
}

export interface IState {
  pageWords: IWord[] | [];
  pageUserWords: IUserWordAggregated[];
}
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

export interface IPageWords {
  page: number;
  group: number;
}

export interface IUserWords {
  words: IUserWordsGet[] | [];
}

export interface IUserWordId {
  userId: string;
  wordId: string;
  body: IUserWord;
}

export interface IUserWordsGet {
  difficulty: string;
  id: string;
  optional?: IWordOptionalParams;
  wordId: string;
}
