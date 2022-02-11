export const listenAudio = () => {
  const audioPlay = document.querySelectorAll('.audio-img');
  audioPlay.forEach((audio) =>
    audio.addEventListener('click', () => {
      const audioPlayed = document.querySelectorAll('.audio-img audio');
      audioPlayed.forEach((isAudioPlay) => {
        if (isAudioPlay instanceof HTMLAudioElement) {
          isAudioPlay.pause();
          isAudioPlay.currentTime = 0;
        }
      });
      const aud = audio.querySelectorAll('audio');
      if (aud[0] instanceof HTMLAudioElement) {
        aud[0].volume = 0.8;
        aud[0].play();
        aud[0].onended = () => aud[1].play();
        aud[1].onended = () => aud[2].play();
      }
    })
  );
};
