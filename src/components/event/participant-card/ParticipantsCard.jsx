import React from 'react';

//style imports
import { cardStyles } from '../../../styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const ParticipantCard = ({ attending }) => {
    const classes = cardStyles();

    return (
        <>
            <Card className={`${classes.root} ${classes.participants}`}>
                <Typography variant="h6" align="left">
                    Attending:
                </Typography>
                {attending && attending.length > 0 ? (
                    <CardContent className={classes.cardContent}>
                        <AvatarGroup max={4}>
                            {attending.map((user) => {
                                return (
                                    <Avatar
                                        key={user.id}
                                        title={`${user.firstName} ${user.lastName}`}
                                        aria-label="avatar"
                                        className={classes.avatar}
                                        src={user.photo ? null : user.photo}
                                    >
                                        {!user.photo && (
                                            <Typography>
                                                {`${
                                                    user.firstName.split('')[0]
                                                }${user.lastName.split('')[0]}`}
                                            </Typography>
                                        )}
                                    </Avatar>
                                );
                            })}
                        </AvatarGroup>
                    </CardContent>
                ) : (
                    <Typography>
                        No one has indicated they are going to this event yet.
                        Share it with your neighbors!
                    </Typography>
                )}
            </Card>
        </>
    );
};

export default ParticipantCard;
