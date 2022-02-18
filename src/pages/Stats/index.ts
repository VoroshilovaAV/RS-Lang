import { Chart, registerables } from 'chart.js';
import { createCorrectAnswersChart, createLearnedWordsChart } from './utils';
import './index.scss';
import { getStorage } from 'pages/LoginAndRegistration';

export const StatsComponent = {
  listen: () => {
    Chart.register(...registerables);
    createLearnedWordsChart();
    createCorrectAnswersChart();
  },
  render: () => {
    if (getStorage('authorizedUser')) {
      return `
        <div class="container">
          <h2 class="stats-title">Статистика</h2>
          <div class="first-stats">
            <div class="percent-stats">
              <canvas id="percent-chart"></canvas>
            </div>
            <div class="learned-words-stats">
              <canvas id="learned-words-chart" height="300"></canvas>  
            </div>
          </div>
        </div>     
    `;
    } else {
      return `
        <div class="container">
          <h2 class="stats-title">Статистика</h2>
          <p>Для того чтобы посмотреть процесс изучения слов нужно авторизоваться!</p>
        </div>
      `;
    }
  },
};
