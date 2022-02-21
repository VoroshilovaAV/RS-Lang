import './index.scss';

export const popapTemplate = () => {
  return `    
    <div id="popap" class="popap">
    <div class="popap-body">
      <div class="popap-content">
        <a href="#" class="popap-close">&#10008;</a>
        <div class="popap-title">Возможности и преимущества приложения:</div>
        <div class="popap-cards d-flex flex-row justify-content-center flex-wrap">                 
          <div class="popap-card d-sm-flex flex-column align-items-center flex-wrap m-2">
            <div class="popap-card-title">Учебник</div>
            <img class="popap-img" src="assets/img/book.png" alt="books">
            <div class="popap-text">Более 3000 слов и шесть разделов по возрастанию сложности. Изучай, смотри перевод, воспроизводи аудиопримеры.</div>
          </div>
          <div class="popap-card d-sm-flex flex-column align-items-center flex-wrap m-2">
            <div class="popap-card-title">Мини-игры</div>
            <img class="popap-img" src="assets/img/games.png" alt="games">
            <div class="popap-text">Две увекательные игры  «Аудиовызов» и «Спринт». Развивай навыки письма и восприятия речи на слух. Запоминай слова, играя.</div>
          </div>
          <div class="popap-card d-sm-flex flex-column align-items-center flex-wrap m-2">
            <div class="popap-card-title">Словарь</div>
            <img class="popap-img" src="assets/img/dictionary.png" alt="dictionary">
            <div class="popap-text">Отмечай сложные слова и они попадут в последний одноименный раздел учебника.</div>
          </div>
          <div class="popap-card d-sm-flex flex-column align-items-center flex-wrap m-2">
            <div class="popap-card-title">Статистика</div>
            <img class="popap-img" src="assets/img/stat.png" alt="stats">
            <div class="popap-text">Авторизуйся в приложении и отслеживай свой прогесс в индивидуальной статистике.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
      `;
};
