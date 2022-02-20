import { IUserWordAggregated } from 'state/interfaces';

export const learnt = `<div class="learned-words" title="Изученные слова"><img class="learned__img" src='./assets/icons/learned-words.svg' alt="изученные слова"></div>`;
export const hard = `<div class="difficult-words" title="Трудные слова"><img class="difficult__img" src='./assets/icons/hard-words.svg' alt="трудные слова"></div>`;
export const firstSrc = './assets/icons/hard-words.svg';
export const secondSrc = './assets/icons/hard-words-empty.svg';

export const userLogin = `<div class="user-words">
    <div class="learned-words" title="Изученные слова"><img class="learned__img" src='./assets/icons/learned-words.svg' alt="изученные слова"></div>
    <div class="difficult-words" title="Трудные слова"><img class="difficult__img" src='./assets/icons/hard-words.svg' alt="трудные слова"></div>
  </div>`;

export const difficultWords = `<a href="#/dictionary" class="btn btn-secondary sign-in-btn">Сложные слова</a>`;

export const hardWords = `<div class="hard-word"><img src='./assets/icons/hard-words-empty.svg' width="15" alt="трудное слово"></div>`;

export const hardWordsDelete = `<div class="hard-word-delete">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" version="1.1" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="14"/>
  <g transform="matrix(0.70710678,0.70710678,-0.70710678,0.70710678,16,-6.627417)">
    <rect style="fill:#ffffff" width="4" height="20" x="-18" y="6" transform="matrix(0,-1,1,0,0,0)"/>
    <rect style="fill:#ffffff" width="4" height="20" x="14" y="6"/>
  </g>
</svg>
</div>`;

export const learnProgress = `<div class="word-list__learn-progress">
    <div class="learned-word">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    </div>
  </div>`;

export const eventNone = 'style = "pointer-events: none"';
export const buttonClassGray = 'full-page';

export const getTemplate = (template: string) => {
  return (localStorage.getItem('authorizedUser') ? true : false) ? template : '';
};
const writeCorrect = (wordUser: IUserWordAggregated, template: string) => {
  const audiocallCorrect = wordUser.userWord?.optional?.audiocall?.correct;
  const sprintCorrect = wordUser.userWord?.optional?.sprint?.correct;
  const audiocallUnCorrect = wordUser.userWord?.optional?.audiocall?.wrong;
  const sprintUnCorrect = wordUser.userWord?.optional?.sprint?.wrong;
  const rightAnswers = +(audiocallCorrect ? audiocallCorrect : 0) + +(sprintCorrect ? sprintCorrect : 0);
  const wrongAnswers = +(audiocallUnCorrect ? audiocallUnCorrect : 0) + +(sprintUnCorrect ? sprintUnCorrect : 0);
  if (rightAnswers > 0 || wrongAnswers > 0) {
    return `<div class="word-list__learn-progress">
    <div class="learned-word">
    <div class="correct-answers-number" style="color: red;"><span class="blue-number" style="color: blue;">${rightAnswers}/</span>${wrongAnswers}</div>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    </div>
  </div>`;
  } else return template;
};

export const getTemplateProgress = (template: string, word: IUserWordAggregated) => {
  if (localStorage.getItem('authorizedUser') ? true : false) {
    return `${writeCorrect(word, template)}`;
  } else return '';
};
