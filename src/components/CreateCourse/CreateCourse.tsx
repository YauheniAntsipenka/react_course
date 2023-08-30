import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import './CreateCourse.scss';
import { getDuration } from '../../helpers/getCourseDuration';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/types';
import { CourseType } from '../../store/courses/types';
import { addCourse, fetchAuthors, fetchCourses } from '../../services';
import { AuthorType } from '../../store/authors/types';

export const CreateCourse = () => {
	const navigate = useNavigate();
	const [authorName, setAuthorName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [durationInHours, setDurationInHours] = useState('00:00 hours');
	const [authors, setAuthors] = useState([] as AuthorType[]);
	const dispatch = useDispatch();
	const state = useSelector((state: State) => state);

	console.log(state);

	useEffect(() => {
		if (state.courses[0].isAdded) {
			fetchCourses().then((courses) => {
				dispatch({ type: 'GET_ALL_COURSES', courses });
			});
			navigate('/courses');
		}
	}, [dispatch, navigate, state.courses]);

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
							{authors.map(({ name, id }) => (
								<li key={id}>{name}</li>
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
					authors.some(({ name }) => o.name === name)
				);
				console.log('commonAuthors: ', commonAuthors);
				commonAuthors.map((resultAuthor) => authorIds.push(resultAuthor.id));
			});
			const course: CourseType = {
				isAdded: false,
				id: uuidv4(),
				creationDate: String(new Date()),
				title: title,
				description: description,
				duration: Number(duration),
				authors: authorIds,
			};
			addCourse(course).then((isAdded) => {
				if (isAdded) {
					console.log('isAdded: ', isAdded);
					course.isAdded = true;
					dispatch({ type: 'ADD_COURSE', course });
				}
			});
		};
	}
};
