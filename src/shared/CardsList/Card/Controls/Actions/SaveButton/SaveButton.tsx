import React from 'react';
import styles from './savebutton.sass';
import { SvgIcon } from "../../../../../SvgIcon";

export function SaveButton() {
  return (
    <button className={styles.saveButton}>
      <SvgIcon w={20} h={20} name='saveCircle' />
    </button>
  );
}
