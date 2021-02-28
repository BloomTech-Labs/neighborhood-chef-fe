import React from 'react';
import EventButtonModal from './EventButtonModal';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../../../../utilities/reducers';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom/extend-expect';

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('Test EventButtonModal static properties', () => {
    let EventButtonModalComponent;
    beforeEach(() => {
        sessionStorage.setItem('user', JSON.stringify({ id: 1 }));
        EventButtonModalComponent = render(
            <Provider store={store}>
                <BrowserRouter>
                    <EventButtonModal />
                </BrowserRouter>
            </Provider>
        );
    });

    test('EventButtonModal component renders', () => {
        const buttonClass = document.querySelector('.MuiButtonBase-root');
        expect(buttonClass.toBeInDocument);
    });
});
