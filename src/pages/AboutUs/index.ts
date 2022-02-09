import './index.scss';
import { CardTemlate } from 'components/AboutUsCard/card-template';

export const AboutUsComponent = {
  listen: () => {},
  render: () => {
    return ` 
    <div class="container title-container">
      <h2 class="about-team__title">О команде</h2>
    </div> 
    <div class="container d-flex justify-content-center flex-wrap cards-container">
      ${CardTemlate(
        'igor',
        'https://github.com/alyanoyigor',
        'Igor Alyanoy',
        'github github_yellow',
        '<li>Макет в Figma</li><li>Главная страница</li><li>Меню</li>'
      )}
      ${CardTemlate(
        'nick',
        'https://github.com/nick1091',
        'Nikolaу Kuckharchuk',
        'github github_blue',
        '<li>Бэкенд</li><li>Авторизация</li><li>Запросы к API</li>'
      )}
      ${CardTemlate(
        'ann',
        'https://github.com/VoroshilovaAV',
        'Anna Voroshilova',
        'github',
        '<li>Макет в Figma</li><li>Роутинг</li><li>Страница "О команде"</li>'
      )}      
    </div>                  
        <img id="yellow-toy" src="assets/img/yellow-toy.png" alt="yellow toy" />
        <img id="orange-toy" src="assets/img/orange-toy.png" alt="orange toy" />
        <img id="blue-toy" src="assets/img/blue-toy.png" alt="blue toy" />
        <img id="pink-toy" src="assets/img/pink-toy.png" alt="pink toy" />
        <img id="violet-toy" src="assets/img/violet-toy.png" alt="violet toy" />                                      
        `;
  },
};
