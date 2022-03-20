import React from 'react';
import styles from './continuebtn.sass';

export function ContinueBtn({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles.wrpBtn}>
      <button onClick={onClick} className={styles.loadBtn}>Загрузить ещё...</button>
    </div>
  );
}
