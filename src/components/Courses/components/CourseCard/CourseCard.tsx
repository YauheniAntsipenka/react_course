import React from 'react';

import { Button } from '../../../../common/Button/Button';

import { CourseCardProps } from './CourseCard.types';

import './Coursecard.scss';

export const CourseCard = ({
	id,
	title,
	duration,
	creationDate,
	authors,
	description,
	changeState,
}: CourseCardProps) => {
	return (
		<li>
			<div className='card'>
				<div className='title'>
					<h3>{title}</h3>
				</div>
				<div className='courseInfo'>
					<div className='description'>
						<span>{description}</span>
					</div>
					<div className='additionalInfoGroup'>
						<div className='infoGroup'>
							<div className='authorsGroup'>
								<span className='categoryName'>Authors:</span>
								<span>&nbsp;{authors}</span>
							</div>
							<div className='durationGroup'>
								<span className='categoryName'>Duration:</span>
								<span>&nbsp;{duration}</span>
							</div>
							<div className='creationDateGroup'>
								<span className='categoryName'>Created:</span>
								<span>&nbsp;{creationDate.toLocaleDateString('ru-RU')}</span>
							</div>
						</div>
						<div className='buttonsGroup'>
							<Button
								text='SHOW COURSE'
								onClickFunction={() => {
									console.log(id);
									changeState('showCourse', id);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
