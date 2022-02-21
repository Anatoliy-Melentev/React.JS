import React from 'react';
import styles from './menu.sass';
import { Dropdown } from "../../../Dropdown";
import { MenuItem } from "./MenuItem";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { SvgIcon } from "../../../SvgIcon";

const LIST = [
  { text: 'Комментарии', svg: { w: 15, h: 15, name: 'comments' } },
  { text: 'Поделиться', svg: { w: 12, h: 12, name: 'share' } },
  { text: 'Скрыть', svg: { w: 14, h: 14, name: 'hide' } },
  { text: 'Сохранить', svg: { w: 14, h: 14, name: 'save' } },
  { text: 'Пожаловаться', svg: { w: 16, h: 14, name: 'complain' } },
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
            <SvgIcon w={5} h={20} name='menu' />
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
