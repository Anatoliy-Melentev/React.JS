import React from 'react';
import styles from './svgicon.sass';
import icons from './icons.svg';

interface ISvgIcon {
  w: number;
  h: number;
  name: string;
  className?: string;
}

export function SvgIcon({ w, h, name, className = '' }: ISvgIcon) {
  return (
    <svg className={className} width={w} height={h}>
      <use xlinkHref={`${icons}#${name}`}></use>
    </svg>
  );
}
