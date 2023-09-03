import { Dispatch } from 'react';
import { fetchCourses } from '../../services';
import { AnyAction } from '@reduxjs/toolkit';

export const getAllCourses = () => {
	return function (dispatch: Dispatch<AnyAction>) {
		fetchCourses().then((courses) => {
			dispatch({
				type: 'GET_ALL_COURSES',
				courses: courses,
			});
		});
	};
};
