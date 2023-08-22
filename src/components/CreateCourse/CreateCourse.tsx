import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import './CreateCourse.scss';
import { AuthorItemProps } from './components/AuthorItem/AuthorItem.types';

export const CreateCourse = () => {
	const navigate = useNavigate();

	let title = '';
	let description = '';
	let duration = '00:00 hours';
	let authors: AuthorItemProps[] = [{ name: 'Valera' }, { name: 'Ivan' }];

	const COURSE_INFO = [
		{
			id: 'Main info',
			value: (
				<>
					<h5 className='h5'>Title</h5>
					<div className='courseTitleInput'>
						<Input
							id='create_course_title_id'
							placeholder='Input text'
							onInputFunction={(e) => (title = e.target.value)}
						/>
					</div>
					<h5 className='h5'>Description</h5>
					<div className='courseDescriptionInput'>
						<Input
							id='create_course_description_id'
							placeholder='Input text'
							onInputFunction={(e) => (description = e.target.value)}
						/>
					</div>
				</>
			),
		},
		{
			id: 'Duration',
			value: (
				<>
					<h5 className='h5'>Duration</h5>
					<div className='durationBlock'>
						<div className='durationInput'>
							<Input
								id='create_course_duration_id'
								placeholder='Input text'
								onInputFunction={(e) => (title = e.target.value)}
							/>
						</div>
						<div className='durationInHours'>{duration}</div>
					</div>
				</>
			),
		},
		{
			id: 'Authors',
			value: (
				<>
					<h5 className='h5'>Author Name</h5>
					<div className='authorsBlock'>
						<div className='authorsInput'>
							<Input
								id='create_course_author_name_id'
								placeholder='Input text'
								onInputFunction={(e) => (title = e.target.value)}
							/>
						</div>
						<div className='authorsButton'>
							<Button
								text='CREATE AUTHOR'
								onClickFunction={() => {
									console.log('clicked');
								}}
							/>
						</div>
					</div>
					<h5 className='h5'>Authors list</h5>
					<ul>
						{authors.map(({ name }) => (
							<div>{name}</div>
						))}
					</ul>
				</>
			),
		},
	];

	return (
		<div className='createCourseBody'>
			<div className='createCourseGeneral'>
				<h2 className='createCourseGeneralTitle'>Create Page</h2>
				<div className='createCourseGeneralGroup'>
					<div className='createCourseGeneralSubGroup'>
						{COURSE_INFO.map((item) => {
							return (
								<div key={item.id} className={'createCourseSubGroup'}>
									<h4 className='h4'>{item.id}</h4>
									{item.value}
								</div>
							);
						})}
					</div>
				</div>

				<div className='createCourseButtonsGroup'>
					<Button
						text='CANCEL'
						onClickFunction={() => {
							navigate('/courses');
						}}
					/>
					<Button
						text='CREATE COURSE'
						onClickFunction={() => {
							navigate('/courses');
						}}
					/>
				</div>
			</div>
		</div>
	);
};
