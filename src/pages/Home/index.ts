import './index.scss';

export const HomeComponent = {
  listen: () => {},
  render: () => {
    return `
    <div class="container main-container">
          <div class="main-text">
            <h1 class="title">Добро пожаловать!</h1>
            <p class="main-subtitle">Изучать английский теперь намного проще с приложением RS Lang! Не нужно
              заставлять себя учить слова, потому что можно запоминать их играя!</p>
            <div class="main-btns">
              <a href="#/games" class="btn btn-primary btn-start">Начать игру</a>
              <a href="#/book" class="btn btn-outline-primary">Учить слова</a>
            </div>
          </div>
          <img class="main-img" src="assets/img/main-img.png" alt="">
        </div>        
    `;
  },
};
