export const userLogin = `<div class="user-words">
    <div class="learned-words" title="Изученные слова"><img class="learned__img" src='./assets/icons/learned-words.svg' alt="изученные слова"></div>
    <div class="difficult-words" title="Трудные слова"><img class="difficult__img" src='./assets/icons/hard-words.svg' alt="трудные слова"></div>
  </div>`;
export const difficultWords = `<a href="#/dictionary" class="btn btn-secondary sign-in-btn">Сложные слова</a>`;

export const hardWords = `<div class="hard-word"><img src='./assets/icons/hard-words-empty.svg' width="15" alt="трудное слово"></div>`;

export const hardWordsDelete = `<div class="hard-word-delate">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" version="1.1" viewBox="0 0 32 32">
  <circle style="fill:#363cd9" cx="16" cy="16" r="14"/>
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

export const getTemplate = (template: string) => {
  return (localStorage.getItem('authorizedUser') ? true : false) ? template : '';
};
