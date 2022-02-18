import { getPaginationNav } from './components/pagination';
import { currentPage, filterParams, state, userWordId } from 'state';
import * as bootstrap from 'bootstrap';
import { listenPagination } from './utils/pagination';
import { getWordList } from './components/getWordList';
import { listenAudio } from './utils/audioListen';
import { getDifficultWord } from './utils/addHardWord';
import { hardWords, learnProgress, hardWordsDelete } from './utils/constants';
import { getStorage } from './components';
import { addLearntWord, deleteHardWords, getUserWords } from './utils';
import './style.scss';

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
                ${getStorage('authorizedUser') ? '<option value="7">трудные слова</option>' : ''} ;
              </select>
            </div>
            <a href="#/games" class="book__games" data-bs-toggle="tooltip" data-bs-placement="right" title="Игры"><img class="game__img" src='./assets/icons/game.svg' alt="игры"></a>
           
          </div>  
        </div>
        <div class="book__word-list">
          ${getWordList(state, learnProgress, hardWords, hardWordsDelete, currentPage)}
        </div>
        <div class="book__pages">
          ${getPaginationNav(currentPage)}
        </div>
      </div>  
    </div>`,
};
