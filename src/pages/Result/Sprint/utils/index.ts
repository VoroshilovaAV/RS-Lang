export const soundResultWordListener = (e: Event) => {
  const wordSoundBtn: HTMLElement | null = e.target instanceof HTMLElement ? e.target.closest('.word-sound') : null;
  if (wordSoundBtn) {
    const audioWord: HTMLAudioElement | null = wordSoundBtn.querySelector('audio');
    if (audioWord) {
      audioWord.volume = 0.8;
      audioWord.play();
    }
  }
};
