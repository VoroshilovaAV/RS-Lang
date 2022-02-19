export const showExtraPoints = (extraPoints: number) => {
  const extraPointsText = document.querySelector('.progress-score__extra');
  extraPointsText?.classList.remove('progress-score__extra_hide');
  extraPointsText?.classList.add('progress-score__extra_show');
  if (extraPointsText) extraPointsText.textContent = `+${extraPoints}`;
  setTimeout(() => {
    extraPointsText?.classList.remove('progress-score__extra_show');
    extraPointsText?.classList.add('progress-score__extra_hide');
  }, 1500);
};
