import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CalendarView from './calender-view/CalendarView';
import EventSummary from './calender-view/event-summary/EventSummary';

import { calendarStyles } from './Calendar.styles';

const ViewEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState({});
  const styles = calendarStyles();

  const eventList = useSelector((state) => {
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
      return fullList;
    } else {
      return [];
    }
  });

  return (
    <div className={styles.componentMain}>
      <div className={styles.middleCalendar}>
        <CalendarView
          eventList={eventList}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
        />
      </div>
      <div className={styles.rightSideCalendar}>
        <EventSummary selectedEvent={selectedEvent} />
      </div>
    </div>
  );
};

export default ViewEvents;
