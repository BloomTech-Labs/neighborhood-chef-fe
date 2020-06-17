import React from "react";
import { axiosWithAuth } from "../../../utilities/axiosWithAuth";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../../utilities/actions";
import { buttonStyles } from "../../../styles";
import { useLocation } from "react-router-dom";

import { print } from "graphql";
import { UPDATE_INVITATION } from "../../../graphql/events/event-mutations";

const StatusButton = ({
  name,
  color,
  eventStatus,
  eventId,
  userId,
  setStatus,
  setParticipants,
}) => {
  const classes = buttonStyles();
  const dispatch = useDispatch();
  let location = useLocation();

  const updateStatus = (newStatus) => {
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(UPDATE_INVITATION),
        variables: {
          input: {
            event_id: parseInt(eventId),
            user_id: parseInt(userId),
            status: newStatus,
          },
        },
      })
      .then((res) => {
        const newStatus = res.data.data.updateInvitation.users.filter(
          (u) => `${u.id}` === `${userId}`
        )[0].status;
        setStatus(newStatus);
        dispatch(changeStatus(eventId, newStatus));

        if (
          location.pathname === `/events/${eventId}` ||
          location.pathname === "/view-events"
        ) {
          const attendees = res.data.data.updateInvitation.users.filter(
            (user) => user.status === "Going"
          );
          setParticipants(attendees);
        }
      });
  };
  return (
    <button
      className={`${classes.rsvpRoot} ${
        eventStatus === name && classes.rsvpActive
      }`}
      style={{ background: color }}
      name={name}
      onClick={(e) => {
        e.preventDefault();
        updateStatus(e.target.name);
      }}
    >
      {name === "Going" ? "Yes" : name === "Not Going" ? "No" : "Maybe"}
    </button>
  );
};

export default StatusButton;
