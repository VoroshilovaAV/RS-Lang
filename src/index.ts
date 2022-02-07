import * as bootstrap from 'bootstrap';
import { checkNavHeight } from 'utils/navbar/index';
import { router } from 'router/router';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss';

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.forEach(function (tooltipTriggerEl) {
  new bootstrap.Tooltip(tooltipTriggerEl, { trigger: 'hover' });
});

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
window.addEventListener('resize', checkNavHeight);
