import React from "react";

//component imports
import MonthPicker from "./MonthPicker";
import CalendarView from "./CalendarView";
import EventDetails from "./EventDetails";

const ViewEvents = () => {
  return (
    <div className="component-main">
      <div className="middle-calendar">
        {/* <MonthPicker /> */}
        <CalendarView />
      </div>
      <div className="right-side-calendar">
        <EventDetails />
      </div>
    </div>
  );
};

export default ViewEvents;
