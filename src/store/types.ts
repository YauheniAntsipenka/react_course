import { CourseType } from './courses/types';
import { UserState } from './user/types';

export type State = {
	user: UserState;
	courses: CourseType[];
	course: CourseType;
};
