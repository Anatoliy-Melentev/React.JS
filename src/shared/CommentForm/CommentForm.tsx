import React, { ChangeEvent, useContext, useRef, useState } from 'react';
import styles from './commentform.sass';
import { preventDefault } from "../../utils/react/preventDefault";
import { commentContext } from "../context/commentContext";
import { useMountEffect } from "../../hooks/useMountEffect";

export function CommentForm({ id, author = '', isMyself = false }: { id: string; author?: string, isMyself?: boolean}) {
  const { value, onChange } = useContext(commentContext);
  const [placeholder, setPlaceholder] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null);
  //const unCtrlRef = useRef<HTMLTextAreaElement>(null);

  useMountEffect(() => {
    ref.current?.focus();
    if (isMyself) {
      setPlaceholder(`${author ? author + ', о' : 'О'}ставьте ваш комментарий`);
    } else {
      author && onChange({ ...value, [id]: `${author}, ` });
    }
  });

  return (
    <>
    <form className={styles.form} onSubmit={preventDefault(() => console.log(value[id]))}>
      <textarea ref={ref} className={styles.input} value={value[id]} placeholder={placeholder}
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => onChange({ ...value, [id]: target.value })} />
      <button type="submit" className={styles.button} >Комментировать</button>
    </form>

    {/*uncontrolled компонент*/}
    {/*<form className={styles.form} onSubmit={preventDefault(() => console.log(unCtrlRef.current?.value))}>
      <textarea ref={unCtrlRef} className={styles.input} />
      <button type="submit" className={styles.button} >Комментировать</button>
    </form>*/}
    </>
  );
}
