import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { LoginProps } from './Login.types';

import './Login.scss';
import '../../App.scss';

export const Login = () => {
	let email = '';
	let password = '';

	const LOGIN_FIELDS = [
		{
			id: 'Email',
			value: (
				<Input
					placeholder='Input text'
					onInputFunction={(e) => (email = e.target.value)}
				/>
			),
		},
		{
			id: 'Password',
			value: (
				<Input
					placeholder='Input text'
					onInputFunction={(e) => (password = e.target.value)}
				/>
			),
		},
		{
			id: '',
			value: (
				<Button
					text='LOGIN'
					onClickFunction={() => {
						console.log(email + ' ' + password);
					}}
				/>
			),
		},
		{
			id: "If you don't have an account you may",
			value: <Link to={'/'}>Registration</Link>,
		},
	];

	return (
		<div className='app'>
			<Header />
			<div className='loginBody'>
				<h2>Login</h2>
				<div className='loginForm'>
					<div className='loginGroups'>
						{LOGIN_FIELDS.map((item) => {
							return (
								<div key={item.id}>
									<div className={'fieldName'}>{item.id}</div>
									{item.value}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
