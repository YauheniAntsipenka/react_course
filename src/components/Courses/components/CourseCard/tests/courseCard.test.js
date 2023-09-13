import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as router from 'react-router';

import { CourseCard } from '../CourseCard';

describe('CourseCard test', () => {
	const navigate = jest.fn();

	beforeEach(() => {
		jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
	});

	test('renders CourseCard component', () => {
		const user = {
			isAuth: false,
			isRegistered: false,
			name: '',
			email: '',
			token: '',
			role: '',
		};
		const state = { user: user };
		const mockStore = configureStore();
		let store = mockStore(state);
		render(
			<Provider store={store}>
				<CourseCard
					id='id'
					title='title'
					duration={1}
					creationDate={'11/11/2011'}
					authors={['author1']}
					description='description'
				/>
			</Provider>
		);
		expect(screen.getByText('title')).toBeInTheDocument();
		expect(screen.getByText('description')).toBeInTheDocument();
		expect(screen.getByText('0:1 hours')).toBeInTheDocument();
		expect(screen.getByText('author1')).toBeInTheDocument();
		expect(screen.getByText('11/11/2011')).toBeInTheDocument();
	});
});
