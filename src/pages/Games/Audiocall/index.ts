import './index.scss';
import { AudiocallAnswerButtons } from 'components/AudiocallAnswerButton';
import { updateAudiocallState } from './utils/updateAudiocallState';
import { audiocallListener } from './utils/audiocallListener';

export const AudiocallComponent = {
  listen: () => {
    updateAudiocallState();
    audiocallListener();
  },
  render: () => {
    return `
    <div class="container d-flex flex-column align-items-center audiocall-container">
      <button id="audiocall-button">
        <img class="audiocall-button-img img-fluid" src="assets/img/sound-button.png" alt="Кнопка «button»" />
      </button>
      <div class="audiocall-answer audiocall-answer">parents</div>                
      <div class="variants d-flex flex-row justify-content-center flex-wrap">
      ${AudiocallAnswerButtons(['родители', 'партия', 'портрет', 'пара', 'право'])}       
      </div>
    </div>
    <div class="audiocall-bg"></div>`;
  },
};
