import { Dispatch } from 'react';
import { fetchAuthors } from '../../services';
import { AnyAction } from '@reduxjs/toolkit';

export const getAllAuthors = () => {
	return function (dispatch: Dispatch<AnyAction>) {
		fetchAuthors().then((authors) => {
			dispatch({
				type: 'GET_ALL_AUTHORS',
				authors: authors,
			});
		});
	};
};
