import { IStatistic } from 'api/interfaces';
import { getUserStatistics, updateUserStatistics } from 'api';
import { getStorage } from 'pages/LoginAndRegistration';
import { getCurrentDate } from 'utils/getCurrentDate';

export const createStats = (userId: string, token: string) => {
  const curDate = getCurrentDate();
  const statistics: IStatistic = {
    learnedWords: 0,
    optional: {
      lastChanged: curDate,
      gameStats: {
        sprint: {
          newWords: 0,
          longestSeries: 0,
          correct: 0,
          wrong: 0,
        },
        audiocall: {
          newWords: 0,
          longestSeries: 0,
          correct: 0,
          wrong: 0,
        },
      },
    },
  };
  return updateUserStatistics({ userId, statistics }, token);
};

export const getStats = async () => {
  const user = getStorage('authorizedUser');
  if (user) {
    const { userId, token } = user;
    const response: IStatistic | void = await getUserStatistics(userId, token);
    const curDate = getCurrentDate();
    if (response) {
      if (response.optional) {
        if (curDate !== response.optional.lastChanged) {
          const statistics: IStatistic = {
            learnedWords: 0,
            optional: {
              lastChanged: curDate,
              gameStats: {
                sprint: {
                  newWords: 0,
                  longestSeries: 0,
                  correct: 0,
                  wrong: 0,
                },
                audiocall: {
                  newWords: 0,
                  longestSeries: 0,
                  correct: 0,
                  wrong: 0,
                },
              },
              newWordsPerDay: {
                ...response.optional.newWordsPerDay,
                [response.optional.lastChanged]:
                  response.optional.gameStats.sprint.newWords + response.optional.gameStats.audiocall.newWords,
              },
              learnedWordsPerDay: {
                ...response.optional.learnedWordsPerDay,
                [response.optional.lastChanged]: response.learnedWords,
              },
            },
          };
          updateUserStatistics({ userId, statistics }, token);
        }
      }
    }
  }
};
