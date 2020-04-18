import React from 'react';
import Login from './Login.js';
import renderer from 'react-test-renderer';

it('Login component renders', () => {
    const LoginComponent = renderer.create(<Login />).toJSON();
    expect(LoginComponent).toMatchSnapshot();
});
