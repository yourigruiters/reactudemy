import React from 'react';
import EventDetailedPage from './EventDetailedPage';

describe('EventDetailedPage', () => {
	test('loads without error', () => {
		let element = <EventDetailedPage/>;

		expect(element).toBeTruthy();
	});	
});