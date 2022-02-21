import { createStats } from 'pages/Stats/utils/getStatsRequest';
import { getStorage } from 'pages/Book/components';
import { router } from 'router/router';
import { usersUrl, wordsUrl, baseUrl } from './constants';
import {
  IWord,
  IUser,
  IUserWordId,
  IStatisticUser,
  ISettingsUser,
  IAuth,
  IUserWord,
  IPageWords,
  IUserCreated,
  ISetting,
  IStatistic,
  IGetNewToken,
  IUserWordsGet,
  IUserWordAggregated,
  IUsersWords,
} from './interfaces';

export const getNewUserToken = async (userId: string, refreshToken: string): Promise<IGetNewToken | void> => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/tokens`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${refreshToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (rawResponse.status === 401) {
      localStorage.clear();
      location.hash = '/login';
      router();
      alert('срок сеанса истёк, пожалуйста, войдите снова');
    } else {
      const content = await rawResponse.json();
      return content;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getWordsId = async (wordId: string): Promise<IWord | void> => {
  try {
    const res = await fetch(`${wordsUrl}/${wordId}`);
    if (res.status === 401) {
      const user: IAuth = getStorage('Authenticated');
      await getNewUserToken(user.userId, user.refreshToken);
    } else {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getWords = async ({ page, group }: IPageWords): Promise<IWord[] | void> => {
  try {
    const res = await fetch(`${wordsUrl}?group=${group}&page=${page}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
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
    console.log(error);
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
    return content;
  } catch (error) {
    console.log('такого пользователя не существует');
  }
};

export const updateUser = async (userId: string, body: object, token: string): Promise<IUserCreated | void> => {
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
    return content;
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

export const getUserIdWords = async (userId: string, token: string): Promise<IUserWordsGet[] | void> => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/words`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (rawResponse.ok) {
      const content = await rawResponse.json();
      return content;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateUserWord = async (
  { userId, wordId, body }: IUserWordId,
  token: string
): Promise<IUserWordId | void> => {
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
    return content;
  } catch (error) {
    if (error) {
      console.log(error);
    }
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
    if (rawResponse.ok) {
      const content = await rawResponse.json();
      return content;
    }
    if (rawResponse.status === 401) {
      const user: IAuth = getStorage('Authenticated');
      await getNewUserToken(user.userId, user.refreshToken);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserWord = async (userId: string, wordId: string, token: string): Promise<IUserWord | void> => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/words/${wordId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    if (rawResponse.status === 401) {
      const user: IAuth = getStorage('Authenticated');
      await getNewUserToken(user.userId, user.refreshToken);
    } else {
      const content = await rawResponse.json();
      return content;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserWord = async (userId: string, wordId: string, token: string) => {
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

export const getAggregatedWords = async <T>(token: string, url: string): Promise<T | void> => {
  try {
    const rawResponse = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (rawResponse.status === 401) {
      const user: IAuth = getStorage('Authenticated');
      await getNewUserToken(user.userId, user.refreshToken);
    } else {
      const content = await rawResponse.json();
      return content[0];
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFilterWords = async (
  isFilterParam: string,
  user: IAuth,
  currentPage?: IPageWords,
  restWordsAmount?: number
): Promise<IUsersWords | void> => {
  let filter: string;
  let url: string;
  switch (isFilterParam) {
    case 'hard':
      filter = '{"userWord.difficulty":"hard"}';
      url = `${usersUrl}/${user.userId}/aggregatedWords?wordsPerPage=3600&filter=${filter}`;
      return getAggregatedWords(user.token, url);
    case 'allUser':
      filter = '{"userWord": {"$ne": null}}';
      url = `${usersUrl}/${user.userId}/aggregatedWords?wordsPerPage=3600&filter=${filter}`;
      return getAggregatedWords(user.token, url);
    case 'notLearned':
      if (currentPage) {
        filter = `{ "$and": [{ "page": ${currentPage.page} }, {"$or":[ { "userWord.optional.isLearnt": null }, { "userWord.optional.isLearnt": false }] }]}`;
        url = `${usersUrl}/${user.userId}/aggregatedWords?group=${currentPage.group}&wordsPerPage=20&filter=${filter}`;
        return getAggregatedWords(user.token, url);
      }
      break;
    case 'rest':
      if (restWordsAmount && currentPage) {
        filter = `{ "$and": [{ "page":${currentPage.page} }, { "userWord.optional.isDelete": null }] }`;
        url = `${usersUrl}/${user.userId}/aggregatedWords?group=${currentPage.group}&wordsPerPage=${restWordsAmount}&filter=${filter}`;
        return getAggregatedWords(user.token, url);
      }
      break;
    case 'all':
      if (currentPage) {
        filter = `{ "$and": [{ "page":${currentPage.page} }, { "userWord.optional.isDelete": null }] }`;
        url = `${usersUrl}/${user.userId}/aggregatedWords?group=${currentPage.group}&wordsPerPage=20&filter=${filter}`;
        return getAggregatedWords(user.token, url);
      }
      break;
  }
};

export const getAggregatedWord = async (
  userId: string,
  wordId: string,
  token: string
): Promise<IUserWord | IUserWordAggregated | void> => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/aggregatedWords/${wordId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (rawResponse.status === 401) {
      const user: IAuth = getStorage('Authenticated');
      await getNewUserToken(user.userId, user.refreshToken);
    } else {
      const content = await rawResponse.json();
      return content;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserStatistics = async (userId: string, token: string): Promise<IStatistic | void> => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/statistics/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (rawResponse.status === 404) {
      const content = await createStats(userId, token);
      if (content) return content.statistics;
    }
    if (rawResponse.status === 401) {
      const user: IAuth = getStorage('Authenticated');
      await getNewUserToken(user.userId, user.refreshToken);
    } else {
      const content = await rawResponse.json();
      return content;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateUserStatistics = async (
  { userId, statistics }: IStatisticUser,
  token: string
): Promise<IStatisticUser | void> => {
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
    if (rawResponse.status === 401) {
      const user: IAuth = getStorage('Authenticated');
      await getNewUserToken(user.userId, user.refreshToken);
    } else {
      const content = await rawResponse.json();
      return content;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateUserSettings = async (
  { userId, settings }: ISettingsUser,
  token: string
): Promise<ISettingsUser | void> => {
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
    if (rawResponse.status === 401) {
      const user: IAuth = getStorage('Authenticated');
      await getNewUserToken(user.userId, user.refreshToken);
    } else {
      const content = await rawResponse.json();
      return content;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserSettings = async (userId: string, token: string): Promise<ISetting | void> => {
  try {
    const rawResponse = await fetch(`${usersUrl}/${userId}/settings/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (rawResponse.status === 401) {
      const user: IAuth = getStorage('Authenticated');
      await getNewUserToken(user.userId, user.refreshToken);
    } else {
      const content = await rawResponse.json();
      return content;
    }
  } catch (error) {
    console.log(error);
  }
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
    console.log(error);
  }
};
