import React from 'react';
import { useSelector } from 'react-redux';
//react router imports

//style imports
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { cardStyles } from '../../../styles';
import StatusTabs from '../../dashboard/event-view/recent-card/status-buttons/status-buttons';

//icon imports
import { Icon } from '@iconify/react';
import calendarIcon from '@iconify/icons-flat-color-icons/calendar';
import clockIcon from '@iconify/icons-flat-color-icons/clock';
import globeIcon from '@iconify/icons-flat-color-icons/globe';

//data/function imports

import { parseTime, chooseDefaultPicture } from '../../../utilities/functions';

const EventDetails = ({ event, attending, setAttending }) => {
    const classes = cardStyles();
    const currentUserId = useSelector((state) => state.user.id);
    const photo = event.photo ? event.photo : chooseDefaultPicture();

    let timeObject, parsedAddressURL;

    if (Object.keys(event).length > 0) {
        timeObject = parseTime(event.startTime, event.endTime);
        parsedAddressURL = `https://www.google.com/maps/search/${event.address.replace(
            ' ',
            '+'
        )}`;
    }

    return (
        <div className={classes.eventDetailsContainer}>
            {event ? (
                <Card className={`${classes.root} ${classes.fullEvent}`}>
                    <CardHeader
                        title={
                            <Typography variant="h3">{event.title}</Typography>
                        }
                        subheader={
                            <Typography variant="caption">
                                <span>created by </span>
                                {`${event.User.firstName} ${event.User.lastName}`}
                            </Typography>
                        }
                    />
                    <CardMedia
                        className={classes.img}
                        component="img"
                        src={photo}
                        title="Event Details Photo"
                    />
                    <p> {event.description}</p>
                    <div>
                        Confirmed Attending:{' '}
                        {attending
                            ? attending.length
                            : event.EventUsers.attending.length}
                    </div>
                    <div>
                        <span className={classes.span}>
                            <Icon height="20" icon={calendarIcon} />
                        </span>
                        {timeObject.formattedDate}
                    </div>
                    <div>
                        <span className={classes.span}>
                            <Icon height="20" icon={clockIcon} />
                        </span>
                        {`${timeObject.startTime} ${
                            timeObject.endTime !== 'Invalid date'
                                ? '- ' + timeObject.endTime
                                : ''
                        }`}
                    </div>
                    <div className={classes.addressContainer}>
                        <span>
                            <Icon height="20" icon={globeIcon} />
                        </span>
                        <a
                            href={parsedAddressURL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {event.address}
                        </a>
                    </div>
                    <div>
                        <Typography variant="h6">
                            Will you be attending this event?
                        </Typography>
                        <div className={classes.statusButtonContainer}>
                            <StatusTabs
                                id={event.id}
                                currentUserId={currentUserId}
                                attending={attending}
                                setAttending={setAttending}
                            />
                        </div>
                    </div>
                </Card>
            ) : (
                <Typography variant="h6">
                    Please select an event to view its details
                </Typography>
            )}
        </div>
    );
};

export default EventDetails;
