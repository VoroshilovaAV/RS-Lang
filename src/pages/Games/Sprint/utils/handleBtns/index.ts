import { checkAnswer } from '../checkAnswer';

export const handleBtnsForSprint = (e: Event) => {
  const answerBtn: HTMLElement | null =
    e.target instanceof HTMLElement ? e.target.closest('.sprint__answer-btn') : null;
  const answerOfBtn = answerBtn?.getAttribute('data-sprint-answer');

  if (answerBtn && answerOfBtn) {
    checkAnswer(JSON.parse(answerOfBtn.toLowerCase()));
  }
};

export const handleArrowsForSprint = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') {
    checkAnswer(false);
  }
  if (e.key === 'ArrowRight') {
    checkAnswer(true);
  }
};
