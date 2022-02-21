import { updateUserStatistics } from 'api';
import { IWord } from 'api/interfaces';
import { GameResultPage } from 'components/GameResultTemplate';
import { createResultWord } from 'components/GameResultTemplate/utils';
import { getStorage } from 'pages/LoginAndRegistration';
import { audiocallState, statsState } from 'state';
import { setDefaultOptionsToAudiocallState } from 'state/utils/setDefaultOptionsToAudiocallState';
import { soundResultWordListener } from '../Sprint/utils';

export const ResultAudiocallComponent = {
  listen: () => {
    if (!audiocallState.rightAnswers.length && !audiocallState.wrongAnswers.length) {
      location.hash = '/games';
    }
    const answers = document.querySelector('.answers');
    answers?.addEventListener('click', soundResultWordListener);
    const user = getStorage('authorizedUser');
    if (statsState.optional) statsState.optional.gameStats.sprint.longestSeries = audiocallState.longestSeries;
    if (user) updateUserStatistics({ userId: user.userId, statistics: statsState }, user.token);
    setDefaultOptionsToAudiocallState();
  },
  render: () => {
    const correctHTMLWords = audiocallState.rightAnswers.map((wordObj: IWord) =>
      createResultWord('correct-word', wordObj.word, wordObj.wordTranslate, wordObj.audio)
    );
    const incorrectHTMLWords = audiocallState.wrongAnswers.map((wordObj: IWord) =>
      createResultWord('incorrect-word', wordObj.word, wordObj.wordTranslate, wordObj.audio)
    );
    return `${GameResultPage(
      'audiocall',
      correctHTMLWords.join(''),
      incorrectHTMLWords.join(''),
      audiocallState.score,
      audiocallState.longestSeries
    )}`;
  },
};
