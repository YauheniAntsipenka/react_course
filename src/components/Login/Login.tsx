import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../Header/Header';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import './Login.scss';
import '../../App.scss';
import { UserInfo } from '../../store/user/types';
import { State } from '../../store/types';
import { loginUser } from '../../store/user/thunk';
import store from '../../store';

export const Login = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const userState = useSelector((state: State) => state.user);

	const navigate = useNavigate();

	useEffect(() => {
		if (userState.isAuth) {
			navigate('/courses');
		}
	}, [navigate, userState, userState.isAuth]);

	const LOGIN_FIELDS = [
		{
			id: 'Name',
			value: (
				<Input
					id='input_login_name_id'
					placeholder='Input text'
					onInputFunction={(e) => setName(e.target.value)}
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
					onInputFunction={(e) => setEmail(e.target.value)}
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
					onInputFunction={(e) => setPassword(e.target.value)}
					value={password}
				/>
			),
		},
		{
			id: '',
			value: (
				<div className='loginScreenLoginButton'>
					<Button text='LOGIN' onClickFunction={handleLoginButton()} />
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

	function handleLoginButton(): () => any {
		return () => {
			const payload: UserInfo = {
				name: name,
				email: email,
				password: password,
			};
			store.dispatch(loginUser(payload.name, payload.email, payload.password));
		};
	}
};
