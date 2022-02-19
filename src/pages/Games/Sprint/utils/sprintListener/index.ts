import { sprintState } from 'state';
import { updateSprintState } from './../updateSprintState';
import { startTimer } from '../sprintTimer';
import { changeAndCompareText } from '../changeAndCompareText';
import { handleArrowsForSprint, handleBtnsForSprint } from '../handleBtns';
import { getGameData } from 'pages/Games/utils/getGameData';

export const sprintListener = async () => {
  await getGameData('.sprint__answer-text', sprintState);
  if (!sprintState.pageWords.length) {
    location.hash = '/games';
  }
  updateSprintState();
  const answerBtns = document.querySelector('.sprint__answer-btns');
  sprintState.wordAnswer = changeAndCompareText();

  answerBtns?.addEventListener('click', handleBtnsForSprint);
  document.addEventListener('keyup', handleArrowsForSprint);

  startTimer();
};
