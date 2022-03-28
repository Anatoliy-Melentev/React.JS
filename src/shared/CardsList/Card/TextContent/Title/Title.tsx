import React, { useState } from 'react';
import styles from './title.sass';
import { Link, useLocation } from "react-router-dom";

interface ITitleProps {
  author: string;
  title: string;
  score: number;
  date: string;
}

export function Title({ title }: ITitleProps) {
  const { pathname } = useLocation();

  return (
    <h2 className={styles.title}>
      <Link to={`${pathname}/1`} className={styles.postLink} >{title}</Link>
    </h2>
  );
}
