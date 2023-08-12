import { CourseCardProps } from '../Courses/components/CourseCard/CourseCard.types';

export interface CourseInfoProps {
	courseCard: CourseCardProps;
	changeState: (activeView: string, courseIdToShow: string) => any;
}
