const MONTH_NAMES = [
  ' ',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getMonthName = (month: number): string => {
  if (month > 0 && month <= 12) {
    return MONTH_NAMES[month];
  }
  throw new Error('Invalid parameter to getMonthName()');
};
