import { IAuth, IWord, IUserWord, IWordOptionalParams } from 'api/interfaces';
import { sprintState } from 'state';
import { changeAndCompareText } from '../changeAndCompareText';
import { changeGameScore } from '../changeGameScore';
import { iconAnimation } from '../iconAnimation';
import { handleArrowsForSprint } from '../handleBtns';
import { getStorage } from 'pages/LoginAndRegistration';
import { getUserWord, createUserWord, updateUserWord } from 'api';

const separateWordsByAnswer = (isRight: boolean, word: IWord | undefined) => {
  if (word) {
    if (isRight) {
      sprintState.rightAnswers = [...sprintState.rightAnswers, word];
    } else {
      sprintState.wrongAnswers = [...sprintState.wrongAnswers, word];
    }
  }
};

const createUserWordInSprint = (
  userId: string,
  wordId: string,
  token: string,
  isRight: boolean,
  curFullDate: string
) => {
  const body = {
    difficulty: 'normal',
    optional: {
      isLearnt: false,
      sprint: {
        correct: isRight ? 1 : 0,
        wrong: isRight ? 0 : 1,
      },
      audiocall: {
        correct: 0,
        wrong: 0,
      },
      lastChanged: curFullDate,
      correctSeries: isRight ? 1 : 0,
    },
  };
  createUserWord({ userId, wordId, body }, token);
};

const updateUserWordInSprint = (
  userId: string,
  wordId: string,
  token: string,
  isRight: boolean,
  wordBody: IUserWord,
  curFullDate: string
) => {
  const wordOptional = wordBody.optional;

  if (wordOptional) {
    let optional: IWordOptionalParams;
    let isLearnt: boolean;
    switch (wordBody.difficulty) {
      case 'normal':
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
      optional = {
        isLearnt,
        sprint: {
          correct: isRight ? ++wordOptional.sprint.correct : wordOptional.sprint.correct,
          wrong: isRight ? wordOptional.sprint.wrong : ++wordOptional.sprint.wrong,
        },
        audiocall: wordOptional.audiocall,
        lastChanged: curFullDate,
        correctSeries: isRight ? ++wordOptional.correctSeries : 0,
      };
    } else {
      optional = {
        isLearnt: wordOptional.isLearnt,
        sprint: {
          correct: isRight ? 1 : 0,
          wrong: isRight ? 0 : 1,
        },
        audiocall: {
          correct: 0,
          wrong: 0,
        },
        lastChanged: curFullDate,
        correctSeries: isRight ? 1 : 0,
      };
    }

    const body = {
      difficulty: isLearnt ? 'normal' : 'hard',
      optional,
    };
    updateUserWord({ userId, wordId, body }, token);
  }
};

const sendRequestsForUserWord = (wordId: string, isRight: boolean) => {
  const userData: IAuth = getStorage('authorizedUser');
  if (userData) {
    const { userId, token } = userData;
    const date = new Date();
    const curFullDate = [date.getDate(), String(date.getMonth() + 1).padStart(2, '0'), date.getFullYear()].join('.');

    getUserWord({ userId, wordId }, token).then((data) => {
      if (data) {
        updateUserWordInSprint(userId, wordId, token, isRight, data, curFullDate);
      } else {
        createUserWordInSprint(userId, wordId, token, isRight, curFullDate);
      }
    });
  }
};

export const checkAnswer = (answerOfBtn: boolean) => {
  const word = changeAndCompareText();
  let isRight = false;
  if (sprintState.wordAnswer) {
    isRight = answerOfBtn === sprintState.wordAnswer.isRightTranslate;
  }
  if (sprintState.wordAnswer && sprintState.wordAnswer.wordObj) {
    sendRequestsForUserWord(sprintState.wordAnswer.wordObj.id, isRight);
  }
  if (word) sprintState.wordAnswer = { wordObj: word.wordObj, isRightTranslate: word.isRightTranslate };
  separateWordsByAnswer(isRight, word?.wordObj);
  changeGameScore(isRight);
  iconAnimation(isRight);
  if (!sprintState.words.length) {
    document.removeEventListener('keyup', handleArrowsForSprint);
    location.hash = '/sprint-result';
  }
};
