import { audiocallState } from 'state';
import { gameOverCheck } from '../gameOverCheck';

export function answerAction(currentButton: HTMLElement) {
  const mainWord = document.querySelector('.audiocall-answer');
  if (mainWord) mainWord.classList.remove('hide');
  const answerButtons = document.getElementsByClassName('btn-answer');

  if (Number(currentButton.dataset.answer) === audiocallState.responseNumber[audiocallState.counter]) {
    audiocallState.rightAnswers = [...audiocallState.rightAnswers, audiocallState.pageWords[audiocallState.counter]];
  } else {
    audiocallState.wrongAnswers = [...audiocallState.wrongAnswers, audiocallState.pageWords[audiocallState.counter]];
  }

  Array.from(answerButtons).forEach((el, index) => {
    if (
      Number((<HTMLElement>answerButtons[index]).dataset.answer) !==
      audiocallState.responseNumber[audiocallState.counter]
    ) {
      (<HTMLElement>answerButtons[index]).classList.add('wrong');
      (<HTMLButtonElement>answerButtons[index]).disabled = true;
    }
  });

  gameOverCheck();
}
