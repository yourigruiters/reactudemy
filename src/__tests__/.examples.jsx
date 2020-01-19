import React from 'react';
import renderer from 'react-test-renderer';

//Laden van component
describe('App', () => {
	test('loads without error', () => {
		let element = <App/>;

		expect(element).toBeTruthy();
	});	
});


//Snapshot van component/Vergelijken met vorige snapshot
describe('App', () => {
    test('render matches snapshot', () => {
        const component = renderer.create(<App/>);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});