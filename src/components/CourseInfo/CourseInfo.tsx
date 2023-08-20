import React from 'react';

import { Button } from '../../common/Button/Button';

import { CourseInfoProps } from './CourseInfo.types';

import './Courseinfo.scss';

export const CourseInfo: React.FC<CourseInfoProps> = (props) => {
	const courseToShow = props.courseCard;

	const ADDITIONAL_INFO = [
		{
			id: 'ID:',
			value: courseToShow.id,
		},
		{
			id: 'Duration:',
			value: courseToShow.duration,
		},
		{
			id: 'Created:',
			value: courseToShow.creationDate.toLocaleDateString('ru-RU'),
		},
		{
			id: 'Authors:',
			value: courseToShow.authors,
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
							props.changeState('start', '');
						}}
					/>
				</div>
			</div>
		</div>
	);
};
