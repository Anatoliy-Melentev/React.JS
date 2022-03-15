import React from 'react';
import styles from './commentsfilter.sass';
import { Text, EColor } from "../Text";
import { Icon, EIcon } from "../Icon";

export function CommentsFilter() {
  return (
    <div>
      <div className={styles.menu}>
        <Text size={14} color={EColor.grey99}>
          Сортировать по:
        </Text>
        <Text className={styles.filterMenu} size={14} color={EColor.orange}>
          Лучшие <Icon name={EIcon.stroke} size={13} />
        </Text>
      </div>
      <div className={styles.line} ></div>
    </div>
  );
}
