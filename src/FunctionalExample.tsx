import React from "react";

const add = (leftSide: number) => (rightSide: number) => leftSide = rightSide;

add(1)(1) // ->2
const addOne = add(1);
const addSix = add(6);

addOne(5);

const withIdKey = withKey('id');
const withIdxKey = withKey();

function Feed(props: { blocks: IBlockProps[] }) {
  return (
    <div>
      { props.blocks.map(withIdKey(Block)) }
      { /*props.blocks.map((block) => <Block key={ block.id } {...block} />)*/ }
    </div>
  );
}

interface IBlockProps extends Record<string, unknown> {
  title: string;
  id: string;
}

function Block(props: IBlockProps) {
  return (
    <div>{props.title}</div>
  )
}

function withKey(key?: string) {
  return <E extends Record<string, unknown>, T extends React.ComponentType<E>>(component: T) =>
    (props: E, index: number) =>
      React.createElement(
        component,
         { ...props, key: key ? props[key as keyof E] : index },
         [],
      );
}

function InputText({ onChange, value }: { onChange: (value: string) => void, value: string }) {
  return (
    <input
      value={value}
      onChange={getValue(onChange)}
      type="text"
      //onChange={(e) => onChange(e.currentTarget.value)}
    />
  )
}

function Checkbox(props: { onChange: (value: boolean) => void, value: boolean }) {
  return (
    <input
      type="checkbox"
      checked={props.value}
      onChange={getChecked(props.onChange)}
      //onChange={(e) => props.onChange(e.currentTarget.checked)}
    />
  )
}

function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) =>
    <E extends ((t: T[K]) => void)>(fn: E) =>
      (e: React.SyntheticEvent<T>) =>
        fn(e.currentTarget[key])
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

function NotStandartLink(props: any) {
  const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    e.preventDefault();
    props.onClick();
  }

  return (
    <a onClick={handleClick}>Hello</a>
  )
}

function preventDefault<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e)
  }
}

function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e)
  }
}

interface InputProps {
  onChange: (value: string) => void,
  value: string
}

function Input({ value, onChange }: InputProps) {
  return (
    <input type="text" value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
  )
}