import { CourseCard } from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';

import { CoursesProps } from './Courses.types';

import './courses.scss';

export const Courses = ({ courses }: CoursesProps) => {
	return (
		<div className='courses'>
			<div className='addNewCourseButton'>
				<Button text='Add new course' onClickFunction={fakeClick} />
			</div>
			<ul>
				{courses.map(
					({
						id,
						title,
						duration,
						creationDate,
						authors,
						description,
						changeState,
					}) => (
						<CourseCard
							key={id}
							id={id}
							title={title}
							duration={duration}
							creationDate={creationDate}
							authors={authors}
							description={description}
							changeState={changeState}
						/>
					)
				)}
			</ul>
		</div>
	);
};

function fakeClick() {
	console.log('clicked');
}
