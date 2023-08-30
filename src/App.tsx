import React, { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { Courses } from './components/Courses/Courses';
import { Header } from './components/Header/Header';
import { CourseCardProps } from './components/Courses/components/CourseCard/CourseCard.types';

import './App.scss';
import { EmptyCourseList } from './components/Courses/components/EmptyCourseList/EmptyCourseList';
import { getCourses } from './helpers/getCourses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { AppProps } from './App.types';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

function App() {
	const [token, setToken] = useState(localStorage.getItem('token'));
	const [username, setUsername] = useState(localStorage.getItem('username'));
	const navigate = useNavigate();

	let isTokenPresent = token !== null && token !== undefined;

	return (
		<div className='app'>
			{isTokenPresent && username !== null ? (
				<Header
					username={username}
					buttonText={'LOGOUT'}
					buttonFunction={() => {
						localStorage.removeItem('token');
						localStorage.removeItem('username');
						navigate('/login');
					}}
				/>
			) : (
				<div />
			)}
			<Routes>
				<Route path='/courses'>
					<Route
						path=''
						element={<AppComponent isTokenPresent={isTokenPresent} />}
					/>
					<Route path=':courseId' element={<CourseInfo />} />
					<Route path='/courses/add' element={<CreateCourse />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Registration />} />
				<Route path='/' element={<Navigate to='/login' replace={true} />} />
				<Route
					path='/react_course'
					element={<Navigate to='/login' replace={true} />}
				/>
			</Routes>
		</div>
	);
}

export default App;

const AppComponent: React.FC<AppProps> = (props) => {
	const courses: CourseCardProps[] = getCourses();
	return (
		<>
			{props.isTokenPresent && <Courses courses={courses} />}
			{props.isTokenPresent && !courses?.length && <EmptyCourseList />}
		</>
	);
};
