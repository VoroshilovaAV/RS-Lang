import './index.scss';
import { audiocallListener } from './utils/audiocallListener';
import { updateAudiocallState } from './utils/updateAudiocallState';
import { ProgressScore } from 'components/ProgressScore';

export const AudiocallComponent = {
  listen: () => {
    updateAudiocallState();
    audiocallListener();
  },
  render: () => {
    return `
    <div class="container d-flex flex-column align-items-center audiocall-container">   
    <div class="container align-items-end">${ProgressScore()}</div>
      <button id="audiocall-button">
        <img class="audiocall-button-img img-fluid" src="assets/img/sound-button.png" alt="Кнопка «button»" />
      </button>
      <div class="audiocall-answer hide"></div>                
      <div class="variants d-flex flex-row justify-content-center flex-wrap"></div>
    </div>
    <div class="audiocall-bg"></div>`;
  },
};
