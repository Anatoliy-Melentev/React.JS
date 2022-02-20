import React from 'react';
import styles from './commentsbutton.sass';
import { Icon } from "../../../../Icon";

export function CommentsButton() {
  return (
    <button className={styles.commentsButton}>
      <Icon size={20} name='comments' />
      <span className={styles.commentsNumber}>13</span>
    </button>
  );
}
