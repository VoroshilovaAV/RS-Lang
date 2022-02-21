import { IUserWordAggregated, IWord } from 'api/interfaces';
import { sendRequestsForUserWord } from 'pages/Games/utils/sendRequestsForUserWord';
import { getStorage } from 'pages/LoginAndRegistration';
import { audiocallState } from 'state';
import { gameOverCheck } from '../gameOverCheck';

const separateWordsByAnswer = (isRight: boolean, word: IWord | IUserWordAggregated) => {
  if (word) {
    if (isRight) {
      audiocallState.rightAnswers = Array.isArray(audiocallState.rightAnswers)
        ? [...audiocallState.rightAnswers, word]
        : undefined;
    } else {
      audiocallState.wrongAnswers = Array.isArray(audiocallState.wrongAnswers)
        ? [...audiocallState.wrongAnswers, word]
        : undefined;
    }
  }
};

export function answerAction(currentButton: HTMLElement) {
  const mainWord = document.querySelector('.audiocall-answer');
  if (mainWord) mainWord.classList.remove('hide');
  const answerButtons = document.getElementsByClassName('btn-answer');
  const wordObj = audiocallState.words[audiocallState.counter];
  const wordObjUser: IUserWordAggregated = audiocallState.wordsUser[audiocallState.counter];

  audiocallState.wordAnswer = getStorage('authorizedUser')
    ? { wordObjUser, isRightTranslate: false }
    : (audiocallState.wordAnswer = { wordObj, isRightTranslate: false });

  Array.from(answerButtons).forEach((el, index) => {
    if (
      Number((<HTMLElement>answerButtons[index]).dataset.answer) !==
      audiocallState.responseNumber[audiocallState.counter]
    ) {
      (<HTMLElement>answerButtons[index]).classList.add('wrong');
    } else {
      (<HTMLElement>answerButtons[index]).classList.add('highlight-answer');
    }
    (<HTMLButtonElement>answerButtons[index]).disabled = true;
  });

  if (Number(currentButton.dataset.answer) === audiocallState.responseNumber[audiocallState.counter]) {
    if (audiocallState.wordAnswer) audiocallState.wordAnswer.isRightTranslate = true;
  }

  if (getStorage('authorizedUser')) {
    if (audiocallState.wordAnswer && audiocallState.wordAnswer.wordObjUser) {
      sendRequestsForUserWord(
        audiocallState.wordAnswer.wordObjUser._id,
        audiocallState.wordAnswer.isRightTranslate,
        'audiocall'
      );
      separateWordsByAnswer(audiocallState.wordAnswer.isRightTranslate, audiocallState.wordAnswer.wordObjUser);
    }
  } else {
    if (audiocallState.wordAnswer && audiocallState.wordAnswer.wordObj) {
      sendRequestsForUserWord(
        audiocallState.wordAnswer.wordObj.id,
        audiocallState.wordAnswer.isRightTranslate,
        'audiocall'
      );
      separateWordsByAnswer(audiocallState.wordAnswer.isRightTranslate, audiocallState.wordAnswer.wordObj);
    }
  }

  gameOverCheck();
}
