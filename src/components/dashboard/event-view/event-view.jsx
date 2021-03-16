import React from 'react';
import RecentCard from './recent-card/recent-card';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

export default function EventView({ currentTab }) {
    const events = useSelector((state) => {
        let eventList = [];
        if (state.user.UserEvents) {
            if (currentTab === 1) {
                eventList = state.user.UserEvents.local;
            } else if (currentTab === 2) {
                eventList = state.user.UserEvents.invited;
            } else if (currentTab === 3) {
                eventList = state.user.UserEvents.owned;
            }

            eventList = eventList.map((event) => {
                if (
                    state.user.UserEvents.favorited.includes(Number(event.id))
                ) {
                    return { ...event, favorite: true };
                } else {
                    return { ...event, favorite: false };
                }
            });
        }
        return eventList;
    });

    const currentUserId = useSelector((state) => state.user.id);

    return (
        <div>
            <div
                style={{
                    overflow: 'auto',
                    height: '80vh',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        textAlign: 'left',
                    }}
                >
                    {events.length > 0 ? (
                        events.map((event) => (
                            <RecentCard
                                {...event}
                                key={event.id}
                                isFavorite={event.favorite}
                                currentUserId={currentUserId}
                            />
                        ))
                    ) : (
                        <Typography style={{ marginTop: '20px' }}>
                            No recently created events.
                        </Typography>
                    )}
                </div>
            </div>
        </div>
    );
}
