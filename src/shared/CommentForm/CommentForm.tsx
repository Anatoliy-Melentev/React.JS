import React, { ChangeEvent, FormEvent, useRef } from 'react';
import { useMountEffect } from "../../hooks/useMountEffect";
import styles from './commentform.sass';

interface ICommentFormProps {
  value?: string;
  placeholder?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function CommentForm({ value, placeholder, onSubmit, onChange }: ICommentFormProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useMountEffect(() => ref.current?.focus());

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea ref={ref} className={styles.input} value={value} placeholder={placeholder} onChange={onChange} />
      <button type="submit" className={styles.button} >Комментировать</button>
    </form>
  );
}
