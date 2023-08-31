import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Courses } from './components/Courses/Courses';
import { Header } from './components/Header/Header';

import './app.scss';
import { EmptyCourseList } from './components/Courses/components/EmptyCourseList/EmptyCourseList';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { AppProps } from './App.types';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { State } from './store/types';
import { fetchCourses } from './services';

function App() {
	const state = useSelector((state: State) => state);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		fetchCourses().then((courses) => {
			dispatch({ type: 'GET_ALL_COURSES', courses });
		});
	}, [dispatch]);

	return (
		<div className='app'>
			{state.user.isAuth && (
				<Header
					username={state.user.name}
					buttonText={'LOGOUT'}
					buttonFunction={() => {
						dispatch({ type: 'LOGOUT' });
						navigate('/login');
					}}
				/>
			)}
			<Routes>
				<Route path='/courses'>
					<Route
						path=''
						element={
							<AppComponent
								courses={state.courses}
								username={state.user.name}
								isTokenPresent={state.user.isAuth}
							/>
						}
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
	return (
		<>
			{props.isTokenPresent && <Courses courses={props.courses} />}
			{props.isTokenPresent && !props.courses?.length && <EmptyCourseList />}
		</>
	);
};
