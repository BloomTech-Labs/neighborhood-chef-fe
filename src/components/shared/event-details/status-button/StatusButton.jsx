import React from 'react';
import { connect } from 'react-redux';
import { buttonStyles } from '../../../../styles';
import { changeStatusForSingleEvent } from '../../../../utilities/actions';

const StatusButton = ({
    status,
    color,
    currStatus,
    eventId,
    userId,
    changeStatusForSingleEvent,
}) => {
    const classes = buttonStyles();

    return (
        <button
            className={classes.rsvpRoot}
            style={{
                filter: status === currStatus ? 'none' : 'brightness(80%)',
                background: color,
            }}
            onClick={async (e) => {
                e.preventDefault();
                changeStatusForSingleEvent({
                    status,
                    eventId,
                    userId,
                });
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

export default connect(null, { changeStatusForSingleEvent })(StatusButton);
