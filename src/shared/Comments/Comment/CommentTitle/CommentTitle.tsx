import React from 'react';
import styles from './commenttitle.sass';
import { UserLink } from "../../../CardsList/Card/TextContent/UserLink";
import { Break } from "../../../Break";
import { Text, EColor } from "../../../Text";
import { createAfterDate } from "../../../../utils/js/date/createAfterDate";

export function CommentTitle({ author }: { author: string; }) {
  return (
    <div className={styles.interlinear}>
      <UserLink author={author} />
      <Break size={4} inline />
      <Text size={14} color={EColor.grey99} >{createAfterDate(1647005609 * 1000)} назад</Text>
      <Break size={4} inline />
      <Text size={14} color={EColor.black} className={styles.league} >Лига юристов</Text>
    </div>
  );
}
