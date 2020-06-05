import moment from 'moment';

export const getReviewDateAgo = (data: { date1: any; date2: any }) => {
  const given = moment(data.date1, 'DD.MM.YYYY');
  const reviewDate = moment(data.date2).startOf('day');
  const diff = reviewDate.diff(given, 'months');
  const calculatedDate = {
    months: `${diff * -1} months`,
  };
  return calculatedDate;
};
