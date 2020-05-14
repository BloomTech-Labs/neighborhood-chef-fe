import React from "react";

//component imports
import Sidebar from "../../dashboard/Sidebar";
import MonthPicker from "./MonthPicker";
import CalendarView from "./CalendarView";
import EventDetails from "./EventDetails";
import Header from "../../dashboard/Header";

const ViewEvents = () => {
  return (
    <div className="component-main">
      <Sidebar active="view-events" />
      <div className="middle-calendar">
        <MonthPicker />
        <CalendarView />
      </div>
      <div className="right-side-calendar">
        <Header />
        <EventDetails />
      </div>
    </div>
  );
};

export default ViewEvents;
