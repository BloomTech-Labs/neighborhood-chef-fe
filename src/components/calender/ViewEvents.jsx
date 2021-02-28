import React from 'react';

//component imports
import CalendarView from './calender-view/CalendarView';
import EventDetails from '../shared/event-details/EventDetails';

import { calendarStyles } from './Calendar.styles';

const ViewEvents = () => {
    const styles = calendarStyles();

    return (
        <div className={styles.componentMain}>
            <div className={styles.middleCalendar}>
                <CalendarView />
            </div>
            <div className={styles.rightSideCalendar}>
                <EventDetails />
            </div>
        </div>
    );
};

export default ViewEvents;
