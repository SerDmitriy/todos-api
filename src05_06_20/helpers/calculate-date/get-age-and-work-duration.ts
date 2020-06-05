import moment from 'moment';

export const getAgeAndWorkDuration = (date: string) => {
  const given = moment(date, moment.ISO_8601);
  const today = moment().startOf('day');
  const diff = today.diff(given, 'months');
  return {
    years: `${Math.floor(diff / 12)} years`,
    months: `${diff}`,
  };
};
