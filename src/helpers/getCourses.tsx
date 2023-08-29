import { mockedCoursesList } from '../constants';
import { CourseCardProps } from '../components/Courses/components/CourseCard/CourseCard.types';
import { getDuration } from './getCourseDuration';
import { getAuthors } from './getAuthorsNames';

export function getCourses(): CourseCardProps[] {
	return mockedCoursesList.map((course) => {
		return {
			id: course.id,
			title: course.title,
			description: course.description,
			duration: getDuration(course.duration),
			creationDate: course.creationDate,
			authors: getAuthors(course.authors),
		};
	});
}
