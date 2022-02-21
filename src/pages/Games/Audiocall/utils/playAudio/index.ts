import { baseUrl } from 'api/constants';
import { audiocallState } from 'state';

export const playWordAudio = () => {
  const playAudio = new Audio();
  playAudio.src = `${baseUrl}${audiocallState.pageWords[audiocallState.counter].audio}`;
  playAudio.volume = 0.7;
  playAudio.play();
};
