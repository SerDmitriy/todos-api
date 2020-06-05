import React from 'react';
import moment from 'moment';
import { getOrdinal } from 'helpers/calculate-date/get-ordinal';
import { getDate } from 'helpers/calculate-date/general-date-format';

export const getRepeatingDate = (date: string, repeating?: boolean) => {
  if (repeating) {
    return (
      <div>{`${moment(date).format('D')}${getOrdinal(new Date(date).getDate())} of ${moment(date).format(
        'MMMM'
      )}`}</div>
    );
  }
  return <div>{getDate(date)}</div>;
};
