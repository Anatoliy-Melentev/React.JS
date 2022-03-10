export const getFullSeconds = (firstDate: number, lastDate: number = (new Date()).getTime()): number =>
  Math.floor(Math.abs(lastDate - firstDate) / (1000));

export const getFullMinuts = (firstDate: number, lastDate: number = (new Date()).getTime()): number =>
  Math.floor(Math.abs(lastDate - firstDate) / (1000 * 60));

export const getFullHours = (firstDate: number, lastDate: number = (new Date()).getTime()): number =>
  Math.floor(Math.abs(lastDate - firstDate) / (1000 * 3600));

export const getFullDays = (firstDate: number, lastDate: number = (new Date()).getTime()): number =>
  Math.floor(Math.abs(lastDate - firstDate) / (1000 * 3600 * 24));

export const getFullMonths = (firstDate: number, lastDate: number = (new Date()).getTime()): number =>
  ((new Date(lastDate).getFullYear() - new Date(firstDate).getFullYear())) * 12 +
    (new Date(lastDate).getMonth() - new Date(firstDate).getMonth());

export const getFullYears = (firstDate: number, lastDate: number = (new Date()).getTime()): number =>
  Math.floor(getFullDays(firstDate) / 365);

