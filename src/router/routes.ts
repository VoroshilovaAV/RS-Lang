import { HomeComponent } from 'pages/Home';
import { LoginComponent } from 'pages/LoginAndRegistration/login';
import { ButtonLoginComponent } from 'components/HeaderButtons/button-login';
import { ButtonLogoutComponent } from 'components/HeaderButtons/button-logout';
import { RegistrationComponent } from 'pages/LoginAndRegistration/registration';
import { BookComponent } from 'pages/Book';
import { DictionaryComponent } from 'pages/Dictionary';
import { GamesComponent } from 'pages/Games';
import { ErrorComponent } from 'pages/Error';
import { PreAudiocallComponent } from 'pages/GameRules/pre-audiocall';
import { PreSprintComponent } from 'pages/GameRules/pre-sprint';
import { AudiocallComponent } from 'pages/Games/Audiocall';
import { SprintComponent } from 'pages/Games/Sprint';
import { ResultComponent } from 'pages/Result';
import { StatsComponent } from 'pages/Stats';
import { AboutUsComponent } from 'pages/AboutUs';
import { FooterComponent } from 'components/Footer';
import { parseLocation } from './router';
import { findComponentByPath } from './router';

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/login', component: LoginComponent },
  { path: '/registration', component: RegistrationComponent },
  { path: '/book', component: BookComponent },
  { path: '/dictionary', component: DictionaryComponent },
  { path: '/games', component: GamesComponent },
  { path: '/pre-audiocall', component: PreAudiocallComponent },
  { path: '/pre-sprint', component: PreSprintComponent },
  { path: '/audiocall', component: AudiocallComponent },
  { path: '/sprint', component: SprintComponent },
  { path: '/result', component: ResultComponent },
  { path: '/stats', component: StatsComponent },
  { path: '/about', component: AboutUsComponent },
];

export const router = () => {
  const path = parseLocation();
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};

  const mainContainer = document.querySelector('.main-content');
  const authContainer = document.querySelector('.auth-btns');
  const pageContainer = document.querySelector('.page-content');
  const footerContainer = document.querySelector('.footer');

  if (authContainer !== null)
    authContainer.innerHTML =
      localStorage.getItem('authorizedUser') !== null ? ButtonLogoutComponent.render() : ButtonLoginComponent.render();

  if (mainContainer !== null) mainContainer.innerHTML = component.render();
  component.listen();

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
