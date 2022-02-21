import { IUserWordAggregated, IWord } from 'api/interfaces';
import { randomNum } from 'pages/Games/utils/randomNum';
import { shuffleWords } from 'pages/Games/utils/shuffleWords';
import { getStorage } from 'pages/LoginAndRegistration';
import { audiocallState } from 'state';

export const updateAudiocallState = () => {
  if (getStorage('authorizedUser')) {
    audiocallState.wordsUser = JSON.parse(JSON.stringify(audiocallState.pageWordsUser));
    shuffleWords(audiocallState.wordsUser);
    audiocallState.engWords = audiocallState.wordsUser.map((wordObj: IUserWordAggregated) => wordObj.word);
    audiocallState.translates = audiocallState.wordsUser.map((wordObj: IUserWordAggregated) => wordObj.wordTranslate);
  } else {
    audiocallState.words = JSON.parse(JSON.stringify(audiocallState.pageWords));
    shuffleWords(audiocallState.words);
    audiocallState.engWords = audiocallState.words.map((wordObj: IWord) => wordObj.word);
    audiocallState.translates = audiocallState.words.map((wordObj: IWord) => wordObj.wordTranslate);
  }
  audiocallState.responseNumber = audiocallState.engWords.map(() => randomNum(0, 4));
};
