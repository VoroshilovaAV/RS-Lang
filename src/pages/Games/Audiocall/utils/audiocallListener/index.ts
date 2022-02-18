import { answerAction } from '../answerAction';
import { changeGameScore } from '../changeGameScore';
import { keyboardActions } from '../keyboardActions';
import { playWordAudio } from '../playAudio';
import { getWordsOnPage } from '../updateWords';

export const audiocallListener = () => {
  getWordsOnPage();
  playWordAudio();
  const playAudioButton = document.querySelector('.audiocall-button-img');
  const answerButtons = document.getElementsByClassName('btn-answer');
  if (playAudioButton) playAudioButton.addEventListener('click', playWordAudio);
  Array.from(answerButtons).forEach((el) =>
    el.addEventListener('click', () => {
      changeGameScore(<HTMLElement>el);
      answerAction(<HTMLElement>el);
    })
  );
  document.addEventListener('keydown', keyboardActions);
};
