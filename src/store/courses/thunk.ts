import { Dispatch } from 'react';
import { getAllCourses } from '../../services';
import { AnyAction } from '@reduxjs/toolkit';

export const fetchAllCourses = () => {
	return function (dispatch: Dispatch<AnyAction>) {
		const coursesFromServer = getAllCourses();
		console.log(coursesFromServer);
		dispatch({
			type: 'GET_ALL_COURSES',
			courses: coursesFromServer,
		});
	};
};
