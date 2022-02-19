import { getStorage } from 'pages/LoginAndRegistration';
import { IUserWordAggregated, IWord } from 'api/interfaces';
import { shuffleWords } from 'pages/Games/utils/shuffleWords';
import { sprintState } from 'state';

export const updateSprintState = () => {
  if (getStorage('authorizedUser')) {
    console.log(sprintState.pageWordsUser);
    sprintState.wordsUser = JSON.parse(JSON.stringify(sprintState.pageWordsUser));
    shuffleWords(sprintState.wordsUser);
    sprintState.translates = sprintState.wordsUser.map((wordObj: IUserWordAggregated) => wordObj.wordTranslate);
  } else {
    sprintState.words = JSON.parse(JSON.stringify(sprintState.pageWords));
    shuffleWords(sprintState.words);
    sprintState.translates = sprintState.words.map((wordObj: IWord) => wordObj.wordTranslate);
  }
};
