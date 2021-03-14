import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

//style imports
import { cardStyles } from '../../../../../../../styles';
import Card from '@material-ui/core/Card';
import {
    parseTime,
    chooseDefaultPicture,
} from '../../../../../../../utilities/functions';

const AccountEVentCard = ({ event }) => {
    const history = useHistory();
    const classes = cardStyles();
    const timeObject = parseTime(event.startTime);
    const photo =
        event.photo !== 'null'
            ? event.photo
            : chooseDefaultPicture(event.category_id);
    const attending = event.EventUsers.attending;

    return (
        <>
            <Card
                onClick={() => {
                    history.push(`/events/${event.id}`);
                    history.go();
                }}
                className={classes.accountEvent}
            >
                <CardMedia
                    style={{ maxHeight: 100 }}
                    component="img"
                    src={photo}
                    title="Event Photo"
                />
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    {event.title}
                </Typography>
                <Typography>{`${
                    attending.length || '0'
                } attending`}</Typography>
                <Typography>{timeObject.commentTime}</Typography>
            </Card>
        </>
    );
};

export default AccountEVentCard;
