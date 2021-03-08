import React from 'react';
import { axiosWithAuth } from '../../../../utilities/axiosWithAuth';
import { buttonStyles } from '../../../../styles';

import { print } from 'graphql';
import { UPDATE_EVENT_STATUS } from '../../../../graphql/events/event-mutations';

const StatusButton = ({
    status,
    color,
    currStatus,
    eventId,
    userId,
    setStatus,
}) => {
    const classes = buttonStyles();

    const updateStatus = () => {
        axiosWithAuth()
            .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
                query: print(UPDATE_EVENT_STATUS),
                variables: {
                    eventStatus: {
                        event_id: parseInt(eventId),
                        user_id: parseInt(userId),
                        status: status,
                    },
                },
            })
            .then(() => {
                setStatus(status);
            })
            .catch((err) => {
                console.dir(err);
            });
    };
    return (
        <button
            className={classes.rsvpRoot}
            style={{
                filter: status === currStatus ? 'none' : 'brightness(80%)',
                background: color,
            }}
            onClick={(e) => {
                e.preventDefault();
                updateStatus();
            }}
        >
            {status === 'GOING'
                ? 'Yes'
                : status === 'NOT_GOING'
                ? 'No'
                : 'Maybe'}
        </button>
    );
};

export default StatusButton;
