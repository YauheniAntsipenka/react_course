import React from 'react';

import { mockedCoursesList, mockedAuthorsList } from './constants';

import { Courses } from './components/Courses/Courses';
import { Header } from './components/Header/Header';
import { CourseCardProps } from './components/Courses/components/CourseCard/CourseCard.types';

import './app.scss';

function App() {
	const courses: CourseCardProps[] = mockedCoursesList.map((course) => {
		return {
			id: course.id,
			title: course.title,
			description: course.description,
			duration: course.duration,
			creationDate: course.creationDate,
		};
	});
	return (
		<div className='app'>
			<Header username='Harry Potter' />
			<Courses courses={courses} />
		</div>
	);
}

export default App;
