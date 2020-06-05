import moment from 'moment';

export const DATE_FORMAT = 'MMMM DD, YYYY';

export const getDate = (date: string | Date | undefined): string => {
  return moment(date).format('MMMM DD, YYYY');
};

export const dateToUtc = (dateStr: string | Date): string => {
  const date = new Date(dateStr);
  const offset = new Date().getTimezoneOffset();
  const res = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, -offset);
  return res.toISOString();
};

export const toUtcShortDate = (dateStr: string): Date => {
  const date = new Date(dateStr);
  const offset = new Date().getTimezoneOffset();
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, -offset);
};
