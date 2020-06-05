export const getStartWeekDay = (month: number, year: number): number => {
	const res = new Date(year, month - 1, 1);
	return res.getDay() ? res.getDay() : 7; //Sun 0 => 7
};