import React from 'react';
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../utilities/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('Test dashboard static properties', () => {
    beforeEach(() => {
        const DashboardComponent = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Dashboard />
                </BrowserRouter>
            </Provider>
        );
    });

    test('Dashboard component renders', () => {});
});
