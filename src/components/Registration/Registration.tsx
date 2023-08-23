import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { RegistrationProps } from './Registration.types';

import './Registration.scss';
import '../../App.scss';

export const Registration = () => {
	let email = '';
	let name = '';
	let password = '';

	const navigate = useNavigate();

	const REGISTRATION_FIELDS = [
		{
			id: 'Name',
			value: (
				<Input
					id='input_reg_name_id'
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
					id='input_reg_email_id'
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
					id='input_reg_password_id'
					placeholder='Input text'
					onInputFunction={(e) => (password = e.target.value)}
					value={password}
				/>
			),
		},
		{
			id: '',
			value: (
				<div className='registrationScreenLoginButton'>
					<Button
						text='REGISTRATION'
						onClickFunction={() => {
							const data: RegistrationProps = {
								name: name,
								email: email,
								password: password,
							};
							fetch('http://localhost:4000/register', {
								method: 'POST',
								headers: new Headers({ 'content-type': 'application/json' }),
								body: JSON.stringify(data),
							})
								.then((response) => response.json())
								.then((responseData) => {
									if (responseData.successful === true) {
										navigate('/login');
									}
								})
								.catch((error) => console.log(error));
							console.log(data);
						}}
					/>
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
};
