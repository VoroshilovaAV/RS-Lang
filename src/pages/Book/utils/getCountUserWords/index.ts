import { hard, learnt } from 'pages/Book/components';
import { IPageWords, IState } from 'state/interfaces';

export const isAllUsersWord = (current: IPageWords, state: IState) => {
  if (current.group !== 6) {
    const countUsersWordLearnt = state.pageUserWords.filter((el) => el.userWord?.optional?.isLearnt === true).length;
    const countUsersWordHard = state.pageUserWords.filter((el) => el.userWord?.difficulty === 'hard').length;
    if (countUsersWordLearnt === 20 || countUsersWordHard === 20) {
      return `<div class="user-words">
      ${countUsersWordLearnt === 20 ? learnt : ''}
      ${countUsersWordHard === 20 ? hard : ''}
    </div>`;
    } else return '';
  } else return '';
};
export const isAllWords = (current: IPageWords, state: IState, string: string) => {
  const countUsersWordLearnt = state.pageUserWords.filter((el) => el.userWord?.optional?.isLearnt === true).length;
  const countUsersWordHard = state.pageUserWords.filter((el) => el.userWord?.difficulty === 'hard').length;
  return countUsersWordLearnt === 20 || countUsersWordHard === 20 || current.group === 6 ? string : '';
};
