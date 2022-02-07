import { router } from 'router/router';
import { authorizedUser } from '../../../../state';
import '../../style.scss';

export function getStorage(textDataStorage: string) {
  const storage = localStorage.getItem(textDataStorage);
  if (storage) {
    return JSON.parse(storage);
  } else return false;
}

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
    location.hash = getStorage('lastPath') ? getStorage('lastPath') : '/';
    console.log(location.hash);
    router();
  });
};
