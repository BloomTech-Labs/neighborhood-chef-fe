import React from 'react';
import FormPageFour from './FormPageFour';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const values = {
    title: 'BBQ',
    address: '123 ABC St.',
    date: new Date(),
    startTime: '6:00pm',
    endTime: '9:00pm',
};

const userList = [
    { id: 1, firstName: 'Homer', lastName: 'Simpon', email: 'homer@gmail.com' },
    { id: 3, firstName: 'Bart', lastName: 'Simpson', email: 'bart@gmail.com' },
];

const inviteList = [
    {
        id: 4,
        firstName: 'Lisa',
        lastName: 'Simpson',
        email: 'list@gmail.com',
    },
    {
        id: 5,
        firstName: 'Ralph',
        lastName: 'Wiggum',
        email: 'ralph@gmail.com',
    },
];

const mockStore = configureStore([]);

describe('Test FormPageFour component', () => {
    let FormPageFourComponent;
    let store;
    beforeEach(() => {
        store = mockStore({
            userList: userList,
            inviteList: inviteList,
            newEvent: values,
        });
        FormPageFourComponent = render(
            <Router>
                <Provider store={store}>
                    <FormPageFour />
                </Provider>
            </Router>
        );
    });

    test('FormPageFour component renders', () => {
        expect(FormPageFourComponent).toBeDefined();
        expect(FormPageFourComponent.getByText(/BBQ/i));
    });
});
