import React from "react";

import { useSelector } from "react-redux";

//style imports
import { cardStyles } from "../../../styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import { makeInitials } from "../../../utilities/functions";

const ParticipantCard = (props) => {
  const classes = cardStyles();
  const currentEvent = useSelector((state) => state.currentEvent);
  const attending = currentEvent.users
    ? currentEvent.users.filter((user) => user.status === "Going")
    : null;

  return (
    <>
      <Card className={`${classes.root} ${classes.participants}`}>
        <Typography variant="h6" align="left">
          Attending:
        </Typography>
        {attending && attending.length > 0 ? (
          <CardContent style={{ display: "flex" }}>
            <AvatarGroup max={4}>
              {attending.map((user) => {
                // console.log(user.photo);
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
            </AvatarGroup>
          </CardContent>
        ) : (
          <Typography style={{ paddingBottom: "10px" }}>
            No one has indicated they are going to this event yet. Share it with
            your neighbors!
          </Typography>
        )}
      </Card>
    </>
  );
};

export default ParticipantCard;
