import { updateUserWord } from 'api';
import { IUserWord, IWordOptionalParams } from 'api/interfaces';

export const updateUserWordInGame = (
  userId: string,
  wordId: string,
  token: string,
  isRight: boolean,
  wordBody: IUserWord,
  curFullDate: string,
  game: 'sprint' | 'audiocall'
) => {
  const wordOptional = wordBody.optional;

  if (wordOptional && wordOptional.sprint && wordOptional.correctSeries) {
    let optional: IWordOptionalParams;

    let isLearnt: boolean;

    switch (wordBody.difficulty) {
      case 'easy':
        isLearnt = Number(isRight) + Number(wordOptional.correctSeries) >= 3;
        break;
      case 'hard':
        isLearnt = Number(isRight) + Number(wordOptional.correctSeries) >= 5;
        break;
      default:
        isLearnt = false;
        break;
    }

    if (wordOptional.lastChanged === curFullDate) {
      const gameState = {
        correct: isRight ? ++wordOptional.sprint.correct : wordOptional.sprint.correct,
        wrong: isRight ? wordOptional.sprint.wrong : ++wordOptional.sprint.wrong,
      };

      optional = {
        isLearnt,
        lastChanged: curFullDate,
        correctSeries: isRight ? ++wordOptional.correctSeries : 0,
      };

      switch (game) {
        case 'sprint':
          optional = { ...optional, sprint: gameState, audiocall: wordOptional.audiocall };
          break;
        case 'audiocall':
          optional = { ...optional, sprint: wordOptional.sprint, audiocall: gameState };
          break;
        default:
          break;
      }
    } else {
      const gameState = {
        correct: isRight ? 1 : 0,
        wrong: isRight ? 0 : 1,
      };

      optional = {
        isLearnt: wordOptional.isLearnt,
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
    }

    const body = {
      difficulty: wordBody.difficulty,
      optional,
    };

    updateUserWord({ userId, wordId, body }, token);
  }
};
