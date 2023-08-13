import React, { useState } from 'react';

import { mockedCoursesList, mockedAuthorsList } from './constants';

import { Courses } from './components/Courses/Courses';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Header } from './components/Header/Header';
import { CourseCardProps } from './components/Courses/components/CourseCard/CourseCard.types';

import './app.scss';

function App() {
	const [activeView, setActiveView] = useState('start');
	const [courseIdToShow, setCourseIdToShow] = useState('');

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
			creationDate: course.creationDate,
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
			<Header username='Harry Potter' />
			{activeView === 'start' && (
				<Courses changeState={changeState} courses={courses} />
			)}
			{activeView === 'showCourse' && (
				<CourseInfo changeState={changeState} courseCard={courseToShow} />
			)}
		</div>
	);
}

export default App;

function getAuthors(authorsIds: string[]) {
	return authorsIds
		.map(
			(authorId) =>
				mockedAuthorsList.find((author) => author.id === authorId)?.name
		)
		.join(', ');
}

function getDuration(timeInMinutes: number) {
	let m = timeInMinutes % 60;
	let h = (timeInMinutes - m) / 60;
	return h.toString() + ':' + m.toString() + ' hours';
}
