import { login, logout, register } from '../../services';
import { UserActions } from './actions';
import { UserState, UsersActionTypes } from './types';

export const userState: UserState = {
	isAuth: localStorage.getItem('token') !== undefined ? true : false,
	isRegistered: false,
	name:
		localStorage.getItem('username') !== undefined
			? localStorage.getItem('username')!
			: '',
	email: '',
	token:
		localStorage.getItem('token') !== undefined
			? localStorage.getItem('token')!
			: '',
};

export function userReducer(state = userState, action: UserActions) {
	switch (action.type) {
		case UsersActionTypes.LOGIN:
			login(action.payload.name, action.payload.email, action.payload.password);
			return {
				...state,
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: localStorage.getItem('token'),
			};
		case UsersActionTypes.LOGOUT:
			logout();
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};
		case UsersActionTypes.REGISTER:
			register(
				action.payload.name,
				action.payload.email,
				action.payload.password
			);
			return { ...state, isRegistered: true };
		default:
			return state;
	}
}
