import { IWord } from 'api/interfaces';
import { randomNum } from 'pages/Games/utils/randomNum';
import { shuffleWords } from 'pages/Games/utils/shuffleWords';
import { audiocallState } from 'state';

export const updateAudiocallState = () => {
  shuffleWords(audiocallState.pageWords);
  audiocallState.words = audiocallState.pageWords.map((wordObj: IWord) => wordObj.word);
  audiocallState.translates = audiocallState.pageWords.map((wordObj: IWord) => wordObj.wordTranslate);
  audiocallState.responseNumber = audiocallState.words.map(() => randomNum(0, 4));
};
