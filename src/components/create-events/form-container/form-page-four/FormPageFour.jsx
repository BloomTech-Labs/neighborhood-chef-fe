import React from 'react';
import EventCard from './event-card/EventCard';
import SearchFriends from './search-friends/SearchFriends';

const FormPageFour = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <EventCard />
            <SearchFriends />
        </div>
    );
};

export default FormPageFour;
