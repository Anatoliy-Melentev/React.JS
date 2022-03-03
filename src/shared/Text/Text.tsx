import React from 'react';
import styles from './text.sass';
import classNames from 'classnames';

export enum Ecolor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  purple = 'purple',
  greyF4 = 'greyF4',
  greyF3 = 'greyF3',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: Ecolor;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const
    {
      As = 'span',
      color = Ecolor.black,
      children,
      size,
      bold = false,
      mobileSize,
      tabletSize,
      desktopSize
    } = props,
    classes = classNames(
      styles[`s${size}`],
      styles[color],
      { [styles.bold]: bold },
      { [styles[`m${mobileSize}`]]: mobileSize },
      { [styles[`t${tabletSize}`]]: tabletSize },
      { [styles[`d${desktopSize}`]]: desktopSize },
    );

  return (
    <As className={classes} >
      {children}
    </As>
  );
}
