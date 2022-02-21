import { ChartConfiguration } from 'chart.js';
import { statsState } from 'state';
import { createChart } from './createChart';
import { statsData } from './statsData';
import { statsTitle } from './statsTitle';

export const createLearnedWordsChart = () => {
  if (statsState.optional) {
    const data = {
      labels: ['Кол-во новых слов', 'Лучшая серия', 'Кол-во изученных слов'],
      datasets: [
        {
          label: statsData.sprint.name,
          data: [
            statsState.optional?.gameStats.sprint.newWords,
            statsState.optional?.gameStats.sprint.longestSeries,
            0,
          ],
          backgroundColor: statsData.sprint.color,
        },
        {
          label: statsData.audiocall.name,
          data: [
            statsState.optional?.gameStats.audiocall.newWords,
            statsState.optional?.gameStats.audiocall.longestSeries,
            0,
          ],
          backgroundColor: statsData.audiocall.color,
        },
        {
          label: statsData.allDay.name,
          data: [
            statsState.optional?.gameStats.sprint.newWords + statsState.optional?.gameStats.audiocall.newWords,
            0,
            statsState.learnedWords,
          ],
          backgroundColor: statsData.allDay.color,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: statsTitle('Лучшая серия и количество изученных слов'),
        },
      },
    };

    createChart('learned-words-chart', config);
  }
};
