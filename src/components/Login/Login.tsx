import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Button } from '../../common/Button/Button';

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
					<input></input>
					<h5>Password</h5>
					<input></input>
					<Button text='LOGIN' onClickFunction={() => {}} />
					<span>If you don't have an account you may</span>
					<Link to={'/'}>Registration</Link>
				</div>
			</div>
		</div>
	);
};
