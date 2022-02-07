import { usersUrl, wordsUrl, baseUrl } from './constants';
import {
  IWord,
  IUser,
  IUserWordId,
  IStatisticUser,
  ISettingsUser,
  IAggregateWords,
  IAuth,
  IUserWord,
  IUserWordIdDelete,
  IPageWords,
  IUserCreated,
} from './interfaces';

export const getWords = async ({ page, group }: IPageWords): Promise<IWord[] | void> => {
  try {
    const res = await fetch(`${wordsUrl}?group=${group}&page=${page}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWordsId = async (wordId: string): Promise<IWord | void> => {
  try {
    const res = await fetch(`${wordsUrl}/${wordId}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error, 'слова с таким Id не существует');
  }
};

export const createUser = async (user: IUser): Promise<IUserCreated | void> => {
  try {
    const rawResponse = await fetch(`${usersUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    console.log('');
  }
};

export const getUserId = async (userId: string, token: string): Promise<IUser | void> => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const content = await rawResponse.json();
    console.log(content);
    return content;
  } catch (error) {
    console.log('такого пользователя не существует');
  }
};

export const updateUser = async (userId: string, body: object, token: string) => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const content = await rawResponse.json();
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (userId: string, token: string) => {
  try {
    await fetch(`${usersUrl}/${userId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getNewUserToken = async (userId: string, refreshToken: string) => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/tokens`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${refreshToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const content = await rawResponse.json();
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

export const getUserIdWords = async (userId: string, token: string): Promise<IUserWord[] | [] | void> => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/words`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const content = await rawResponse.json();

    console.log(content);
    return content;
  } catch (error) {
    console.log(error);
  }
};

export const createUserWord = async (
  { userId, wordId, body }: IUserWordId,
  token: string
): Promise<IUserWord | void> => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/words/${wordId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const content = await rawResponse.json();
    console.log(content);
    return content;
  } catch (error) {
    console.log(error);
  }
};

export const getUserWord = async ({ userId, wordId }: IUserWordId, token: string) => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/words/${wordId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    const content = await rawResponse.json();
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

export const updateUserWord = async ({ userId, wordId, body }: IUserWordId, token: string) => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/words/${wordId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const content = await rawResponse.json();
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserWord = async ({ userId, wordId }: IUserWordIdDelete, token: string) => {
  try {
    await fetch(`${usersUrl}/${userId}/words/${wordId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAggregatedWords = async (
  { userId, group, page, wordsPerPage }: IAggregateWords,
  token: string
): Promise<IWord[] | void> => {
  try {
    const rawResponse = await fetch(
      `${usersUrl}/${userId}/aggregatedWords?group=${group}&page=${page}&wordsPerPage=${wordsPerPage}`, //filter=%22easy%22,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    const content = await rawResponse.json();
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

export const getAggregatedWord = async (
  { userId, wordId }: IUserWordIdDelete,
  token: string
): Promise<IWord | void> => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/aggregatedWords/${wordId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const content = await rawResponse.json();
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

export const getUserStatistics = async (userId: string, token: string) => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/statistics/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const content = await rawResponse.json();
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

export const updateUserStatistics = async ({ userId, statistics }: IStatisticUser, token: string) => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/statistics`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(statistics),
    });
    const content = await rawResponse.json();
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

export const updateUserSettings = async ({ userId, settings }: ISettingsUser, token: string) => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/settings`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    });
    const content = await rawResponse.json();
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

export const getUserSettings = async (userId: string, token: string) => {
  const rawResponse = await fetch(`${usersUrl}/${userId}/settings/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const content = await rawResponse.json();
  console.log(content);
};

export const loginUser = async (user: IUser): Promise<IAuth | void> => {
  try {
    const rawResponse = await fetch(`${baseUrl}signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    console.log('');
  }
};
