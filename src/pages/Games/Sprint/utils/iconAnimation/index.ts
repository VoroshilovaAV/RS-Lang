export const iconAnimation = (isRightAnswer: boolean | undefined) => {
  const answerIcon = document.querySelector('.sprint__answer-icon');
  answerIcon?.classList.remove('sprint__answer-icon_true', 'sprint__answer-icon_false');
  if (isRightAnswer) {
    answerIcon?.classList.add('sprint__answer-icon_true');
  } else {
    answerIcon?.classList.add('sprint__answer-icon_false');
  }
  answerIcon?.animate(
    [
      {
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -40px, 0) scaleY(1.15)',
      },
      {
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -10px, 0) scaleY(1.05)',
      },
      {
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 0, 0) scaleY(0.95)',
      },
      {
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -10px, 0) scaleY(1.05)',
      },
      {
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, 0, 0)',
      },
    ],
    { duration: 400, fill: 'forwards' }
  );
};
