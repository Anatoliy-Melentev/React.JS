import React, { useState } from 'react';
import { Comment } from './Comment';

export function Comments() {
  const [comments] = useState([
    { id: '1', author: 'Михаил Рогов' },
    { id: '2', author: 'Василий Пупкин' },
    { id: '3', author: 'Хосе Родригес' },
  ]);

  return (
    <div>
      {comments.map(({ id, author }) => <Comment key={id} id={id} author={author} />)}
    </div>
  );
}
