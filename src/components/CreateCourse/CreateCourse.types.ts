import { AuthorItemProps } from './components/AuthorItem/AuthorItem.types';

export interface CourseProps {
	title: string;
	description: string;
	duration: number;
	authors: AuthorItemProps[];
}
