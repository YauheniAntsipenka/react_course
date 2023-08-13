export interface CourseCardProps {
	id: string;
	title: string;
	duration: string;
	creationDate: string;
	authors: string;
	description: string;
	changeState: (activeView: string, courseIdToShow: string) => any;
}
