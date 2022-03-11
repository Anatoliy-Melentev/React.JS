import React, {useContext} from 'react';
import styles from './cardslist.sass';
import { Card } from "./Card";
import { postsContext } from "../context/postsContext";

interface ICardProps {
  id: string;
  title: string;
  author: string;
  created: number;
  thumbnail: string;
  score: number;
}

export function CardsList() {
  const data = useContext(postsContext);

  return (
    <ul className={styles.cardsList}>
      {data && data[0] && Object.values(data).map((item: ICardProps) => <Card key={item.id} data={item}/>)}
    </ul>
  );
}
