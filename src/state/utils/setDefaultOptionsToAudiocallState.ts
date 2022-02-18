import { audiocallState } from 'state';

export const setDefaultOptionsToAudiocallState = () => {
  audiocallState.score = 0;
  audiocallState.series = 0;
  audiocallState.longestSeries = 0;
  audiocallState.rightAnswers = [];
  audiocallState.wrongAnswers = [];
};
