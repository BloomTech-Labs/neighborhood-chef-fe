import React from 'react';
import { useSelector } from 'react-redux';
//react router imports

import { useHistory } from 'react-router-dom';

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
import pencilIcon from '@iconify/icons-mdi/pencil';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

//data/function imports

import { parseTime, chooseDefaultPicture } from '../../../utilities/functions';

//jsonwebtoken encoder

import jwt from 'jsonwebtoken';

const EventDetails = ({ event, attending, setAttending }) => {
  const classes = cardStyles();
  const currentUserId = useSelector((state) => state.user.id);
  const photo = event.photo ? event.photo : chooseDefaultPicture(event.title.charAt(0));

  const { push } = useHistory();

  let timeObject, parsedAddressURL;

  if (Object.keys(event).length > 0) {
    timeObject = parseTime(event.startTime, event.endTime);
    parsedAddressURL = `https://www.google.com/maps/search/${event.address.replace(' ', '+')}`;
  }

  const redirectToEventEdit = () => {
    const startTime = new Date(Number(event.startTime));
    const endTime = new Date(Number(event.endTime));

    const token = jwt.sign(
      {
        id: event.id,
        title: event.title,
        description: event.description,
        address: event.address,
        latitude: event.latitude,
        longitude: event.longitude,
        //prettier-ignore
        startTime: `${startTime.getHours() < 10 ? '0' : ''}${startTime.getHours()}:${startTime.getMinutes() < 10 ? '0' : ''}${startTime.getMinutes()}:00`,
        //prettier-ignore
        endTime: event.endTime ? `${endTime.getHours() < 10 ? '0' : ''}${endTime.getHours()}:${endTime.getMinutes() < 10 ? '0' : ''}${endTime.getMinutes()}:00` : '',
        category: event.category ? event.category : '',
        //prettier-ignore
        date: `${startTime.getFullYear()}-${startTime.getMonth() + 1 < 10 ? '0' : ''}${startTime.getMonth() + 1}-${startTime.getDate() < 10 ? '0' : ''}${startTime.getDate()}`,
        createDateTime: event.createDateTime,
        modifiers: event.modifiers ? event.modifiers : [],
        hashtags: event.hashtags ? event.hashtags : [],
        allergenWarnings: event.allergyWarnings ? event.allergyWarnings : [],
        dietaryWarnings: event.dietaryWarnings ? event.dietaryWarnings : [],
      },
      'secret'
    );

    push(`/create-event/${token}`);
  };

  return (
    <div className={classes.eventDetailsContainer}>
      {event ? (
        <Card className={`${classes.root} ${classes.fullEvent}`}>
          <div className={classes.headerContainer}>
            <CardHeader
              style={{ marginLeft: '-3%' }}
              title={
                <Typography variant="h3" className={classes.title}>
                  {event.title}
                </Typography>
              }
              subheader={
                <Typography variant="caption">
                  <span>created by </span>
                  {`${event.User.firstName} ${event.User.lastName}`}
                </Typography>
              }
            />
            {event.User.id === currentUserId && (
              <div style={{ display: 'flex' }}>
                <DeleteOutlinedIcon className={classes.icon} />
                <Icon icon={pencilIcon} className={classes.icon} onClick={redirectToEventEdit} />
              </div>
            )}
          </div>
          <CardMedia className={classes.img} component="img" src={photo} title="Event Details Photo" />
          <p> {event.description}</p>
          <div>Confirmed Attending: {attending.length}</div>
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
              timeObject.endTime !== 'Invalid date' ? '- ' + timeObject.endTime : ''
            }`}
          </div>
          <div className={classes.addressContainer}>
            <span>
              <Icon height="20" icon={globeIcon} />
            </span>
            <a href={parsedAddressURL} target="_blank" rel="noopener noreferrer">
              {event.address}
            </a>
          </div>
          <div>
            <Typography variant="h6">Will you be attending this event?</Typography>
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
        <Typography variant="h6">Please select an event to view its details</Typography>
      )}
    </div>
  );
};

export default EventDetails;
