import { Chart, ChartConfiguration, ChartItem } from 'chart.js';

export const createChart = (idSelector: string, config: ChartConfiguration) => {
  const chart: HTMLCanvasElement | null = document.querySelector(`#${idSelector}`);
  const ctx: ChartItem | null = chart ? chart.getContext('2d') : null;
  if (ctx) new Chart(ctx, config);
};
