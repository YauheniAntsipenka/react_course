import React from 'react';

import { EmptyCourseListProps } from './EmptyCourseList.types';

import './Emptycourselist.scss';
import { Button } from '../../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';

export const EmptyCourseList: React.FC<EmptyCourseListProps> = () => {
	const navigate = useNavigate();
	return (
		<div className='emptylistgroup'>
			<h2>Your List Is Empty</h2>
			<h5>Please use 'Add New Course' button to add your first course</h5>
			<Button
				text='ADD NEW COURSE'
				onClickFunction={() => navigate('/courses/add')}
			/>
		</div>
	);
};
