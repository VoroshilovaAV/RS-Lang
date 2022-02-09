import { IUserCreated, IAuth, IPageWords } from './interfaces';

export const userCreated: IUserCreated = {
  id: '',
  email: '',
  name: '',
};

export const authorizedUser: IAuth = {
  message: '',
  token: '',
  refreshToken: '',
  userId: '',
  name: '',
};

export const currentPage: IPageWords = {
  page: 1,
  group: 1,
};
