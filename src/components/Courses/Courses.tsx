import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CourseCard } from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';

import { CoursesProps } from './Courses.types';

import './Courses.scss';
import { useDispatch } from 'react-redux';

export const Courses = ({ courses }: CoursesProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<div className='courses'>
			<div className='addNewCourseButton justify-end'>
				<Button
					text='Add new course'
					onClickFunction={() => {
						dispatch({ type: 'ADD_COURSE', undefined });
						navigate('/courses/add');
					}}
				/>
			</div>
			<ul>
				{courses.map(
					({ id, title, duration, creationDate, authors, description }) => (
						<CourseCard
							key={id}
							id={id}
							title={title}
							duration={String(duration)}
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
