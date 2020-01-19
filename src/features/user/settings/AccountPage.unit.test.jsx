import React from 'react';
import AccountPage from './AccountPage';

describe('AccountPage', () => {
	test('loads without error', () => {
		let element = <AccountPage/>;

		expect(element).toBeTruthy();
	});	
});