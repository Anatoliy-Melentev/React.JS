import React, { useEffect } from 'react';
import styles from './layout.sass';
import { updateToken } from "../../store/store";
import { useDispatch } from "react-redux";

interface ILayoutProps {
	children?: React.ReactNode;
	token?: string;
}

export function Layout({ token, children }: ILayoutProps) {
	const dispatch = useDispatch();

	useEffect(() => {
		if (token?.length) {
			dispatch(updateToken(token))
		}
	}, [token]);

	return (
		<div className={styles.layout}>
			{children}
		</div>
	);
}
