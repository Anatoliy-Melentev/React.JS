import React, { ChangeEvent, useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './commentformhooks.sass';
import { useMountEffect } from "../../hooks/useMountEffect";
import { updateComment } from "../../store/comment/actions";
import { useDispatch, useSelector } from "react-redux";
import { CommentFormTextType, RootState } from "../../store/reducer";
import { preventDefault } from "../../utils/react/preventDefault";
import { useUserData } from "../../hooks/useUserData";

interface ICommentFormHooksProps {
  id: string;
  author?: string;
  isMyself?: boolean
}

export function CommentFormHooks({ id, author = '', isMyself = false }: ICommentFormHooksProps) {
  const
    value = useSelector<RootState, CommentFormTextType>(state => state && state.commentFormText),
    [placeholder, setPlaceholder] = useState(''),
    { register, handleSubmit, formState:{ errors } } = useForm(),
    { data: { name } } = useUserData(),
    dispatch = useDispatch();

  useMountEffect(() => {
    if (isMyself)
      setPlaceholder(`${name ? name + ', о' : 'О'}ставьте ваш комментарий`);
    else
      author && dispatch(updateComment(id, `${author}, `));
  });

  return (
    <form className={styles.form} onSubmit={preventDefault(handleSubmit(() => alert('Форма отправлена')))}>
      <textarea {
        ...register("commentText", {
          required: true, minLength: 3, maxLength: 100
        })
      }
        className={styles.input}
        value={value?.[id]}
        placeholder={placeholder}
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => dispatch(updateComment(id, target.value))}
        aria-invalid={errors.commentText ? 'true' : undefined}
      />
      <button type="submit" className={styles.button} >Комментировать</button>
      <p>{errors.commentText && (<div>'Комментарий не может быть меньше трех символов'</div>)}</p>
    </form>
  );
}
