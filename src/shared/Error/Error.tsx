import React from 'react';
import styles from './error.sass';

export function Error() {
  return (
    <div className={styles.error}>
      <div className={styles.errorText} role="alert">Ошибка 404</div>
    </div>
  );
}
