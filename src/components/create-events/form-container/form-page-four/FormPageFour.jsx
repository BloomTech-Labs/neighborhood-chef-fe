import React from 'react';
import EventCard from './event-card/EventCard';
import SearchFriends from './search-friends/SearchFriends';

const FormPageFour = ({ values }) => {
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
      <EventCard values={values} />
      <SearchFriends event_id={values.id} />
    </div>
  );
};

export default FormPageFour;
