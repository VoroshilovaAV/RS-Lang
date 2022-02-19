import { IWord } from 'api/interfaces';
import { sprintState } from 'state';
import { changeAndCompareText } from '../changeAndCompareText';
import { changeGameScore } from '../changeGameScore';
import { iconAnimation } from '../iconAnimation';
import { handleArrowsForSprint } from '../handleBtns';
import { sendRequestsForUserWord } from 'pages/Games/utils/sendRequestsForUserWord';

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
  let isRight = false;
  if (sprintState.wordAnswer) {
    isRight = answerOfBtn === sprintState.wordAnswer.isRightTranslate;
  }
  if (sprintState.wordAnswer && sprintState.wordAnswer.wordObj) {
    sendRequestsForUserWord(sprintState.wordAnswer.wordObj.id, isRight, 'sprint');
    separateWordsByAnswer(isRight, sprintState.wordAnswer.wordObj);
  }
  if (word) sprintState.wordAnswer = { wordObj: word.wordObj, isRightTranslate: word.isRightTranslate };
  changeGameScore(isRight);
  iconAnimation(isRight);
  if (!sprintState.words.length) {
    document.removeEventListener('keyup', handleArrowsForSprint);
    location.hash = '/sprint-result';
  }
};
