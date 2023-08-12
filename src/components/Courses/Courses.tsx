import React from 'react';

import { CoursesProps } from './Courses.types';
import { CourseCard } from './components/CourseCard/CourseCard';

import './courses.scss';
import { Button } from '../../common/Button/Button';

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
