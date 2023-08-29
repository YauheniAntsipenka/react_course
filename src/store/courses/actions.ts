import { CourseCardProps } from '../../components/Courses/components/CourseCard/CourseCard.types';
import { CoursesActionTypes } from './types';

interface SaveCourses {
	type: CoursesActionTypes.SAVE_COURSE;
	payload: CourseCardProps[];
}

interface AddCourse {
	type: CoursesActionTypes.ADD_COURSE;
	payload: CourseCardProps;
}

interface DeleteCourse {
	type: CoursesActionTypes.DELETE_COURSE;
	payload: string;
}

interface GetAllCourses {
	type: CoursesActionTypes.GET_ALL_COURSES;
	courses: CourseCardProps[];
}

export type CoursesAction =
	| SaveCourses
	| AddCourse
	| DeleteCourse
	| GetAllCourses;
