import React from "react";
import { useSelector } from "react-redux";

//icon imports
import { Icon } from "@iconify/react";
import calendarIcon from "@iconify/icons-flat-color-icons/calendar";
import clockIcon from "@iconify/icons-flat-color-icons/clock";
import globeIcon from "@iconify/icons-flat-color-icons/globe";

import StatusButton from "./StatusButton";

const rsvpButtons = [
  {
    name: "Going",
    color: "#58D573",
  },
  {
    name: "Maybe",
    color: "#FFA928",
  },
  {
    name: "Not Going",
    color: "#E84040",
  },
];

const EventDetails = () => {
  const currentEventID = useSelector((state) => state.activeCalendarEvent);
  const eventList = useSelector((state) => state.eventList);
  const event = eventList.find((ele) => ele.id === currentEventID);

  return (
    <div className="event-details-container">
      {!!event ? (
        <div className="single-event">
          <div>
            <h2>{event.title}</h2>
            <p style={{ fontStyle: "italic", opacity: ".3" }}>
              created by {event.creator}
            </p>
          </div>
          <p style={{ opacity: ".3" }}> {event.description}</p>
          <div>Participants (have indicated "Going")</div>
          <div>
            <span style={{ marginRight: "5px", verticalAlign: "middle" }}>
              <Icon height="20" icon={calendarIcon} />
            </span>
            {event.date}
          </div>
          <div>
            <span style={{ marginRight: "5px", verticalAlign: "middle" }}>
              <Icon height="20" icon={clockIcon} />
            </span>
            {event.start_time}
          </div>
          <div>
            <span style={{ marginRight: "5px", verticalAlign: "middle" }}>
              <Icon height="20" icon={globeIcon} />
            </span>
            {event.address}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "50px 0px",
            }}
          >
            {rsvpButtons.map((ele) => (
              <StatusButton
                {...ele}
                eventStatus={event.status}
                eventId={event.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h3>Select an event from the calendar to view the details here.</h3>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
