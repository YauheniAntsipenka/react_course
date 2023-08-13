import React from 'react';

import { EmptyCourseListProps } from './EmptyCourseList.types';

import './emptycourselist.scss';
import { Button } from '../../../../common/Button/Button';

export const EmptyCourseList: React.FC<EmptyCourseListProps> = () => {
	return (
		<div className='emptylistgroup'>
			<h2>Your List Is Empty</h2>
			<h5>Please use 'Add New Course' button to add your first course</h5>
			<Button text='ADD NEW COURSE' onClickFunction={fakeClick} />
		</div>
	);
};

function fakeClick() {
	console.log('clicked');
}
