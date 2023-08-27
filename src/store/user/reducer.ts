import { login, logout, register } from '../../services';
import { UserActions } from './actions';
import { UserState, UsersActionTypes } from './types';

export const userState: UserState = {
	isAuth: false,
	isRegistered: false,
	name: '',
	email: '',
	token: '',
};

export function userReducer(state = userState, action: UserActions) {
	switch (action.type) {
		case UsersActionTypes.LOGIN:
			console.log('login', action.payload);
			login(action.payload.name, action.payload.email, action.payload.password);
			return {
				...state,
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: localStorage.getItem('token'),
			};
		case UsersActionTypes.LOGOUT:
			console.log('logout', action.payload);
			logout();
			return { ...state, isAuth: false };
		case UsersActionTypes.REGISTER:
			console.log('register', action.payload);
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
