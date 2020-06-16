import React from "react";

import { useSelector } from "react-redux";

//style imports
import { cardStyles } from "../../../styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import { makeInitials } from "../../../utilities/functions";

const ParticipantCard = (props) => {
  const classes = cardStyles();
  const currentEvent = useSelector((state) => state.currentEvent);

  return (
    <>
      <Card className={`${classes.root} ${classes.participants}`}>
        <Typography variant="h6" align="left">
          Attending:
        </Typography>
        {currentEvent.users ? (
          <CardContent style={{ display: "flex" }}>
            {currentEvent.users.map((user) => {
              console.log(user.photo);
              return (
                <Avatar
                  key={user.id}
                  title={`${user.firstName} ${user.lastName}`}
                  aria-label="avatar"
                  className={classes.avatar}
                  src={user.photo === "null" ? null : user.photo}
                >
                  {user.photo === "null" && (
                    <Typography>{makeInitials(user)}</Typography>
                  )}
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
