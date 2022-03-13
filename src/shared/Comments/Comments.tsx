import React from 'react';
import { Comment } from './Comment';

const comments = [
  { id: '1', author: 'Михаил Рогов' },
  { id: '2', author: 'Василий Пупкин' },
  { id: '3', author: 'Хосе Родригес' },
];

export function Comments() {
  return comments.map(({ id, author }) => <Comment key={id} id={id} author={author} />);
}
