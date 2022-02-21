import { getStorage } from 'pages/LoginAndRegistration';
import { IUserWordAggregated, IWord } from 'api/interfaces';
import { sprintState, statsState } from 'state';
import { GameResultPage } from 'components/GameResultTemplate';
import { createResultWord } from 'components/GameResultTemplate/utils';
import { setDefaultOptionsToSprintState } from 'state/utils';
import { soundResultWordListener } from './utils';
import { updateUserStatistics } from 'api';

export const ResultSprintComponent = {
  listen: () => {
    if (!sprintState?.rightAnswers?.length && !sprintState?.wrongAnswers?.length) {
      location.hash = '/games';
    }
    const answers = document.querySelector('.answers');
    answers?.addEventListener('click', soundResultWordListener);
    const user = getStorage('authorizedUser');
    if (statsState.optional) statsState.optional.gameStats.sprint.longestSeries = sprintState.longestSeries;
    if (user) updateUserStatistics({ userId: user.userId, statistics: statsState }, user.token);
    setDefaultOptionsToSprintState();
  },
  render: () => {
    const correctHTMLWords = sprintState.rightAnswers?.map((wordObj: IWord | IUserWordAggregated) =>
      createResultWord('correct-word', wordObj.word, wordObj.wordTranslate, wordObj.audio)
    );
    const incorrectHTMLWords = sprintState.wrongAnswers?.map((wordObj: IWord | IUserWordAggregated) =>
      createResultWord('incorrect-word', wordObj.word, wordObj.wordTranslate, wordObj.audio)
    );
    return `${GameResultPage(
      'sprint',
      correctHTMLWords?.join(''),
      incorrectHTMLWords?.join(''),
      sprintState.score,
      sprintState.longestSeries
    )}`;
  },
};
