import { gameState } from 'state';
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
    gameState.longestSeries++;
    gameState.score += points;

    if (gameState.longestSeries % ARRAY_NUM_FOR_EXTRA_POINTS === 0 && gameState.longestSeries !== 0) {
      const extraPoints = gameState.longestSeries * START_POINTS;
      gameState.score += extraPoints;
      showExtraPoints(extraPoints);
      points += 10;
    }
  } else {
    gameState.longestSeries = 0;
    points = START_POINTS;
  }
  const score = document.querySelector('.progress-score__basic');
  if (score) score.textContent = gameState.score.toString();
};
