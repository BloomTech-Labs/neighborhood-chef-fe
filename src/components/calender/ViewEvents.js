import React from 'react';

//component imports
import CalendarView from './calender-view/CalendarView';
import EventDetails from '../shared/event-details/EventDetails';

const ViewEvents = () => {
    return (
        <div className="component-main">
            <div className="middle-calendar">
                <CalendarView />
            </div>
            <div className="right-side-calendar">
                <EventDetails />
            </div>
        </div>
    );
};

export default ViewEvents;
