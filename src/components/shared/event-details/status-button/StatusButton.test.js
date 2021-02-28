import React from 'react';
import StatusButton from './StatusButton';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../../../utilities/reducers';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom/extend-expect';

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('Test StatusButton static properties', () => {
    let StatusButtonComponent;
    beforeEach(() => {
        StatusButtonComponent = render(
            <Provider store={store}>
                <BrowserRouter>
                    <StatusButton
                        name={'Maybe'}
                        color={'#58D573'}
                        eventId={1}
                        eventStatus={'Going'}
                    />
                </BrowserRouter>
            </Provider>
        );
    });

    test('StatusButton component renders (Maybe button)', () => {
        expect(StatusButtonComponent.getByText(/Maybe/i));
    });
});
