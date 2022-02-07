import { validateEmail, validatePassword } from '../';
import { submitForm } from '../..';

export const listenSingInPage = () => {
  validateEmail();
  validatePassword();
  submitForm();
};
