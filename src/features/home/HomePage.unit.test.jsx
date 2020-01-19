import React from 'react';
import HomePage from './HomePage';

describe('HomePage', () => {
	test('loads without error', () => {
		let element = <HomePage/>;

		expect(element).toBeTruthy();
	});	
});