import { randomNum } from 'pages/Games/utils/randomNum';
import { gameState } from 'state';
import { TRANSLATES_COMPARE_AMOUNT } from '../consts';

const changeHTMLWordsText = (word: string, translate: string) => {
  const wordText = document.querySelector('.sprint__answer-eng');
  const translateText = document.querySelector('.sprint__answer-ru');
  if (wordText) wordText.textContent = word;
  if (translateText) translateText.textContent = translate;
};

export const changeAndCompareText = () => {
  const translatesLengthRemainder = gameState.translates.length - gameState.words.length;
  let restOfTranslatesLength = gameState.translates.length - TRANSLATES_COMPARE_AMOUNT;
  if (translatesLengthRemainder % TRANSLATES_COMPARE_AMOUNT === 0 && translatesLengthRemainder !== 0) {
    const deletedTranslates = gameState.translates.splice(restOfTranslatesLength, TRANSLATES_COMPARE_AMOUNT);
    restOfTranslatesLength = gameState.translates.length - deletedTranslates.length;
  }
  const wordObj = gameState.words.pop();
  const translate = gameState.translates[randomNum(restOfTranslatesLength, gameState.translates.length)];
  if (wordObj && translate) {
    changeHTMLWordsText(wordObj.word, translate);
    return { wordObj, isRightTranslate: wordObj.wordTranslate === translate };
  }
};
