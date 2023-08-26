import { CourseType, CoursesActionTypes } from './types';

type AddNewCourseAction = {
	type: CoursesActionTypes.ADD_COURSE;
	payload: CourseType;
};

export const addNewCourseAction = (
	courseData: CourseType
): AddNewCourseAction => ({
	type: CoursesActionTypes.ADD_COURSE,
	payload: courseData,
});

interface SaveCourses {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: CourseType[];
}

interface AddCourse {
	type: CoursesActionTypes.ADD_COURSE;
	payload: CourseType;
}

interface DeleteCourse {
	type: CoursesActionTypes.DELETE_COURSE;
	payload: string;
}

export type CoursesAction = SaveCourses | AddCourse | DeleteCourse;
