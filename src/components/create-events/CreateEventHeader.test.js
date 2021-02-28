import React from 'react';
import CreateEventHeader from './CreateEventHeader';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('Test CreateEventHeader static properties', () => {
    let store;
    let CreateEventHeaderComponent;

    beforeEach(() => {
        store = mockStore({});

        CreateEventHeaderComponent = render(
            <Provider store={store}>
                <BrowserRouter>
                    <CreateEventHeader />
                </BrowserRouter>
            </Provider>
        );
    });

    test('CreateEventHeader renders', () => {
        expect(CreateEventHeaderComponent.getByText(/Create/i));
    });
});
