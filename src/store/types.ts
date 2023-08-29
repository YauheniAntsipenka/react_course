import { CourseCardProps } from '../components/Courses/components/CourseCard/CourseCard.types';
import { UserState } from './user/types';

export type State = {
	user: UserState;
	courses: CourseCardProps[];
};
