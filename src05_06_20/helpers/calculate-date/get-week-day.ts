export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const getWeekDay = (i: number) => weekDays[i % weekDays.length];

export const weekDayCreator = (startWeekDay: number) => {
  let dayCounter = 1;
  return () => {
    return getWeekDay(startWeekDay - 1 + dayCounter++);
  };
};
