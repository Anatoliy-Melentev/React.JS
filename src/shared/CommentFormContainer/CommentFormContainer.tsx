import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CommentTextType, RootState, updateComment } from "../../store/store";
import { useMountEffect } from "../../hooks/useMountEffect";
import { preventDefault } from "../../utils/react/preventDefault";
import { CommentForm } from "../CommentForm";

interface ICommentFormContainerProps {
  id: string;
  author?: string;
  isMyself?: boolean
}

export function CommentFormContainer({ id, author = '', isMyself = false }: ICommentFormContainerProps) {
  const
    value = useSelector<RootState, CommentTextType>(state => state.commentText),
    dispatch = useDispatch(),
    [placeholder, setPlaceholder] = useState('');

  useMountEffect(() => {
    if (isMyself)
      setPlaceholder(`${author ? author + ', о' : 'О'}ставьте ваш комментарий`);
    else
      author && dispatch(updateComment(id, `${author}, `));
  });

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => dispatch(updateComment(id, value ));
  const handleSubmit = () => preventDefault(() => console.log(value?.[id]));

  return <CommentForm value={value?.[id]} placeholder={placeholder} onSubmit={handleSubmit} onChange={handleChange} />;
}
