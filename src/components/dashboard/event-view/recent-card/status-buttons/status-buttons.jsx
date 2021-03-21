import React from 'react';
import { useSelector } from 'react-redux';

import StatusButton from '../../../../shared/buttons/status-buttons/StatusButton';

function StatusButtons({ id, currentUserId, attending, setAttending }) {
  const currStatus = useSelector((state) => {
    if (state.user.UserEvents) {
      let eventsList = state.user.UserEvents;
      let fullList = [];
      let addedEvents = new Set();

      Object.keys(eventsList).forEach((key) => {
        if (key !== 'favorited') {
          eventsList[key].forEach((event) => {
            if (!addedEvents.has(event.id)) {
              fullList.push(event);
              addedEvents.add(event.id);
            }
          });
        }
      });
      return fullList.filter((event) => event.id === id).map((event) => event.status)[0];
    } else {
      return 'UNDECIDED';
    }
  });

  return (
    <div>
      <StatusButton
        status={'GOING'}
        currStatus={currStatus}
        eventId={id}
        userId={currentUserId}
        color={'#82DF96'}
        attending={attending}
        setAttending={setAttending}
      />
      <StatusButton
        status={'MAYBE_GOING'}
        currStatus={currStatus}
        eventId={id}
        userId={currentUserId}
        color={'#FFBF1A'}
        attending={attending}
        setAttending={setAttending}
      />
      <StatusButton
        status={'NOT_GOING'}
        currStatus={currStatus}
        eventId={id}
        userId={currentUserId}
        color={'#EA6565'}
        attending={attending}
        setAttending={setAttending}
      />
    </div>
  );
}

export default StatusButtons;
