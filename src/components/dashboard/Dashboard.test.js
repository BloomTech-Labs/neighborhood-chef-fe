import React from 'react';
import Dashboard from './Dashboard.js';
import renderer from 'react-test-renderer';

it('Dashboard component renders', () => {
    const DashboardComponent = renderer.create(<Dashboard />).toJSON();
    expect(DashboardComponent).toMatchSnapshot();
});
