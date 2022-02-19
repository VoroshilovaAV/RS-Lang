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

export interface ISprintState {
  pageWords: IWord[] | [];
  words: IWord[] | [];
  translates: string[] | [];
  rightAnswers: IWord[] | [];
  wrongAnswers: IWord[] | [];
  score: number;
  series: number;
  longestSeries: number;
  isRightTranslate?: boolean;
}

export interface IAudiocallState {
  pageWords: IWord[] | [];
  words: string[] | [];
  translates: string[] | [];
  rightAnswers: IWord[] | [];
  wrongAnswers: IWord[] | [];
  score: number;
  series: number;
  longestSeries: number;
  counter: number;
  responseNumber: number[] | [];
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
