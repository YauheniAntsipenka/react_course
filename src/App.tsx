import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { mockedCoursesList } from './constants';

import { Courses } from './components/Courses/Courses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Header } from './components/Header/Header';
import { CourseCardProps } from './components/Courses/components/CourseCard/CourseCard.types';
import { getDuration } from './helpers/getCourseDuration';
import { getAuthors } from './helpers/getAuthorsNames';

import './app.scss';
import { EmptyCourseList } from './components/Courses/components/EmptyCourseList/EmptyCourseList';

function App() {
	const [activeView, setActiveView] = useState('start');
	const [courseIdToShow, setCourseIdToShow] = useState('');
	const [isLogged, setIsLogged] = useState(false);

	let navigate = useNavigate();

	console.log(activeView);
	console.log(courseIdToShow);

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

	return (
		<div className='app'>
			{isLogged ? (
				<Header
					username={'Harry Potter'}
					buttonText={'LOGOUT'}
					buttonFunction={() => console.log('logged')}
				/>
			) : (
				<Header
					username={''}
					buttonText={'LOGIN'}
					buttonFunction={() => navigate('/login')}
				/>
			)}

			{activeView === 'start' && (
				<Courses changeState={changeState} courses={courses} />
			)}
			{activeView === 'showCourse' && courses?.length && (
				<CourseInfo changeState={changeState} courseCard={courseToShow} />
			)}
			{activeView === 'showCourse' && !courses?.length && <EmptyCourseList />}
		</div>
	);
}

export default App;
