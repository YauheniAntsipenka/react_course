import { LoginProps } from './components/Login/Login.types';
import { RegistrationProps } from './components/Registration/Registration.types';
import { CourseCardProps } from './components/Courses/components/CourseCard/CourseCard.types';
import { CourseType } from './store/courses/types';
import { AuthorType } from './store/authors/types';

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
		.catch((error) => console.log(error));
}

export function getAllCourses() {
	let courses: CourseCardProps[] = [];
	fetchCourses().then((coursesLocal) => {
		console.log('coursesLocal: ', coursesLocal);
		courses.concat(coursesLocal);
	});
	console.log('courses:', courses);
	return courses;
}

export async function fetchCourses(): Promise<CourseCardProps[]> {
	const response = await fetch('http://localhost:4000/courses/all', {
		method: 'GET',
		headers: new Headers({ 'content-type': 'application/json' }),
	});

	type JSONResponse = {
		successful: boolean;
		result?: CourseCardProps[];
	};

	const { successful, result }: JSONResponse = await response.json();

	if (successful === true && result?.length) {
		return result;
	}
	return [] as CourseCardProps[];
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

	type JSONResponse = {
		successful: boolean;
	};

	const { successful }: JSONResponse = await response.json();

	if (successful === true) {
		return true;
	}
	return false;
}

export async function deleteCourse(courseId: string): Promise<boolean> {
	const requestHeaders: HeadersInit = new Headers();
	requestHeaders.set('Content-Type', 'application/json');
	requestHeaders.set('Authorization', localStorage.getItem('token')!);
	const response = await fetch('http://localhost:4000/courses/' + courseId, {
		method: 'DELETE',
		headers: requestHeaders,
	});

	type JSONResponse = {
		successful: boolean;
	};

	const { successful }: JSONResponse = await response.json();

	if (successful === true) {
		return true;
	}
	return false;
}

export async function fetchAuthors(): Promise<AuthorType[]> {
	const requestHeaders: HeadersInit = new Headers();
	requestHeaders.set('Content-Type', 'application/json');
	requestHeaders.set('Authorization', localStorage.getItem('token')!);
	const response = await fetch('http://localhost:4000/authors/all', {
		method: 'GET',
		headers: requestHeaders,
	});

	type JSONResponse = {
		successful: boolean;
		result?: AuthorType[];
	};

	const { successful, result }: JSONResponse = await response.json();

	if (successful === true && result?.length) {
		return result;
	}
	return [] as AuthorType[];
}
