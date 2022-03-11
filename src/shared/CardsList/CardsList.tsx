import React, {useContext} from 'react';
import styles from './cardslist.sass';
import { Card } from "./Card";
import { postsContext } from "../context/postsContext";
import {createAfterDate} from "../../utils/js/date/createAfterDate";
const img = 'https://rprk-kuzbass.ru/wp-content/uploads/2021/03/no_photo1.png';

interface ICardProps {
  data: {
    id: string;
    title: string;
    author: string;
    created: number;
    thumbnail: string;
    score: number;
  }
}

export function CardsList() {
  const data = useContext(postsContext);

  return (
    <ul className={styles.cardsList}>
      {data && data.children && data.children.length && data.children.map(({ data }: ICardProps) =>
        <Card key={data.id} title={data.title} author={data.author} score={data.score}
          date={createAfterDate(data.created * 1000)}
          img={data.thumbnail.length > 20 ? data.thumbnail : img}
        />)}
    </ul>
  );
}
