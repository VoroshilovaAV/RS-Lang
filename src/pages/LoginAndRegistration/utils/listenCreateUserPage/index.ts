import { validateName, validateEmail, validatePassword } from '../';
import { submitForm } from '../';

export const listenCreateUserPage = () => {
  validateName();
  validateEmail();
  validatePassword();
  submitForm();
};
