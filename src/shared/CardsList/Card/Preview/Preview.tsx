import React from 'react';
import styles from './preview.sass';

export function Preview({ img }: { img: string }) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={img}
        alt="post preview" />
    </div>
  );
}
