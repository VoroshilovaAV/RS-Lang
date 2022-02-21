import { ChartConfiguration } from 'chart.js';
import { statsState } from 'state';
import { getCurrentDate } from 'utils/getCurrentDate';
import { createChart } from './createChart';

export const createStatsAllLearnedWordsPerDay = () => {
  if (statsState.optional) {
    const colors = ['#007bff', '#28a745'];

    const arrDataNum: number[] = [];
    if (statsState.optional.learnedWordsPerDay) {
      Object.values(statsState.optional.learnedWordsPerDay).reduce((prev, cur) => {
        prev = prev + cur;
        arrDataNum.push(prev);
        return prev;
      }, 0);
    }

    const labelsData = statsState.optional.learnedWordsPerDay
      ? [...Object.keys(statsState.optional.learnedWordsPerDay), getCurrentDate()]
      : [getCurrentDate()];

    const dataDataset = arrDataNum.length
      ? [...arrDataNum, arrDataNum[arrDataNum.length - 1] + statsState.learnedWords]
      : [statsState.learnedWords];
    const chartData = {
      labels: labelsData,
      datasets: [
        {
          label: 'Всего изучено слов',
          data: dataDataset,
          backgroundColor: 'transparent',
          borderColor: colors[1],
          borderWidth: 4,
          pointBackgroundColor: colors[1],
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

    createChart('new-words-per-day-chart', config);
  }
};
