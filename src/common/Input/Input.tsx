import React from 'react';

import './Input.scss';
import { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = (props) => (
	<input
		id={props.id}
		className='input'
		placeholder={props.placeholder}
		onInput={props.onInputFunction}
	/>
);
