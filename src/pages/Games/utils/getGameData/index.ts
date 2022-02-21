import { getFilterWords, getUserStatistics, getWords } from 'api';
import { randomNum } from 'pages/Games/utils/randomNum';
import { getStorage } from 'pages/LoginAndRegistration';
import { preloadLoad, removePreload } from 'components';
import { ISprintState, IAudiocallState, IStatistic } from 'state/interfaces';
import { currentPage, statsState } from 'state';
import { IUsersWords, IWord, IUserWordAggregated } from 'api/interfaces';
import { createStats } from 'pages/Stats/utils/getStatsRequest';

export const getGameData = async (selector: string, state: ISprintState | IAudiocallState) => {
  const elPreloader: HTMLElement | null = document.querySelector(selector);
  if (elPreloader) preloadLoad(elPreloader);
  let data: IWord[] | void;
  let dataUser: IUserWordAggregated[] = [];
  const user = getStorage('authorizedUser');
  const page = getStorage('page') ? getStorage('page') : currentPage.page;
  const group = getStorage('group') ? getStorage('group') : currentPage.group;
  if (getStorage('curPath') === '/book') {
    if (user) {
      const notLearnedWords = await getFilterWords('notLearned', user, { page, group });
      if (notLearnedWords) dataUser = notLearnedWords.paginatedResults;
      if (notLearnedWords && !Array.isArray(notLearnedWords) && notLearnedWords.totalCount[0].count < 20) {
        const restWordsAmount = 20 - notLearnedWords.totalCount[0].count;
        const restWords: IUsersWords | void = await getFilterWords(
          'rest',
          user,
          { page: randomNum(0, 30), group: randomNum(0, 6) },
          restWordsAmount
        );
        if (restWords) dataUser = [...notLearnedWords.paginatedResults, ...restWords.paginatedResults];
      }
      state.pageWordsUser = dataUser;
    } else {
      data = await getWords({ page, group });
    }
  } else {
    if (user) {
      const dataPerMenu = await getFilterWords('all', user, {
        page: randomNum(0, 30),
        group: Number(sessionStorage.getItem('groupForGame')),
      });
      if (dataPerMenu) dataUser = dataPerMenu.paginatedResults;
    } else {
      data = await getWords({ page: randomNum(0, 30), group: Number(sessionStorage.getItem('groupForGame')) });
    }
  }
  state.pageWordsUser = Array.isArray(dataUser) ? dataUser : [];
  state.pageWords = Array.isArray(data) ? data : [];
  if (user) {
    const response: IStatistic | void = await getUserStatistics(user.userId, user.token);
    if (response) {
      statsState.learnedWords = response.learnedWords;
      console.log(response.optional);
      statsState.optional = JSON.parse(JSON.stringify(response.optional));
    } else {
      const responseCreateStats = await createStats(user);
      if (responseCreateStats)
        statsState.optional = JSON.parse(JSON.stringify(responseCreateStats.statistics.optional));
    }
    console.log(statsState);
    const userData = await getFilterWords('allUser', user);
    state.userWords = userData && Array.isArray(userData.paginatedResults) ? userData.paginatedResults : [];
  }
  if (elPreloader) removePreload(elPreloader);
};
