import { getPaginationNav } from './components/pagination';
import { currentPage } from 'state';
import './style.scss';
import { listenPagination } from './pagination';
export const BookComponent = {
  listen: () => {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu !== null) {
      dropdownMenu.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }

    const PageLink = document.querySelector('.pagination');
    if (PageLink !== null) {
      PageLink.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }
    listenPagination();
  },
  render: () =>
    `<div class="book">
      <div class="book__wrapper">
        <div class="book__header">
          <h2 class="title book__title">Учебник</h2>
          <div class="book__panel-controls">
            <div class="book__part parh">
              <h6 class="part-title">Раздел</h6>
              <select class="form-select form-select-sm btn-primary" aria-label=".form-select-sm example"">
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <a href="#/games" class="book__games"><img class="game__img" src='./assets/icons/game.svg' alt="игры"></a>
            <div class="user-words">
              <div class="learned-words"><img class="learned__img" src='./assets/icons/learned-words.svg' alt="изученные слова"></div>
              <div class="difficult-words"><img class="difficult__img" src='./assets/icons/hard-words.svg' alt="трудные слова"></div>
            </div>
          </div>  
        </div>
        <div class="book__word-list word-list"></div>
        <div class="book__pages">
        ${getPaginationNav(currentPage)}
      </div>
    </div>`,
};
