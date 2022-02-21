import { IUserWordAggregated, IWord } from 'api/interfaces';
import { sprintState } from 'state';
import { GameResultPage } from 'components/GameResultTemplate';
import { createResultWord } from 'components/GameResultTemplate/utils';
import { setDefaultOptionsToSprintState } from 'state/utils';
import { soundResultWordListener } from './utils';
import { getDataBookPage } from 'pages/Book/getDataBookPageBeforeLoad';

export const ResultSprintComponent = {
  listen: () => {
    if (!sprintState?.rightAnswers?.length && !sprintState?.wrongAnswers?.length) {
      location.hash = '/games';
    }
    getDataBookPage();
    const answers = document.querySelector('.answers');
    answers?.addEventListener('click', soundResultWordListener);
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
