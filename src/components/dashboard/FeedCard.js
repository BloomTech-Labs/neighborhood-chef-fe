import React from "react";
import { cardStyles } from "../../styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

import { timeAgo } from "../../utilities/functions";

const FeedCard = ({
  name,
  time_created,
  likes,
  comments_num,
  photo,
  message,
}) => {
  const classes = cardStyles();

  /*configuring time elapsed shown to change based on how much time has elapsed*/
  const shownTime = timeAgo(time_created);

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
          <Typography variant="h5">{`${name} commented in an event`}</Typography>
        }
        subheader={shownTime}
      />
      {photo && <CardMedia className={classes.media} image={photo} />}
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <span style={{ marginRight: "4px" }}>
            <FavoriteIcon />
          </span>
          <Typography variant="caption" color="textSecondary">
            {likes}
          </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <span style={{ marginRight: "4px" }}>
            <ChatBubbleIcon />
          </span>
          <Typography variant="caption" color="textSecondary">
            {comments_num}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default FeedCard;
