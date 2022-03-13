import React from 'react';
import styles from './karmacounter.sass';
import { Icon, EIcon } from "../Icon";
import { IconBtn } from "../IconBtn";

export function KarmaCounter({ score }: { score: number }) {
  return (
    <div className={styles.karmaCounter}>
      <IconBtn icon={EIcon.up} className={styles.up} />
      <span className={styles.karmaValue}>{score}</span>
      <IconBtn icon={EIcon.down} className={styles.down} />
    </div>
  );
}
