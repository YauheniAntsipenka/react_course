import { LoginProps } from './components/Login/Login.types';
import { RegistrationProps } from './components/Registration/Registration.types';
import { CourseType } from './store/courses/types';
import { AuthorType } from './store/authors/types';
import {
	IsSuccessfullJSONResponse,
	ObjectsJSONResponse,
	SingleItemJSONResponse,
	UserRelatedJSONResponse,
} from './services.types';
import { UserInfoWithRole } from './store/user/types';

export async function login(
	name: string,
	email: string,
	password: string
): Promise<boolean> {
	const data: LoginProps = {
		name: name,
		email: email,
		password: password,
	};
	const response = await fetch('http://localhost:4000/login', {
		method: 'POST',
		headers: new Headers({ 'content-type': 'application/json' }),
		body: JSON.stringify(data),
	});

	const { successful, result, user }: UserRelatedJSONResponse =
		await response.json();

	if (successful) {
		localStorage.setItem('token', result!);
		localStorage.setItem('username', user.name);
		return true;
	}
	return false;
}

export async function logout() {
	const requestHeaders: HeadersInit = new Headers();
	requestHeaders.set('Content-Type', 'application/json');
	requestHeaders.set('Authorization', localStorage.getItem('token')!);

	localStorage.removeItem('token');
	localStorage.removeItem('username');

	await fetch('http://localhost:4000/logout', {
		method: 'DELETE',
		headers: requestHeaders,
	});
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
		.catch((error) => console.error(error));
}

export async function fetchCourses(): Promise<CourseType[]> {
	const response = await fetch('http://localhost:4000/courses/all', {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
	});

	const { successful, result }: ObjectsJSONResponse<CourseType> =
		await response.json();

	return successful && result?.length ? result : ([] as CourseType[]);
}

export async function addCourse(data: CourseType): Promise<boolean> {
	const requestHeaders: HeadersInit = new Headers();
	requestHeaders.set('Content-Type', 'application/json');
	requestHeaders.set('Authorization', localStorage.getItem('token')!);
	const response = await fetch('http://localhost:4000/courses/add', {
		method: 'POST',
		headers: requestHeaders,
		body: JSON.stringify(data),
	});

	const { successful }: SingleItemJSONResponse<CourseType> =
		await response.json();

	return successful;
}

export async function deleteCourse(courseId: string): Promise<boolean> {
	const requestHeaders: HeadersInit = new Headers();
	requestHeaders.set('Content-Type', 'application/json');
	requestHeaders.set('Authorization', localStorage.getItem('token')!);
	const response = await fetch('http://localhost:4000/courses/' + courseId, {
		method: 'DELETE',
		headers: requestHeaders,
	});

	const { successful }: IsSuccessfullJSONResponse = await response.json();

	return successful;
}

export async function fetchAuthors(): Promise<AuthorType[]> {
	const requestHeaders: HeadersInit = new Headers();
	requestHeaders.set('Content-Type', 'application/json');
	requestHeaders.set('Authorization', localStorage.getItem('token')!);
	const response = await fetch('http://localhost:4000/authors/all', {
		method: 'GET',
		headers: requestHeaders,
	});

	const { successful, result }: ObjectsJSONResponse<AuthorType> =
		await response.json();

	return successful && result?.length ? result : ([] as AuthorType[]);
}

export async function addAuthor(data: AuthorType): Promise<boolean> {
	const requestHeaders: HeadersInit = new Headers();
	requestHeaders.set('Content-Type', 'application/json');
	requestHeaders.set('Authorization', localStorage.getItem('token')!);
	const response = await fetch('http://localhost:4000/authors/add', {
		method: 'POST',
		headers: requestHeaders,
		body: JSON.stringify(data),
	});

	const { successful }: IsSuccessfullJSONResponse = await response.json();

	return successful;
}

export async function deleteAuthor(authorId: string): Promise<boolean> {
	const requestHeaders: HeadersInit = new Headers();
	requestHeaders.set('Content-Type', 'application/json');
	requestHeaders.set('Authorization', localStorage.getItem('token')!);
	const response = await fetch('http://localhost:4000/authors/' + authorId, {
		method: 'DELETE',
		headers: requestHeaders,
	});

	const { successful }: IsSuccessfullJSONResponse = await response.json();

	return successful;
}

export async function fetchCurrentUserInfo(): Promise<UserInfoWithRole> {
	const requestHeaders: HeadersInit = new Headers();
	const tokenValue = localStorage.getItem('token')!;
	requestHeaders.set('Authorization', tokenValue);
	const response = await fetch('http://localhost:4000/users/me', {
		method: 'GET',
		headers: requestHeaders,
	});

	const { successful, result }: SingleItemJSONResponse<UserInfoWithRole> =
		await response.json();
	return successful ? result! : ({} as UserInfoWithRole);
}
