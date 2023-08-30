import { CourseCardProps } from '../components/Courses/components/CourseCard/CourseCard.types';

export function getCourseToShow(
	courses: CourseCardProps[],
	courseIdToShow: string | undefined
) {
	let courseToShow = courses.find((course) => course.id === courseIdToShow);
	if (courseToShow === undefined) {
		return (courseToShow = {} as CourseCardProps);
	}
	return courseToShow;
}
