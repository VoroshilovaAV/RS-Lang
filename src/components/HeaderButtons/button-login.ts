import { ButtonTemplate } from './button-template';

export const ButtonLoginComponent = {
  render: () => {
    return `          
        ${ButtonTemplate('#/login', 'Вход')}
        <a href="#/registration" class="btn btn-outline-secondary sign-up-btn">Регистрация</a>
      `;
  },
};
