import { getCurrentDate } from 'utils/getCurrentDate/index';
import { ChartConfiguration } from 'chart.js';
import { statsState } from 'state';
import { createChart } from './createChart';

export const createStatsLearnedWordsPerDay = () => {
  if (statsState.optional) {
    const colors = ['#007bff', '#28a745'];
    const labelsData = statsState.optional.learnedWordsPerDay
      ? Object.keys(statsState.optional.learnedWordsPerDay)
      : [getCurrentDate()];
    const dataDataset = statsState.optional.learnedWordsPerDay
      ? Object.values(statsState.optional.learnedWordsPerDay)
      : [statsState.learnedWords];
    const chartData = {
      labels: labelsData,
      datasets: [
        {
          label: 'Кол-во изученных слов за каждый день',
          data: dataDataset,
          backgroundColor: 'transparent',
          borderColor: colors[0],
          borderWidth: 4,
          pointBackgroundColor: colors[0],
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          y: {
            min: 0,
          },
        },
        plugins: {
          legend: {
            display: true,
          },
        },
        responsive: true,
      },
    };

    createChart('learned-words-per-day-chart', config);
  }
};
