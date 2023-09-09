import { coursesReducer } from '../courses/reducer';
import { CoursesActionTypes } from '../courses/types';

test('should return the initial state', () => {
	expect(coursesReducer(undefined, CoursesActionTypes.GET_ALL_COURSES)).toEqual(
		[]
	);
});

test('should handle a SAVE_COURSE and return the same state', () => {
	const previousState = [
		{
			id: 'id',
			title: 'title',
			duration: 1,
			creationDate: 'date',
			authors: ['author'],
			description: 'description',
		},
	];
	expect(coursesReducer(previousState, CoursesActionTypes.SAVE_COURSE)).toEqual(
		[
			{
				id: 'id',
				title: 'title',
				duration: 1,
				creationDate: 'date',
				authors: ['author'],
				description: 'description',
			},
		]
	);
});
