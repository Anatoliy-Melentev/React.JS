import React from 'react';
import styles from './savebutton.sass';
import { Icon, EIcon } from "../../../../../Icon";

export function SaveButton() {
  return (
    <button className={styles.saveButton}>
      <Icon size={20} name={EIcon.saveCircle} />
    </button>
  );
}
