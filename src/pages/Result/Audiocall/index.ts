import { updateUserStatistics } from 'api';
import { IUserWordAggregated, IWord } from 'api/interfaces';
import { GameResultPage } from 'components/GameResultTemplate';
import { createResultWord } from 'components/GameResultTemplate/utils';
import { getDataBookPage } from 'pages/Book/getDataBookPageBeforeLoad';
import { getStorage } from 'pages/LoginAndRegistration';
import { audiocallState, statsState } from 'state';
import { setDefaultOptionsToAudiocallState } from 'state/utils/setDefaultOptionsToAudiocallState';
import { soundResultWordListener } from '../Sprint/utils';

export const ResultAudiocallComponent = {
  listen: () => {
    if (!audiocallState?.rightAnswers?.length && !audiocallState?.wrongAnswers?.length) {
      location.hash = '/games';
    }
    getDataBookPage();
    const answers = document.querySelector('.answers');
    answers?.addEventListener('click', soundResultWordListener);
    const user = getStorage('authorizedUser');
    if (statsState.optional) statsState.optional.gameStats.audiocall.longestSeries = audiocallState.longestSeries;
    if (user) updateUserStatistics({ userId: user.userId, statistics: statsState }, user.token);
    setDefaultOptionsToAudiocallState();
  },
  render: () => {
    const correctHTMLWords = audiocallState.rightAnswers?.map((wordObj: IWord | IUserWordAggregated) =>
      createResultWord('correct-word', wordObj.word, wordObj.wordTranslate, wordObj.audio)
    );
    const incorrectHTMLWords = audiocallState.wrongAnswers?.map((wordObj: IWord | IUserWordAggregated) =>
      createResultWord('incorrect-word', wordObj.word, wordObj.wordTranslate, wordObj.audio)
    );
    return `${GameResultPage(
      'audiocall',
      correctHTMLWords?.join(''),
      incorrectHTMLWords?.join(''),
      audiocallState.score,
      audiocallState.longestSeries
    )}`;
  },
};
