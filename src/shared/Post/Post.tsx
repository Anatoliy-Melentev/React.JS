import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './post.sass';
import { EIcon } from "../Icon";
import { KarmaCounter } from "../KarmaCounter";
import { Comments } from "../Comments";
import { CommentsFilter } from "../CommentsFilter";
import { Break } from "../Break";
import { PostTitle } from "./PostTitle";
import { IconBtn } from "../IconBtn";
//import { CommentFormHooks } from "../CommentFormHooks";
//import { CommentFormMobx } from "../CommentFormMobx";
import { CommentFormContainer } from "../CommentFormContainer";
//import { CommentFormEffector } from "../CommentFormEffector";

interface IPostProps {
  title: string;
  author: string;
  date: string;
  score: number;
}

export function Post({ author, date, title, score }: IPostProps) {
  const
    ref = useRef<HTMLDivElement>(null),
    { pathname } = useLocation(),
    navigate = useNavigate(),
    getPath = (pathname: string) => {
      const path = pathname.match(/^\/(.*)\//);
      return path && path.length >= 1 ? path[1] : '';
    },
    handleClick = ({ target }: MouseEvent) => {
      if (target instanceof Node && !ref.current?.contains(target)) {
        navigate(`/${getPath(pathname)}`);
      }
    };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const node = document.querySelector('#modal-root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <IconBtn className={styles.close} icon={EIcon.close} onClick={() => navigate(`/${getPath(pathname)}`)} />
      <div className={styles.header}>
        <KarmaCounter score={score} />
        <PostTitle title={title} author={author} date={date} />
      </div>
      <div className={styles.content}>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
      </div>
      <CommentFormContainer id={'0'} isMyself />
      {/*<CommentFormMobx />*/}
      {/*<CommentFormEffector />*/}
      {/*<CommentFormHooks id={"0"} author={'Анатолий'} isMyself />*/}
      <Break size={36} top />
      <CommentsFilter/>
      <Break size={48} top />
      <Comments />
    </div>
  ), node);
}
