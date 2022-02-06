import React from 'react';
import styles from './preview.sass';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/1583708/screenshots/17390751/media/b13fc680829e4e4b2b65e4fcdfac2ef0.png"
        alt="Природа" />
    </div>
  );
}
