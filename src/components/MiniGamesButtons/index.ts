const levelsNum: Array<string> = ['0', '1', '2', '3', '4', '5'];
const levelsText: Array<string> = ['Новичок', 'Легко', 'Средне', 'Сложно', 'Невероятно', 'Легендарно'];
let buttonsArray: Array<string> = [];

export const LevelButtonsTemplate = (game: string, bgColor: string) => {
  buttonsArray = [];
  levelsNum.forEach((el) => {
    buttonsArray.push(
      `<a href="#/pre-${game}" class="btn game-btn btn-${bgColor} custom m-2" role="button" data-game-level="${el}">${levelsText[el]}</a>`
    );
  });
  return buttonsArray.join('');
};
