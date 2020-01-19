import React from 'react';
import PeopleDashboard from './PeopleDashboard';

describe('PeopleDashboard', () => {
	test('loads without error', () => {
		let element = <PeopleDashboard/>;

		expect(element).toBeTruthy();
	});	
});