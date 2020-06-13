import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { USER_BY_ID } from "../../../graphql/users/user-queries";
import { print } from "graphql";
import { axiosWithAuth } from "../../../utilities/axiosWithAuth";
import { cardStyles } from "../../../styles";
import Avatar from "@material-ui/core/Avatar";
import { parseTime } from "../../../utilities/functions";

import ReplyButton from "./ReplyButton";
import ReactButton from "./ReactButton";

const makeInitials = (user) => {
  return `${user.firstName.slice(0, 1).toUpperCase()}${user.lastName
    .slice(0, 1)
    .toUpperCase()}`;
};

const Comment = (props) => {
  const me = JSON.parse(sessionStorage.getItem("user"));
  const timeObject = parseTime(props.date_created);
  const classes = cardStyles();
  const [user, setUser] = useState("");
  const [emojiSelected, setEmojiSelected] = useState(""); //placeholder local state until we have database support for comments

  const toggleEmoji = (emoji) => {
    if (emojiSelected === emoji) setEmojiSelected("");
    else setEmojiSelected(emoji);
  };

  const addReply = (message) => {
    props.setComments([
      ...props.comments,
      {
        id: props.idCounter,
        user_id: me.id,
        event_id: props.eventId,
        parent: props.id,
        root: props.root,
        date_created: new Date().getTime(),
        description: message,
      },
    ]);
    props.setIdCounter(props.idCounter + 1);
  };

  useEffect(() => {
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
        setUser(data);
        // setCreatorName(`${data.firstName} ${data.lastName}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div
      className={
        props.parent < 0
          ? classes.singleCommentParent
          : classes.singleCommentChild
      }
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Avatar
          aria-label="avatar"
          className={classes.avatar}
          src={user.photo}
          style={{ marginRight: "10px", width: "26px", height: "26px" }}
        >
          {!user.photo && user && makeInitials(user)}
        </Avatar>
        <Typography variant="body1">
          {user && `${user.firstName} ${user.lastName}`}
        </Typography>
      </div>
      <Typography variant="caption" style={{ marginLeft: "17px" }}>
        {props.description}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <ReplyButton
            name={`${user.firstName} ${user.lastName}`}
            description={props.description}
            addReply={addReply}
          />
          <ReactButton
            name={`${user.firstName} ${user.lastName}`}
            toggleEmoji={toggleEmoji}
            emojiSelected={emojiSelected}
          />
        </div>
        <Typography variant="body2" color="textSecondary">
          {timeObject.commentTime}
        </Typography>
      </div>
    </div>
  );
};

export default Comment;
