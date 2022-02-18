import { sprintState } from 'state';
import { randomNum } from './utils/randomNum';
import { getWords } from 'api';
import './index.scss';
import { LevelButtonsTemplate } from 'components/MiniGamesButtons';

export const GamesComponent = {
  listen: () => {
    const gameBtnsFromTwoGames = document.querySelectorAll('.game-btns');
    gameBtnsFromTwoGames.forEach((gameBtns) =>
      gameBtns?.addEventListener('click', (e: Event) => {
        const gameBtn: HTMLElement | null = e.target instanceof HTMLElement ? e.target.closest('.game-btn') : null;
        if (gameBtn) {
          const groupPageBtn = gameBtn.getAttribute('data-game-level');
          if (groupPageBtn) {
            // randomNum(0, 30)
            getWords({ page: 0, group: Number(groupPageBtn) }).then((data) => {
              sprintState.pageWords = Array.isArray(data) ? data : [];
            });
          }
        }
      })
    );
  },
  render: () => {
    return `
  <div class="container title-container">
    <h2 class="mini-game__title">Мини-игры</h2>
  </div>
  <div class="container d-flex justify-content-center flex-wrap mb-5">
    <div class="container d-flex audiocall-block justify-content-center" style="margin-bottom: 85px">
      <div class="d-sm-flex flex-row">
        <div class="d-sm-flex justify-content-center flex-column">
          <h2 class="game-title">Аудиовызов</h2>
          <img src="assets/img/audiocall.png" alt="audiocall image" />
        </div>
        <div class="d-sm-flex flex-column">
          <p class="game-text">
            Развивает восприятие речи на слух и навыки написания слов. В этой игре необходимо выбрать
            правильный перевод к произнесенному слову.
          </p>
          <h3 class="level-text align-self-center">Чтобы начать эту игру, выбери уровень сложности:</h3>
          <div class="d-sm-flex flex-row game-btns audiocall-btns flex-wrap">
          ${LevelButtonsTemplate('audiocall', 'pink')}            
          </div>
        </div>
      </div>
    </div>
    <div class="container d-flex sprint-block justify-content-center">
      <div class="d-sm-flex flex-row justify-content-center">
        <div class="d-sm-flex flex-column" style="margin-left: 45px">
          <p class="game-text" style="margin-left: 5px">
            Учит быстро переводить с английского на русский язык. Для этой тренировки используются слова из
            вашего словаря.
          </p>
          <h3 class="level-text align-self-center" style="margin-left: 5px">Чтобы начать эту игру, выбери уровень сложности:</h3>
          <div class="d-sm-flex flex-row game-btns sprint-btns flex-wrap">
          ${LevelButtonsTemplate('sprint', 'blue')}            
          </div>
        </div>
        <div class="d-sm-flex flex-column">
          <h2 class="game-title" >Спринт</h2>
          <img src="assets/img/sprint.png" alt="audiocall image" />
        </div>
      </div>
    </div>
  </div>         
    `;
  },
};
