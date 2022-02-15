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

export interface IState {
  pageWords: IWord[] | [];
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

export interface IState {
  pageWords: IWord[] | [];
}

export interface IUserWords {
  words: IUserWordsGet[] | [];
}

export interface IUserWord {
  difficulty: string;
  optional?: object;
}

export interface IUserWordId {
  userId: string;
  wordId: string;
  body: { difficulty: string; optional: { isLearnt: boolean } };
}

export interface IUserWordsGet {
  difficulty: string;
  id: string;
  optional?: object;
  wordId: string;
}
