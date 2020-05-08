import React from "react";
import { useDispatch } from "react-redux";
import { rsvp } from "../../../utilities/actions";

const StatusButton = ({ name, color, eventStatus, eventId }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={`rsvp-buttons ${eventStatus === name && "rsvp-active"}`}
      style={{ background: color }}
      onClick={(e) => dispatch(rsvp(e, eventId))}
    >
      {name}
    </button>
  );
};

export default StatusButton;
