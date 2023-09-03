import { getAllCourses } from '../../services';
import { useDispatch } from 'react-redux';

export const fetchAllCourses = () => {
	return function () {
		const dispatch = useDispatch();
		const coursesFromServer = getAllCourses();
		console.log(coursesFromServer);
		dispatch({
			type: 'GET_ALL_COURSES',
			payload: {
				courses: coursesFromServer,
			},
		});
	};
};
