import { getNewUser, getAuthorization } from '../';

export const submitForm = () => {
  document.querySelector('form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const allInput = document.querySelectorAll('form input');
    const map = new Map();
    allInput.forEach((el) => {
      if (!(el instanceof HTMLInputElement)) {
        throw new Error('Error');
      }
      const value = el.value;
      const key = el.id.split('Input')[1].split('').slice(0, -1).join('').toLocaleLowerCase();
      map.set(key, value);
    });
    const user = Object.fromEntries(map);
    const func = () => (user.name ? getNewUser(user) : getAuthorization(user));
    func();
  });
};
