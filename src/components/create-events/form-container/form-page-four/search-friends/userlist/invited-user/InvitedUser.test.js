import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

import InvitedUser from './InvitedUser';

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

describe('Test InvitedUser component', () => {
    let InvitedUserComponent;
    let store;

    beforeEach(() => {
        store = mockStore({
            userList: inviteList,
            newEvent: event,
        });

        InvitedUserComponent = render(
            <Provider store={store}>
                <InvitedUser
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

    test('InvitedUserComponent renders', () => {
        expect(InvitedUserComponent).toBeDefined();
        expect(InvitedUserComponent.findByText(/John/i));
    });
});
