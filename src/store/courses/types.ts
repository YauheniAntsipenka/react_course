export const enum CoursesActionTypes {
	SAVE_COURSE = 'SAVE_COURSE',
	ADD_COURSE = 'ADD_COURSE',
	DELETE_COURSE = 'DELETE_COURSE',
	GET_ALL_COURSES = 'GET_ALL_COURSES',
}

export type CourseType = {
	isAdded: boolean;
	id: string;
	title: string;
	duration: number;
	creationDate: string;
	authors: string[];
	description: string;
};
