import { ReactNode, useEffect, useState } from 'react';
import { ENTRY_LOGO_TEXT } from './consts';
import './EntryLogo.less';
export type EntryLogoProp = {
	duration: number;
	children: ReactNode;
};

export const EntryLogo = ({ children, duration }: EntryLogoProp) => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(false);
		}, duration);
		return () => clearTimeout(timer);
	}, [duration]);

	return show ? (
		<div className="entry-logo-container">
			<h1 className="header">{ENTRY_LOGO_TEXT}</h1>
			<img className="logo" src="/StartLogo.png" alt="lakshmi" />
		</div>
	) : (
		children
	);
};
