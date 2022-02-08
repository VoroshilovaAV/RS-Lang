import './index.scss';

export const SprintComponent = {
  listen: () => {},
  render: () => {
    return `
        <div class="container sprint-container">
          <div class="progress-container">
            <div class="progress">
              <div class="progress-bar bg-secondary" role="progressbar"
                aria-valuenow="30" aria-valuemin="0" aria-valuemax="60" style="width: 90%"></div>
            </div>
            <span class="progress-time">00:50</span>
          </div>
          <div class="sprint__answer-icon sprint__answer-icon_true"></div>
          <div class="sprint__answer-text">
            <span class="sprint__answer-eng">Parents</span>
            <span class="sprint__answer-ru">родители</span>
          </div>
          <div class="sprint__answer-btns">
            <button class="sprint__answer-btn sprint__answer-btn_false btn btn-danger btn-lg">
              <i class="bi bi-arrow-left-square"></i> Неверно
            </button>
            <button class="sprint__answer-btn sprint__answer-btn_true btn btn-success btn-lg">
              Верно <i class="bi bi-arrow-right-square"></i>
            </button>
          </div>
        </div>
        <div class="sprint-bg"></div>
    `;
  },
};
