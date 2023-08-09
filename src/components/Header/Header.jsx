import React from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import './Header.scss';

export const Header = (props) => {
	return (
		<div className='header'>
			<Logo />
			<span className='username'>{props.username}</span>
			<Button className='button' text='logout' onClickFunction={onSave} />
		</div>
	);
};

function onSave() {
	console.log('clicked');
}
