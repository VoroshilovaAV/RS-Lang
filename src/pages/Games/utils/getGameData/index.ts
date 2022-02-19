import { getFilterWords, getWords } from 'api';
import { randomNum } from 'pages/Games/utils/randomNum';
import { getStorage } from 'pages/LoginAndRegistration';
import { preloadLoad, removePreload } from 'components';
import { ISprintState, IAudiocallState } from 'state/interfaces';

export const getGameData = async (selector: string, state: ISprintState | IAudiocallState) => {
  const elPreloader: HTMLElement | null = document.querySelector(selector);
  if (elPreloader) preloadLoad(elPreloader);
  const data = await getWords({ page: randomNum(0, 30), group: Number(sessionStorage.getItem('groupForGame')) });
  state.pageWords = Array.isArray(data) ? data : [];
  const user = getStorage('authorizedUser');
  if (user) {
    const userData = await getFilterWords('allUser', user);
    state.userWords = userData && Array.isArray(userData.paginatedResults) ? userData.paginatedResults : [];
  }
  if (elPreloader) removePreload(elPreloader);
};
