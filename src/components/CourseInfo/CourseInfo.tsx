import React from 'react';

import { Button } from '../../common/Button/Button';

import { CourseInfoProps } from './CourseInfo.types';

import './courseinfo.scss';

export const CourseInfo: React.FC<CourseInfoProps> = (props) => {
	let courseToShow = props.courseCard;
	return (
		<>
			<div className='card'>
				<div className='title'>
					<h3>{courseToShow.title}</h3>
				</div>
				<div className='courseInfo'>
					<div className='description'>
						<span>{courseToShow.description}</span>
					</div>
					<div className='additionalInfoGroup'>
						<div className='infoGroup'>
							<div className='authorsGroup'>
								<span className='categoryName'>Authors:</span>
								<span>&nbsp;{courseToShow.duration}</span>
							</div>
							<div className='durationGroup'>
								<span className='categoryName'>Duration:</span>
								<span>&nbsp;{courseToShow.duration}</span>
							</div>
							<div className='creationDateGroup'>
								<span className='categoryName'>Created:</span>
								<span>&nbsp;{courseToShow.creationDate}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Button
				text='BACK TO MAIN'
				onClickFunction={() => {
					props.changeState('start', '');
				}}
			/>
		</>
	);
};
