import React from 'react';
import SignedOutMenu from './SignedOutMenu';

describe('SignedOutMenu', () => {
	test('loads without error', () => {
		let element = <SignedOutMenu/>;

		expect(element).toBeTruthy();
	});	
});