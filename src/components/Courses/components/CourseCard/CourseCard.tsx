import React from 'react';

import { Button } from '../../../../common/Button/Button';

import { CourseCardProps } from './CourseCard.types';

import './coursecard.scss';

export const CourseCard: React.FC<CourseCardProps> = (props) => (
	<li>
		<div className='card'>
			<div>
				<h2>{props.title}</h2>
				<span>{props.description}</span>
			</div>
			<div>
				<div className='durationGroup'>
					<h3>Duration</h3>
					<span>{props.duration}</span>
				</div>
				<div className='creationDateGroup'>
					<h3>Created</h3>
					<span>{props.creationDate}</span>
				</div>
				<div className='buttonsGroup'>
					<Button text='SHOW COURSE' onClickFunction={fakeClick} />
					<Button text='D' onClickFunction={fakeClick} />
					<Button text='E' onClickFunction={fakeClick} />
				</div>
			</div>
		</div>
	</li>
);

function fakeClick() {
	console.log('clicked');
}
