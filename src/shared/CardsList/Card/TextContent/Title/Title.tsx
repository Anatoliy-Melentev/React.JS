import React from 'react';
import styles from './title.sass';

export function Title({ title }: { title: string }) {
  return (
    <h2 className={styles.title}>
      <a href="#upost-url" className={styles.postLink}>{title}</a>
    </h2>
  );
}
