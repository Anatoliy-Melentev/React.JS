import React, { useState } from 'react';
import styles from './title.sass';
import { Post } from "../../../../Post";

export function Title({ title }: { title: string }) {
  const [isModalOpended, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title}>
      <button className={styles.postLink} onClick={() => setIsModalOpened(!isModalOpended)}>{title}</button>
      {isModalOpended && <Post onClose={() => setIsModalOpened(false)} />}
    </h2>
  );
}
