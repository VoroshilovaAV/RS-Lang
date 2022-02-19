import { audiocallState } from 'state';
import { audiocallListener } from '../audiocallListener';

export function gameOverCheck() {
  if (audiocallState.counter < audiocallState.words.length - 1) {
    setTimeout(() => {
      ++audiocallState.counter;
      audiocallListener();
    }, 1500);
  } else {
    location.hash = '/audiocall-result';
  }
}
