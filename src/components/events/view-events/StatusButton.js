import React from "react";
import { useDispatch } from "react-redux";
import { rsvp } from "../../../utilities/actions";
import { buttonStyles } from "../../../styles";

const StatusButton = ({ name, color, eventStatus, eventId }) => {
  const classes = buttonStyles();
  const dispatch = useDispatch();
  return (
    <button
      className={`${classes.rsvpRoot} ${
        eventStatus === name && classes.rsvpActive
      }`}
      style={{ background: color }}
      onClick={(e) => dispatch(rsvp(e, eventId))}
    >
      {name}
    </button>
  );
};

export default StatusButton;
