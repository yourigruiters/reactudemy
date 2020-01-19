import React from 'react';
import EventDashboard from './EventDashboard';

describe('EventDashboard', () => {
	test('loads without error', () => {
		let element = <EventDashboard/>;

		expect(element).toBeTruthy();
	});	
});