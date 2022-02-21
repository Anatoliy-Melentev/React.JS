import React from 'react';
import styles from './commentsbutton.sass';
import { SvgIcon } from "../../../../SvgIcon";

export function CommentsButton() {
  return (
    <button className={styles.commentsButton}>
      <SvgIcon w={15} h={15} name='comments' />
      <span className={styles.commentsNumber}>13</span>
    </button>
  );
}
