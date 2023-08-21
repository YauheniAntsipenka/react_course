import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { mockedCoursesList } from './constants';

import { Courses } from './components/Courses/Courses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Header } from './components/Header/Header';
import { CourseCardProps } from './components/Courses/components/CourseCard/CourseCard.types';
import { getDuration } from './helpers/getCourseDuration';
import { getAuthors } from './helpers/getAuthorsNames';

import './App.scss';
import { EmptyCourseList } from './components/Courses/components/EmptyCourseList/EmptyCourseList';

function App() {
	const [activeView, setActiveView] = useState('start');
	const [courseIdToShow, setCourseIdToShow] = useState('');
	const [token, setToken] = useState(localStorage.getItem('token'));

	const navigate = useNavigate();

	function changeState(activeView: string, courseIdToShow: string) {
		setActiveView(activeView);
		setCourseIdToShow(courseIdToShow);
	}

	const courses: CourseCardProps[] = mockedCoursesList.map((course) => {
		return {
			id: course.id,
			title: course.title,
			description: course.description,
			duration: getDuration(course.duration),
			creationDate: new Date(course.creationDate),
			authors: getAuthors(course.authors),
			changeState: changeState,
		};
	});

	let courseToShow = courses.find((course) => course.id === courseIdToShow);
	if (courseToShow === undefined) {
		courseToShow = {} as CourseCardProps;
	}

	let isTokenPresent = token !== null && token !== undefined;

	return (
		<div className='app'>
			{isTokenPresent ? (
				<Header
					username={'Harry Potter'}
					buttonText={'LOGOUT'}
					buttonFunction={() => {
						localStorage.removeItem('token');
						setToken(null);
						navigate('/login');
					}}
				/>
			) : (
				<div />
			)}

			{isTokenPresent && activeView === 'start' && (
				<Courses changeState={changeState} courses={courses} />
			)}
			{isTokenPresent && activeView === 'showCourse' && courses?.length && (
				<CourseInfo changeState={changeState} courseCard={courseToShow} />
			)}
			{isTokenPresent && activeView === 'showCourse' && !courses?.length && (
				<EmptyCourseList />
			)}
		</div>
	);
}

export default App;
