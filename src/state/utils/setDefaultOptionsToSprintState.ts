import { sprintState } from 'state';

export const setDefaultOptionsToSprintState = () => {
  sprintState.score = 0;
  sprintState.series = 0;
  sprintState.longestSeries = 0;
  sprintState.rightAnswers = [];
  sprintState.wrongAnswers = [];
};
