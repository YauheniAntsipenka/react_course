import { Dispatch } from 'react';
import { fetchCurrentUserInfo, login } from '../../services';
import { AnyAction } from '@reduxjs/toolkit';
import { UserState } from './types';

export const loginUser = (name: string, email: string, password: string) => {
	return function (dispatch: Dispatch<AnyAction>) {
		login(name, email, password).then((isLogined) => {
			if (isLogined) {
				fetchCurrentUserInfo().then((loggedUserInfo) => {
					const userState: UserState = {
						isAuth: true,
						name: name,
						email: email,
						token: localStorage.getItem('token')!,
						role: loggedUserInfo.role,
					};
					dispatch({
						type: 'LOGIN',
						user: userState,
					});
				});
			}
		});
	};
};
