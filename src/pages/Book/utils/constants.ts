export const userLogin = `<div class="user-words">
    <button class="learned-words" data-bs-toggle="tooltip" data-bs-placement="left" title="Изученные слова"><img class="learned__img" src='./assets/icons/learned-words.svg' alt="изученные слова"></button>
    <button class="difficult-words" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Трудные слова"><img class="difficult__img" src='./assets/icons/hard-words.svg' alt="трудные слова"></button>
  </div>`;

export const hardWords = `<div class="hard-word"><img src='./assets/icons/hard-words-empty.svg' width="15" alt="трудное слово"></div>`;

export const learnProgress = `<div class="word-list__learn-progress">
    <div class="learn-progress">1/2</div>
    <div class="learned-word">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    </div>
  </div>`;

export const getTemplate = (template: string) => {
  return (localStorage.getItem('authorizedUser') ? true : false) ? template : '';
};
