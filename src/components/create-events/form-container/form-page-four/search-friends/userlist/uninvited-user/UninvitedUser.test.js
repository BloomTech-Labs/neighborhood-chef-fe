import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

import UninvitedUser from './UninvitedUser';

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

const event = {
    id: 1,
    user_id: 1,
    title: 'BBQ',
};

const mockStore = configureStore([]);

describe('Test UninvitedUser component', () => {
    let UninvitedUserComponent;
    let store;

    beforeEach(() => {
        store = mockStore({
            userList: inviteList,
            newEvent: event,
        });

        UninvitedUserComponent = render(
            <Provider store={store}>
                <UninvitedUser
                    user={{
                        id: 1,
                        firstName: 'John',
                        lastName: 'Doe',
                        email: 'doe@gmail.com',
                    }}
                />
            </Provider>
        );
    });

    test('UninvitedUserComponent renders', () => {
        expect(UninvitedUserComponent).toBeDefined();
        expect(UninvitedUserComponent.findByText(/John/i));
    });
});
