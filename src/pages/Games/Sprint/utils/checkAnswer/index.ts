import { IUserWordAggregated, IWord } from 'api/interfaces';
import { sprintState } from 'state';
import { changeAndCompareText } from '../changeAndCompareText';
import { changeGameScore } from '../changeGameScore';
import { iconAnimation } from '../iconAnimation';
import { handleArrowsForSprint } from '../handleBtns';
import { sendRequestsForUserWord } from 'pages/Games/utils/sendRequestsForUserWord';
import { getStorage } from 'pages/LoginAndRegistration';

const separateWordsByAnswer = (isRight: boolean, word: IWord | IUserWordAggregated) => {
  if (word) {
    if (isRight) {
      sprintState.rightAnswers = Array.isArray(sprintState.rightAnswers)
        ? [...sprintState.rightAnswers, word]
        : undefined;
    } else {
      sprintState.wrongAnswers = Array.isArray(sprintState.wrongAnswers)
        ? [...sprintState.wrongAnswers, word]
        : undefined;
    }
  }
};

export const checkAnswer = (answerOfBtn: boolean) => {
  const word = changeAndCompareText();
  let isRight = false;
  if (sprintState.wordAnswer) {
    isRight = answerOfBtn === sprintState.wordAnswer.isRightTranslate;
  }
  if (getStorage('authorizedUser')) {
    if (sprintState.wordAnswer && sprintState.wordAnswer.wordObjUser) {
      sendRequestsForUserWord(sprintState.wordAnswer.wordObjUser._id, isRight, 'sprint');
      separateWordsByAnswer(isRight, sprintState.wordAnswer.wordObjUser);
    }
    if (word) sprintState.wordAnswer = { wordObjUser: word.wordObjUser, isRightTranslate: word.isRightTranslate };
    changeGameScore(isRight);
    iconAnimation(isRight);
    if (!sprintState.wordsUser.length) {
      document.removeEventListener('keyup', handleArrowsForSprint);
      location.hash = '/sprint-result';
    }
  } else {
    if (sprintState.wordAnswer && sprintState.wordAnswer.wordObj) {
      separateWordsByAnswer(isRight, sprintState.wordAnswer.wordObj);
    }
    if (word) sprintState.wordAnswer = { wordObj: word.wordObj, isRightTranslate: word.isRightTranslate };
    changeGameScore(isRight);
    iconAnimation(isRight);
    if (!sprintState.words.length) {
      document.removeEventListener('keyup', handleArrowsForSprint);
      location.hash = '/sprint-result';
    }
  }
};
