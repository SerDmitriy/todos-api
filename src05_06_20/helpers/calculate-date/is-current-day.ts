export const isCurrentDay = (day: number, month: number, year: number): boolean => {
  return day === new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear();
};
