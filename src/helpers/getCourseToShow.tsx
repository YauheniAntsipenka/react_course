import { CourseType } from '../store/courses/types';

export function getCourseToShow(
	courses: CourseType[],
	courseIdToShow: string | undefined
) {
	let courseToShow = courses.find((course) => course.id === courseIdToShow);
	if (courseToShow === undefined) {
		return (courseToShow = {} as CourseType);
	}
	return courseToShow;
}
