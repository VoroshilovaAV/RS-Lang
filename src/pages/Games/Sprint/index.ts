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
            <div class="progress-track">
              <span class="progress-text progress-time">01:00</span>
              <div class="progress-score">
                <span class="progress-text progress-score__basic">0</span>
                <span class="progress-score__extra">0</span>
              </div>
            </div>
          </div>
          <div class="sprint__answer-icon"></div>
          <div class="sprint__answer-text">
            <span class="sprint__answer-eng"></span>
            <span class="sprint__answer-ru"></span>
          </div>
          <div class="sprint__answer-btns">
            <button class="sprint__answer-btn sprint__answer-btn_false btn btn-danger btn-lg" data-sprint-answer="false">
              <i class="bi bi-arrow-left-square"></i> Неверно
            </button>
            <button class="sprint__answer-btn sprint__answer-btn_true btn btn-success btn-lg" data-sprint-answer="true">
              Верно <i class="bi bi-arrow-right-square"></i>
            </button>
          </div>
        </div>
        <div class="sprint-bg"></div>
    `;
  },
};
