import React from 'react';
import styles from './karmacounter.sass';
import { SvgIcon } from "../../../../SvgIcon";

export function KarmaCounter() {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <SvgIcon w={19} h={10} name='up' />
      </button>
      <span className={styles.karmaValue}>123</span>
      <button className={styles.down}>
        <SvgIcon w={19} h={10} name='down' />
      </button>
    </div>
  );
}
