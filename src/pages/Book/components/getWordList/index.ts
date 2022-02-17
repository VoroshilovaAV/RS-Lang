import { IUserWord, IUserWordAggregated } from 'api/interfaces';
import { IWord, IState, IPageWords } from 'state/interfaces';
import { getTemplate } from '../../utils/constants';
import './style.scss';

export const getWordList = (
  state: IState,
  learnProgress: string,
  hardWords: string,
  hardWordsDelete: string,
  currentPage: IPageWords
) => {
  const root = (word: IUserWordAggregated | IUserWord | IWord) => `<div class="word-list">
                  ${currentPage.group !== 6 ? getTemplate(learnProgress) : ''}
                  <div class="word-image"><img src="https://learnwords-team22.herokuapp.com/${
                    word.image
                  }" alt="изображение слова"></div>
                  <div class="word-list__description">
                    <div class="description-header">
                      <h3>${word.word}</h3>
                      <div class="audio-img">
                        <audio src="https://learnwords-team22.herokuapp.com/${word.audio}">
                        <audio src="https://learnwords-team22.herokuapp.com/${word.audioExample}">
                        <audio src="https://learnwords-team22.herokuapp.com/${word.audioMeaning}">
                      </div>
                      <div class="word-transcription">${word.transcription}</div>
                      ${getTemplate(currentPage.group !== 6 ? hardWords : hardWordsDelete)}
                    </div>
                    <p class="word-translate">${word.wordTranslate}</p>
                    <div class ="usage-example">
                      <div class="word-example">
                        <div class="word-example__en">${word.textExample}</div>
                        <div class="word-example__ru">${word.textExampleTranslate}</div>
                      </div>
                      <div class="sentence-example">
                        <div class="sentence-example__en">${word.textMeaning}</div>
                        <div class="sentence-example__ru">${word.textMeaningTranslate}</div>
                      </div>
                    </div>
                  </div>
                </div>`;

  if (currentPage.group !== 6) return state.pageWords.map((word: IWord) => root(word)).join('');
  else {
    console.log(state.pageUserWords);
    return state.pageUserWords.map((word: IUserWordAggregated | IUserWord) => root(word)).join('');
  }
};
