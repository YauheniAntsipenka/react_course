import { LoginProps } from './components/Login/Login.types';
import { RegistrationProps } from './components/Registration/Registration.types';

export function login(name: string, email: string, password: string) {
	const data: LoginProps = {
		name: name,
		email: email,
		password: password,
	};
	fetch('http://localhost:4000/login', {
		method: 'POST',
		headers: new Headers({ 'content-type': 'application/json' }),
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((responseData) => {
			localStorage.setItem('token', responseData.result);
			localStorage.setItem('username', responseData.user.name);
		})
		.catch((error) => {
			console.log(error);
		});
}

export function logout() {
	localStorage.removeItem('token');
	localStorage.removeItem('username');
}

export function register(name: string, email: string, password: string) {
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
			// if (responseData.successful === true) {
			// 	navigate('/login');
			// }
		})
		.catch((error) => console.log(error));
}
