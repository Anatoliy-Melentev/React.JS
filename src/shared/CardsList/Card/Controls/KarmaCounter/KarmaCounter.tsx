import React from 'react';
import styles from './karmacounter.sass';
import { Icon } from "../../../../Icon";

export function KarmaCounter() {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <Icon size={20} name='up' />
      </button>
      <span className={styles.karmaValue}>123</span>
      <button className={styles.down}>
        <Icon size={20} name='down' />
      </button>
    </div>
  );
}
