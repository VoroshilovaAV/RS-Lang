import { getStorage } from 'pages/LoginAndRegistration';
import { IAuth } from 'api/interfaces';
import { getUserWord } from 'api';
import { updateUserWordInGame } from '../updateUserWordInGame';
import { createUserWordInGame } from '../createUserWordInGame';

export const sendRequestsForUserWord = (wordId: string, isRight: boolean, game: 'sprint' | 'audiocall') => {
  const userData: IAuth = getStorage('authorizedUser');
  if (userData) {
    const { userId, token } = userData;
    const date = new Date();
    const curFullDate = [date.getDate(), String(date.getMonth() + 1).padStart(2, '0'), date.getFullYear()].join('.');

    getUserWord({ userId, wordId }, token).then((data) => {
      if (data) {
        console.log(data);
        updateUserWordInGame(userId, wordId, token, isRight, data, curFullDate, game);
      } else {
        createUserWordInGame(userId, wordId, token, isRight, curFullDate, game);
      }
    });
  }
};
