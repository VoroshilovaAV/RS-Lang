let answerButtons: Array<string>;

export const AudiocallAnswerButtons = (answerText: Array<string>) => {
  answerButtons = [];
  answerText.forEach((el, index) => {
    answerButtons.push(
      `<button class="btn btn-answer m-3" role="button" data-answer="${index}">${
        index + 1 + ' ' + answerText[index]
      }</button>`
    );
  });
  return answerButtons.join('');
};
