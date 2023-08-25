import React from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import { HeaderProps } from './Header.types';

import './Header.scss';

export const Header: React.FC<HeaderProps> = (props) => {
	return (
		<div className='header'>
			<Logo />
			<span className='username'>{props.username}</span>
			<Button text='LOGOUT' onClickFunction={onSave} />
		</div>
	);
};

function onSave() {
	console.log('clicked');
}
