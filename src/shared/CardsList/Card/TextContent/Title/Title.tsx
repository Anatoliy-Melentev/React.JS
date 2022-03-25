import React from 'react';
import styles from './title.sass';
import { Link } from "react-router-dom";

interface ITitleProps {
  author: string;
  title: string;
  score: number;
  date: string;
}

export function Title({ title }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link to="/posts/1" className={styles.postLink} >{title}</Link>
    </h2>
  );
}
