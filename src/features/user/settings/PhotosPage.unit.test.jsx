import React from 'react';
import PhotosPage from './PhotosPage';

describe('PhotosPage', () => {
	test('loads without error', () => {
		let element = <PhotosPage/>;

		expect(element).toBeTruthy();
	});	
});