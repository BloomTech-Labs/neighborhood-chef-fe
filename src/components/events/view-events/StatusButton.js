import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { rsvp } from "../../../utilities/actions";
import { buttonStyles } from "../../../styles";

import { print } from "graphql";

const StatusButton = ({ name, color, eventStatus, eventId, userId }) => {
  const classes = buttonStyles();
  const dispatch = useDispatch();

  /* need to figure out how to mutate just status on single user of newsted users array*/

  // const updateStatus = (newStatus) => {
  //   axios
  //     .post("http://localhost:5100/graphql", {
  //       query: print(UPDATE_EVENT_STATUS),
  //       variables: {
  //         eventId: eventId,
  //         userId: userId,
  //         input: {
  //           status: newStatus,
  //         },
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };
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
        // updateStatus(e.target.name);
      }}
    >
      {name === "Going" ? "Yes" : name === "Not Going" ? "No" : name}
    </button>
  );
};

export default StatusButton;
