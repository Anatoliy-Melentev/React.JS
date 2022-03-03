import React from 'react';
import styles from './menuitem.sass';
import { Icon } from "../../../../Icon";

interface IMenuItemProps {
  item: {
    id: string;
    text: string;
    svg?: { size: number, name: string };
    className?: string;
  },
  onClick?: (id: string) => void;
}

const noop = () => {};

export function MenuItem({ item: { id, text, svg, className }, onClick = noop }: IMenuItemProps) {
  return (
    <a href="#" onClick={() => onClick(id)} >
      <div className={`${styles.menuItem} ${className}`} >
        { svg && <Icon className={styles.svg} size={svg.size} name={svg.name}/>}
        <span>{text}</span>
      </div>
    </a>
  );
}
