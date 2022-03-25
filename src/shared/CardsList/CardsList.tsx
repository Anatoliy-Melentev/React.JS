import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.sass';
import { Card } from "./Card";
import { ContinueBtn } from "./ContinueBtn";
import { usePostsData } from "../../hooks/usePostsData";
import { Outlet } from "react-router-dom";

export function CardsList({ link }: { link: string}) {
  const
    bottomOfList = useRef<HTMLDivElement>(null),
    [countLoader, setCountLoader] = useState(0),
    [posts, loading, errorLoading] = usePostsData({
      apiUrl: link,
      params: {},
      ref: bottomOfList,
      allowLoad: countLoader < 3,
      addCount: () => setCountLoader(prev => prev + 1),
    });

  useEffect(() => setCountLoader(0), [link]);

  return (
    <ul className={styles.cardsList}>
      {Object.keys(posts).length
        ? Object.values(posts).map(({ data }) => data && <Card key={data.id} data={data}/>)
        : !loading && !errorLoading && (<div className={styles.errorText}>Хмм... здесь пока пусто</div>)
      }
      <div ref={bottomOfList}/>

      {countLoader >= 3 && <ContinueBtn onClick={() => setCountLoader(0)} /> }
      {loading && <div className={styles.errorText}>Загрузка...</div>}
      {errorLoading && <div className={styles.errorText} role="alert">{errorLoading}</div>}

      <Outlet />
    </ul>
  );
}
