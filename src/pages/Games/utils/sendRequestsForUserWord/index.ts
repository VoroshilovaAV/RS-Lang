import { getStorage } from 'pages/LoginAndRegistration';
import { updateUserWordInGame } from '../updateUserWordInGame';
import { createUserWordInGame } from '../createUserWordInGame';
import { sprintState } from 'state';
import { getCurrentDate } from 'utils/getCurrentDate';
import { IAuth, IStatistic, IUserWordAggregated } from 'api/interfaces';
import { getUserStatistics, updateUserStatistics } from 'api';

const removeStatsLearnedWords = async (response: IStatistic | void, user: IAuth) => {
  const { userId, token } = user;
  if (response && response.optional && response.optional.gameStats) {
    const statistics: IStatistic = {
      learnedWords: response.learnedWords > 0 ? response.learnedWords-- : 0,
      optional: {
        lastChanged: response.optional.lastChanged,
        gameStats: {
          sprint: response.optional.gameStats.sprint,
          audiocall: response.optional.gameStats.audiocall,
        },
        newWordsPerDay: {
          ...response.optional.newWordsPerDay,
        },
        learnedWordsPerDay: {
          ...response.optional.learnedWordsPerDay,
        },
      },
    };
    updateUserStatistics({ userId, statistics }, token);
  }
};

export const sendRequestsForUserWord = async (wordId: string, isRight: boolean, game: 'sprint' | 'audiocall') => {
  const userData = getStorage('authorizedUser');
  if (userData) {
    const { userId, token } = userData;
    const userWord = (sprintState.userWords as IUserWordAggregated[]).find((wordObj) => wordObj._id === wordId);
    const response: IStatistic | void = await getUserStatistics(userId, token);
    if (userWord) {
      if ((userWord[game]?.correct || userWord[game]?.wrong) && !isRight && userWord.userWord?.optional?.isLearnt) {
        removeStatsLearnedWords(response, userData);
      }
      updateUserWordInGame(userId, wordId, token, isRight, userWord, getCurrentDate(), game);
    } else {
      createUserWordInGame(userId, wordId, token, isRight, getCurrentDate(), game);
    }
  }
};
