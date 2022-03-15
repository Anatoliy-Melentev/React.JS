import React, { useState } from 'react';
import styles from './title.sass';
import { Post } from "../../../../Post";

interface ITitleProps {
  author: string;
  title: string;
  score: number;
  date: string;
}

export function Title({ title, author, date, score }: ITitleProps) {
  const [isModalOpended, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title}>
      <button className={styles.postLink} onClick={() => !isModalOpended && setIsModalOpened(true)}>{title}</button>
      {isModalOpended &&
      <Post
        title={title} author={author} date={date} score={score}
        onClose={() => setIsModalOpened(false)}
      />}
    </h2>
  );
}
