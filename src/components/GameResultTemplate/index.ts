import './index.scss';

export const GameResultPage = (
  linkPlayAgain: string,
  correctWords: string,
  incorrectWords: string,
  score: number,
  longestSeries: number
) => {
  return `
  <div class="results-container container d-flex flex-column align-items-center p-3">
    <div class="result-title">${score} очков</div>
    <div class="result-subtitle">Длина серии: ${longestSeries}</div>
    <div class="answers">
        <div class="correct px-5 py-3">
          <p class="correct-title">Правильные:</p>  
          ${correctWords}
        </div>
        <div class="incorrect px-5 py-3">
          <p class="incorrect-title">Неправильные:</p>
          ${incorrectWords}
        </div>
    </div>
    <div class="result-buttons-container container d-flex flex-row justify-content-center flex-wrap">
        <div class="text-with-button flex-column align-items-center px-5">
          <p class="text-for-button"><br>Играть </br> снова</p>
          <a href="#/${linkPlayAgain}"><i class="bi-arrow-clockwise" style="font-size: 5rem; color: #808080;"></i></a>
        </div>
        <div class="text-with-button flex-column align-items-center px-5">
          <p class="text-for-button"><br>Учить </br> слова</p>
          <a href="#/book"><i class="bi-journals" style="font-size: 5rem; color: #808080;"></i></a>
        </div>
        <div class="text-with-button flex-column align-items-center px-5">
          <p class="text-for-button"><br>Ко всем </br> играм</p>
          <a href="#/games"><i class="bi-arrow-left" style="font-size: 5rem; color: #808080;"></i></a>
        </div>
    </div>
    </div>
      `;
};
