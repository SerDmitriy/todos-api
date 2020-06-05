import { v } from 'overshom-valid';
import { basePaginatedDtoBuilder } from 'helpers/validation/general-validation';

export const baseHolidayValid = {
  date: v.String(),
  name: v.String(),
  repeating: v.Boolean(),
};

export const holidayValid = {
  ...baseHolidayValid,
  id: v.Number(),
};

export const HolidaysListResponseValid = basePaginatedDtoBuilder(holidayValid);
