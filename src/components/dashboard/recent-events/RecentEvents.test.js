import React from 'react';
import RecentEvents from './RecentEvents';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../../utilities/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('Test recent events static properties', () => {
    let RecentEventsComponent;
    beforeEach(() => {
        RecentEventsComponent = render(
            <Provider store={store}>
                <BrowserRouter>
                    <RecentEvents />
                </BrowserRouter>
            </Provider>
        );
    });

    test('RecentEvents component renders', () => {
        expect(RecentEventsComponent.getByText(/newest events/i));
    });
});
