import { sprintState } from 'state';
import { updateSprintState } from './../updateSprintState';
import { startTimer } from '../sprintTimer';
import { changeAndCompareText } from '../changeAndCompareText';
import { handleArrowsForSprint, handleBtnsForSprint } from '../handleBtns';

export const sprintListener = () => {
  if (!sprintState.pageWords.length) {
    location.hash = '/games';
  }
  updateSprintState();
  const answerBtns = document.querySelector('.sprint__answer-btns');
  sprintState.isRightTranslate = changeAndCompareText()?.isRightTranslate;

  answerBtns?.addEventListener('click', handleBtnsForSprint);
  document.addEventListener('keyup', handleArrowsForSprint);

  startTimer();
};
