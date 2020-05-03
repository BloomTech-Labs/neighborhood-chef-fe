import React from "react";
import { useSelector, useDispatch } from "react-redux";

//icon imports
import { Icon } from "@iconify/react";
import calendarIcon from "@iconify/icons-flat-color-icons/calendar";
import clockIcon from "@iconify/icons-flat-color-icons/clock";
import globeIcon from "@iconify/icons-flat-color-icons/globe";
import { rsvp } from "../../utilities/actions";

const EventDetails = () => {
  const currentEventID = useSelector((state) => state.activeCalendarEvent);
  const eventList = useSelector((state) => state.eventList);
  const event = eventList.find((ele) => ele.id === currentEventID);
  const dispatch = useDispatch();
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
            <button
              className={`rsvp-buttons ${
                event.status === "Going" && "rsvp-active"
              }`}
              style={{ background: "#58D573" }}
              onClick={(e) => dispatch(rsvp(e, event.id))}
            >
              Going
            </button>
            <button
              className={`rsvp-buttons ${
                event.status === "Maybe" && "rsvp-active"
              }`}
              style={{ background: "#FFA928" }}
              onClick={(e) => dispatch(rsvp(e, event.id))}
            >
              Maybe
            </button>
            <button
              className={`rsvp-buttons ${
                event.status === "Not Going" && "rsvp-active"
              }`}
              style={{ background: "#E84040" }}
              onClick={(e) => dispatch(rsvp(e, event.id))}
            >
              Not Going
            </button>
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
