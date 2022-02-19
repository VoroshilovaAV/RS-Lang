import { IState } from 'state/interfaces';

export const markPageHard = (state: IState, string: string) => {
  const wordsMark = document.querySelector('.user-words');
  const countUsersWordHard = state.pageUserWords.filter((el) => el.userWord?.difficulty === 'hard').length;
  const countUsersWordLearnt = state.pageUserWords.filter((item) => item.userWord?.optional?.isLearnt === true).length;
  if (string.indexOf('learned') === -1) {
    if (wordsMark) {
      wordsMark.innerHTML = countUsersWordHard === 19 ? string : '';
    } else {
      if (countUsersWordHard === 19) {
        const element = document.createElement('div');
        element.className = 'user-words';
        element.innerHTML = string;
        const parent = document.querySelector('.book__panel-controls');
        parent?.appendChild(element);
      }
    }
  } else {
    if (wordsMark) {
      wordsMark.innerHTML = countUsersWordLearnt === 19 ? string : '';
    } else {
      if (countUsersWordLearnt === 19) {
        const element = document.createElement('div');
        element.className = 'user-words';
        element.innerHTML = string;
        const parent = document.querySelector('.book__panel-controls');
        parent?.appendChild(element);
        console.log(element);
      }
    }
  }
};
