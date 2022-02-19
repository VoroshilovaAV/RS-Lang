import { sprintState } from 'state';
import { updateSprintState } from './../updateSprintState';
import { startTimer } from '../sprintTimer';
import { changeAndCompareText } from '../changeAndCompareText';
import { handleArrowsForSprint, handleBtnsForSprint } from '../handleBtns';
import { getFilterWords, getWords } from 'api';
import { randomNum } from 'pages/Games/utils/randomNum';
import { getStorage } from 'pages/LoginAndRegistration';
import { preloadLoad, removePreload } from 'components';

export const sprintListener = async () => {
  const elPreloader: HTMLElement | null = document.querySelector('.sprint__answer-text');
  if (elPreloader) preloadLoad(elPreloader);
  const data = await getWords({ page: randomNum(0, 30), group: Number(sessionStorage.getItem('groupForGame')) });
  sprintState.pageWords = Array.isArray(data) ? data : [];
  const user = getStorage('authorizedUser');
  if (user) {
    const userData = await getFilterWords('allUser', user);
    sprintState.userWords = userData && Array.isArray(userData.paginatedResults) ? userData.paginatedResults : [];
  }
  if (elPreloader) removePreload(elPreloader);
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
