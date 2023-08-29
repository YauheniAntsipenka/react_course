import { CourseCardProps } from './components/Courses/components/CourseCard/CourseCard.types';

export interface AppProps {
	isTokenPresent: boolean;
	username: string;
	courses: CourseCardProps[];
}
