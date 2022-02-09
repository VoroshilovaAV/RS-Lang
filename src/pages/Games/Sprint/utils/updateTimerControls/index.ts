import { PERCENTS_IN_SECOND } from '../consts';
import { getRemainingSeconds } from '../remainingSeconds';

export const updateTimerControls = () => {
  const MINUTES = Math.floor(getRemainingSeconds() / 60);
  const SECONDS = getRemainingSeconds() % 60;
  const progressTime: HTMLElement | null = document.querySelector('.progress-time');
  const progressBar: HTMLElement | null = document.querySelector('.progress-bar');

  if (progressTime) {
    progressTime.textContent = `${MINUTES.toString().padStart(2, '0')}:${SECONDS.toString().padStart(2, '0')}`;
  }

  if (progressBar) {
    const width = parseFloat(progressBar.style.width);
    const updatedWidth = width - PERCENTS_IN_SECOND;

    if (updatedWidth > 0) {
      progressBar.style.width = `${updatedWidth}%`;
    } else {
      progressBar.style.width = '0%';
    }
  }
};
