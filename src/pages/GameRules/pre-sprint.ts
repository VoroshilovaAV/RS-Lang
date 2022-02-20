import { PreloadGamePage } from 'components/PreloadGameTemplate';
import './index.scss';

export const PreSprintComponent = {
  listen: () => {},
  render: () => {
    return `  
    ${PreloadGamePage('для выбора ответа', '&#8592 и &#8594 для выбора ответа', 'sprint')}         
    `;
  },
};
