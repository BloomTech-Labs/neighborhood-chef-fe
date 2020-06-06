import React from "react";

//component imports
import CalendarView from "./CalendarView";
import EventDetails from "./EventDetails";

const ViewEvents = () => {
  return (
    <div className="component-main">
      <div className="middle-calendar">
        <CalendarView />
      </div>
      <div className="right-side-calendar">
        <EventDetails />
      </div>
    </div>
  );
};

export default ViewEvents;
