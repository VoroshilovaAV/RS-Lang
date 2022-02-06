import { HomeComponent } from 'pages/home';
import { LoginComponent } from 'pages/login';
import { HeaderLoginComponent } from 'pages/header-login';
import { HeaderLogoutComponent } from 'pages/header-logout';
import { RegistrationComponent } from 'pages/registration';
import { BookComponent } from 'pages/book';
import { DictionaryComponent } from 'pages/dictionary';
import { GamesComponent } from 'pages/games';
import { ErrorComponent } from 'pages/error';
import { PreAudiocallComponent } from 'pages/pre-audiocall';
import { PreSprintComponent } from 'pages/pre-sprint';
import { AudiocallComponent } from 'pages/audiocall';
import { SprintComponent } from 'pages/sprint';
import { ResultAudiocallComponent } from 'pages/result-audiocall';
import { ResultSprintComponent } from 'pages/result-sprint';
import { StatsComponent } from 'pages/stats';
import { AboutUsComponent } from 'pages/about';
import { FooterComponent } from 'pages/footer';

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/sign-in', component: LoginComponent },
  { path: '/sign-up', component: RegistrationComponent },
  { path: '/book', component: BookComponent },
  { path: '/dictionary', component: DictionaryComponent },
  { path: '/games', component: GamesComponent },
  { path: '/pre-audiocall', component: PreAudiocallComponent },
  { path: '/pre-sprint', component: PreSprintComponent },
  { path: '/audiocall', component: AudiocallComponent },
  { path: '/sprint', component: SprintComponent },
  { path: '/result-audiocall', component: ResultAudiocallComponent },
  { path: '/result-sprint', component: ResultSprintComponent },
  { path: '/stats', component: StatsComponent },
  { path: '/about', component: AboutUsComponent },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findComponentByPath = (
  path: string,
  routes: {
    path: string;
    component: {
      render: () => string;
    };
  }[]
) => routes.find((r: { path: string }) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

export const router = () => {
  const path = parseLocation();
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};

  const mainContainer = document.querySelector('.main-content');
  const authContainer = document.querySelector('.auth-btns');
  const pageContainer = document.querySelector('.page-content');
  const footerContainer = document.querySelector('.footer');

  if (authContainer !== null)
    authContainer.innerHTML =
      localStorage.getItem('authorizedUser') !== null ? HeaderLogoutComponent.render() : HeaderLoginComponent.render();

  if (mainContainer !== null) mainContainer.innerHTML = component.render();

  if (
    path !== '/games' &&
    path !== '/pre-audio' &&
    path !== '/pre-sprint' &&
    path !== '/audiocall' &&
    path !== '/sprint' &&
    path !== '/result-audiocall' &&
    path !== '/result-sprint' &&
    pageContainer !== null
  ) {
    if (footerContainer) footerContainer.remove();
    pageContainer.insertAdjacentHTML('beforeend', FooterComponent.render());     
  } else {
    if (footerContainer !== null) footerContainer.remove();
  }
};
