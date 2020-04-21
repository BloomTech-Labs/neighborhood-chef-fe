import React from 'react';
import ViewEvents from './ViewEvents.js';
import renderer from 'react-test-renderer';

it('ViewEvents component renders', () => {
    const ViewEventsComponent = renderer.create(<ViewEvents />).toJSON();
    expect(ViewEventsComponent).toMatchSnapshot();
});
