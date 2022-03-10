import React from 'react';
import styles from './card.sass';
import { TextContent } from "./TextContent";
import { Preview } from "./Preview";
import { Menu } from "./Menu";
import { Controls } from "./Controls";

interface ICardProps {
  title: string;
  author: string;
  date: string;
  img: string;
  score: number;
}

export function Card({ title, author, date, img, score }: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent title={title} author={author} date={date} />
      <Preview img={img} />
      <Menu />
      <Controls score={score} />
    </li>
  );
}
