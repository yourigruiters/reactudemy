import React from 'react';
import SignedInMenu from './SignedInMenu';

describe('SignedInMenu', () => {
	test('loads without error', () => {
		let element = <SignedInMenu/>;

		expect(element).toBeTruthy();
	});	
});