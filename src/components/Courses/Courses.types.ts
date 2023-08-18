import { CourseCardProps } from './components/CourseCard/CourseCard.types';

export interface CoursesProps {
	courses: CourseCardProps[];
	changeState: (activeView: string, courseIdToShow: string) => any;
}
