import { sprintState } from 'state';
import { updateSprintState } from './../updateSprintState';
import { startTimer } from '../sprintTimer';
import { changeAndCompareText } from '../changeAndCompareText';
import { handleArrowsForSprint, handleBtnsForSprint } from '../handleBtns';
import { getGameData } from 'pages/Games/utils/getGameData';
import { getStorage } from 'pages/LoginAndRegistration';
import { getFilterWords } from 'api';

export const sprintListener = async () => {
  if (getStorage('curPath') !== '/sprint-result') {
    await getGameData('.sprint__answer-text', sprintState);
  } else {
    const user = getStorage('authorizedUser');
    if (user) {
      const userData = await getFilterWords('allUser', user);
      sprintState.userWords = userData && Array.isArray(userData.paginatedResults) ? userData.paginatedResults : [];
    }
  }
  if (!sprintState.pageWords?.length && !sprintState.pageWordsUser?.length) {
    location.hash = '/games';
  }
  updateSprintState();
  const answerBtns = document.querySelector('.sprint__answer-btns');
  sprintState.wordAnswer = changeAndCompareText();
  answerBtns?.addEventListener('click', handleBtnsForSprint);
  document.addEventListener('keyup', handleArrowsForSprint);

  startTimer();
};
