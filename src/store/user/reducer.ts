import { register } from '../../services';
import { UserActions } from './actions';
import { UserState, UsersActionTypes } from './types';

export const userState: UserState = {
	isAuth:
		localStorage.getItem('token') !== undefined &&
		localStorage.getItem('token') !== null
			? true
			: false,
	isRegistered: false,
	name:
		localStorage.getItem('username') !== undefined
			? localStorage.getItem('username')!
			: '',
	email: '',
	token:
		localStorage.getItem('token') !== undefined &&
		localStorage.getItem('token') !== null
			? localStorage.getItem('token')!
			: '',
	role: '',
};

export function userReducer(state = userState, action: UserActions) {
	switch (action.type) {
		case UsersActionTypes.LOGIN:
			return {
				...state,
				isAuth: true,
				name: action.user.name,
				email: action.user.email,
				token: localStorage.getItem('token'),
				role: action.user.role,
			};
		case UsersActionTypes.LOGOUT:
			return {
				...state,
				isAuth: false,
				name: action.user.name,
				email: action.user.email,
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
