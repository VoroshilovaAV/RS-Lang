import { baseUrl } from 'api/constants';
import { getStorage } from 'pages/LoginAndRegistration';
import { audiocallState } from 'state';

export const playWordAudio = () => {
  const playAudio = new Audio();
  if (audiocallState.words || audiocallState.wordsUser) {
    playAudio.src = getStorage('authorizedUser')
      ? `${baseUrl}${audiocallState.wordsUser[audiocallState.counter].audio}`
      : `${baseUrl}${audiocallState.words[audiocallState.counter].audio}`;
  }
  playAudio.volume = 0.7;
  playAudio.play();
};
