import * as React from "react";
import { getValue } from "../utils/react/pickFromSyntheticEvent";
import { preventDefault } from "../utils/react/preventDefault";
import { stopPropagation } from "../utils/react/stopPropagation";

function InputExample({ value, onChange }: {value: string, onChange: (value: string) => void }): any {
  return (
    <input
      value={value}
      // onChange={preventDefault(stopPropagation(getValue(onChange)))}
      //onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
      onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
    />
  )
}

function compose<U>( ...fns: Function[]) {
  return <E,>(initialValue: any): U => fns.reduceRight((previsionValue, fn) => fn(previsionValue), initialValue);
}

function pipe<U>( ...fns: Function[]) {
  return <E,>(initialValue: any): U => fns.reduce((previsionValue, fn) => fn(previsionValue), initialValue);
}

function pick<K extends string | number>(prop: K) {
  return <O extends Record<K,any>>(obj: O) => obj[prop]
}

function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

const comments = [{ id: 1 , text: 'text on'}, { id: 2, text: 'text two'}];
//const filteredComments = comments.filter(({ id }) => id !== 2)
const filteredComments = comments.filter(({ id }) => pipe(pick(id), isEqual(22), cond))

const filterWithId = (id: number) => pipe(pick(id), isEqual(id), cond);
const filteredComments1 = comments.filter(({ id }) => filterWithId(22))

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond)

function cond(b: boolean) {
  return !b;
}

const getValueNumber = pipe<number>(
  pick('currentTarget'),
  pick('value'),
  parseInt
)