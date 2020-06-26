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
import ShowEmoji from "./ShowEmoji";

import { ADD_COMMENT } from "../../../graphql/comments/comment-queries";

const makeInitials = (user) => {
  return `${user.firstName.slice(0, 1).toUpperCase()}${user.lastName
    .slice(0, 1)
    .toUpperCase()}`;
};

const Comment = (props) => {
  const me = JSON.parse(sessionStorage.getItem("user"));
  const timeObject = parseTime(props.dateCreated);
  const classes = cardStyles();
  const user = props.user;
  const [emojiSelected, setEmojiSelected] = useState(""); //placeholder local state until we have database support for comments

  const toggleEmoji = (emoji) => {
    if (emojiSelected === emoji) setEmojiSelected("");
    else setEmojiSelected(emoji);
  };

  const addReply = (message) => {
    const replyObject = {
      user_id: Number(me.id),
      event_id: Number(props.event_id),
      parent_id: Number(props.id),
      root_id: props.root_id === -1 ? Number(props.id) : Number(props.root_id),
      dateCreated: new Date().toISOString(),
      comment: message,
    };
    axiosWithAuth()({
      url: `${process.env.REACT_APP_BASE_URL}/graphql`,
      method: "post",
      data: {
        query: print(ADD_COMMENT),
        variables: { input: replyObject },
      },
    })
      .then((res) => {
        props.setComments([...props.comments, res.data.data.addComment]);
      })
      .catch((err) => {
        console.dir(err.message);
      });
  };

  return (
    <div
      className={classes.singleCommentParent}
      // props.parent_id < 0
      //   ? classes.singleCommentParent
      //   : classes.singleCommentChild
      // }
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Avatar
          key={user.id}
          title={`${user.firstName} ${user.lastName}`}
          aria-label="avatar"
          className={classes.avatar}
          src={user.photo === "null" ? null : user.photo}
          style={{ marginRight: "5px", width: "26px", height: "26px" }}
        >
          {user.photo === "null" && (
            <Typography>{makeInitials(user)}</Typography>
          )}
        </Avatar>
        {user && (
          <Typography variant="body1">
            {`${user.firstName} ${user.lastName}`}
          </Typography>
        )}
      </div>
      <Typography variant="caption" style={{ marginLeft: "17px" }}>
        {props.comment}
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
            description={props.comment}
            addReply={addReply}
          />
          <ReactButton
            name={`${user.firstName} ${user.lastName}`}
            toggleEmoji={toggleEmoji}
            emojiSelected={emojiSelected}
          />
          <ShowEmoji emojiSelected={emojiSelected} />
        </div>
        <Typography variant="body2" color="textSecondary">
          {timeObject.commentTime}
        </Typography>
      </div>
    </div>
  );
};

export default Comment;
