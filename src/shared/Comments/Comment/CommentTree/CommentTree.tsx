import React from 'react';
import styles from './commenttree.sass';
import { EIcon } from "../../../Icon";
import { IconBtn } from "../../../IconBtn";

export function CommentTree() {
  return (
    <div className={styles.tree}>
      <div className={styles.arrow}>
        <IconBtn icon={EIcon.up} className={styles.up} />
        <IconBtn icon={EIcon.down} className={styles.down} />
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
