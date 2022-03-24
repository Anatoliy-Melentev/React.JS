import React, { useState } from 'react';
import styles from './sortblock.sass';
import { EIcon, Icon } from "../../Icon";
import { Dropdown } from "../../Dropdown";
import { Action } from "../../Action";
import { Link } from "react-router-dom";
import { MenuItem } from "../../CardsList/Card/Menu/MenuItem";
import { Break } from "../../Break";

const links = [
  { id: 'best', text: 'Лучшее', svg: { size: 15, name: EIcon.rocket } },
  { id: 'posts', text: 'Популярное', svg: { size: 15, name: EIcon.share } },
];

export function SortBlock() {
  const [item, setItem] = useState(links[0]);

  return (
    <div className={styles.sortBlock}>
      <Dropdown button={
        <>
          <Action className={styles.menuHeader} size={item.svg.size} icon={item.svg.name}>
            {item.text}
          </Action>
          <Break size={8} inline />
          <Icon className={styles.menuIconColor} name={EIcon.stroke} size={11} />
        </>
      }>
        <div className={styles.menuItemsList}>
          {links.map((item) =>
            <Link to={`/${item.id}`} key={item.id} onClick={() => setItem(item)}>
              <MenuItem item={item} key={item.id} />
            </Link>)
          }
        </div>
      </Dropdown>
    </div>
  );
}
