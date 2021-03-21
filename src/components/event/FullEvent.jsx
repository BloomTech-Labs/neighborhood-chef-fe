import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { print } from 'graphql';
import { EVENT_BY_ID } from '../../graphql/events/event-queries';

import EventDetails from './event-details/EventDetails';
import ParticipantCard from './participant-card/ParticipantsCard';
import ShareCard from './share-card/ShareCard';
import CommentsCard from './comments-card/CommentsCard';
import { fullEventStyles } from './FullEvent.styles';

const FullEvent = ({ match }) => {
  const eventId = parseInt(match.params.id);
  const [event, setEvent] = useState(null);
  const [attending, setAttending] = useState([]);
  const styles = fullEventStyles();

  useEffect(() => {
    if (eventId)
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: 'post',
        data: {
          query: print(EVENT_BY_ID),
          variables: {
            queryParams: {
              id: eventId,
            },
          },
        },
      }).then(
        (res) => {
          setEvent(res.data.data.Events[0]);
          setAttending(res.data.data.Events[0].EventUsers.attending);
        },
        (err) => console.dir(err)
      );
  }, [eventId]);

  return (
    <div className={styles.singleEventContainer}>
      <div className={styles.singleEventBox}>
        {event ? (
          <>
            <EventDetails event={event} attending={attending} setAttending={setAttending} />
            <div className={styles.singleEventRightColumn}>
              <div className={styles.singleEventTopRow}>
                <ParticipantCard attending={attending} />
                <ShareCard />
              </div>
              <div className={styles.singleEventCommentCard}>
                <CommentsCard eventId={eventId} initialComments={event.Comments} />
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default FullEvent;
