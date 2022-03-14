import React, { useState } from 'react';
import styles from './comment.sass';
import { EIcon } from "../../Icon";
import { Break } from "../../Break";
import { CommentTree } from "./CommentTree";
import { CommentTitle } from "./CommentTitle";
import { Action } from "../../Action";
import { CommentFormContainer } from "../../CommentFormContainer";

interface ICommentProps {
  comment?: React.ReactElement;
  author: string;
  id: string;
}

export function Comment({ id, comment, author }: ICommentProps) {
  const [showForm, setsShowForm] = useState(false);
  return (
    <div className={styles.comment}>
      <CommentTree />
      <div className={styles.commentText}>
        <CommentTitle author={author} />
        <div>
          Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.
        </div>
        <Break size={12} top />
        <div className={styles.actions}>
          <Action icon={EIcon.comments} onClick={() => setsShowForm(!showForm)}>Ответить</Action>
          <Action icon={EIcon.share}>Поделиться</Action>
          <Action icon={EIcon.complain}>Пожаловаться</Action>
        </div>
        {showForm && (
          <>
            <Break size={12} top />
            <CommentFormContainer id={id} author={author} />
          </>
        )}
        <Break size={12} top />
        <div>
          {comment}
        </div>
      </div>
    </div>
  );
}
