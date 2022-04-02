import React, { ChangeEvent, useState } from 'react';
import { atom, useAtom } from 'jotai'
import { CommentForm } from "../CommentForm";
import { preventDefault } from "../../utils/react/preventDefault";

const valueAtom = atom('from Jotai')
const uppercaseAtom = atom(
  (get) => get(valueAtom).toUpperCase()
);

export function CommentFormJotai() {
  const
    [value, setValue] = useAtom(valueAtom),
    [uppercase] = useAtom(uppercaseAtom),
    [touched, setTouched] = useState(false),
    [valueError, setValueError] = useState('');

  const validateValue = () =>
    !value || String(value).length <= 3 ? 'Комментарий не может быть меньше трех символов' : '';

  const isNotFormValid = !!validateValue();

  const handleSubmit = () => {
    setTouched(true);
    setValueError(validateValue());

    if (isNotFormValid) return;

    alert(uppercase);
  }

  return (
    <CommentForm
      value={value}
      touched={touched}
      valueError={valueError}
      disabledBtn={isNotFormValid}
      onSubmit={preventDefault(handleSubmit)}
      onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => setValue(target.value)}
    />
  );
}
