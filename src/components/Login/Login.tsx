import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { LoginProps } from './Login.types';

import './Login.scss';
import '../../App.scss';

export const Login = () => {
	let name = '';
	let email = '';
	let password = '';

	const navigate = useNavigate();

	const LOGIN_FIELDS = [
		{
			id: 'Name',
			value: (
				<Input
					id='input_login_name_id'
					placeholder='Input text'
					onInputFunction={(e) => (name = e.target.value)}
					value={name}
				/>
			),
		},
		{
			id: 'Email',
			value: (
				<Input
					id='input_login_email_id'
					placeholder='Input text'
					onInputFunction={(e) => (email = e.target.value)}
					value={email}
				/>
			),
		},
		{
			id: 'Password',
			value: (
				<Input
					id='input_login_password_id'
					placeholder='Input text'
					onInputFunction={(e) => (password = e.target.value)}
					value={password}
				/>
			),
		},
		{
			id: '',
			value: (
				<div className='loginScreenLoginButton'>
					<Button
						text='LOGIN'
						onClickFunction={() => {
							const data: LoginProps = {
								name: name,
								email: email,
								password: password,
							};
							fetch('http://localhost:4000/login', {
								method: 'POST',
								headers: new Headers({ 'content-type': 'application/json' }),
								body: JSON.stringify(data),
							})
								.then((response) => response.json())
								.then((responseData) => {
									localStorage.setItem('token', responseData.result);
									localStorage.setItem('username', responseData.user.name);
									navigate('/courses', { replace: true });
								})
								.catch((error) => console.log(error));
						}}
					/>
				</div>
			),
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
									<div>{item.id}</div>
									{item.value}
								</div>
							);
						})}
						<div className='registrationGroup'>
							If you have an account you may
							<div className='registrationLink'>
								<Link to={'/register'}>Registration</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
