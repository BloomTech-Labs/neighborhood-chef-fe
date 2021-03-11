import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { print } from 'graphql';
import { EVENT_BY_ID } from '../../graphql/events/event-queries';

import Grow from '@material-ui/core/Grow';

import EventDetails from '../shared/event-details/EventDetails';
import ParticipantCard from './participant-card/ParticipantsCard';
import ShareCard from './share-card/ShareCard';
import CommentsCard from './comments-card/CommentsCard';
import { fullEventStyles } from './FullEvent.styles';

const FullEvent = ({ match }) => {
    const eventId = parseInt(match.params.id);
    const [event, setEvent] = useState(null);
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
                    console.log(res.data.data);
                    setEvent(res.data.data.Events[0]);
                },
                (err) => console.dir(err)
            );
    }, [event]);

    return (
        <div className={styles.singleEventContainer}>
            <Grow in style={{ transformOrigin: '200 200 200' }}>
                <div className={styles.singleEventBox}>
                    {event ? (
                        <>
                            <EventDetails event={event} />
                            <div className={styles.singleEventRightColumn}>
                                <div className={styles.singleEventTopRow}>
                                    <ParticipantCard
                                        attending={event.EventUsers.attending}
                                    />
                                    <ShareCard />
                                </div>
                                <div className={styles.singleEventCommentCard}>
                                    <CommentsCard eventId={eventId} />
                                </div>
                            </div>
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </Grow>
        </div>
    );
};

export default FullEvent;
