import { IWord } from 'api/interfaces';
import { gameState } from 'state';
import { changeAndCompareText } from '../changeAndCompareText';
import { changeGameScore } from '../changeGameScore';
import { iconAnimation } from '../iconAnimation';

const separateWordsByAnswer = (isRight: boolean, word: IWord | undefined) => {
  if (word) {
    if (isRight) {
      gameState.rightAnswers = [...gameState.rightAnswers, word];
    } else {
      gameState.wrongAnswers = [...gameState.wrongAnswers, word];
    }
  }
};

export const checkAnswer = (answerOfBtn: boolean) => {
  const word = changeAndCompareText();
  const isRight = answerOfBtn === gameState.isRightTranslate;
  gameState.isRightTranslate = word?.isRightTranslate;
  separateWordsByAnswer(isRight, word?.wordObj);
  changeGameScore(isRight);
  iconAnimation(isRight);
};
