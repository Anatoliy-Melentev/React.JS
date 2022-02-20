import React from 'react';
import styles from './menuitem.sass';
import { SvgIcon } from "../../../../SvgIcon";

interface IMenuItemProps {
  item: {
    id: string;
    text: string;
    svg?: { w: number, h: number, name: string };
    className?: string;
  },
  onClick?: (id: string) => void;
}

const noop = () => {};

export function MenuItem({ item: { id, text, svg, className }, onClick = noop }: IMenuItemProps) {
  return (
    <a href="#" onClick={() => onClick(id)} >
      <div className={`${styles.menuItem} ${className}`} >
        { svg && <SvgIcon className={styles.svg} w={svg.w} h={svg.h} name={svg.name}/>}
        <span>{text}</span>
      </div>
    </a>
  );
}
