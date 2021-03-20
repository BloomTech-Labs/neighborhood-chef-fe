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
import { parseTime, chooseDefaultPicture } from '../../../../utilities/functions';

const EventSummary = ({ selectedEvent }) => {
  const userId = useSelector((state) => state.user.id);
  const classes = cardStyles();
  let timeObject, parsedAddressURL, photo;

  if (Object.keys(selectedEvent).length > 0) {
    timeObject = parseTime(selectedEvent.startTime, selectedEvent.endTime);
    parsedAddressURL = `https://www.google.com/maps/search/${selectedEvent.address.replace(' ', '+')}`;
    photo = selectedEvent.photo ? selectedEvent.photo : chooseDefaultPicture(selectedEvent.title.charAt(0));
  }

  return (
    <div className={classes.eventDetailsContainer}>
      {Object.keys(selectedEvent).length > 0 ? (
        <Card className={`${classes.root} ${classes.fullEvent}`}>
          <CardHeader
            style={{ marginLeft: '-4%' }}
            title={
              <Link to={`/events/${selectedEvent.id}`}>
                <Typography variant="h3">
                  {selectedEvent.title.length <= 15
                    ? selectedEvent.title
                    : `${selectedEvent.title.slice(0, 15)}...`}
                </Typography>
              </Link>
            }
            subheader={
              <Typography variant="caption">
                <span>created by</span>
                {`${selectedEvent.User.firstName} ${selectedEvent.User.lastName}`}
              </Typography>
            }
          />
          <CardMedia className={classes.img} component="img" src={photo} title="Event Details Photo" />
          <div>Confirmed Attending: {selectedEvent.EventUsers.attending.length}</div>
          <div className={classes.iconContainer}>
            <span>
              <Icon height="20" icon={calendarIcon} />
            </span>
            {timeObject.formattedDate}
          </div>
          <div className={classes.iconContainer}>
            <span>
              <Icon height="20" icon={clockIcon} />
            </span>
            {`${timeObject.startTime} ${
              timeObject.endTime !== 'Invalid date' ? '- ' + timeObject.endTime : ''
            }`}
          </div>
          <div className={classes.iconContainer}>
            <span>
              <Icon height="20" icon={globeIcon} />
            </span>
            <a href={parsedAddressURL} target="_blank" rel="noopener noreferrer">
              {selectedEvent.address}
            </a>
          </div>
          <div>
            <Typography variant="h6">Will you be attending this event?</Typography>
            <div className={classes.statusButtonContainer}>
              <StatusButtons id={selectedEvent.id} currentUserId={userId} />
            </div>
          </div>
        </Card>
      ) : (
        <Typography variant="h6">Please select an event to view its details</Typography>
      )}
    </div>
  );
};

export default EventSummary;
