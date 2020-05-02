import React from "react";
import { useSelector } from "react-redux";

const EventDetails = () => {
  const currentEventID = useSelector((state) => state.activeCalendarEvent);
  const eventList = useSelector((state) => state.eventList);
  const event = eventList.find((ele) => ele.id === currentEventID);
  return (
    <div className="event-details-container">
      {!!event && (
        <div>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
          <p>{event.time}</p>
          <p>{event.status}</p>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
