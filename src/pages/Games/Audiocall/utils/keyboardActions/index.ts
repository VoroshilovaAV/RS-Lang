import { answerAction } from '../answerAction';
import { changeGameScore } from '../changeGameScore';
import { playWordAudio } from '../playAudio';

export const keyboardActions = (e: KeyboardEvent) => {
  const answerButtons = document.getElementsByClassName('btn-answer');
  switch (e.code) {
    case 'Space':
      playWordAudio();
      break;
    case 'Digit1':
      changeGameScore(<HTMLElement>answerButtons[0]);
      answerAction(<HTMLElement>answerButtons[0]);
      break;
    case 'Digit2':
      changeGameScore(<HTMLElement>answerButtons[1]);
      answerAction(<HTMLElement>answerButtons[1]);
      break;
    case 'Digit3':
      changeGameScore(<HTMLElement>answerButtons[2]);
      answerAction(<HTMLElement>answerButtons[2]);
      break;
    case 'Digit4':
      changeGameScore(<HTMLElement>answerButtons[3]);
      answerAction(<HTMLElement>answerButtons[3]);
      break;
    case 'Digit5':
      changeGameScore(<HTMLElement>answerButtons[4]);
      answerAction(<HTMLElement>answerButtons[4]);
      break;
  }
};
