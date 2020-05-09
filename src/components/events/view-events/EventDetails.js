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

  //dealing with date formatting things

  console.log(event);
  // var options = { year: "numeric", month: "long", day: "numeric" };
  // const formattedDate = new Date(parseInt(event.Date)); //formats 13 digit UNIX date provided by database
  // const simplifiedDate = formattedDate.toLocaleDateString("en-us", options); // reduces to just YYYY MM, DD format
  // const addStartTime = new Date(`${simplifiedDate} ${event.Start_Time}`); // creates new date using start_time value for time, instead of 00:00:00 default
  // const displayedHoursMins = addStartTime
  // .toLocaleTimeString([], {
  // hour: "numeric",
  // minute: "2-digit",
  // })
  // .toLowerCase(); //formatting just time in 12 hr format with lower case am pm

  return (
    <div className="event-details-container">
      {!!event ? (
        <div className="single-event">
          <div>
            <h2>{event.Title}</h2>
            <p style={{ fontStyle: "italic", opacity: ".3" }}>
              {/*need to convert user_id to actual name*/}
              created by {event.user_id}
            </p>
          </div>
          <p style={{ opacity: ".3" }}> {event.description}</p>
          <div>Participants (have indicated "Going")</div>
          <div>
            <span style={{ marginRight: "5px", verticalAlign: "middle" }}>
              <Icon height="20" icon={calendarIcon} />
            </span>
            {/* {simplifiedDate} */}
          </div>
          <div>
            <span style={{ marginRight: "5px", verticalAlign: "middle" }}>
              <Icon height="20" icon={clockIcon} />
            </span>
            {/* {displayedHoursMins} */}
          </div>
          <div>
            <span style={{ marginRight: "5px", verticalAlign: "middle" }}>
              <Icon height="20" icon={globeIcon} />
            </span>
            {event.Address}
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
                key={ele.name}
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
