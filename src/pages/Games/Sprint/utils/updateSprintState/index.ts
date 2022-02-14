import { IWord } from 'api/interfaces';
import { shuffleWords } from 'pages/Games/utils/shuffleWords';
import { gameState } from 'state';

export const updateSprintState = () => {
  shuffleWords(gameState.words);
  gameState.translates = gameState.words.map((wordObj: IWord) => wordObj.wordTranslate);
};
