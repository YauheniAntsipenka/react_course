import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../common/Button/Button';

import './CourseCard.scss';
import { deleteCourse, fetchCourses } from '../../../../services';
import { useDispatch, useSelector } from 'react-redux';
import { CourseType } from '../../../../store/courses/types';
import { getDuration } from '../../../../helpers/getCourseDuration';
import { State } from '../../../../store/types';

export const CourseCard = ({
	id,
	title,
	duration,
	creationDate,
	authors,
	description,
}: CourseType) => {
	const userState = useSelector((state: State) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const ADDITIONAL_INFO = [
		{
			id: 'Authors:',
			value: authors.join(', '),
		},
		{
			id: 'Duration:',
			value: getDuration(duration),
		},
		{
			id: 'Created:',
			value: creationDate,
		},
	];
	return (
		<li>
			<div className='card'>
				<h3 className='title'>{title}</h3>
				<div className='courseInfo'>
					<div className='description'>
						<span>{description}</span>
					</div>
					<div className='courseInfoInfoGeneralGroup'>
						{ADDITIONAL_INFO.map((item) => {
							return (
								<div key={item.id} className={'additionalInfoGroup'}>
									<span className={'categoryName'}>{item.id}&nbsp;</span>
									<span>{item.value}</span>
								</div>
							);
						})}
						<div className='buttonsGroup'>
							<div className='showCourseButton'>
								<Button
									text='SHOW COURSE'
									onClickFunction={() => {
										navigate('/courses/' + id);
									}}
								/>
							</div>
							{userState.role === 'admin' ? (
								<div className='deleteCourseButton'>
									<Button
										text='&#x1F5D1;'
										onClickFunction={() => {
											deleteCourse(id!).then((isDeleted) => {
												if (isDeleted) {
													fetchCourses().then((courses) => {
														dispatch({ type: 'DELETE_COURSE', courses });
													});
													navigate('/courses');
												}
											});
										}}
									/>
								</div>
							) : null}
							{userState.role === 'admin' ? (
								<div className='editCourseButton'>
									<Button
										text='&#x270E;'
										onClickFunction={() => {
											navigate('/courses/update/' + id);
										}}
									/>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
