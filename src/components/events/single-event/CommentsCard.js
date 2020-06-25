import React, { useState, useEffect } from "react";

//style imports
import { cardStyles, buttonStyles } from "../../../styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Comment from "./Comment";

import { ALL_EVENT_COMMENTS } from "../../../graphql/comments/comment-queries";
import { print } from "graphql";
import { axiosWithAuth } from "../../../utilities/axiosWithAuth";

const CommentsCard = (props) => {
  const me = JSON.parse(sessionStorage.getItem("user"));
  const classes = cardStyles();
  const buttonClass = buttonStyles();
  const [newComment, setNewComment] = useState("");
  const [organizedComments, setOrganizedComments] = useState([]);

  /* Placeholder local state until we have database support for comments */
  const [idCounter, setIdCounter] = useState(4);
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
        .catch((err) => console.log(err));
    }
  }, [me]);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([
      ...comments,
      {
        id: idCounter,
        user_id: me.id,
        event_id: props.eventId,
        parent: -1,
        root: idCounter,
        date_created: new Date().getTime(),
        description: newComment,
      },
    ]); //placeholder values for keys, will need to get from state or database
    setIdCounter(idCounter + 1);
    setNewComment("");

    // axiosWithAuth()({
    //   url: `${process.env.REACT_APP_BASE_URL}/graphql`,
    //   method: "post",
    //   data: {
    //     query: print(NEW_COMMENT),
    //     variables: { comment: e.target.value },
    //   },
    // })
    //   .then((res) => {
    //     //add comments to state
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  };

  useEffect(() => {
    if (comments) {
      const sorted = comments.sort((a, b) => {
        if (a.root === b.root) {
          if (a.parent === b.parent) {
            return a.date_created - b.date_created;
          } else return a.parent - b.parent;
        } else return a.root - b.root;
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
                  setIdCounter={setIdCounter}
                  idCounter={idCounter}
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
              value={newComment}
            />
            <Button
              type="submit"
              disabled={!newComment}
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
