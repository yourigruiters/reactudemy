import React from 'react';
import UserDetailed from './UserDetailed';

describe('UserDetailed', () => {
	test('loads without error', () => {
		let element = <UserDetailed/>;

		expect(element).toBeTruthy();
	});	
});