import React from 'react';
import styles from './icon.sass';
import icons from './icons.svg';
import { getWidth, getHeight } from './sizes';

interface IIcon {
  size?: number;
  name: string;
  className?: string;
}

export enum EIcon {
  menu = 'menu',
  shareCircle = 'shareCircle',
  saveCircle = 'saveCircle',
  comments = 'comments',
  up = 'up',
  down = 'down',
  share = 'share',
  hide = 'hide',
  save = 'save',
  complain = 'complain',
  anonim = 'anonim',
  close = 'close',
  stroke = 'stroke',
  rocket = 'rocket',
};

export function Icon({ name, size = 20, className = '' }: IIcon) {
  return (
    <svg className={className} width={getWidth(name, size)} height={getHeight(name, size)} >
      <use xlinkHref={`${icons}#${name}`}></use>
    </svg>
  );
}
