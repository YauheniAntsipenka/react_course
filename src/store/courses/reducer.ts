import { CoursesAction } from './actions';
import { fetchAllCourses } from './thunk';
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
			// fetchAllCourses();
			return action.courses;

		default:
			return state;
	}
}
