import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../Header/Header';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import './Registration.scss';
import '../../App.scss';
import { UserInfo } from '../../store/user/types';
import { State } from '../../store/types';

export const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const userState = useSelector((state: State) => state.user);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		if (userState.isRegistered) {
			navigate('/login');
		}
	}, [navigate, userState.isRegistered]);

	const REGISTRATION_FIELDS = [
		{
			id: 'Name',
			value: (
				<Input
					id='input_reg_name_id'
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
					id='input_reg_email_id'
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
					id='input_reg_password_id'
					placeholder='Input text'
					onInputFunction={(e) => setPassword(e.target.value)}
					value={password}
				/>
			),
		},
		{
			id: '',
			value: (
				<div className='registrationScreenLoginButton'>
					<Button text='REGISTRATION' onClickFunction={handleRegistration()} />
				</div>
			),
		},
	];

	return (
		<div className='app'>
			<Header />
			<div className='registrationBody'>
				<h2>Registration</h2>
				<div className='registrationForm'>
					<div className='registrationGroups'>
						{REGISTRATION_FIELDS.map((item) => {
							return (
								<div key={item.id}>
									<div>{item.id}</div>
									{item.value}
								</div>
							);
						})}
						<div>
							<div>
								If you have an account you may <Link to={'/login'}>Login</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	function handleRegistration(): (params: any) => any {
		return () => {
			const payload: UserInfo = {
				name: name,
				email: email,
				password: password,
			};
			dispatch({ type: 'REGISTER', payload });
		};
	}
};
