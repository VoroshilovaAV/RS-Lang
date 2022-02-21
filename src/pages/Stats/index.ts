import { statsState } from 'state';
import { Chart, registerables } from 'chart.js';
import {
  createCorrectAnswersChart,
  createLearnedWordsChart,
  createStatsLearnedWordsPerDay,
  createStatsNewWordsPerDay,
} from './utils';
import { getStorage } from 'pages/LoginAndRegistration';
import { getUserStatistics } from 'api';
import './index.scss';
import { preloadLoad, removePreload } from 'components';

export const StatsComponent = {
  listen: async () => {
    const stats: HTMLElement | null = document.querySelector('.stats');
    if (stats) preloadLoad(stats);
    const user = getStorage('authorizedUser');
    if (user) {
      const content = await getUserStatistics(user.userId, user.token);
      if (content) {
        statsState.learnedWords = content.learnedWords;
        statsState.optional = JSON.parse(JSON.stringify(content.optional));
      }
    }
    if (stats) removePreload(stats);
    Chart.register(...registerables);
    createLearnedWordsChart();
    createCorrectAnswersChart();
    createStatsLearnedWordsPerDay();
    createStatsNewWordsPerDay();
  },
  render: () => {
    if (getStorage('authorizedUser')) {
      return `
        <div class="container">
          <h2 class="stats-title">Статистика</h2>
          <div class="stats">
            <div class="first-stats">
              <div class="percent-stats">
                <canvas id="percent-chart"></canvas>
              </div>
              <div class="learned-words-stats">
                <canvas id="learned-words-chart" height="300"></canvas>  
              </div>
            </div>
            <div class="second-stats">
              <div class="learned-words-per-day-stats">
                <canvas id="learned-words-per-day-chart" height="300"></canvas>
              </div>
              <div class="new-words-per-day-stats">
                <canvas id="new-words-per-day-chart" height="300"></canvas>
              </div>
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
