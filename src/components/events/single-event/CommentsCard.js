import React, { useState, useEffect } from "react";

//style imports
import { cardStyles, buttonStyles } from "../../../styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Comment from "./Comment";

import {
  ALL_EVENT_COMMENTS,
  ADD_COMMENT,
} from "../../../graphql/comments/comment-queries";
import { print } from "graphql";
import { axiosWithAuth } from "../../../utilities/axiosWithAuth";

const CommentsCard = (props) => {
  const me = JSON.parse(sessionStorage.getItem("user"));
  const classes = cardStyles();
  const buttonClass = buttonStyles();
  const [newCommentWords, setNewCommentWords] = useState("");
  const [organizedComments, setOrganizedComments] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (me) {
      axiosWithAuth()
        .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
          query: print(ALL_EVENT_COMMENTS),
          variables: { id: props.eventId },
        })
        .then((res) => {
          const commentList = res.data.data.getEventComments;
          setComments(commentList);
        })
        .catch((err) => console.dir(err));
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setNewCommentWords(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentObject = {
      user_id: Number(me.id),
      event_id: Number(props.eventId),
      parent_id: -1,
      root_id: -1,
      dateCreated: new Date().toISOString(),
      comment: newCommentWords,
    };

    axiosWithAuth()({
      url: `${process.env.REACT_APP_BASE_URL}/graphql`,
      method: "post",
      data: {
        query: print(ADD_COMMENT),
        variables: { input: commentObject },
      },
    })
      .then((res) => {
        setComments([...comments, res.data.data.addComment]);
      })
      .catch((err) => {
        console.dir(err.message);
      });

    setNewCommentWords("");
  };

  useEffect(() => {
    if (comments) {
      const sorted = comments.sort((a, b) => {
        return a - b; //sorting not setup yet
      });
      setOrganizedComments(sorted);
    }
  }, [comments]);

  return (
    <div style={{ height: "100%" }}>
      <Card className={`${classes.root} ${classes.comments}`}>
        <Typography variant="h6" align="left">
          Comments
        </Typography>
        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              height: "35vh",
              maxHeight: "35vh",
            }}
          >
            {organizedComments &&
              organizedComments.map((comment) => (
                <Comment
                  key={comment.id}
                  setComments={setComments}
                  comments={comments}
                  {...comment}
                />
              ))}
          </div>
        </CardContent>
        <CardContent>
          <form
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              name="comment"
              required
              variant="outlined"
              placeholder="Write a comment..."
              style={{ width: "60%" }}
              onChange={handleChange}
              value={newCommentWords}
            />
            <Button
              type="submit"
              disabled={!newCommentWords}
              className={`${buttonClass.root} ${buttonClass.single}`}
            >
              <Typography>Add Comment</Typography>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentsCard;
