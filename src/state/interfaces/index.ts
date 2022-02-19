import { IUserWord, IUserWordAggregated } from 'api/interfaces';

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
  currentChapter: number;
  currentPage: number;
}

export interface IWordAnswer {
  wordObj?: IWord;
  wordObjUser?: IUserWordAggregated;
  isRightTranslate: boolean;
}

export interface ISprintState {
  pageWords?: IWord[] | [];
  pageWordsUser?: IUserWordAggregated[] | [];
  wordsUser: IUserWordAggregated[] | [];
  words: IWord[] | [];
  translates: string[] | [];
  rightAnswers: (IWord | IUserWordAggregated)[] | undefined;
  wrongAnswers: (IWord | IUserWordAggregated)[] | undefined;
  score: number;
  series: number;
  longestSeries: number;
  userWords?: IUserWordAggregated[] | IUserWord[];
  wordAnswer?: IWordAnswer;
}

export interface IAudiocallState {
  pageWords: IWord[] | [];
  pageWordsUser?: IUserWordAggregated[] | [];
  words: string[] | [];
  translates: string[] | [];
  rightAnswers: IWord[] | [];
  wrongAnswers: IWord[] | [];
  score: number;
  series: number;
  longestSeries: number;
  counter: number;
  responseNumber: number[] | [];
  userWords?: IUserWordAggregated[] | IUserWord[];
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
