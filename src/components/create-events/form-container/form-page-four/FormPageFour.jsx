import React from 'react';
import EventCard from './event-card/EventCard';
import SearchFriends from './search-friends/SearchFriends';

const FormPageFour = () => {
    return (
        <div className="formPageFourContainer">
            <EventCard />
            <SearchFriends />
        </div>
    );
};

export default FormPageFour;
