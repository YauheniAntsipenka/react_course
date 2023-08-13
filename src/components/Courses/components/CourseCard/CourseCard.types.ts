export interface CourseCardProps {
	id: string;
	title: string;
	duration: number;
	creationDate: string;
	authors: string;
	description: string;
	changeState: (activeView: string, courseIdToShow: string) => any;
}
