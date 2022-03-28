import React, { ChangeEvent, useState } from 'react';
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import { CommentForm } from "../CommentForm";
import { preventDefault } from "../../utils/react/preventDefault";


class Comment {
  value = 'Привет из мобикс';

  constructor() {
    makeAutoObservable(this);
  }

  updateValue(newValue: string) {
    this.value = newValue;
  }
}

const myComment = new Comment();

export const CommentFormMobx = observer(() => {
  const
    [touched, setTouched] = useState(false),
    [valueError, setValueError] = useState('');

  const validateValue = () =>
    !myComment.value || String(myComment.value).length <= 3 ? 'Комментарий не может быть меньше трех символов' : '';

  const isNotFormValid = !!validateValue();

  const handleSubmit = () => {
    setTouched(true);
    setValueError(validateValue());

    if (isNotFormValid) return;

    alert('Форма отправлена');
  }

  return (
    <CommentForm
      value={myComment.value}
      touched={touched}
      valueError={valueError}
      disabledBtn={isNotFormValid}
      onSubmit={preventDefault(handleSubmit)}
      onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => myComment.updateValue(target.value)}
    />
  );
});
