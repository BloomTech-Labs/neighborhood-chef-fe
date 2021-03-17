import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

//component imports
import CalendarRow from './calender-row/CalendarRow';

//icon imports
import CircularProgress from '@material-ui/core/CircularProgress';

//style import
import { buttonStyles } from '../../../styles';

import { parseTime } from '../../../utilities/functions';

import { calendarStyles } from '../Calendar.styles';

const CalendarView = ({ eventList, setSelectedEvent, selectedEvent }) => {
    const selectedMonth = useSelector((state) => state.selectedMonth);
    const classes = buttonStyles();
    const styles = calendarStyles();
    const [isLoading, setIsLoading] = useState(false);
    const eventsInMonth =
        eventList &&
        eventList.filter((ev) => {
            const parsedTime = parseTime(ev.startTime, ev.endTime);
            const eventMonth = parsedTime.monthYear;
            return eventMonth === moment(selectedMonth).format('MMM YYYY');
        });

    return (
        <div
            style={{
                overflowY: 'auto',
                overflowX: 'hidden',
                width: '100%',
                height: '80vh',
            }}
        >
            <div className={styles.calendarViewMain}>
                {!isLoading ? (
                    !!eventsInMonth && eventsInMonth.length > 0 ? (
                        eventsInMonth.map((event, eventNum) => (
                            <CalendarRow
                                event={event}
                                key={event.id}
                                eventNum={eventNum}
                                selectedEvent={selectedEvent}
                                setSelectedEvent={setSelectedEvent}
                            />
                        ))
                    ) : (
                        <div
                            style={{
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: '20vh',
                                marginTop: '10%',
                            }}
                        >
                            <h3>No events for selected month</h3>
                            <p>But it doesn't have to stay that way.</p>
                            <Link to="/create-event">
                                <div
                                    className={`${classes.single} ${classes.root}`}
                                >
                                    Create New Event
                                </div>
                            </Link>
                        </div>
                    )
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <CircularProgress style={{ color: '#58D573' }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalendarView;
