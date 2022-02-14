import { gameState } from 'state';

const START_POINTS = 10;
let points = START_POINTS;

export const changeGameScore = (isRight: boolean) => {
  if (isRight) {
    gameState.longestSeries++;
    gameState.score += points;

    if (gameState.longestSeries % 3 === 0 && gameState.longestSeries !== 0) {
      gameState.score += gameState.longestSeries * START_POINTS;
      points += 10;
    }
  } else {
    gameState.longestSeries = 0;
    points = START_POINTS;
  }
  const score = document.querySelector('.progress-score');
  if (score) score.textContent = gameState.score.toString();
};
