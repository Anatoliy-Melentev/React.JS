import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CommentFormTextType, RootState } from "../../store/reducer";
import { useMountEffect } from "../../hooks/useMountEffect";
import { preventDefault } from "../../utils/react/preventDefault";
import { CommentForm } from "../CommentForm";
import { updateComment } from "../../store/comment/actions";

interface ICommentFormContainerProps {
  id: string;
  author?: string;
  isMyself?: boolean
}

export function CommentFormContainer({ id, author = '', isMyself = false }: ICommentFormContainerProps) {
  const
    value = useSelector<RootState, CommentFormTextType>(state => state && state.commentFormText),
    [touched, setTouched] = useState(false),
    [valueError, setValueError] = useState(''),
    dispatch = useDispatch(),
    [placeholder, setPlaceholder] = useState('');

  useMountEffect(() => {
    if (isMyself)
      setPlaceholder(`${author ? author + ', о' : 'О'}ставьте ваш комментарий`);
    else
      author && dispatch(updateComment(id, `${author}, `));
  });

  const validateValue = () => !value || !value[id] || String(value[id]).length <= 3
    ? 'Комментарий не может быть меньше трех символов' : '';

  const isNotFormValid = !!validateValue();

  const handleSubmit = () => {
    setTouched(true);
    setValueError(validateValue());

    if (isNotFormValid) return;

    alert('Форма отправлена');
  }

  return (
    <CommentForm
      value={value?.[id]}
      touched={touched}
      valueError={valueError}
      disabledBtn={isNotFormValid}
      placeholder={placeholder}
      onSubmit={preventDefault(handleSubmit)}
      onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => dispatch(updateComment(id, target.value))}
    />
  );
}
