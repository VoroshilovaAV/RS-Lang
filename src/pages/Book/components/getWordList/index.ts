import { IWord, IState, IPageWords, IUserWordAggregated } from 'state/interfaces';
import { getStorage, getTemplate } from '..';
import './style.scss';

export const getWordList = (
  state: IState,
  learnProgress: string,
  hardWords: string,
  hardWordsDelete: string,
  currentPage: IPageWords
) => {
  const root = (word: IUserWordAggregated | IWord) => `<div class="word-list">
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

  if (getStorage('authorizedUser')) {
    if (state.pageUserWords.length < 1) {
      return `<div class="page-empty" style="display: flex; flex-direction: column; align-content: center;"><h3 style = " margin: 0px auto">Отмеченых слов как "сложные" нет</h3><img src="assets/img/empty-page.png" style = "height: 50vh; margin: 0px auto" alt="слов нет"></div>`;
    } else return state.pageUserWords.map((word: IUserWordAggregated) => root(word)).join('');
  } else {
    return state.pageWords.map((word: IWord) => root(word)).join('');
  }
};
