import { TitleOptions } from 'chart.js';
import { _DeepPartialObject } from 'chart.js/types/utils';

export const statsTitle = (text: string): _DeepPartialObject<TitleOptions> => ({
  display: true,
  text,
  position: 'top',
  align: 'start',
  font: {
    size: 18,
    weight: 'normal',
  },
});
