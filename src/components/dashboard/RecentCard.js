import React from "react";
import { cardStyles } from "../../styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
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

import StatusButton from "../events/StatusButton";

const rsvpButtons = [
  {
    name: "Going",
    color: "#58D573",
  },
  {
    name: "Maybe",
    color: "#FFA928",
  },
  {
    name: "Not Going",
    color: "#E84040",
  },
];

const RecentCard = (props) => {
  const classes = cardStyles();
  const [expanded, setExpanded] = React.useState(false);

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
    weekday: "short",
  });
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
      {/* <CardMedia
        className={classes.media}
        image={photo}
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${day} at ${time}`}
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
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Are you attending this event?</Typography>
          <div style={{ display: "flex" }}>
            {rsvpButtons.map((ele) => (
              <StatusButton key={ele.name} />
            ))}
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecentCard;
