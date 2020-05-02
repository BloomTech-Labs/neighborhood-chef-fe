import React from "react";
import Sidebar from "../dashboard/Sidebar";
import MonthPicker from "./MonthPicker";
import CalendarView from "./CalendarView";

const ViewEvents = () => {
  return (
    <div className="component-main">
      <Sidebar active="view-events" />
      <div className="middle-calendar">
        <p>ViewEvents Component</p>
        <MonthPicker />
        <CalendarView />
      </div>
      <div className="right-side-calendar">
        <p>right side calendar</p>
      </div>
    </div>
  );
};

export default ViewEvents;
