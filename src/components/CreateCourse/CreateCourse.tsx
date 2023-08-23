import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import './CreateCourse.scss';
import { AuthorItemProps } from './components/AuthorItem/AuthorItem.types';

export const CreateCourse = () => {
	const navigate = useNavigate();
	const [authorName, setAuthorName] = useState('');

	let title = '';
	let description = '';
	let duration = '00:00 hours';
	const [authors, setAuthors] = useState([{ name: '' }]);

	const COURSE_INFO = [
		{
			id: 'Main info',
			value: (
				<div className='infoGroup'>
					<h5 className='h5'>Title</h5>
					<div className='courseTitleInput'>
						<Input
							id='create_course_title_id'
							placeholder='Input text'
							onInputFunction={(e) => (title = e.target.value)}
							value={title}
						/>
					</div>
					<h5 className='h5'>Description</h5>
					<div className='courseDescriptionInput'>
						<Input
							id='create_course_description_id'
							placeholder='Input text'
							onInputFunction={(e) => (description = e.target.value)}
							value={description}
						/>
					</div>
				</div>
			),
		},
		{
			id: 'Duration',
			value: (
				<div className='infoGroup'>
					<h5 className='h5'>Duration</h5>
					<div className='durationBlock'>
						<div className='durationInput'>
							<Input
								id='create_course_duration_id'
								placeholder='Input text'
								onInputFunction={(e) => (title = e.target.value)}
								value={title}
							/>
						</div>
						<div className='durationInHours'>{duration}</div>
					</div>
				</div>
			),
		},
		{
			id: 'Authors',
			value: (
				<>
					<div className='infoGroup'>
						<h5 className='h5'>Author Name</h5>
						<div className='authorsBlock'>
							<div className='authorsInput'>
								<Input
									id='create_course_author_name_id'
									placeholder='Input text'
									onInputFunction={(e) => setAuthorName(e.target.value)}
									value={authorName}
								/>
							</div>
							<div className='authorsButton'>
								<Button
									text='CREATE AUTHOR'
									onClickFunction={() => {
										let author: AuthorItemProps = { name: authorName };
										let tempArr = [...authors];
										tempArr.push(author);
										setAuthors(tempArr);
										setAuthorName('');
										console.log(authors);
									}}
								/>
							</div>
						</div>
					</div>
					<div className='infoGroup'>
						<h5 className='h5'>Authors list</h5>
						<ul>
							{authors.map(({ name }) => (
								<li>{name}</li>
							))}
						</ul>
					</div>
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
									<h3 className='h3'>{item.id}</h3>
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
