import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { print } from "graphql";

import {
  inviteUserSuccess,
  deleteInvitationSuccess,
  filterUsers,
} from "../../../utilities/actions/index.js";
import {
  INVITE_USER,
  REMOVE_INVITATION,
} from "../../../graphql/events/event-mutations.js";

const UserList = ({ event, users, filteredList }) => {
  const invitedList = useSelector((state) => state.invite);
  const [invited, setInvited] = useState([]);
  const dispatch = useDispatch();

  const inviteUser = (id) => {
    // const invite = {
    //   event_id: Number(event.id),
    //   inviter_id: Number(event.user_id),
    //   user_id: Number(id),
    //   status: "Approved",
    // };

    const invite = {
      event_id: 133,
      inviter_id: 1,
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
        dispatch(filterUsers(users.filter((user) => user.id !== id)));
      })
      .catch((err) => console.log(err));
  };

  const deleteInvitation = (user) => {
    const removeInvite = {
      event_id: 133,
      user_id: Number(user.id),
    };

    axios
      .post("http://localhost:5000/graphql", {
        query: print(REMOVE_INVITATION),
        variables: { input: removeInvite },
      })
      .then((res) => {
        dispatch(deleteInvitationSuccess(res.data.data.removeInvitation));
        dispatch(filterUsers((users = [...users, user])));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (invitedList.users) {
      setInvited(invitedList.users);
    }
  }, [invitedList]);

  return (
    <>
      {invited.map((user) => {
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
              <p style={{ marginRight: "5%" }}>Invited</p>
              <button
                onClick={() => deleteInvitation(user)}
                style={{
                  textAlign: "center",
                  background: "#58D473",
                  width: "60px",
                  height: "60px",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "2rem",
                  outline: "none",
                  opacity: "0.3",
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
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
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserList;
