import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

	const REGISTRATION_FIELDS = [
		{
			id: 'Name',
			value: (
				<Input
					placeholder='Input text'
					onInputFunction={(e) => (name = e.target.value)}
				/>
			),
		},
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
								body: JSON.stringify(data),
							})
								.then((response) => console.log(response.json))
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
