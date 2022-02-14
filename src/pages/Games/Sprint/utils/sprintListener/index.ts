import { gameState } from 'state';
import { updateSprintState } from './../updateSprintState';
import { startTimer } from '../sprintTimer';
import { changeAndCompareText } from '../changeAndCompareText';
import { handleArrowsForSprint, handleBtnsForSprint } from '../handleBtns';

export const sprintListener = () => {
  updateSprintState();
  const answerBtns = document.querySelector('.sprint__answer-btns');
  gameState.isRightTranslate = changeAndCompareText();

  answerBtns?.addEventListener('click', handleBtnsForSprint);
  document.addEventListener('keyup', handleArrowsForSprint);

  startTimer();
};
