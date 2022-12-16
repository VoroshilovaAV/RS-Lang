export const createResultWord = (wordClass: string, word: string, translate: string, wordAudio: string) => {
  return `
  <div class="${wordClass} container d-flex flex-row">
    <button class="word-sound">
      <i class="bi-volume-up" style="font-size: 2rem; color: #808080;"></i>
      <audio src="https://rslang-be-v709.onrender.com/${wordAudio}">
    </button>
    <p class="word">
      <b>${word}</b> - ${translate}
    </p>
  </div>`;
};
