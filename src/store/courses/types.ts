export const enum CoursesActionTypes {
	SAVE_COURSES = 'SAVE_COURSES',
	ADD_COURSE = 'ADD_COURSE',
	DELETE_COURSE = 'DELETE_COURSES',
}

export type CourseType = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};
