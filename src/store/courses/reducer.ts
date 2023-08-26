import { CoursesAction } from './actions';
import { CourseType, CoursesActionTypes } from './types';

export const initCoursesState = [] as CourseType[];

export function coursesReducer(
	state = initCoursesState,
	action: CoursesAction
) {
	switch (action.type) {
		case CoursesActionTypes.SAVE_COURSES:
			return action.payload;

		case CoursesActionTypes.ADD_COURSE:
			return [...state, action.payload];

		default:
			return state;
	}
}
