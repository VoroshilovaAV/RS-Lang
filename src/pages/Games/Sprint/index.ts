import { sprintListener } from './utils';
import './index.scss';

export const SprintComponent = {
  listen: sprintListener,
  render: () => {
    return `
        <div class="container sprint-container">
          <div class="progress-container">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 100%"></div>
            </div>
            <span class="progress-time">01:00</span>
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
