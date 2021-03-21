import React from 'react';
import { useSelector } from 'react-redux';
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
    attending,
    setAttending,
}) => {
    const classes = buttonStyles();
    const user = useSelector((state) => state.user);

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
                // the code below is for updating the participants on the single-event-page
                if (attending && setAttending) {
                    const updatedAttendingList = attending.filter(
                        (user) => user.id !== userId
                    );

                    if (status === 'GOING') {
                        updatedAttendingList.push(user);
                    }
                    setAttending(updatedAttendingList);
                }
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
