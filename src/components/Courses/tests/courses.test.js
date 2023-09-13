import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as router from 'react-router';

import { Courses } from '../Courses';

describe('Courses test', () => {
	const navigate = jest.fn();
	const onClickButton = jest.fn();

	beforeEach(() => {
		jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
	});

	test('renders CourseCard component', async () => {
		let initCoursesState = [
			{
				id: 'id1',
				title: 'title1',
				duration: 1,
				creationDate: '11/11/2011',
				authors: ['author1'],
				description: 'description1',
			},
			{
				id: 'id2',
				title: 'title2',
				duration: 2,
				creationDate: '12/12/2012',
				authors: ['author2'],
				description: 'description2',
			},
		];
		const user = {
			isAuth: true,
			isRegistered: false,
			name: 'admin',
			email: 'admin@admin.admin',
			token: 'token',
			role: 'admin',
		};
		const state = { courses: initCoursesState, user: user };
		const mockStore = configureStore();
		let store = mockStore(state);
		render(
			<Provider store={store}>
				<Courses courses={initCoursesState} />
			</Provider>
		);
		expect(document.querySelectorAll('li')).toHaveLength(2);

		const button = screen.getByText('Add new course');
		button.onclick = onClickButton;
		fireEvent.click(button);
		expect(onClickButton).toHaveBeenCalled();
	});
});
