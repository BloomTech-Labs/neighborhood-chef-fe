import React from "react";
import axios from "axios";
import { print } from "graphql";
import { useDispatch, useSelector } from "react-redux";

import {
  inviteUserSuccess,
  filterUserListSuccess,
} from "../../../utilities/actions/index.js";

import { INVITE_USER } from "../../../graphql/events/event-mutations.js";

const UninvitedUser = ({ user }) => {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.newEvent);
  let users = useSelector((state) => state.userList);

  const inviteUser = (id) => {
    const invite = {
      event_id: Number(event.id),
      inviter_id: Number(event.user_id),
      user_id: Number(id),
      status: "Approved",
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(INVITE_USER),
        variables: { input: invite },
      })
      .then((res) => {
        dispatch(inviteUserSuccess(res.data.data.inviteUserToEvent.users));
        dispatch(filterUserListSuccess(users.filter((user) => user.id !== id)));
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        margin: "10px",
      }}
      key={user.id}
    >
      <div style={{ display: "flex", alignItems: "center", width: "80%" }}>
        {user.photo ? (
          <img
            style={{
              borderRadius: "50%",
              height: "60px",
              width: "60px",
              marginLeft: "5%",
              border: "4px solid #82DF96",
            }}
            src={user.photo}
            alt="user avatar"
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              background: "#82DF96",
              color: "white",
              height: "60px",
              width: "60px",
              marginLeft: "5%",
              border: "4px solid #82DF96",
            }}
          >
            {user.firstName.slice(0, 1)}
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "5%",
            width: "20%",
          }}
        >
          <div
            style={{
              display: "flex",
              textAlign: "left",
              fontSize: "1.4rem",
              color: "#1A0F2C",
              fontWeight: "500",
              lineStyle: "normal",
            }}
          >
            <p>{user.firstName}</p>&nbsp;
            <p>{user.lastName}</p>
          </div>
          <p
            style={{
              color: "#000000",
              opacity: "0.3",
            }}
          >
            {user.email.length > 35
              ? user.email.slice(0, 35) + "..."
              : user.email}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginLeft: "5%",
        }}
      >
        <button
          onClick={() => inviteUser(user.id)}
          style={{
            textAlign: "center",
            background: "#E8E8E8",
            width: "60px",
            height: "60px",
            color: "white",
            borderRadius: "50%",
            fontSize: "4rem",
            fontWeight: "bold",
            outline: "none",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default UninvitedUser;
