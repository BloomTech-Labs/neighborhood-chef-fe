import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//style imports
import { cardStyles } from '../../../../styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import { print } from 'graphql';

import {
    timeAgo,
    parseTime,
    chooseDefaultPicture,
} from '../../../../utilities/functions';

import StatusButton from '../../../shared/event-details/status-button/StatusButton';
import { rsvpButtons } from '../../../../data/buttons';
import { axiosWithAuth } from '../../../../utilities/axiosWithAuth';

import {
    ADD_FAVORITE_EVENT,
    REMOVE_FAVORITE_EVENT,
} from '../../../../graphql/users/user-mutations';

import {
    addFavoriteEventSuccess,
    removeFavoriteEventSuccess,
} from '../../../../utilities/actions';

import EventButtonModal from './event-button-modal/EventButtonModal';
import Emoji from '../../../shared/Emoji';

const RecentCard = (props) => {
    const classes = cardStyles();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(props.currentStatus);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const timeObject = parseTime(props.startTime, props.endTime);
    const shownTime = timeAgo(props.createDateTime);

    const addFavoriteEvent = () => {
        const addFavorite = {
            event_id: Number(props.id),
            user_id: Number(props.User.id),
        };

        axiosWithAuth()
            .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
                query: print(ADD_FAVORITE_EVENT),
                variables: { input: addFavorite },
            })
            .then((res) => {
                dispatch(
                    addFavoriteEventSuccess(res.data.data.addFavoriteEvent)
                );
            })
            .catch((err) => console.log(err));
    };

    const removeFavoriteEvent = () => {
        const removeFavorite = {
            event_id: Number(props.id),
            user_id: Number(props.User.id),
        };

        axiosWithAuth()
            .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
                query: print(REMOVE_FAVORITE_EVENT),
                variables: { input: removeFavorite },
            })
            .then((res) => {
                dispatch(
                    removeFavoriteEventSuccess(
                        res.data.data.removeFavoriteEvent
                    )
                );
            })
            .catch((err) => console.log(err));
    };

    return (
        <Card className={`${classes.root} ${classes.dashboard}`}>
            <CardHeader
                avatar={
                    <Avatar
                        key={props.User.id}
                        title={`${props.User.firstName} ${props.User.lastName}`}
                        aria-label="avatar"
                        className={classes.avatar}
                        src={props.User.photo ? props.User.photo : ''}
                    >
                        {!props.User.photo && (
                            <Typography>{`${props.User.firstName
                                .split('')[0]
                                .toUpperCase()}${props.User.lastName
                                .split('')[0]
                                .toUpperCase()}`}</Typography>
                        )}
                    </Avatar>
                }
                action={
                    <EventButtonModal
                        eventId={props.id}
                        userId={props.user_id}
                    />
                }
                title={
                    <Typography variant="h6">
                        {`${props.User.firstName} ${props.User.lastName}`}
                        <span style={{ opacity: '.6' }}> created an event</span>
                    </Typography>
                }
                subheader={
                    <Typography variant="caption">
                        <span style={{ opacity: '.6' }}>{shownTime}</span>
                    </Typography>
                }
            />

            <Link to={'/events/' + props.id}>
                {/* If you need to disable functionality of events showing custom uploaded images on 
        dashboard, change REACT_APP_ALLOW_USER_IMG variable within .env file to 0 (zero) */}
                <CardMedia
                    style={{ maxHeight: '40%' }}
                    component="img"
                    src={
                        props.User.photo
                            ? props.User.photo
                            : chooseDefaultPicture()
                    }
                    title="Recent Card Event Photo"
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '10px',
                        background: '#f8f8f8',
                        borderRadius: '8px',
                        marginTop: '-14%',
                        marginLeft: '5%',
                        alignSelf: 'left',
                        width: '46px',
                        alignItems: 'center',
                        position: 'relative',
                    }}
                >
                    <Typography variant="h5">{timeObject.day}</Typography>
                    <Typography variant="h5" color="secondary">
                        {timeObject.monthShort}
                    </Typography>
                </div>
                <Typography variant="body1" align="center">
                    {`@ ${timeObject.startTime}`}
                </Typography>
                <CardContent style={{ padding: '5px' }}>
                    <Typography variant="h4" align="center">
                        {props.title}
                    </Typography>
                    <Typography variant="body1" align="center">
                        <span
                            style={
                                currentStatus === 'Not Going'
                                    ? { color: 'rgba(232, 64, 64, .75)' }
                                    : currentStatus === 'Maybe'
                                    ? { color: 'rgba(255, 169, 40, .75)' }
                                    : currentStatus === 'Going'
                                    ? { color: 'rgba(33, 186, 66, .75)' }
                                    : { color: 'rgba(0,0,0, .3)' }
                            }
                        >
                            {currentStatus || 'undecided'}
                        </span>
                    </Typography>
                </CardContent>
            </Link>
            <CardActions disableSpacing>
                {!props.favoriteEvents ? (
                    <div
                        style={{ fontSize: '2.5rem', cursor: 'pointer' }}
                        onClick={() => addFavoriteEvent()}
                    >
                        <Emoji label="star" symbol="☆" />
                    </div>
                ) : (
                    <div
                        style={{ fontSize: '2.5rem', cursor: 'pointer' }}
                        onClick={() => removeFavoriteEvent()}
                    >
                        <Emoji label="star" symbol="⭐" />
                    </div>
                )}
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <div>
                        <ExpandMoreIcon />
                    </div>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h6">
                        Are you attending this event?
                    </Typography>
                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        {rsvpButtons.map((ele) => (
                            <StatusButton
                                {...ele}
                                key={ele.name}
                                eventStatus={currentStatus}
                                eventId={props.id}
                                userId={props.User.id}
                                setStatus={setCurrentStatus}
                            />
                        ))}
                    </div>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default RecentCard;
