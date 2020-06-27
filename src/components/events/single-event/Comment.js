import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import {
  GET_COMMENT_REACTIONS,
  HANDLE_REACTION,
} from "../../../graphql/comments/comment-queries";
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
  const [reactions, setReactions] = useState([]);

  useEffect(() => {
    if (me) {
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: "post",
        data: {
          query: print(GET_COMMENT_REACTIONS),
          variables: { id: Number(props.id) },
        },
      })
        .then((res) => {
          setReactions(res.data.data.getCommentReactions);
        })
        .catch((err) => {
          console.dir(err.message);
        });
    }

    //eslint-disable-next-line
  }, []);

  const toggleEmoji = (emoji) => {
    axiosWithAuth()({
      url: `${process.env.REACT_APP_BASE_URL}/graphql`,
      method: "post",
      data: {
        query: print(HANDLE_REACTION),
        variables: {
          input: {
            comment_id: Number(props.id),
            user_id: Number(me.id),
            reaction: emoji,
          },
        },
      },
    })
      .then((res) => {
        setReactions(res.data.data.handleReaction);
      })
      .catch((err) => {
        console.dir(err.message);
      });
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
          />
          {reactions.map((item, index) => {
            return <ShowEmoji key={index} item={item} />;
          })}
        </div>
        <Typography variant="body2" color="textSecondary">
          {timeObject.commentTime}
        </Typography>
      </div>
    </div>
  );
};

export default Comment;
