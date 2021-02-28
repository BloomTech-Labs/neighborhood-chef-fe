import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { print } from 'graphql';
import { EVENT_BY_ID } from '../../graphql/events/event-queries';
import { getSingleEvent } from '../../utilities/actions';
import { makeActive } from '../../utilities/actions';

import Grow from '@material-ui/core/Grow';

import EventDetails from '../shared/event-details/EventDetails';
import ParticipantCard from './participant-card/ParticipantsCard';
import ShareCard from './share-card/ShareCard';
import CommentsCard from './comments-card/CommentsCard';

const FullEvent = ({ match }) => {
    const eventId = parseInt(match.params.id);
    const dispatch = useDispatch();
    const currentEvent = useSelector((state) => state.currentEvent);
    useEffect(() => {
        if (eventId)
            axiosWithAuth()({
                url: `${process.env.REACT_APP_BASE_URL}/graphql`,
                method: 'post',
                data: {
                    query: print(EVENT_BY_ID),
                    variables: { id: eventId },
                },
            }).then((res) => {
                dispatch(getSingleEvent(res.data.data.getEventById));
                dispatch(makeActive(eventId));
            });
    }, [dispatch, eventId]);

    useEffect(() => {
        return () => dispatch(makeActive(null));
        // eslint-disable-next-line
    }, []);

    return (
        <div className="single-event-container">
            <Grow in style={{ transformOrigin: '200 200 200' }}>
                <div className="single-event-box">
                    {currentEvent ? (
                        <>
                            <EventDetails />
                            <div className="single-event-right-column">
                                <div className="single-event-top-row">
                                    <ParticipantCard />
                                    <ShareCard />
                                </div>
                                <div className="single-event-comment-card">
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
