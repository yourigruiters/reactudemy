import React from 'react';
import BasicPage from './BasicPage';

describe('BasicPage', () => {
	test('loads without error', () => {
		let element = <BasicPage/>;

		expect(element).toBeTruthy();
	});	
});