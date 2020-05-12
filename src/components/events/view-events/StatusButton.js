import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { rsvpChange } from "../../../utilities/actions";
import { buttonStyles } from "../../../styles";

import { print } from "graphql";
import { UPDATE_INVITATION } from "../../../graphql/events/event-mutations";

const StatusButton = ({
  name,
  color,
  eventStatus,
  eventId,
  userId,
  setStatus,
}) => {
  const classes = buttonStyles();
  const dispatch = useDispatch();

  const updateStatus = (newStatus) => {
    console.log(
      `event_id: ${eventId}, user_id: ${userId}, status: ${newStatus}`
    );
    axios
      .post("http://localhost:5100/graphql", {
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
        setStatus(
          res.data.data.updateInvitation.users.filter(
            (u) => `${u.id}` === `${userId}`
          )[0].status
        );
        dispatch(rsvpChange());
      });
  };
  return (
    <button
      className={`${classes.rsvpRoot} ${
        eventStatus === name && classes.rsvpActive
      }`}
      style={{ background: color }}
      name={name}
      // onClick={(e) => dispatch(rsvp(e, eventId))}
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
