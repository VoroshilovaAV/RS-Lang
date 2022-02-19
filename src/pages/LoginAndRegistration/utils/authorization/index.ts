import { loginUser, createUser } from 'api';
import { preloadLoad, removePreload } from 'components';
import { userCreated, authorizedUser } from 'state';
import { successLoginMessage } from '../';
import { IUser } from './interfaces';

const loginIn = async (user: IUser) => {
  const parentElement = document.querySelector('form')?.parentElement;
  if (!(parentElement instanceof HTMLElement)) {
    throw new Error('Error');
  }
  if (!parentElement.classList.contains('loaded_hiding')) {
    preloadLoad(parentElement);
  }
  const UserData = await loginUser(user);
  removePreload(parentElement);
  setTimeout(() => {
    if (UserData) {
      Object.assign(authorizedUser, UserData);
      localStorage.setItem('authorizedUser', JSON.stringify(authorizedUser));
      successLoginMessage();
    } else {
      const messageError = document.querySelector('.form-message');
      if (!(messageError instanceof HTMLElement)) {
        throw new Error('Error');
      }
      messageError.textContent = 'пользователя с такими адресом не существует';
    }
  }, 300);
};

export const getAuthorization = async (user: IUser) => {
  loginIn(user);
};

export const getNewUser = async (user: IUser) => {
  const parentElement = document.querySelector('form')?.parentElement;
  if (!(parentElement instanceof HTMLElement)) {
    throw new Error('Error');
  }
  preloadLoad(parentElement);
  const createdUser = await createUser(user);
  if (createdUser) {
    Object.assign(userCreated, createdUser);
    localStorage.setItem('userCreated', JSON.stringify(userCreated));
    loginIn(user);
  } else {
    removePreload(parentElement);
    setTimeout(() => {
      const messageError = document.querySelector('.form-message');
      if (!(messageError instanceof HTMLElement)) {
        throw new Error('Error');
      }
      messageError.textContent = 'такой адрес уже существует, перейдите на страницу входа';
    }, 300);
  }
};
