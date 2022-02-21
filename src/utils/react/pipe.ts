export function pipe<U>( ...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduce((previsionValue, fn) => fn(previsionValue), initialValue);
}