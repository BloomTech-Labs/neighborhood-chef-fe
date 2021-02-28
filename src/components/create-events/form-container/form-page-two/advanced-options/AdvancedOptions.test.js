import React from 'react';
import AdvancedOptions from './AdvancedOptions';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../../../../utilities/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

import '@testing-library/jest-dom/extend-expect';

const allergenList = [{ id: 1, name: 'Shellfish' }];
const dietWarnings = [{ id: 1, title: 'Keto' }];
const ingredientList = [{ description: 'Milk 1 Gallon' }];

describe('Test AdvanedOptions component', () => {
    let AdvancedOptionsComponent;
    beforeEach(() => {
        AdvancedOptionsComponent = render(
            <Provider store={store}>
                <BrowserRouter>
                    <AdvancedOptions
                        allergenList={allergenList}
                        dietWarnings={dietWarnings}
                        ingredientList={ingredientList}

                    />
                </BrowserRouter>
            </Provider>
        );
    });

    test('advanced options component renders with text from props', () => {
        expect(AdvancedOptionsComponent).toBeDefined();
        expect(AdvancedOptionsComponent.getByText(/Shellfish/i));
        expect(AdvancedOptionsComponent.getByText(/Keto/i));
    });
});
