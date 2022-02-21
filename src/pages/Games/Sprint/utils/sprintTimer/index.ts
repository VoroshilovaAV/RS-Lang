import { sprintState } from 'state';
import { checkAnswer } from '../checkAnswer';
import { TIME_DURATION } from '../consts';
import { setRemainingSeconds, getRemainingSeconds } from '../remainingSeconds';
import { updateTimerControls } from '../updateTimerControls';

let interval: ReturnType<typeof setInterval> | number;

export const stopTimer = (timer: ReturnType<typeof setInterval> | number) => {
  setRemainingSeconds(TIME_DURATION);
  if (typeof timer === 'number') clearInterval(timer);
};

export const startTimer = () => {
  interval = setInterval(() => {
    let seconds = getRemainingSeconds();
    seconds--;
    setRemainingSeconds(seconds);
    if (getRemainingSeconds() < 0) {
      if (sprintState.wordAnswer && sprintState.wordAnswer.isRightTranslate) {
        checkAnswer(false);
      } else {
        checkAnswer(true);
      }
      location.hash = '/sprint-result';
      return stopTimer(interval);
    }
    updateTimerControls();
  }, 1000);
};

window.addEventListener('hashchange', () => stopTimer(interval));
