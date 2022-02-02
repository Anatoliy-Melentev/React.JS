import React from 'react';
import styles from './title.sass';

export function Title() {
  return (
    <h2 className={styles.title}>
      <a href="#upost-url" className={styles.postLink}>
        Следует отметить, что новая модель организационной деятельности...
      </a>
    </h2>
  );
}
