import { between } from "./between";

export const declOfNumber = (number: number, [one, few, many]: string[]): string =>
  `${number.toString()} ${[one, few, many][
    between(4, Math.abs(number) % 100, 21) ? 2
      : between(1, Math.abs(number) % 10, 5) ? 1
        : Math.abs(number) % 10 === 1 ? 0 : 2]}`;

interface IDateNames {
  [n: number]: [string, string, string];
};

const DateNames: IDateNames = [
  ['год', 'года', 'лет'],
  ['месяц', 'месяца', 'месяцев'],
  ['день', 'дня', 'дней'],
  ['час', 'часа', 'часов'],
  ['минута', 'минуты', 'минут'],
  ['секунда', 'секунды', 'секунд'],
];

export const enum EDateNames {
  year,
  month,
  day,
  hour,
  minut,
  second,
}

export const declOfDate = (value: number, type: number): string => declOfNumber(value, DateNames[type]);
