import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { LoginProps } from './Login.types';

import './Login.scss';
import '../../App.scss';

export const Login = () => {
	return (
		<div className='app'>
			<Header />
			<div className='loginBody'>
				<h2>Login</h2>
				<div className='loginForm'>
					<h5>Email</h5>
					<Input
						placeholder='Input text'
						onChangeFunction={() => console.log()}
					/>
					<h5>Password</h5>
					<Input
						placeholder='Input text'
						onChangeFunction={() => console.log()}
					/>
					<Button text='LOGIN' onClickFunction={() => {}} />
					<p>If you don't have an account you may</p>
					<Link to={'/'}>Registration</Link>
				</div>
			</div>
		</div>
	);
};
