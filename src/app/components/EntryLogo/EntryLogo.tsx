import { useEffect } from 'react';
import './EntryLogo.less';
export type EntryLogoProp = {
	duration: number;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EntryLogo = ({ duration, setShow }: EntryLogoProp) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(false);
		}, duration);
		return () => clearTimeout(timer);
	}, [duration, setShow]);

	return <img className="logo" src="/StartLogo.png" alt="lakshmi" />;
};
