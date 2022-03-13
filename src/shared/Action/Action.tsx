import React from 'react';
import styles from './action.sass';
import { Icon } from "../Icon";

interface IActionProps {
  children: string;
  size?: number;
  icon?: string;
  onClick?: () => void;
  className?: string;
}

export function Action({ children, size = 15, icon = '', onClick = () => {}, className = '' }: IActionProps) {
  return (
    <button className={`${styles.action} ${className}`} onClick={onClick}>
      {icon && <Icon size={size} name={icon} />} {children}
    </button>
  );
}
