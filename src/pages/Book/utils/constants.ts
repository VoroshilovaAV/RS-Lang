export const userLogin = `<div class="user-words">
    <div class="learned-words" title="Изученные слова"><img class="learned__img" src='./assets/icons/learned-words.svg' alt="изученные слова"></div>
    <div class="difficult-words" title="Трудные слова"><img class="difficult__img" src='./assets/icons/hard-words.svg' alt="трудные слова"></div>
  </div>`;
export const difficultWords = `<a href="#/dictionary" class="btn btn-secondary sign-in-btn">Сложные слова</a>`;

export const hardWords = `<div class="hard-word"><img src='./assets/icons/hard-words-empty.svg' width="15" alt="трудное слово"></div>`;

export const learnProgress = `<div class="word-list__learn-progress">
    <div class="learned-word">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    </div>
  </div>`;

export const getTemplate = (template: string) => {
  return (localStorage.getItem('authorizedUser') ? true : false) ? template : '';
};
