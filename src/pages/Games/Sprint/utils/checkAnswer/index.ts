import { IWord } from 'api/interfaces';
import { sprintState } from 'state';
import { changeAndCompareText } from '../changeAndCompareText';
import { changeGameScore } from '../changeGameScore';
import { iconAnimation } from '../iconAnimation';
import { handleArrowsForSprint } from '../handleBtns';

const separateWordsByAnswer = (isRight: boolean, word: IWord | undefined) => {
  if (word) {
    if (isRight) {
      sprintState.rightAnswers = [...sprintState.rightAnswers, word];
    } else {
      sprintState.wrongAnswers = [...sprintState.wrongAnswers, word];
    }
  }
};

export const checkAnswer = (answerOfBtn: boolean) => {
  const word = changeAndCompareText();
  const isRight = answerOfBtn === sprintState.isRightTranslate;
  sprintState.isRightTranslate = word?.isRightTranslate;
  separateWordsByAnswer(isRight, word?.wordObj);
  changeGameScore(isRight);
  iconAnimation(isRight);
  if (!sprintState.words.length) {
    document.removeEventListener('keyup', handleArrowsForSprint);
    location.hash = '/sprint-result';
  }
};
