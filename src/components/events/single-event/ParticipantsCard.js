import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

//style imports
import { cardStyles } from "../../../styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <div>
                <ExpandLessIcon />
              </div>
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent className={classes.particExpand}>
              {currentEvent.users.map(
                (user) => `${user.firstName} ${user.lastName}`
              )}
            </CardContent>
          </Collapse>
        </Card>
      ) : null}
    </>
  );
};

export default ParticipantCard;
