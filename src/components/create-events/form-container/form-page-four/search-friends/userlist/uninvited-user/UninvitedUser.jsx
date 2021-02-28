import React from 'react';
import { axiosWithAuth } from '../../../../../../../utilities/axiosWithAuth';
import { print } from 'graphql';
import { useDispatch, useSelector } from 'react-redux';
import { cardStyles, buttonStyles } from '../../../../../../../styles';
import Typography from '@material-ui/core/Typography';
import { makeInitials } from '../../../../../../../utilities/functions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import {
    inviteUserSuccess,
    filterUserListSuccess,
} from '../../../../../../../utilities/actions/index.js';

import { INVITE_USER } from '../../../../../../../graphql/events/event-mutations.js';

const UninvitedUser = ({ user }) => {
    const buttonClasses = buttonStyles();
    const classes = cardStyles();
    const dispatch = useDispatch();
    const event = useSelector((state) => state.newEvent);
    let users = useSelector((state) => state.userList);

    const inviteUser = (id) => {
        const invite = {
            event_id: Number(event.id),
            inviter_id: Number(event.user_id),
            user_id: Number(id),
            status: 'Approved',
        };

        axiosWithAuth()
            .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
                query: print(INVITE_USER),
                variables: { input: invite },
            })
            .then((res) => {
                dispatch(
                    inviteUserSuccess(res.data.data.inviteUserToEvent.users)
                );
                dispatch(
                    filterUserListSuccess(
                        users.filter((user) => user.id !== id)
                    )
                );
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                margin: '10px',
            }}
            key={user.id}
        >
            <div
                style={{ display: 'flex', alignItems: 'center', width: '80%' }}
            >
                <Avatar
                    aria-label="avatar"
                    className={classes.avatar}
                    src={user.photo === 'null' ? null : user.photo}
                >
                    {user.photo === 'null' && (
                        <Typography>{makeInitials(user)}</Typography>
                    )}
                </Avatar>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '5%',
                        width: '20%',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            textAlign: 'left',
                            fontSize: '1.4rem',
                            color: '#1A0F2C',
                            fontWeight: '500',
                            lineStyle: 'normal',
                        }}
                    >
                        <p>
                            {user.firstName}&nbsp;{user.lastName}
                        </p>
                    </div>
                    <p
                        style={{
                            color: '#000000',
                            opacity: '0.3',
                        }}
                    >
                        {user.email.length > 27
                            ? user.email.slice(0, 27) + '...'
                            : user.email}
                    </p>
                </div>
            </div>
            <div style={{ width: '50px' }}>{/* Not Invited */}</div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: '60px',
                }}
            >
                <IconButton
                    className={buttonClasses.icon}
                    onClick={() => inviteUser(user.id)}
                >
                    <Typography variant="h5">+</Typography>
                </IconButton>
            </div>
        </div>
    );
};

export default UninvitedUser;
