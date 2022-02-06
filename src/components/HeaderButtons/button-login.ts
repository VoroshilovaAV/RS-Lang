import { ButtonTemlate } from './button-template';

export const ButtonLoginComponent = {
  render: () => {
    return `          
        ${ButtonTemlate('#/login', 'Вход')}
        <a href="#/registration" class="btn btn-outline-secondary sign-up-btn">Регистрация</a>
      `;
  },
};
