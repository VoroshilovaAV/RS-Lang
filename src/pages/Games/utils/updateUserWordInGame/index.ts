import { updateUserWord } from 'api';
import { IUserWordAggregated, IWordOptionalParams } from 'api/interfaces';
import { statsState } from 'state';

const updateGameState = (
  isRight: boolean,
  wordOptional: IWordOptionalParams,
  gameStr: keyof IWordOptionalParams & ('sprint' | 'audiocall')
) => {
  const gameObj = wordOptional[gameStr];
  if (gameObj)
    return {
      correct: isRight ? ++gameObj.correct : gameObj.correct,
      wrong: isRight ? gameObj.wrong : ++gameObj.wrong,
    };
};

export const updateUserWordInGame = (
  userId: string,
  wordId: string,
  token: string,
  isRight: boolean,
  wordBody: IUserWordAggregated,
  curFullDate: string,
  game: 'sprint' | 'audiocall'
) => {
  const userWord = wordBody.userWord;
  const wordOptional = userWord?.optional;

  if (wordOptional) {
    if ((userWord[game]?.correct || userWord[game]?.wrong) && !isRight && wordOptional.isLearnt) {
      if (statsState.learnedWords > 0) statsState.learnedWords--;
    } else {
      let isLearnt: boolean;
      switch (userWord.difficulty) {
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
      if (isLearnt) statsState.learnedWords++;
    }
    let optional: IWordOptionalParams;

    let isLearnt: boolean;
    const isPrevLearnt = wordOptional?.isLearnt;

    if (statsState.optional && userWord[game]?.correct + userWord[game]?.wrong === 0)
      statsState.optional.gameStats[game].newWords++;

    if (!isRight) {
      isLearnt = false;
      if (statsState.optional) statsState.optional.gameStats[game].wrong++;
    } else {
      if (statsState.optional) statsState.optional.gameStats[game].correct++;
      if (isPrevLearnt) {
        isLearnt = true;
      } else {
        switch (userWord.difficulty) {
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
      }
    }

    if (wordOptional.lastChanged === curFullDate) {
      let correctSeries = Number(wordOptional.correctSeries);
      correctSeries++;
      optional = {
        isLearnt,
        lastChanged: curFullDate,
        correctSeries: isRight ? correctSeries : 0,
      };

      switch (game) {
        case 'sprint':
          optional = {
            ...optional,
            sprint: updateGameState(isRight, wordOptional, 'sprint'),
            audiocall: wordOptional.audiocall,
          };
          break;
        case 'audiocall':
          optional = {
            ...optional,
            sprint: wordOptional.sprint,
            audiocall: updateGameState(isRight, wordOptional, 'audiocall'),
          };
          break;
        default:
          break;
      }
    } else {
      const gameStateTimeUp = {
        correct: isRight ? 1 : 0,
        wrong: isRight ? 0 : 1,
      };

      optional = {
        isLearnt,
        lastChanged: curFullDate,
        correctSeries: isRight ? 1 : 0,
      };

      switch (game) {
        case 'sprint':
          optional = { ...optional, sprint: gameStateTimeUp };
          break;
        case 'audiocall':
          optional = { ...optional, audiocall: gameStateTimeUp };
          break;
        default:
          break;
      }
    }

    const body = {
      difficulty: userWord.difficulty,
      optional,
    };

    updateUserWord({ userId, wordId, body }, token);
  }
};
