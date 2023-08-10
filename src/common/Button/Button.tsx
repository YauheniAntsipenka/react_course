import React from 'react';

import './button.scss';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = (props) => (
	<button className='button' onClick={props.onClickFunction}>
		{props.text}
	</button>
);
