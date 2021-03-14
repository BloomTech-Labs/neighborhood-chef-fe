import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../../../../utilities/axiosWithAuth';
import { useSelector } from 'react-redux';
import { print } from 'graphql';
import { GET_USER_INVITED_TO_EVENT_BY_CURRENT_USER } from '../../../../../../graphql/events/event-queries';

import InvitedUser from './invited-user/InvitedUser';
import UninvitedUser from './uninvited-user/UninvitedUser';

const UserList = ({ event, filteredList }) => {
    const user_id = useSelector((state) => state.user.id);
    const event_id = useSelector((state) => state.newEvent.id);
    const [usersCurrentUserAlreadyInvited, setAlreadyInvited] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
                query: print(GET_USER_INVITED_TO_EVENT_BY_CURRENT_USER),
                variables: {
                    queryParams: {
                        id: event_id,
                    },
                    currentUser: user_id,
                },
            })
            .then((res) => {
                setAlreadyInvited(
                    res.data.data.Events.EventUsers.currentUserInvited
                );
            })
            .catch((err) => console.dir(err));
    }, []);

    return (
        <>
            {usersCurrentUserAlreadyInvited
                .sort((a, b) => a.firstName.localeCompare(b.firstName))
                .map((user) => {
                    return (
                        Number(user.id) !== event.user_id && (
                            <InvitedUser key={user.id} user={user} />
                        )
                    );
                })}
            {filteredList
                .filter((user) => {
                    const alreadyInvited = usersCurrentUserAlreadyInvited.map(
                        (user) => user.id
                    );

                    return !alreadyInvited.includes(user.id);
                })
                .sort((a, b) => a.firstName.localeCompare(b.firstName))
                .map((user) => {
                    return (
                        Number(user.id) !== event.user_id && (
                            <UninvitedUser
                                key={user.id}
                                user={user}
                                setAlreadyInvited={setAlreadyInvited}
                            />
                        )
                    );
                })}
        </>
    );
};

export default UserList;
