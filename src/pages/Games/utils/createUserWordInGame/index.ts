import { createUserWord } from 'api';
import { IWordOptionalParams } from 'api/interfaces';
import { statsState } from 'state';

export const createUserWordInGame = (
  userId: string,
  wordId: string,
  token: string,
  isRight: boolean,
  curFullDate: string,
  game: 'sprint' | 'audiocall'
) => {
  const gameState = {
    correct: isRight ? 1 : 0,
    wrong: isRight ? 0 : 1,
  };

  if (statsState.optional) {
    statsState.optional.gameStats[game].newWords++;
    if (isRight) {
      statsState.optional.gameStats[game].correct++;
    } else {
      statsState.optional.gameStats[game].wrong++;
    }
  }

  let optional: IWordOptionalParams = {
    isLearnt: false,
    lastChanged: curFullDate,
    correctSeries: isRight ? 1 : 0,
  };

  switch (game) {
    case 'sprint':
      optional = { ...optional, sprint: gameState };
      break;
    case 'audiocall':
      optional = { ...optional, audiocall: gameState };
      break;
    default:
      break;
  }

  const body = {
    difficulty: 'easy',
    optional,
  };

  createUserWord({ userId, wordId, body }, token);
};
