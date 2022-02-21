export const getCurrentDate = () => {
  const date = new Date();
  return [date.getDate(), String(date.getMonth() + 1).padStart(2, '0'), date.getFullYear()].join('.');
};
