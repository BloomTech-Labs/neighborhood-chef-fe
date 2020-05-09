import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import EventCard from './EventCard.js';

const values = {
  title: 'BBQ',
  address: '123 ABC St.',
  description: 'BBQ at my house!',
  date: new Date(),
  startTime: '6:00pm',
  endTime: '9:00pm',
  category_id: 1,
};

describe('Test EventCard component', () => {
  let EventCardComponent;
  beforeEach(() => {
    EventCardComponent = render(<EventCard values={values} />);
  });

  test('EventCard component renders', () => {
    expect(EventCardComponent).toBeDefined();
    expect(EventCardComponent.getByText(/6:00pm/i));
  });
});
