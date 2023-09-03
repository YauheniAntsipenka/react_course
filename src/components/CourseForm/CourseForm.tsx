import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import './CourseForm.scss';
import { getDuration } from '../../helpers/getCourseDuration';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { CourseType } from '../../store/courses/types';
import {
	addAuthor,
	addCourse,
	deleteAuthor,
	fetchAuthors,
	fetchCourses,
} from '../../services';
import { AuthorType } from '../../store/authors/types';
import { State } from '../../store/types';

export const CourseForm = () => {
	const navigate = useNavigate();
	const [authorName, setAuthorName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [durationInHours, setDurationInHours] = useState('00:00 hours');
	const dispatch = useDispatch();
	const state = useSelector((state: State) => state);

	useEffect(() => {
		fetchAuthors().then((authors) => {
			dispatch({ type: 'GET_ALL_AUTHORS', authors });
		});
	}, [dispatch]);

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
							onInputFunction={(e) => setTitle(e.target.value)}
							value={title}
						/>
					</div>
					<h5 className='h5'>Description</h5>
					<div className='courseDescriptionInput'>
						<Input
							id='create_course_description_id'
							placeholder='Input text'
							onInputFunction={(e) => setDescription(e.target.value)}
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
								onInputFunction={(e) => {
									setDuration(e.target.value);
									setDurationInHours(getDuration(e.target.value));
								}}
								value={duration.toString()}
							/>
						</div>
						<div className='durationInHours'>{durationInHours}</div>
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
										let author: AuthorType = {
											name: authorName,
											id: uuidv4(),
										};
										addAuthor(author).then((isAdded) => {
											if (isAdded) {
												fetchAuthors().then((authors) => {
													dispatch({ type: 'ADD_AUTHOR', authors });
												});
											}
										});
									}}
								/>
							</div>
						</div>
					</div>
					<div className='infoGroup'>
						<h5 className='h5'>Authors list</h5>
						<ul>
							{state.authors.map(({ name, id }) => (
								<li className='authorsInfo' key={id}>
									{name}
									<div className='deleteAuthorButton'>
										<Button
											text='&#x1F5D1;'
											onClickFunction={() => {
												deleteAuthor(id).then((isDeleted) => {
													if (isDeleted) {
														console.log('isDeleted: ', isDeleted);
														fetchAuthors().then((authors) => {
															dispatch({ type: 'DELETE_AUTHOR', authors });
														});
													}
												});
											}}
										/>
									</div>
								</li>
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
					<div className='createCourseButton'>
						<Button
							text='CANCEL'
							onClickFunction={() => {
								navigate('/courses');
							}}
						/>
					</div>
					<div className='createCourseButton'>
						<Button
							text='CREATE COURSE'
							onClickFunction={handleButtonClickFunction()}
						/>
					</div>
				</div>
			</div>
		</div>
	);

	function handleButtonClickFunction(): (params: any) => any {
		return () => {
			let authorIds = [] as string[];
			fetchAuthors().then((presentAuthors) => {
				const commonAuthors = presentAuthors.filter((o) =>
					state.authors.some(({ name }) => o.name === name)
				);
				commonAuthors.map((resultAuthor) => authorIds.push(resultAuthor.id));
			});
			const course: CourseType = {
				creationDate: String(new Date().toLocaleDateString('ru-RU')),
				title: title,
				description: description,
				duration: Number(duration),
				authors: authorIds,
			};
			addCourse(course).then((isAdded) => {
				if (isAdded) {
					fetchCourses()
						.then((courses) => {
							dispatch({ type: 'ADD_COURSE', courses });
						})
						.then(() => navigate('/courses'));
				}
			});
		};
	}
};
