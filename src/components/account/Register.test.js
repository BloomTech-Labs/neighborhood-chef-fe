import React from 'react';
import Register from './Register.js';
import renderer from 'react-test-renderer';

it('Register component renders', () => {
    const RegisterComponent = renderer.create(<Register />).toJSON();
    expect(RegisterComponent).toMatchSnapshot();
});
