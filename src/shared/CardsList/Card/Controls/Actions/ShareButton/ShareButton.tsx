import React from 'react';
import styles from './sharebutton.sass';
import { SvgIcon } from "../../../../../SvgIcon";

export function ShareButton() {
  return (
    <button className={styles.shareButton}>
      <SvgIcon w={20} h={20} name='shareCircle' />
    </button>
  );
}
