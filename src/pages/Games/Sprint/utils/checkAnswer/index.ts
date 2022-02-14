import { gameState } from 'state';
import { changeAndCompareText } from '../changeAndCompareText';
import { changeGameScore } from '../changeGameScore';
import { iconAnimation } from '../iconAnimation';

export const checkAnswer = (answerOfBtn: boolean) => {
  const isRight = answerOfBtn === gameState.isRightTranslate;
  gameState.isRightTranslate = changeAndCompareText();
  changeGameScore(isRight);
  iconAnimation(isRight);
};
