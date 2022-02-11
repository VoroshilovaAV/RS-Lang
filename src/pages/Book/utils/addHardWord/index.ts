export const addHardWord = () => {
  const hardWord = document.querySelectorAll('.hard-word img');
  hardWord.forEach((item) =>
    item.addEventListener('click', () => {
      if (item instanceof HTMLImageElement) {
        const firstSrc = './assets/icons/hard-words.svg';
        const secondSrc = './assets/icons/hard-words-empty.svg';
        item.src = item.src !== secondSrc ? secondSrc : firstSrc;
      }
    })
  );
};
