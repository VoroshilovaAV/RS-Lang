import { ChartConfiguration } from 'chart.js';
import { createChart } from './createChart';
import { statsData } from './statsData';
import { statsTitle } from './statsTitle';

export const createLearnedWordsChart = () => {
  const data = {
    labels: ['Кол-во изученных слов', 'Лучшая серия'],
    datasets: [
      {
        label: statsData.sprint.name,
        data: [12, 1],
        backgroundColor: statsData.sprint.color,
      },
      {
        label: statsData.audiocall.name,
        data: [20, 2],
        backgroundColor: statsData.audiocall.color,
      },
      {
        label: statsData.allDay.name,
        data: [32, 0],
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
};
