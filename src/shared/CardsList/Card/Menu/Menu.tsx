import React from 'react';
import styles from './menu.sass';
import { Dropdown } from "../../../Dropdown";
import { MenuItem } from "./MenuItem";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { EIcon } from "../../../Icon";
import { IconBtn } from "../../../IconBtn";

const LIST = [
  { text: 'Комментарии', svg: { size: 15, name: EIcon.comments } },
  { text: 'Поделиться', svg: { size: 15, name: EIcon.share } },
  { text: 'Скрыть', svg: { size: 15, name: EIcon.hide } },
  { text: 'Сохранить', svg: { size: 15, name: EIcon.save } },
  { text: 'Пожаловаться', svg: { size: 15, name: EIcon.complain } },
  { text: 'Закрыть', className: styles.divider },
];

export function Menu() {
  const handleItemClick = (id: string) => console.log((list.find(i => id === i.id))?.text);
  const [list] = React.useState(LIST.map(generateId));

  return (
    <div className={styles.menu}>
      <Dropdown
        className={styles.dropdown}
        button={<IconBtn icon={EIcon.menu} className={styles.menuButton} />}
      >
        <div className={styles.menuItemsList}>
          { list.map(item => <MenuItem item={item} key={item.id} onClick={handleItemClick} />) }
        </div>
      </Dropdown>
    </div>
  );
}
