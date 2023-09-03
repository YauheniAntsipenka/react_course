import { CourseType } from './store/courses/types';

export interface AppProps {
	isTokenPresent: boolean;
	username: string;
	courses: CourseType[];
}
