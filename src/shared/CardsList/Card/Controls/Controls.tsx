import React from 'react';
import styles from './controls.sass';
import { KarmaCounter } from "./KarmaCounter";
import { CommentsButton } from "./CommentsButton";
import { Actions } from "./Actions"

export function Controls({ score }: { score: number }) {
  return (
    <div className={styles.controls}>
      <KarmaCounter score={score} />
      <CommentsButton />
      <Actions />
    </div>
  );
}
