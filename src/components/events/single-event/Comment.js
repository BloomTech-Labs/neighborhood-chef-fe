import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { USER_BY_ID } from "../../../graphql/users/user-queries";
import { print } from "graphql";
import { axiosWithAuth } from "../../../utilities/axiosWithAuth";
import { cardStyles } from "../../../styles";
import Avatar from "@material-ui/core/Avatar";

const makeInitials = (user) => {
  return `${user.firstName.slice(0, 1).toUpperCase()}${user.lastName
    .slice(0, 1)
    .toUpperCase()}`;
};

const Comment = (props) => {
  const classes = cardStyles();
  const [user, setUser] = useState("");
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
    <div style={{ marginBottom: "10px" }}>
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
          style={{ marginRight: "10px", width: "30px", height: "30px" }}
        >
          {!user.photo && user && makeInitials(user)}
        </Avatar>
        <Typography>{user && `${user.firstName} ${user.lastName}`}</Typography>
      </div>
      <Typography> {props.description}</Typography>
      <div style={{ display: "flex" }}>
        <Button>Reply</Button>
        <Button>React</Button>
      </div>
    </div>
  );
};

export default Comment;
