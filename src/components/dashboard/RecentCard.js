import React from "react";
import { cardStyles } from "../../styles";

const RecentCard = (props) => {
  const classes = cardStyles();
  const created = props.date_created.toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    hours: "numeric",
    minutes: "2-digit",
  });
  const time = props.date.toLocaleTimeString("en-us", {
    hours: "numeric",
    minutes: "2-digit",
  });
  const day = props.date.toLocaleDateString("en-us", {
    day: "numeric",
    weekday: "short",
  });
  return (
    <div className={`${classes.root} card-container`}>
      <h3>{props.name} created event</h3>
      <p>{created}</p>
      <p>{props.title}</p>
      <p>{day}</p>
      <p>{time}</p>
      <p>{props.status}</p>
    </div>
  );
};

export default RecentCard;
