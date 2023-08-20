import React from 'react';

import './Input.scss';
import { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = (props) => (
	<input
		className='input'
		placeholder={props.placeholder}
		onInput={props.onInputFunction}
	/>
);
