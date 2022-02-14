import { randomNum } from 'pages/Games/utils/randomNum';
import { gameState } from 'state';

const changeHTMLWordsText = (word: string, translate: string) => {
  const wordText = document.querySelector('.sprint__answer-eng');
  const translateText = document.querySelector('.sprint__answer-ru');
  if (wordText) wordText.textContent = word;
  if (translateText) translateText.textContent = translate;
};

export const changeAndCompareText = () => {
  if (
    (gameState.translates.length - gameState.words.length) % 3 === 0 &&
    gameState.translates.length - gameState.words.length !== 0
  ) {
    gameState.translates.splice(gameState.translates.length - 3, 3);
  }
  const wordObj = gameState.words.pop();
  const translate = gameState.translates[randomNum(gameState.translates.length - 3, gameState.translates.length)];
  if (wordObj && translate) {
    changeHTMLWordsText(wordObj.word, translate);
    return wordObj.wordTranslate === translate;
  }
};
