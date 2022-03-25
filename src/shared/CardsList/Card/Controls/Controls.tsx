import React from 'react';
import styles from './controls.sass';
import { KarmaCounter } from "../../../KarmaCounter";
import { EIcon } from "../../../Icon";
import { Action } from "../../../Action";
import { IconBtn } from "../../../IconBtn";

export function Controls({ score }: { score: number }) {
  return (
    <div className={styles.controls}>
      <KarmaCounter score={score} />
      <div className={styles.commentsButton}>
        <Action className={styles.commentsIcon} icon={EIcon.comments} size={20}>20</Action>
      </div>
      <div className={styles.actions}>
        <IconBtn icon={EIcon.shareCircle} />
        <IconBtn icon={EIcon.saveCircle} />
      </div>
    </div>
  );
}
