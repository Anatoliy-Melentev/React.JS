import React, { ChangeEvent, useState } from 'react';
import { preventDefault } from "../../utils/react/preventDefault";
import { CommentForm } from "../CommentForm";
import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";

const updateComment = createEvent<string>();

const $comment = createStore('Effector').on(updateComment, (_, newValue) => newValue);

$comment.watch(state => console.log('state', state));

export function CommentFormEffector() {
  const
    value = useStore($comment),
    [touched, setTouched] = useState(false),
    [valueError, setValueError] = useState('');

  const validateValue = () =>
    !value || String(value).length <= 3 ? 'Комментарий не может быть меньше трех символов' : '';

  const isNotFormValid = !!validateValue();

  const handleSubmit = () => {
    setTouched(true);
    setValueError(validateValue());

    if (isNotFormValid) return;

    alert('Форма отправлена');
  }

  return (
    <CommentForm
      value={value}
      touched={touched}
      valueError={valueError}
      disabledBtn={isNotFormValid}
      onSubmit={preventDefault(handleSubmit)}
      onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => updateComment(target.value)}
    />
  );
};
