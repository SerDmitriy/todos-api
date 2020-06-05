export const getOrdinal = (day: number): string => {
  if (day === 1) {
    return 'st';
  }
  if (day % 10 === 2) {
    return 'nd';
  }
  if (day % 10 === 3) {
    return 'rd';
  }
  return 'th';
};
