export const enum UsersActionTypes {
	LOGIN = 'LOGIN',
	LOGOUT = 'LOGOUT',
	REGISTER = 'REGISTER',
}

export type UserInfo = {
	name: string;
	email: string;
	password: string;
};

export interface UserInfoWithRole extends UserInfo {
	role: string;
}

export type UserState = {
	isAuth: boolean;
	isRegistered?: boolean;
	name: string;
	email: string;
	token: string;
	role: string;
};
