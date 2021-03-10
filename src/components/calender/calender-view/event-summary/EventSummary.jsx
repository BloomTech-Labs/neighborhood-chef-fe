import React from 'react';
import { Link } from 'react-router-dom';

//redux imports
import { useSelector } from 'react-redux';

//style imports
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { cardStyles } from '../../../../styles';

//icon imports
import { Icon } from '@iconify/react';
import calendarIcon from '@iconify/icons-flat-color-icons/calendar';
import clockIcon from '@iconify/icons-flat-color-icons/clock';
import globeIcon from '@iconify/icons-flat-color-icons/globe';

//data/function imports
import StatusButtons from '../../../dashboard/event-view/recent-card/status-buttons/status-buttons';
import {
    parseTime,
    chooseDefaultPicture,
} from '../../../../utilities/functions';

const EventSummary = ({ selectedEvent }) => {
    const userId = useSelector((state) => state.user.id);
    const classes = cardStyles();
    const event = useSelector((state) => state.currentEvent);

    const photo =
        selectedEvent.photo !== 'null'
            ? selectedEvent.photo
            : chooseDefaultPicture(event.category_id);

    let timeObject, parsedAddressURL;

    if (Object.keys(selectedEvent).length > 0) {
        timeObject = parseTime(selectedEvent.startTime, selectedEvent.endTime);
        parsedAddressURL = `https://www.google.com/maps/search/${selectedEvent.address.replace(
            ' ',
            '+'
        )}`;
    }

    return (
        <div className="event-details-container">
            {Object.keys(selectedEvent).length > 0 ? (
                <Card className={`${classes.root} ${classes.fullEvent}`}>
                    <CardHeader
                        title={
                            <Link to={`/events/${selectedEvent.id}`}>
                                <Typography variant="h3">
                                    {selectedEvent.title}
                                </Typography>
                            </Link>
                        }
                        subheader={
                            <Typography variant="caption">
                                <span style={{ opacity: '.6' }}>
                                    created by{' '}
                                </span>
                                {`${selectedEvent.User.firstName} ${selectedEvent.User.lastName}`}
                            </Typography>
                        }
                    />
                    <CardMedia
                        style={{ maxHeight: '40%' }}
                        component="img"
                        src={photo}
                        title="Event Details Photo"
                    />
                    <p style={{ opacity: '.5' }}>
                        {' '}
                        {selectedEvent.description}
                    </p>
                    <div>
                        Confirmed Attending:{' '}
                        {selectedEvent.EventUsers.attending.length}
                    </div>
                    <div>
                        <span
                            style={{
                                marginRight: '5px',
                                verticalAlign: 'middle',
                            }}
                        >
                            <Icon height="20" icon={calendarIcon} />
                        </span>
                        {timeObject.formattedDate}
                    </div>
                    <div>
                        <span
                            style={{
                                marginRight: '5px',
                                verticalAlign: 'middle',
                            }}
                        >
                            <Icon height="20" icon={clockIcon} />
                        </span>
                        {`${timeObject.startTime} ${
                            timeObject.endTime !== 'Invalid date'
                                ? '- ' + timeObject.endTime
                                : ''
                        }`}
                    </div>
                    <div>
                        <span
                            style={{
                                marginRight: '5px',
                                verticalAlign: 'middle',
                            }}
                        >
                            <Icon height="20" icon={globeIcon} />
                        </span>
                        <a
                            href={parsedAddressURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'rgb(79, 79, 248)' }}
                        >
                            {selectedEvent.address}
                        </a>
                    </div>
                    <div style={{ padding: '20px 0px 10px 0px' }}>
                        <Typography variant="h6">
                            Will you be attending this event?
                        </Typography>
                        <StatusButtons
                            status={selectedEvent.status}
                            id={selectedEvent.id}
                            currentUserId={userId}
                        />
                    </div>
                </Card>
            ) : (
                <Typography variant="h6" style={{ padding: '10px' }}>
                    Please select an event to view its details
                </Typography>
            )}
        </div>
    );
};

export default EventSummary;
