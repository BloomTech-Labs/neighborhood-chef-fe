import React from "react";

import { useSelector } from "react-redux";

//style imports
import { cardStyles } from "../../../styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const ParticipantCard = (props) => {
  const classes = cardStyles();
  const currentEvent = useSelector((state) => state.currentEvent);

  const makeInitials = (user) => {
    return `${user.firstName.slice(0, 1).toUpperCase()}${user.lastName
      .slice(0, 1)
      .toUpperCase()}`;
  };

  return (
    <>
      <Card className={`${classes.root} ${classes.participants}`}>
        <Typography variant="h6" align="left">
          Attending:
        </Typography>
        {currentEvent.users ? (
          <CardContent style={{ display: "flex" }}>
            {currentEvent.users.map((user) => {
              return (
                <Avatar
                  title={`${user.firstName} ${user.lastName}`}
                  aria-label="avatar"
                  className={classes.avatar}
                  src={user.photo}
                >
                  {!user.photo && makeInitials(user)}
                </Avatar>
              );
            })}
          </CardContent>
        ) : null}
      </Card>
    </>
  );
};

export default ParticipantCard;
