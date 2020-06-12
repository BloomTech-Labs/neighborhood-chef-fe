import React, { useState } from "react";

//style imports
import { cardStyles, buttonStyles } from "../../../styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Comment from "./Comment";

const CommentsCard = (props) => {
  const classes = cardStyles();
  const buttonClass = buttonStyles();
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      user_id: 2,
      event_id: 2,
      parent: -1,
      root: -1,
      date_created: 1593217800000,
      description: "I'm so excited for this, you have no idea!",
    },
    {
      id: 2,
      user_id: 1,
      event_id: 2,
      parent: 1,
      root: 1,
      date_created: 1594217800000,
      description:
        "me too! I'm going to bring my kids, too. I'll see you there.",
    },
    {
      id: 3,
      user_id: 2,
      event_id: 2,
      parent: 2,
      root: 1,
      date_created: 1594317800000,
      description: "Sweet!! :)",
    },
  ]);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([
      ...comments,
      {
        id: 1,
        user_id: 2,
        event_id: 2,
        parent: -1,
        date_created: 1593217800000,
        description: newComment,
      },
    ]); //placeholder values for keys, will need to get from state or database

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

  return (
    <div>
      <Card className={`${classes.root} ${classes.comments}`}>
        <Typography variant="h6" align="left">
          Comments
        </Typography>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            height: "35.5vh",
            maxHeight: "35.5vh",
          }}
        >
          {comments &&
            comments.map((comment) => (
              <Comment
                key={comment.id}
                setComments={setComments}
                {...comment}
              />
            ))}
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
              id="outlined-basic"
              variant="outlined"
              placeholder="Write a comment..."
              style={{ width: "60%" }}
              onChange={handleChange}
              value={newComment}
            />
            <Button
              type="submit"
              className={`${buttonClass.root} ${buttonClass.single}`}
            >
              Add Comment
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentsCard;
