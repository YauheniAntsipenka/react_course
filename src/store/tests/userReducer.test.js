import { userReducer } from '../user/reducer';
import { UsersActionTypes } from '../user/types';

test('should return the initial state', () => {
	expect(userReducer(undefined, UsersActionTypes.LOGIN)).toEqual({
		isAuth: false,
		isRegistered: false,
		name: null,
		email: '',
		token: '',
		role: '',
	});
});
