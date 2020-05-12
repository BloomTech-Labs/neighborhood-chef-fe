import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { print } from "graphql";

import { inviteUserSuccess } from "../../../utilities/actions/index.js";
import { INVITE_USER } from "../../../graphql/events/event-mutations.js";

const UserList = ({ event, filteredList }) => {
  const dispatch = useDispatch();

  const inviteUser = (id) => {
    const invite = {
      event_id: Number(event.id),
      inviter_id: Number(event.user_id),
      user_id: Number(id),
      status: "Approved",
    };

    axios
      .post("http://localhost:5000/graphql", {
        query: print(INVITE_USER),
        variables: { input: invite },
      })
      .then((res) => {
        dispatch(inviteUserSuccess(res.data.data.inviteUserToEvent));
        console.log(res.data.data.inviteUserToEvent);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {filteredList.map((user) => {
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
            <div
              style={{ display: "flex", alignItems: "center", width: "80%" }}
            >
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
                  {user.lastName.slice(0, 1)}
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "5%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    textAlign: "left",
                    fontSize: "1.4rem",
                    fontWeight: "500",
                    lineStyle: "normal",
                  }}
                >
                  <p>{user.firstName}</p>&nbsp;
                  <p>{user.lastName}</p>
                </div>
                <p style={{ color: "#000000", opacity: "0.3" }}>
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
                marginLeft: "5%",
              }}
            >
              {!user.active ? (
                <button
                  onClick={() => inviteUser(user.id)}
                  style={{
                    textAlign: "center",
                    background: "#E8E8E8",
                    width: "60px",
                    height: "60px",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "2rem",
                    outline: "none",
                  }}
                >
                  +
                </button>
              ) : (
                <button
                  style={{
                    textAlign: "center",
                    background: "green",
                    width: "60px",
                    height: "60px",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "2rem",
                    outline: "none",
                  }}
                >
                  +
                </button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserList;
