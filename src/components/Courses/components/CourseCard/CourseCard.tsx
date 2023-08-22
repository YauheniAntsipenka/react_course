import React from 'react';
import { useNavigate } from 'react-router-dom';

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
}: CourseCardProps) => {
	const navigate = useNavigate();
	const ADDITIONAL_INFO = [
		{
			id: 'Authors:',
			value: authors,
		},
		{
			id: 'Duration:',
			value: duration,
		},
		{
			id: 'Created:',
			value: creationDate.toLocaleDateString('ru-RU'),
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
							<Button
								text='SHOW COURSE'
								onClickFunction={() => {
									navigate('/courses/' + id);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
