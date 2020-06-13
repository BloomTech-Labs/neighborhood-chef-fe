import React from "react";
import { Icon } from "@iconify/react";
import checkmarkIcon from "@iconify/icons-gridicons/checkmark";
import { print } from "graphql";
import { useDispatch, useSelector } from "react-redux";
import { axiosWithAuth } from "../../../utilities/axiosWithAuth";

import {
  deleteInvitationSuccess,
  filterUserListSuccess,
} from "../../../utilities/actions/index.js";

import { REMOVE_INVITATION } from "../../../graphql/events/event-mutations.js";

const InvitedUser = ({ user }) => {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.newEvent);
  let users = useSelector((state) => state.userList);

  const deleteInvitation = (user) => {
    const removeInvite = {
      event_id: Number(event.id),
      user_id: Number(user.id),
    };

    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(REMOVE_INVITATION),
        variables: { input: removeInvite },
      })
      .then((res) => {
        dispatch(deleteInvitationSuccess(res.data.data.removeInvitation.users));
        dispatch(filterUserListSuccess((users = [...users, user])));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        margin: "10px",
        opacity: "0.5",
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
            <p>
              {user.firstName}&nbsp;{user.lastName}
            </p>
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
      <div style={{ width: "50px" }}>Invited</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "60px",
        }}
      >
        <div
          onClick={() => deleteInvitation(user)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: "#58D473",
            width: "60px",
            height: "60px",
            color: "white",
            borderRadius: "50%",
            fontSize: "2rem",
            outline: "none",
          }}
        >
          <Icon
            icon={checkmarkIcon}
            style={{
              fontSize: "3.5rem",
              color: "white",
              fontWeight: "bold",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InvitedUser;
