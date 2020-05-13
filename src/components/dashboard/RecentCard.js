import React, { useState } from "react";

import { useSelector } from "react-redux";

//style imports
import { cardStyles } from "../../styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

import { timeAgo } from "../../utilities/functions";

import StatusButton from "../events/view-events/StatusButton";
import modernRoom from "../../assets/modernRoom.png";

import { rsvpButtons } from "../../data/buttons";

const RecentCard = (props) => {
  const me = useSelector((state) => state.myUser);
  const classes = cardStyles();
  const [expanded, setExpanded] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const shownTime = timeAgo(props.date_created);
  const time = props.date
    .toLocaleTimeString("en-US", {
      hours: "numeric",
      minutes: "2-digit",
    })
    .replace(/:\d+ /, " ");
  const day = props.date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });
  const dayNum = day.split(" ")[1];
  const month = day.split(" ")[0];
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="h5">{`${props.name} created an event`}</Typography>
        }
        subheader={shownTime}
      />
      <CardMedia
        className={classes.media}
        image={modernRoom}
        title="New Event"
      />
      <div className="date-box">
        <Typography variant="h4">{dayNum}</Typography>
        <Typography variant="h4" color="secondary">
          {month}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="h3" align="center">
          {props.title}
        </Typography>
        <Typography variant="h6" align="center">
          {`@ ${time}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <span style={{ marginRight: "4px" }}>
            <FavoriteIcon />
          </span>
          <Typography variant="caption" color="textSecondary"></Typography>
        </IconButton>
        <IconButton aria-label="share">
          <span style={{ marginRight: "4px" }}>
            <ChatBubbleIcon />
          </span>
          <Typography variant="caption" color="textSecondary"></Typography>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography variant="caption" color="textSecondary">
            RSVP
          </Typography>
          <div>
            <ExpandMoreIcon />
          </div>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Are you attending this event?</Typography>
          <div style={{ display: "flex" }}>
            {rsvpButtons.map((ele) => (
              <StatusButton
                {...ele}
                key={ele.name}
                eventStatus={currentStatus}
                eventId={props.id}
                userId={me.id}
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
