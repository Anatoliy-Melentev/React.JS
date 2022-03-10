import React from 'react';
import styles from './karmacounter.sass';
import { Icon, EIcon } from "../../../../Icon";

export function KarmaCounter({ score }: { score: number }) {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <Icon size={20} name={EIcon.up} />
      </button>
      <span className={styles.karmaValue}>{score}</span>
      <button className={styles.down}>
        <Icon size={20} name={EIcon.down} />
      </button>
    </div>
  );
}
