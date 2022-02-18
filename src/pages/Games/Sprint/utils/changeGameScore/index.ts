import { sprintState } from 'state';
import { ARRAY_NUM_FOR_EXTRA_POINTS, START_POINTS } from '../consts';

let points = START_POINTS;

const showExtraPoints = (extraPoints: number) => {
  const extraPointsText = document.querySelector('.progress-score__extra');
  extraPointsText?.classList.remove('progress-score__extra_hide');
  extraPointsText?.classList.add('progress-score__extra_show');
  if (extraPointsText) extraPointsText.textContent = `+${extraPoints}`;
  setTimeout(() => {
    extraPointsText?.classList.remove('progress-score__extra_show');
    extraPointsText?.classList.add('progress-score__extra_hide');
  }, 1500);
};

export const changeGameScore = (isRight: boolean) => {
  if (isRight) {
    sprintState.series++;
    if (sprintState.series > sprintState.longestSeries) sprintState.longestSeries = sprintState.series;
    sprintState.score += points;

    if (sprintState.series % ARRAY_NUM_FOR_EXTRA_POINTS === 0 && sprintState.series !== 0) {
      const extraPoints = sprintState.series * START_POINTS;
      sprintState.score += extraPoints;
      showExtraPoints(extraPoints);
      points += START_POINTS;
    }
  } else {
    sprintState.series = 0;
    points = START_POINTS;
  }
  const score = document.querySelector('.progress-score__basic');
  if (score) score.textContent = sprintState.score.toString();
};
