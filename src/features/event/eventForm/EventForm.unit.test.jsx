import React from 'react';
import EventForm from './EventForm';

describe('EventForm', () => {
	test('loads without error', () => {
		let element = <EventForm/>;

		expect(element).toBeTruthy();
	});	
});