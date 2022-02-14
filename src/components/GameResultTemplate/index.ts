import './index.scss';

export const GameResultPage = (linkPlayAgain: string) => {
  return `
  <div class="results-container container d-flex flex-column align-items-center p-3">
    <div class="result-title">10 очков</div>
    <div class="result-subtitle">Длина серии: 2</div>
    <div class="answers d-flex flex-row justify-content-center flex-wrap">
        <div class="correct px-5 py-3">
          <p class="correct-title">Правильные:</p> 
          <div class="correct-word container d-flex flex-row">
            <button class="word-sound"><i class="bi-volume-up" style="font-size: 2rem; color: #808080;"></i></button> 
            <p class="word"><b>right</b> - правильно</p>
          </div>  
          <div class="correct-word container d-flex flex-row">
            <button class="word-sound"><i class="bi-volume-up" style="font-size: 2rem; color: #808080;"></i></button> 
            <p class="word"><b>right</b> - правильно</p>
          </div> 
          <div class="correct-word container d-flex flex-row">
            <button class="word-sound"><i class="bi-volume-up" style="font-size: 2rem; color: #808080;"></i></button> 
            <p class="word"><b>right</b> - правильно</p>
          </div> 
          <div class="correct-word container d-flex flex-row">
            <button class="word-sound"><i class="bi-volume-up" style="font-size: 2rem; color: #808080;"></i></button> 
            <p class="word"><b>right</b> - правильно</p>
          </div> 
          <div class="correct-word container d-flex flex-row">
            <button class="word-sound"><i class="bi-volume-up" style="font-size: 2rem; color: #808080;"></i></button> 
            <p class="word"><b>right</b> - правильно</p>
          </div> 
          <div class="correct-word container d-flex flex-row">
            <button class="word-sound"><i class="bi-volume-up" style="font-size: 2rem; color: #808080;"></i></button> 
            <p class="word"><b>right</b> - правильно</p>
          </div> 
          <div class="correct-word container d-flex flex-row">
            <button class="word-sound"><i class="bi-volume-up" style="font-size: 2rem; color: #808080;"></i></button> 
            <p class="word"><b>right</b> - правильно</p>
          </div>                         
        </div>
        <div class="incorrect px-5 py-3">
          <p class="incorrect-title">Неправильные:</p>
          <div class="incorrect-word container d-flex flex-row">
            <button class="word-sound"><i class="bi-volume-up" style="font-size: 2rem; color: #808080;"></i></button> 
            <p class="word"><b>wrong</b> - неправильно</p>
          </div>        
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
