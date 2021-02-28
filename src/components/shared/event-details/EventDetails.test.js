import React from 'react';
import EventDetails from './EventDetails';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../../utilities/reducers';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom/extend-expect';

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('Test EventDetails static properties', () => {
    let EventDetailsComponent;
    beforeEach(() => {
        EventDetailsComponent = render(
            <Provider store={store}>
                <BrowserRouter>
                    <EventDetails />
                </BrowserRouter>
            </Provider>
        );
    });

    test('EventDetails component renders', () => {
        const firstDiv = document.querySelector('.event-details-container');
        expect(firstDiv.toBeInDocument);
    });
});
