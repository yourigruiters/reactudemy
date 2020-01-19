import React from 'react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
	test('loads without error', () => {
		let element = <AboutPage/>;

		expect(element).toBeTruthy();
	});	
});