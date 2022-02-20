import React from 'react';
import styles from './savebutton.sass';
import { Icon } from "../../../../../Icon";

export function SaveButton() {
  return (
    <button className={styles.saveButton}>
      <Icon size={20} name='saveCircle' />
    </button>
  );
}
