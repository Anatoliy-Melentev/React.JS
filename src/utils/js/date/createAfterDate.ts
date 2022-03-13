import { getFullDays, getFullHours, getFullMinuts, getFullMonths, getFullYears } from "./getFullDate";
import { declOfDate, EDateNames } from "../declOfNumber";

export const createAfterDate = (date: number): string => {

  const minuts = getFullMinuts(date);
  const hours = getFullHours(date);
  const days = getFullDays(date);
  const months = getFullMonths(date);
  const years = getFullYears(date);

  let dateText: string;
  switch (true) {
    case (years > 0): dateText = declOfDate(years, EDateNames.year);
      break;
    case (months > 0): dateText = declOfDate(months, EDateNames.month);
      break;
    case (days > 0): dateText = declOfDate(days, EDateNames.day);
      break;
    case (hours > 0): dateText = declOfDate(hours, EDateNames.hour);
      break;
    case (minuts > 0): dateText = declOfDate(minuts, EDateNames.minut);
      break;
    default: dateText = 'меньше минуты';
  }

  return dateText;
}