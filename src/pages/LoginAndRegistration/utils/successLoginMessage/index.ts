import { authorizedUser } from '../../../../state';
import '../../style.scss';
export const successLoginMessage = () => {
  const html = `${authorizedUser.name}, вы выполнили вход`;
  const windowMessage = document.createElement('div');
  const popap = document.createElement('div');
  const message = document.createElement('div');
  message.className = 'message';
  windowMessage.className = 'window-message';
  windowMessage.append(popap);
  popap.className = 'popap';
  message.innerHTML = html;
  const PageAuthorization = document.querySelector('.main');
  if (!(PageAuthorization instanceof HTMLElement)) {
    throw new Error('error');
  }
  popap.append(message);
  PageAuthorization.append(windowMessage);
  popap.classList.add('active');
  popap.addEventListener('animationend', () => {
    popap.style.display = 'none';
    popap.innerHTML = '';
    location.hash = '/';
    document.location.reload();
  });
};
