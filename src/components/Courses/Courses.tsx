import React from 'react';

import { CourseCard } from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';

import { CoursesProps } from './Courses.types';

import './courses.scss';

export const Courses = ({ courses }: CoursesProps) => {
	if (!courses?.length) {
		return (
			<div className='courses'>
				<h1>NO COURSES</h1>
			</div>
		);
	}
	return (
		<div className='courses'>
			<div className='addNewCourseButton'>
				<Button text='Add new course' onClickFunction={fakeClick} />
			</div>
			<ul>
				{courses.map(({ id, title, duration, creationDate, description }) => (
					<CourseCard
						key={id}
						id={id}
						title={title}
						duration={duration}
						creationDate={creationDate}
						description={description}
					/>
				))}
			</ul>
		</div>
	);
};

function fakeClick() {
	console.log('clicked');
}
