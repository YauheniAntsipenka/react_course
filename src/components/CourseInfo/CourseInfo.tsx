import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';

import './CourseInfo.scss';
import { getCourseToShow } from '../../helpers/getCourseToShow';
import { useSelector } from 'react-redux';
import { State } from '../../store/types';
import { getDuration } from '../../helpers/getCourseDuration';

export const CourseInfo = () => {
	const coursesState = useSelector((state: State) => state.courses);
	const { courseId } = useParams();
	const navigate = useNavigate();

	const courseToShow = getCourseToShow(coursesState, courseId);

	const ADDITIONAL_INFO = [
		{
			id: 'ID:',
			value: courseToShow.id,
		},
		{
			id: 'Duration:',
			value: getDuration(courseToShow.duration),
		},
		{
			id: 'Created:',
			value: courseToShow.creationDate,
		},
		{
			id: 'Authors:',
			value: courseToShow.authors.join(', '),
		},
	];

	return (
		<div className='courseInfoBody'>
			<div className='courseInfoGeneral'>
				<h2 className='courseInfoGeneralTitle'>{courseToShow.title}</h2>
				<div className='courseInfoNote'>
					<div className='courseInfoCard'>
						<h3>Description:</h3>
						<p>{courseToShow.description}</p>
					</div>
					<div className='courseInfoAdditionalInfoGeneralGroup'>
						{ADDITIONAL_INFO.map((item) => {
							return (
								<div key={item.id} className={'courseInfoAdditionalInfoGroup'}>
									<div className={'courseInfoAdditionalInfoCategoryName'}>
										{item.id}
									</div>
									<div>{item.value}</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className='courseInfoAdditionalInfoButtonsGroup'>
					<Button
						text='BACK'
						onClickFunction={() => {
							navigate('/courses');
						}}
					/>
				</div>
			</div>
		</div>
	);
};
