import React from 'react';

import './Input.scss';
import { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = (props) => (
	<input placeholder={props.placeholder} onChange={props.onChangeFunction} />
);
