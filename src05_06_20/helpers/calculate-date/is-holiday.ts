import { IHoliday } from 'models/holiday/holiday.model';
import { weekDays } from 'helpers/calculate-date/get-week-day';

export const isHoliday = (i: number): boolean => {
  const weekDay = i % weekDays.length;
  return weekDay === 5 || weekDay === 6;
};

export const isCustomHoliday = (date: Date, holidayList: IHoliday[] | null): boolean => {
  if (holidayList === null) {
    return false;
  }
  return holidayList.some(holiday =>
    holiday.repeating ? sameDay(date, new Date(holiday.date)) : sameDayAndYear(date, new Date(holiday.date))
  );
};

export const sameDayAndYear = (d1: Date, d2: Date) => {
  return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
};

export const sameDay = (d1: Date, d2: Date) => {
  return d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
};
