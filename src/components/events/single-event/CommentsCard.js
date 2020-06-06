import React, { useState } from "react";

//style imports
import { cardStyles, buttonStyles } from "../../../styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const ParticipantCard = (props) => {
  const classes = cardStyles();
  const buttonClass = buttonStyles();
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    "Test comment one",
    "Test comment 2",
    "Test comment tres",
    "Test comment asdasdasd",
  ]);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <>
      <Card className={`${classes.root} ${classes.comments}`}>
        <Typography variant="h6" align="left">
          Comments
        </Typography>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {comments &&
            comments.map((comment) => {
              return <p>{comment}</p>;
            })}
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
              style={{ width: "50%" }}
              onChange={handleChange}
              value={newComment}
            />
            <button
              type="submit"
              className={`${buttonClass.root} ${buttonClass.single}`}
              style={{ width: "30%" }}
            >
              Add Comment
            </button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ParticipantCard;
