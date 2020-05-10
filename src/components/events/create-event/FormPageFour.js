import React from 'react';

import EventCard from './EventCard.js';
import SearchFriends from './SearchFriends.js';

const values = {
  title: 'BBQ',
  address: '123 ABC St.',
  description: 'BBQ at my house!',
  date: new Date(),
  startTime: '6:00pm',
  endTime: '9:00pm',
  endEnd: '9:00pm',
  category_id: 1,
};

const FormPageFour = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <EventCard values={values} />
      <SearchFriends />
    </div>
  );
};

export default FormPageFour;
