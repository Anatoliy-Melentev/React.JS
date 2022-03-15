import React from 'react';
import styles from './card.sass';
import { TextContent } from "./TextContent";
import { Preview } from "./Preview";
import { Menu } from "./Menu";
import { Controls } from "./Controls";
import { createAfterDate } from "../../../utils/js/date/createAfterDate";
const img = 'https://rprk-kuzbass.ru/wp-content/uploads/2021/03/no_photo1.png';

interface ICardProps {
  data: {
    title: string;
    author: string;
    created: number;
    thumbnail: string;
    score: number;
  }
}

export function Card({ data: { title, author, created, thumbnail, score } }: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent title={title} author={author} score={score} date={createAfterDate(created * 1000)} />
      <Preview img={thumbnail.length > 20 ? thumbnail : img} />
      <Menu />
      <Controls score={score} />
    </li>
  );
}
