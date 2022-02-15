import { IWord } from 'api/interfaces';
import { shuffleWords } from 'pages/Games/utils/shuffleWords';
import { sprintState } from 'state';

export const updateSprintState = () => {
  sprintState.words = JSON.parse(JSON.stringify(sprintState.pageWords));
  shuffleWords(sprintState.words);
  sprintState.translates = sprintState.words.map((wordObj: IWord) => wordObj.wordTranslate);
};
