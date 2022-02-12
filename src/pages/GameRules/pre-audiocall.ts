import { PreloadGamePage } from 'components/PreloadGameTemplate';
import './index.scss';

export const PreAudiocallComponent = {
  listen: () => {},
  render: () => {
    return `
    ${PreloadGamePage(
      'для выбора ответа или повтора воспроизведения',
      'от 1 до 5 для выбора ответа <br />Space для повтроного звучания слова <br />Enter для перехода к следующему слову',
      'audiocall'
    )}         
    `;
  },
};
