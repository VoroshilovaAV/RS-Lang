import { getStorage } from 'pages/LoginAndRegistration';
import { updateUserWordInGame } from '../updateUserWordInGame';
import { createUserWordInGame } from '../createUserWordInGame';
import { audiocallState, sprintState } from 'state';
import { getCurrentDate } from 'utils/getCurrentDate';
import { IUserWordAggregated } from 'api/interfaces';

export const sendRequestsForUserWord = async (wordId: string, isRight: boolean, game: 'sprint' | 'audiocall') => {
  const userData = getStorage('authorizedUser');
  if (userData) {
    const { userId, token } = userData;
    const userWord =
      game === 'sprint'
        ? (sprintState.userWords as IUserWordAggregated[]).find((wordObj) => wordObj._id === wordId)
        : (audiocallState.userWords as IUserWordAggregated[]).find((wordObj) => wordObj._id === wordId);

    if (userWord) {
      updateUserWordInGame(userId, wordId, token, isRight, userWord, getCurrentDate(), game);
    } else {
      createUserWordInGame(userId, wordId, token, isRight, getCurrentDate(), game);
    }
  }
};
