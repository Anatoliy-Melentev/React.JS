import React from 'react';
import styles from './iconbtn.sass';
import { Icon } from "../Icon";


interface IIconBtnProps {
  size?: number;
  icon: string;
  onClick?: () => void;
  className?: string;
}

export function IconBtn({ size = 20, icon = '', onClick = () => {}, className = '' }: IIconBtnProps) {
  return (
    <button className={`${styles.iconBtn} ${className}`} onClick={onClick}>
      <Icon size={size} name={icon} />
    </button>
  );
}
