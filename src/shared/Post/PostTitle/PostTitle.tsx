import React from 'react';
import styles from './posttitle.sass';
import { UserLink } from "../../CardsList/Card/TextContent/UserLink";

export function PostTitle({ title, author, date }: { title: string, author: string, date: string }) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink author={author} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>{date} назад
        </span>
      </div>
      <h2 className={styles.title}>
        <button className={styles.postLink} >{title}</button>
      </h2>
    </div>
  );
}
