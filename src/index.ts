import * as bootstrap from 'bootstrap';
import { checkNavHeight } from 'utils/navbar/index';
import { router } from 'router/router';
import { getDataBookPage } from 'pages/Book/getDataBookPageBeforeLoad';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss';
import { preloadLoad } from 'components';

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.forEach(function (tooltipTriggerEl) {
  new bootstrap.Tooltip(tooltipTriggerEl, { trigger: 'hover' });
});

const startApp = () => {
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
  router();
  window.addEventListener('resize', checkNavHeight);
};
getDataBookPage();
const main = document.querySelector('.main');
if (main instanceof HTMLElement) {
  preloadLoad(main);
  setTimeout(startApp, 1000);
}
