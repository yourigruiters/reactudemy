import React from 'react';
import SettingsDashboard from './SettingsDashboard';

describe('SettingsDashboard', () => {
	test('loads without error', () => {
		let element = <SettingsDashboard/>;

		expect(element).toBeTruthy();
	});	
});