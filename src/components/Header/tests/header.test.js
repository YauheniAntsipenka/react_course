import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from '../Header';

describe('Header test', () => {
	test('renders Header component', () => {
		render(
			<Header
				username='username'
				buttonText={'LOGOUT'}
				buttonFunction={() => {}}
			/>
		);
		expect(document.querySelector('img').src).toContain('logo.png');
		expect(screen.getByText('username')).toBeInTheDocument();
	});
});
