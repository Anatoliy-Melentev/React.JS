import React from 'react';
import styles from './textcontent.sass';
import { UserLink } from "./UserLink";
import { Title } from "./Title";


interface ITextContentProps {
  title: string;
  author: string;
  date: string;
}

export function TextContent({ title, author, date }: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink author={author} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>{date} назад
        </span>
      </div>
      <Title title={title} />
    </div>
  );
}
