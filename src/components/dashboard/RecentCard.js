import React, { useState, useEffect } from "react";

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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
// import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
// import { Icon } from "@iconify/react";
// import smHeart from "@iconify/icons-heroicons/sm-heart";

import { timeAgo, parseTime, isEventFavorite, chooseDefaultPicture } from "../../utilities/functions";

import StatusButton from "../events/view-events/StatusButton";

import { rsvpButtons } from "../../data/buttons";

import { axiosWithAuth } from "../../utilities/axiosWithAuth";

import { USER_BY_ID } from "../../graphql/users/user-queries";
import { print } from "graphql";

import {
  ADD_FAVORITE_EVENT,
  REMOVE_FAVORITE_EVENT,
} from "../../graphql/users/user-mutations";

import {
  addFavoriteEventSuccess,
  removeFavoriteEventSuccess,
} from "../../utilities/actions";

import EventButtonModal from "./EventButtonModal";
import Emoji from "../other/Emoji";

const RecentCard = (props) => {
  // console.log(`RecentCard -> props`, props);
  const me = JSON.parse(sessionStorage.getItem("user"));
  const classes = cardStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(props.currentStatus);
  const [creatorName, setCreatorName] = useState("");
  const [initials, setInitials] = useState("");
  const favoriteEvents = useSelector((state) => state.favoriteEvents);
  const isFavorite = isEventFavorite(favoriteEvents, props.id);
  // const [liked, setLiked] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const timeObject = parseTime(props.startTime, props.endTime);
  const shownTime = timeAgo(props.createDateTime);

  // const toggleLike = () => {
  //   setLiked(!liked);
  // };
  const addFavoriteEvent = () => {
    const addFavorite = {
      event_id: Number(props.id),
      user_id: Number(me.id),
    };

    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(ADD_FAVORITE_EVENT),
        variables: { input: addFavorite },
      })
      .then((res) => {
        dispatch(addFavoriteEventSuccess(res.data.data.addFavoriteEvent));
      })
      .catch((err) => console.log(err));
  };

  const removeFavoriteEvent = () => {
    const removeFavorite = {
      event_id: Number(props.id),
      user_id: Number(me.id),
    };

    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(REMOVE_FAVORITE_EVENT),
        variables: { input: removeFavorite },
      })
      .then((res) => {
        dispatch(removeFavoriteEventSuccess(res.data.data.removeFavoriteEvent));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    //get creator name when event loads.  This is a rough and inefficient way to do this, especially if there ends up being protected queries
    props.user_id &&
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: "post",
        data: {
          query: print(USER_BY_ID),
          variables: { id: props.user_id },
        },
      })
        .then((res) => {
          const data = res.data.data.getUserById;
          setCreatorName(`${data.firstName} ${data.lastName}`);
          setInitials(
            `${data.firstName.slice(0, 1).toUpperCase()}${data.lastName
              .slice(0, 1)
              .toUpperCase()}`
          );
        })
        .catch((err) => {
          console.log(err.message);
        });
    // eslint-disable-next-line
  }, []);
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {initials}
          </Avatar>
        }
        action={<EventButtonModal eventId={props.id} userId={me.id} />}
        title={
          <Typography variant="h6">
            {creatorName}
            <span style={{ opacity: ".6" }}> created an event</span>
          </Typography>
        }
        subheader={
          <Typography variant="caption">
            <span style={{ opacity: ".6" }}>{shownTime}</span>
          </Typography>
        }
      />

      {/* If you need to disable functionality of events showing custom uploaded images on 
      dashboard, change REACT_APP_ALLOW_USER_IMG variable within .env file to 0 (zero) */}

      {props.photo !== "null" &&
      process.env.REACT_APP_ALLOW_USER_IMG === "1" ? (
        <CardMedia
          style={{ height: 130 }}
          component="img"
          src={props.photo}
          title="Recent Card Event Photo"
        />
      ) : (
        <CardMedia
          className={classes.media}
          image={chooseDefaultPicture(props.category_id)}
          title="Recent Card Event Photo"
        />
      )}
      <div className="date-box">
        <Typography variant="h5">{timeObject.day}</Typography>
        <Typography variant="h5" color="secondary">
          {timeObject.monthShort}
        </Typography>
      </div>
      <Typography variant="body1" align="center">
        {`@ ${timeObject.startTime}`}
      </Typography>
      <CardContent>
        <Typography variant="h4" align="center" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body1" align="center">
          <span
            style={
              currentStatus === "Not Going"
                ? { color: "rgba(232, 64, 64, .75)" }
                : currentStatus === "Maybe"
                ? { color: "rgba(255, 169, 40, .75)" }
                : currentStatus === "Going"
                ? { color: "rgba(33, 186, 66, .75)" }
                : { color: "rgba(0,0,0, .3)" }
            }
          >
            {currentStatus || "undecided"}
          </span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites" onClick={() => toggleLike()}>
          <span>
            {liked ? (
              <Icon icon={smHeart} color="red" />
            ) : (
              <Icon icon={smHeart} />
            )}
          </span>
          <Typography variant="caption" color="textSecondary"></Typography>
        </IconButton>

        <IconButton aria-label="share">
          <span>
            <ChatBubbleIcon />
          </span>
          <Typography variant="caption" color="textSecondary"></Typography>
        </IconButton> */}
        {/* <Typography variant="caption" color="textSecondary">
          RSVP
        </Typography> */}
        {!isFavorite ? (
          <div
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
            onClick={() => addFavoriteEvent()}
          >
            <Emoji label="star" symbol="☆" />
          </div>
        ) : (
          <div
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
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
          <Typography variant="h6">Are you attending this event?</Typography>
          <div style={{ display: "flex", marginTop: "10px" }}>
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
