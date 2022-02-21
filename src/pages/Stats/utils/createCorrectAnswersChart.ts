import { createChart } from './createChart';
import { ChartConfiguration } from 'chart.js';
import { statsData } from './statsData';
import { statsTitle } from './statsTitle';
import { statsState } from 'state';

export const createCorrectAnswersChart = () => {
  if (statsState.optional) {
    const data = {
      labels: Object.values(statsData).map((statsObj) => statsObj.name),
      datasets: [
        {
          data: [
            Math.round(
              (statsState.optional?.gameStats.sprint.correct /
                (statsState.optional?.gameStats.sprint.correct + statsState.optional?.gameStats.sprint.wrong)) *
                100
            ),
            Math.round(
              (statsState.optional?.gameStats.audiocall.correct /
                (statsState.optional?.gameStats.audiocall.correct + statsState.optional?.gameStats.audiocall.wrong)) *
                100
            ),
            Math.round(
              ((statsState.optional?.gameStats.sprint.correct + statsState.optional?.gameStats.audiocall.correct) /
                (statsState.optional?.gameStats.sprint.correct +
                  statsState.optional?.gameStats.sprint.wrong +
                  statsState.optional?.gameStats.audiocall.correct +
                  statsState.optional?.gameStats.audiocall.wrong)) *
                100
            ),
          ],
          backgroundColor: Object.values(statsData).map((statsObj) => statsObj.color),
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'doughnut',
      data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: statsTitle('Процент правильных ответов'),
        },
      },
    };

    createChart('percent-chart', config);
  }
};
