import React from 'react';
import SettingsNav from './SettingsNav';

describe('SettingsNav', () => {
	test('loads without error', () => {
		let element = <SettingsNav/>;

		expect(element).toBeTruthy();
	});	
});