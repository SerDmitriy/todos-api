export const API_CONFIG_BASE = { page: 0, size: 10000 };
export const API_DATE_CONFIG_BASE = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
};
export const API_FULL_DATE_CONFIG = {
  ...API_DATE_CONFIG_BASE,
  year: new Date().getFullYear(),
};
export const API_CONFIG_SORT = { ...API_CONFIG_BASE, search: '', sort: '' };
