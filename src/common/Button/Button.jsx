import React from 'react';

import './button.scss';

export const Button = (props) => (
	<button className='button' onClick={props.onClickFunction}>
		{props.text}
	</button>
);
