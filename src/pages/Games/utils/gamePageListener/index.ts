import { sprintState } from 'state';
import { randomNum } from '../randomNum';
import { getWords } from 'api';

export const gamePageListener = () => {
  const gameBtnsFromTwoGames = document.querySelectorAll('.game-btns');
  gameBtnsFromTwoGames.forEach((gameBtns) =>
    gameBtns?.addEventListener('click', (e: Event) => {
      const gameBtn: HTMLElement | null = e.target instanceof HTMLElement ? e.target.closest('.game-btn') : null;
      if (gameBtn) {
        const groupPageBtn = gameBtn.getAttribute('data-game-level');
        if (groupPageBtn) {
          getWords({ page: randomNum(0, 30), group: Number(groupPageBtn) }).then((data) => {
            sprintState.pageWords = Array.isArray(data) ? data : [];
          });
        }
      }
    })
  );
};
