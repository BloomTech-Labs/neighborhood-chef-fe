import React from 'react';
import FullEvent from './FullEvent.js';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../utilities/reducers';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom/extend-expect';

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('Test FullEvent static properties', () => {
    let FullEventComponent;
    beforeEach(() => {
        FullEventComponent = render(
            <Provider store={store}>
                <BrowserRouter>
                    <FullEvent match={{ params: { id: 1 } }} />
                </BrowserRouter>
            </Provider>
        );
    });

    test('FullEvent component renders', () => {
        expect(FullEventComponent.getAllByText(/event/i));
    });
});
