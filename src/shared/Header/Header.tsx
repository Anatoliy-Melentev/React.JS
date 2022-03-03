import React from 'react';
import styles from './header.sass';
import { SearchBlock } from "./SearchBlock";
import { ThreadTitle } from "./ThreadTitle";
import { SortBlock } from "./SortBlock";
import { UserBlock } from "./UserBlock";

export function Header() {
  return (
    <header className={styles.header}>
      <ThreadTitle />
      <SortBlock />
      <SearchBlock />
      <UserBlock />
    </header>
  );
}
