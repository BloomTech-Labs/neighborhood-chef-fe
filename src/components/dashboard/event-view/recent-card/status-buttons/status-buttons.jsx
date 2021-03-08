import React, { useState } from 'react';

import StatusButton from '../../../../shared/event-details/status-button/StatusButton';

function StatusButtons({ status, id, currentUserId }) {
    const [currStatus, setCurrentStatus] = useState(status);

    return (
        <div>
            <StatusButton
                status={'GOING'}
                currStatus={currStatus}
                setStatus={setCurrentStatus}
                eventId={id}
                userId={currentUserId}
                color={'#82DF96'}
            />
            <StatusButton
                status={'MAYBE_GOING'}
                currStatus={currStatus}
                setStatus={setCurrentStatus}
                eventId={id}
                userId={currentUserId}
                color={'#C4C4C4'}
            />
            <StatusButton
                status={'NOT_GOING'}
                currStatus={currStatus}
                setStatus={setCurrentStatus}
                eventId={id}
                userId={currentUserId}
                color={'#EA6565'}
            />
        </div>
    );
}

export default StatusButtons;
