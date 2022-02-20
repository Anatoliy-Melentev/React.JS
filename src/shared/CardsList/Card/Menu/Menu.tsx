import React from 'react';
import styles from './menu.sass';
import { Dropdown } from "../../../Dropdown";
import { MenuItem } from "./MenuItem";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { Icon } from "../../../Icon";

const LIST = [
  { text: 'Комментарии', svg: { size: 15, name: 'comments' } },
  { text: 'Поделиться', svg: { size: 15, name: 'share' } },
  { text: 'Скрыть', svg: { size: 15, name: 'hide' } },
  { text: 'Сохранить', svg: { size: 15, name: 'save' } },
  { text: 'Пожаловаться', svg: { size: 15, name: 'complain' } },
  { text: 'Закрыть', className: styles.divider },
];

export function Menu() {
  const handleItemClick = (id: string) => console.log((list.find(i => id === i.id))?.text);
  const [list, setList] = React.useState(LIST.map(generateId));

  return (
    <div className={styles.menu}>
      <Dropdown
        className={styles.dropdown}
        button={
          <button className={styles.menuButton}>
            <Icon size={20} name='menu' />
          </button>
        }
      >
        <div className={styles.menuItemsList}>
          { list.map(item => <MenuItem item={item} key={item.id} onClick={handleItemClick} />) }
        </div>
      </Dropdown>
    </div>
  );
}
