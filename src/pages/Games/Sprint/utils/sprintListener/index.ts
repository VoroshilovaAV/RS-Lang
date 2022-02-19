import { sprintState } from 'state';
import { updateSprintState } from './../updateSprintState';
import { startTimer } from '../sprintTimer';
import { changeAndCompareText } from '../changeAndCompareText';
import { handleArrowsForSprint, handleBtnsForSprint } from '../handleBtns';
import { getGameData } from 'pages/Games/utils/getGameData';

export const sprintListener = async () => {
  await getGameData('.sprint__answer-text', sprintState);
  if (!sprintState.pageWords?.length && !sprintState.pageWordsUser?.length) {
    console.log(sprintState.pageWords);
    location.hash = '/games';
  }
  updateSprintState();
  const answerBtns = document.querySelector('.sprint__answer-btns');
  sprintState.wordAnswer = changeAndCompareText();
  console.log(sprintState.wordAnswer);
  answerBtns?.addEventListener('click', handleBtnsForSprint);
  document.addEventListener('keyup', handleArrowsForSprint);

  startTimer();
};
