import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Courses } from './components/Courses/Courses';
import { Header } from './components/Header/Header';

import './App.scss';
import { EmptyCourseList } from './components/Courses/components/EmptyCourseList/EmptyCourseList';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { AppProps } from './App.types';
import { CourseForm } from './components/CourseForm/CourseForm';
import { State } from './store/types';
import store from './store';
import { getAllCourses } from './store/courses/thunk';

function App() {
	const userState = useSelector((state: State) => state.user);
	const coursesState = useSelector((state: State) => state.courses);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		store.dispatch(getAllCourses());
	}, []);

	return (
		<div className='app'>
			{userState.isAuth && (
				<Header
					username={userState.name}
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
								courses={coursesState}
								username={userState.name}
								isTokenPresent={userState.isAuth}
							/>
						}
					/>
					<Route path=':courseId' element={<CourseInfo />} />
					<Route path='/courses/add' element={<CourseForm />} />
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
