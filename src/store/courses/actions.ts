import { CourseType, CoursesActionTypes } from './types';

interface SaveCourses {
	type: CoursesActionTypes.SAVE_COURSE;
	courses: CourseType[];
}

interface AddCourse {
	type: CoursesActionTypes.ADD_COURSE;
	courses: CourseType[];
}

interface DeleteCourse {
	type: CoursesActionTypes.DELETE_COURSE;
	courses: CourseType[];
}

interface GetAllCourses {
	type: CoursesActionTypes.GET_ALL_COURSES;
	courses: CourseType[];
}

export type CoursesAction =
	| SaveCourses
	| AddCourse
	| DeleteCourse
	| GetAllCourses;
