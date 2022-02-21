import { AudiocallAnswerButtons } from 'components/AudiocallAnswerButton';
import { shuffleWords } from 'pages/Games/utils/shuffleWords';
import { audiocallState } from 'state';

export const getWordsOnPage = () => {
  const mainWord = document.querySelector('.audiocall-answer');
  const variantsBlock = document.querySelector('.variants');
  let variantsArray: Array<string> = [];

  if (mainWord) mainWord.innerHTML = audiocallState.engWords[audiocallState.counter];
  if (mainWord) mainWord.classList.add('hide');

  const cloneTlansatesArray = audiocallState.translates.slice();
  shuffleWords(cloneTlansatesArray);
  cloneTlansatesArray.splice(cloneTlansatesArray.indexOf(audiocallState.translates[audiocallState.counter]), 1);
  variantsArray = cloneTlansatesArray.splice(0, 4);
  variantsArray.splice(
    audiocallState.responseNumber[audiocallState.counter],
    0,
    audiocallState.translates[audiocallState.counter]
  );
  if (variantsBlock) variantsBlock.innerHTML = AudiocallAnswerButtons(variantsArray);
};
