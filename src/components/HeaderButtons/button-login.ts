import { ButtonTemlate } from "./button-template";

export const ButtonLoginComponent = {
  render: () => {
    return `          
        ${ButtonTemlate('#/sign-in', 'Вход')}
        <a href="#/sign-up" class="btn btn-outline-secondary sign-up-btn">Регистрация</a>
      `;
  },
};
