import React from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';

import { HeaderProps } from './Header.types';

import './header.scss';

export const Header: React.FC<HeaderProps> = (props) => {
	return (
		<div className='header'>
			<Logo />
			{props.username !== undefined &&
			props.buttonText !== undefined &&
			props.buttonFunction !== undefined ? (
				<>
					<span className='username'>{props.username}</span>
					<Button
						text={props.buttonText}
						onClickFunction={props.buttonFunction}
					/>
				</>
			) : null}
		</div>
	);
};
