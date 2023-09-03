import { CoursesAction } from './actions';
import { CourseType, CoursesActionTypes } from './types';

export let initCoursesState = [] as CourseType[];

export function coursesReducer(
	state = initCoursesState,
	action: CoursesAction
) {
	switch (action.type) {
		case CoursesActionTypes.SAVE_COURSE:
			return action.payload;

		case CoursesActionTypes.ADD_COURSE:
			return action.courses;

		case CoursesActionTypes.DELETE_COURSE:
			return action.courses;

		case CoursesActionTypes.GET_ALL_COURSES:
			return action.courses;

		default:
			return state;
	}
}
