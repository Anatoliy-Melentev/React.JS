import React from 'react';
import styles from './sharebutton.sass';
import { Icon } from "../../../../../Icon";

export function ShareButton() {
  return (
    <button className={styles.shareButton}>
      <Icon size={20} name='shareCircle' />
    </button>
  );
}
