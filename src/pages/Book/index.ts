import { eventNone, getPaginationNav, hardWords, hardWordsDelete, learnProgress } from './components';
import { currentPage, state, userWordId } from 'state';
import * as bootstrap from 'bootstrap';
import { isAllWords, listenPagination } from './utils';
import { getWordList } from './components';
import { listenAudio } from './utils';
import { getDifficultWord } from './utils';
import { getStorage } from './components';
import { addLearntWord, deleteHardWords, getUserWords } from './utils';
import './style.scss';
import { isAllUsersWord } from './utils';

export const BookComponent = {
  listen: async () => {
    const user = getStorage('authorizedUser');
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('.main [data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl, { trigger: 'hover' });
    });
    getUserWords(currentPage, state, user);
    deleteHardWords(state, user);
    listenAudio();
    getDifficultWord(userWordId, user, state);
    addLearntWord(currentPage, user, userWordId, state);
    listenPagination(currentPage);
  },
  render: () =>
    `<div class="book">
      <div class="book__wrapper">
        <div class="book__header">
          <h2 class="title book__title">Учебник</h2>
          <div class="book__panel-controls">
            <div class="book__part part">
              <h6 class="part-title">Раздел</h6>
              <select class="form-select form-select-sm btn-primary" aria-label=".form-select-sm example"">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                ${getStorage('authorizedUser') ? '<option value="7">Сложные слова</option>' : ''} ;
              </select>
            </div>
            <div class="book__games">
              <a href="#/sprint" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cпринт" ${isAllWords(
                currentPage,
                state,
                eventNone
              )}><img class="game__img" src='./assets/icons/Sprint.svg' alt="игры"></a>
              <a href="#/audiocall" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Аудиовызов" ${isAllWords(
                currentPage,
                state,
                eventNone
              )}><img class="game__img" src='./assets/icons/audiocall.svg' alt="игры"></a>
            </div>
            ${isAllUsersWord(currentPage, state)}
          </div>  
        </div>
        <div class="book__word-list">
          ${getWordList(state, learnProgress, hardWords, hardWordsDelete, currentPage)}
        </div>
        <div class="book__pages">
          ${getPaginationNav(currentPage, state)}
        </div>
      </div>  
    </div>`,
};
