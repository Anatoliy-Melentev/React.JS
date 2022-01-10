import { hot } from 'react-hot-loader/root';
import * as React from "react";
import styles from './header.sass';

function HeaderComponent() {
	//console.log(styles, styles.example);
	return (
		<header>
			<h1 className={styles.example}>Example</h1>
		</header>
	)
}

export const Header = hot(HeaderComponent);