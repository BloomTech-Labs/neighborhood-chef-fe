import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

//style imports
import { cardStyles } from "../../../styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const ParticipantCard = (props) => {
  const classes = cardStyles();
  const [expanded, setExpanded] = useState(false);
  const currentEvent = useSelector((state) => state.currentEvent);

  const makeInitials = (user) => {
    return `${user.firstName.slice(0, 1).toUpperCase()}${user.lastName
      .slice(0, 1)
      .toUpperCase()}`;
  };

  return (
    <>
      {currentEvent.users ? (
        <Card className={`${classes.root} ${classes.participants}`}>
          <Typography variant="h6" align="left">
            Attending:
          </Typography>
          <CardContent style={{ display: "flex" }}>
            {currentEvent.users.map((user) => {
              return (
                <Avatar
                  title={`${user.firstName} ${user.lastName}`}
                  aria-label="recipe"
                  className={classes.avatar}
                >
                  {user.photo ? user.photo : makeInitials(user)}
                </Avatar>
              );
            })}
          </CardContent>
        </Card>
      ) : null}
    </>
  );
};

export default ParticipantCard;
