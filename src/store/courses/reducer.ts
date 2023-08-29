import { CourseCardProps } from '../../components/Courses/components/CourseCard/CourseCard.types';
import { CoursesAction } from './actions';
import { CoursesActionTypes } from './types';

export let initCoursesState = [] as CourseCardProps[];

export function coursesReducer(
	state = initCoursesState,
	action: CoursesAction
) {
	switch (action.type) {
		case CoursesActionTypes.SAVE_COURSE:
			return action.payload;

		case CoursesActionTypes.ADD_COURSE:
			return [...state, action.payload];

		case CoursesActionTypes.GET_ALL_COURSES:
			state = action.courses;
			return [...state];

		default:
			return state;
	}
}
