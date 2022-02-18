import { createChart } from './createChart';
import { ChartConfiguration } from 'chart.js';
import { statsData } from './statsData';
import { statsTitle } from './statsTitle';

export const createCorrectAnswersChart = (dataNum?: number[]) => {
  const data = {
    labels: Object.values(statsData).map((statsObj) => statsObj.name),
    datasets: [
      {
        data: [1, 2, 3],
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
};
