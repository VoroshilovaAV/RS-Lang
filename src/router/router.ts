import { changeNavBar } from 'utils';
import { ErrorComponent } from 'pages/Error';
import { ButtonLoginComponent } from 'components/HeaderButtons/button-login';
import { ButtonLogoutComponent } from 'components/HeaderButtons/button-logout';
import { FooterComponent } from 'components/Footer';
import { routes } from './routes';
import { logoutUser } from 'utils';
import { getStorage } from 'pages/LoginAndRegistration';
import { setDefaultOptionsToSprintState } from 'state/utils';

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (
  path: string,
  waybill: {
    path: string;
    component: {
      listen: () => void;
      render: () => string;
    };
  }[]
) => waybill.find((r: { path: string }) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

export const router = () => {
  const path = parseLocation();

  if (getStorage('curPath') === '/sprint' && path !== '/sprint-result') {
    setDefaultOptionsToSprintState();
  }

  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};

  const mainContainer = document.querySelector('.main');
  const authContainer = document.querySelector('.auth-btns');
  const pageContainer = document.querySelector('.page-content');
  const footerContainer = document.querySelector('.footer');

  if (authContainer)
    authContainer.innerHTML =
      localStorage.getItem('authorizedUser') !== null ? ButtonLogoutComponent.render() : ButtonLoginComponent.render();

  if (mainContainer) mainContainer.innerHTML = component.render();
  component.listen();
  logoutUser();

  if (path === '/') {
    pageContainer?.classList.add('main-bg');
  } else {
    pageContainer?.classList.remove('main-bg');
  }

  if (
    path !== '/games' &&
    path !== '/pre-audiocall' &&
    path !== '/pre-sprint' &&
    path !== '/audiocall' &&
    path !== '/sprint' &&
    path !== '/audiocall-result' &&
    path !== '/sprint-result' &&
    pageContainer !== null
  ) {
    if (footerContainer) footerContainer.remove();
    pageContainer.insertAdjacentHTML('beforeend', FooterComponent.render());
  } else {
    if (footerContainer) footerContainer.remove();
  }

  changeNavBar(path);
};
