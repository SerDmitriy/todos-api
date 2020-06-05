export const getNewDate = (day: number, month: number, year: number): Date => {
  const modifiedDay = day < 10 ? `0${day}` : day;
  const modifiedMonth = month < 10 ? `0${month}` : month;

  return new Date(`${modifiedMonth}.${modifiedDay}.${year}`);
};
