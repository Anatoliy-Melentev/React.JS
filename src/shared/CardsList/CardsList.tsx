import React, { useRef, useState } from 'react';
import styles from './cardslist.sass';
import { Card } from "./Card";
import { ContinueBtn } from "./ContinueBtn";
import { usePostsData } from "../../hooks/usePostsData";

export function CardsList() {
  const
    bottomOfList = useRef<HTMLDivElement>(null),
    [countLoader, setCountLoader] = useState(0),
    [posts, loading, errorLoading] = usePostsData({
      apiUrl: 'rising',
      params: {},
      ref: bottomOfList,
      allowLoad: countLoader < 3,
      addCount: () => setCountLoader(prev => prev + 1),
    });

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
    </ul>
  );
}
