import React from 'react';

import { CoursesProps } from './Courses.types';
import { CourseCard } from './components/CourseCard/CourseCard';

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
