import React from 'react';

import { CourseCard } from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';

import { CoursesProps } from './Courses.types';

import './Courses.scss';

export const Courses = ({ courses }: CoursesProps) => {
	return (
		<div className='courses'>
			<div className='addNewCourseButton justify-end'>
				<Button text='Add new course' onClickFunction={fakeClick} />
			</div>
			<ul>
				{courses.map(
					({ id, title, duration, creationDate, authors, description }) => (
						<CourseCard
							key={id}
							id={id}
							title={title}
							duration={duration}
							creationDate={creationDate}
							authors={authors}
							description={description}
						/>
					)
				)}
			</ul>
		</div>
	);
};

function fakeClick() {
	console.log('clicked');
}
