export interface CourseCardProps {
	id: string;
	title: string;
	duration: string;
	creationDate: Date;
	authors: string;
	description: string;
	changeState: (activeView: string, courseIdToShow: string) => any;
}
