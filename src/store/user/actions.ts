import { UserInfo, UsersActionTypes } from './types';

interface LoginUser {
	type: UsersActionTypes.LOGIN;
	payload: UserInfo;
}

interface LogoutUser {
	type: UsersActionTypes.LOGOUT;
	payload: UserInfo;
}

interface RegisterUser {
	type: UsersActionTypes.REGISTER;
	payload: UserInfo;
}

export type UserActions = LoginUser | LogoutUser | RegisterUser;
