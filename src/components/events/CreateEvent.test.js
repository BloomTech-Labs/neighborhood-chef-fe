import React from 'react';
import CreateEvent from './CreateEvent.js';
import renderer from 'react-test-renderer';

it('CreateEvent component renders', () => {
    const CreateEventComponent = renderer.create(<CreateEvent />).toJSON();
    expect(CreateEventComponent).toMatchSnapshot();
});
