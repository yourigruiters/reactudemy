import React from 'react';
import NavBar from './NavBar';

describe('NavBar', () => {
	test('loads without error', () => {
		let element = <NavBar/>;

		expect(element).toBeTruthy();
	});	
});