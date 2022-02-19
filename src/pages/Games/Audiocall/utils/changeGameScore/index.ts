import { ARRAY_NUM_FOR_EXTRA_POINTS, START_POINTS } from 'pages/Games/Sprint/utils/consts';
import { showExtraPoints } from 'pages/Games/utils/showExtraPoints';
import { audiocallState } from 'state';

let points = START_POINTS;

export const changeGameScore = (currentButton: HTMLElement) => {
  if (Number(currentButton.dataset.answer) === audiocallState.responseNumber[audiocallState.counter]) {
    audiocallState.series++;
    if (audiocallState.series > audiocallState.longestSeries) audiocallState.longestSeries = audiocallState.series;
    audiocallState.score += points;

    if (audiocallState.series % ARRAY_NUM_FOR_EXTRA_POINTS === 0 && audiocallState.series !== 0) {
      const extraPoints = audiocallState.series * START_POINTS;
      audiocallState.score += extraPoints;
      showExtraPoints(extraPoints);
      points += START_POINTS;
    }
  } else {
    audiocallState.series = 0;
    points = START_POINTS;
  }
  const score = document.querySelector('.progress-score__basic');
  if (score) score.textContent = audiocallState.score.toString();
};
