import React from 'react';
import EventList from './EventList';
import EventListAttendee from './EventListAttendee';
import EventListItem from './EventListItem';

describe('Complete EvenList elements', () => {
	test('loads without errors', () => {
		let element = <EventList/>;
		let element2 = <EventListAttendee/>;
		let element3 = <EventListItem/>;

		expect(element).toBeTruthy();
		expect(element2).toBeTruthy();
		expect(element3).toBeTruthy();
	});	
});